/**
 * Created by anlun on 16/7/16.
 */
var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var del = require('del');
var resourcePath = 'resource';
var releasedPath = "released";
var releasedSrcPath = "released/src";
var releasedResPath = "released/resource";
var replace = require('gulp-replace');
var buildJsConfig = require('./build.json');
var gulpSequence = require('gulp-sequence');
var gulpPngquant = require('gulp-pngquant');
var base64 = require('base64-min');
var isPageToOne=false;
var isHasF2xShare=false;
var shareList={};
function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function (file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}
gulp.task('delReleased', function () {
    return del(releasedPath);
});
gulp.task('buildJS', function () {
    for (var item in buildJsConfig) {
        var houzui=".min.js";
        if(isPageToOne) {
            houzui=".swf";
            buildJsConfig[item].unshift("released/resource/" + item + "/" + item + ".res.js");
        }
        gulp.src(buildJsConfig[item])
            .pipe(concat(item + houzui))
            .pipe(uglify())
            .pipe(gulp.dest(releasedSrcPath));
    }
    if(isPageToOne){
        var date=new Date();
        var shareContent="";
        if(isHasF2xShare){
            var shareValue=[];
            for(var item in shareList){
                shareValue.push("\""+item+"\"");
            }
            shareContent="Flash2x._shareSceneList=["+shareValue.join()+"];"
        }
        gulp.src("src/Main.js")
            .pipe(uglify()).pipe(replace("window.addEventListener", shareContent+"Flash2x._isReleased="+date.getTime()+";window.addEventListener"))
            .pipe(rename("f2xMain.min.js"))
            .pipe(gulp.dest(releasedSrcPath));
    }else{
        gulp.src("src/Main.js")
            .pipe(uglify())
            .pipe(rename("f2xMain.min.js"))
            .pipe(gulp.dest(releasedSrcPath));
    }
});
gulp.task('replaceIndexHtml', function () {
    return gulp.src('index.html')
        .pipe(replace("Main.js", "f2xMain.min.js"))
        .pipe(gulp.dest(releasedPath));
});

gulp.task('copyResource', function () {
    return gulp.src("resource/**/*").pipe(gulp.dest('released/resource'));
});
gulp.task('copyLibs', function () {
    return gulp.src("libs/**/*.js").pipe(gulp.dest('released/libs'));
});
gulp.task('replaceResJson', function () {
    var rex1 = /[\s\r\n\t]+/g;
    var rex2 = /,?\{"src":"src\/.*?","type":"javascript"\}/g;
    var rex3 = /"src":"src\/.+?\.js/;
    var rex4 = /\[,/g;
    var rex5 = /,\]/g;
    var folders = getFolders(resourcePath);
    folders.map(function (folder) {
        gulp.src(path.join(resourcePath, folder, '/*.res.json'))
            .pipe(replace(rex1, ""))
            .pipe(replace(rex2, ""))
            .pipe(replace(rex3, '"src":"src/' + folder + '.min.js'))
            .pipe(replace(rex4, '['))
            .pipe(replace(rex5, ']'))
            .pipe(gulp.dest(releasedResPath + "/" + folder))
    });
});
gulp.task('PNGMin', function () {
    var folders = getFolders(releasedResPath);
    folders.map(function (folder) {
        gulp.src(path.join(resourcePath, folder, '/*.png'))
            .pipe(gulpPngquant())
            .pipe(gulp.dest(releasedResPath + "/" + folder));
    });
});
gulp.task('base64Json', function(){
    isPageToOne=true;
    var content;
    var f2xShare={};
    var f2xShareContent="Flash2x.res.f2xShare={};";
    for (var item in buildJsConfig) {
        var resourceJson = require("./released/resource/" + item + "/" + item + ".res.json");
        var resContent = [];
        for (var i = resourceJson.length - 1; i >= 0; i--) {
            if (resourceJson[i].type == "javascript") {
                resourceJson.splice(i, 1);
            } else {
                var url = resourceJson[i].src;
                var index = url.indexOf("?");
                if (index > 0) {
                    url = url.substr(0, index);
                }
                if(url.indexOf(".json")>0){
                    var jsonData=require("./released/" + url);
                    resContent.push(resourceJson[i].id + ":\'" +JSON.stringify(jsonData,null,"")+ "\'");
                }else{
                    var head;
                    if (url.indexOf(".jpg") > 0){
                        head = "data:image/jpg;base64,";
                    }else if (url.indexOf(".png") > 0) {
                        head = "data:image/png;base64,";
                    }else if (url.indexOf(".mp3") > 0) {
                        head = "data:audio/mp3;base64,";
                    }
                    if(url.indexOf("f2xShare")>0){
                        shareList[item]=true;
                        isHasF2xShare=true;
                        if(!f2xShare[resourceJson[i].id]) {
                            f2xShare[resourceJson[i].id] = true;
                            var base64Res = base64.encodeFile("released/" + url);
                            f2xShareContent+="Flash2x.res.f2xShare."+resourceJson[i].id+"=\"" + head + base64Res + "\";";
                        }
                        resContent.push(resourceJson[i].id + ":Flash2x.res.f2xShare."+resourceJson[i].id);
                    }else {
                        var base64Res = base64.encodeFile("released/" + url);
                        resContent.push(resourceJson[i].id + ":\"" + head + base64Res + "\"");
                    }
                }
            }
        }
        content= "Flash2x." + item + "Res={" + resContent.join() + "};";
        fs.writeFile(path.join(__dirname, "/released/resource/" + item + "/" + item + ".res.js"), content, "utf8", function (err) {
        });
    }
    if(isHasF2xShare) {
        fs.writeFile(path.join(__dirname, "/released/src/f2xShare.swf"), f2xShareContent, "utf8", function (err) {
        });
    }
});
gulp.task('clear', function () {
    setTimeout(function () {
        del("released/resource/f2xShare");
        for (var item in buildJsConfig) {
            del("released/resource/"+item);
            del("released/src/"+item+".min.js");
        }
    }, 100);
});
gulp.task('default', gulpSequence('delReleased', 'copyResource', 'copyLibs',  'replaceIndexHtml', 'replaceResJson', 'PNGMin','buildJS'));
gulp.task('packToOne', gulpSequence('base64Json','buildJS','clear'));