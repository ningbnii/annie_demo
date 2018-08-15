/**
 * Created by anlun on 16/7/16.
 */
//////////////////////////////
var typescript = require('gulp-tsc');
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var del = require('del');
var replace = require('gulp-replace');
var runSequence = require('gulp-sequence');
var gulpPngquant = require('gulp-pngquant');
var base64 = require('base64-min');
var source = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var browserify = require('gulp-browserify');
/**
 * 获取子目录列表
 * @param dir 要获取子目录的父目录
 * @returns {Array} 一个子目录名的字符串数组
 */
var getFolders = function (dir) {
    return fs.readdirSync(dir).filter(function (file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
    });
};
/**
 * 获取目录下所有文件列表
 * @param dir
 */
var getFiles = function (dir) {
    return fs.readdirSync(dir).filter(function (file) {
        return fs.statSync(path.join(dir, file)).isFile();
    });
};
//项目信息
var projectInfo = require('./package.json');
gulp.task("compileTS", function () {
    if (projectInfo.language == "typeScript") {
        var rootFiles = getFolders("./");
        var isHadTsConfig = false;
        for (var i = 0; i < rootFiles.length; i++) {
            if (rootFiles[i] == "tsconfig.json") {
                isHadTsConfig = true;
                break;
            }
        }
        //编译ts
        return gulp.src(['tsSrc/**/*.ts']).pipe(typescript({target: 'es5', module: 'commonjs'})).pipe(gulp.dest('src'));
    }
});
var time = Date.now();
var sceneList = getFolders("src/");
gulp.task("clean",function () {
    return del("./released");
});
gulp.task("prepare",["clean"],function () {
    if (projectInfo.type == "canvas") {
        //AnnieJS引擎
        //html页面更改
        gulp.src('index.html').pipe(replace("Main.js", "f2xMain.min.js?v=" + time)).pipe(gulp.dest("released"));
        //压缩main.js
        gulp.src("src/Main.js").pipe(browserify({insertGlobals: true, debug: false})).pipe(uglify()).pipe(rename("f2xMain.min.js")).pipe(gulp.dest("released/src"));
        //压缩各个scene
        for (var i = 0; i < sceneList.length; i++) {
            //获取
            var sceneInfo = require("./resource/" + sceneList[i] + "/" + sceneList[i] + ".res.json");
            var jsList = [];
            var resList = [];
            var otherList = [];
            for (var j = sceneInfo.length - 1; j >= 0; j--) {
                if (sceneInfo[j].type == "image") {
                    if (sceneInfo[j].src.toLowerCase().indexOf(".png") > 0) {
                        resList.push(sceneInfo[j].src);
                    }else{
                        otherList.push(sceneInfo[j].src);
                    }
                } else if (sceneInfo[j].type == "javascript") {
                    jsList.push(sceneInfo[j].src);
                    sceneInfo.splice(j, 1);
                } else {
                    otherList.push(sceneInfo[j].src);
                }
            }
            //合并压缩js
            gulp.src(jsList).pipe(browserify({insertGlobals: true, debug: false})).pipe(uglify()).pipe(concat(sceneList[i] + ".swf")).pipe(gulp.dest("released/src/" + sceneList[i]));
            //复制其他资源
            gulp.src(otherList).pipe(gulp.dest("released/resource/" + sceneList[i]));
            //重写res.json文件
            sceneInfo.unshift({type: "javascript", src: "src/" + sceneList[i] + "/" + sceneList[i] + ".swf"});
            var stream = source(sceneList[i] + ".res.json");
            // 将文件的内容写入 stream
            stream.write( JSON.stringify(sceneInfo, null, ""));
            stream.pipe(vinylBuffer()).pipe(gulp.dest("./released/resource/" + sceneList[i]));
            stream.end();
            //fs.writeFile("./released/resource/" + sceneList[i] + "/" + sceneList[i] + ".res.json", JSON.stringify(sceneInfo, null, ""),function (err) {});
            //压缩资源
            gulp.src(resList).pipe(gulpPngquant()).pipe(gulp.dest("released/resource/" + sceneList[i]));
        }
        //复制libs库
        gulp.src("libs/*.js").pipe(gulp.dest("released/libs"));
        //复制其他资源
        var resList = getFolders("resource");
        //过滤
        for (var i = resList.length - 1; i >= 0; i--) {
            for (var j = 0; j < sceneList.length; j++) {
                if (resList[i] == sceneList[j]) {
                    resList.splice(i, 1);
                    break;
                }
            }
        }
        for (var i = 0; i < resList.length; i++) {
            gulp.src("resource/" + resList[i] + "/**/*").pipe(gulp.dest("released/resource/" + resList[i]));
        }
        var otherFileList = getFiles("resource");
        for (var i = 0; i < otherFileList.length; i++) {
            gulp.src("resource/" + otherFileList[i]).pipe(gulp.dest("released/resource"));
        }
    }
});
gulp.task("packToOne",function () {
    if (projectInfo.type == "canvas"){
        //合并首页
        var releaseInfo = "annie._isReleased=" + time + ";" + fs.readFileSync("./released/src/f2xMain.min.js");
        fs.writeFile("./released/src/f2xMain.min.js", releaseInfo, "utf8", function (err) {});
        //将资源base64到我们的js文件中，合并成一个
        for (var i = 0; i < sceneList.length; i++) {
            var item = sceneList[i];
            var resourceJson = require("./released/resource/" + item + "/" + item + ".res.json");
            var resObj = {};
            for (var j = resourceJson.length - 1; j >= 0; j--) {
                if (resourceJson[j].type != "javascript") {
                    var url = resourceJson[j].src;
                    var index = url.indexOf("?");
                    if (index > 0) {
                        url = url.substr(0, index);
                    }
                    if (url.indexOf(".json") > 0) {
                        resObj[resourceJson[j].id] = require("./released/" + url);
                    } else {
                        var head;
                        if (url.indexOf(".jpg") > 0) {
                            head = "data:image/jpg;base64,";
                        } else if (url.indexOf(".png") > 0) {
                            head = "data:image/png;base64,";
                        } else if (url.indexOf(".mp3") > 0) {
                            head = "data:audio/mp3;base64,";
                        }
                        resObj[resourceJson[j].id] = head + base64.encodeFile("released/" + url);
                    }
                }
            }
            var content = "annie.res." + item + "=" + JSON.stringify(resObj, null, "").replace(/"([\w\d_\$]+)"\:/g, "$1:") + ";" + fs.readFileSync("./released/src/" + sceneList[i] + "/" + sceneList[i] + ".swf");
            //正则替换里面所有的
            fs.writeFile("./released/src/" + sceneList[i] + "/" + sceneList[i] + ".swf", content, "utf8", function (err) {});
            //删除不需要的资源
            del("./released/resource/" + item);
        }
    }
});
gulp.task("default",runSequence("compileTS", "prepare"));
gulp.task("build",["default"]);
gulp.task("released",["packToOne"]);