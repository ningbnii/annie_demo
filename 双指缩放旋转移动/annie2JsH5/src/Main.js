/**
 * https://github.com/flash2x/AnnieJS
 */
window.A2xExtend=__extends;
window.addEventListener("load",function(){
    annie.debug=false;
    /**
     * 因为这是个文件是入口文件,加载时间越短越好,那么就需要这个文件里代码量越少越好，尽量在其他文件写项目逻辑
     * 装载引擎的Canvas的div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    var stage=new annie.Stage("annieEngine",640,1136,30,annie.StageScaleMode.FIXED_HEIGHT,0);
    //默认关闭自动旋转和自动resize
    //stage.autoResize=true;
    //stage.autoSteering=true;
    stage.addEventListener(annie.Event.ON_INIT_STAGE,function (e) {
    	//想要同时加载多个场景的话，Annie2x.loadScene的第一个参数可以传数组如 ["scene1","scene2",...]
        annie.loadScene("a2x",function(per){
            //加载进度
            trace("加载进度:"+per+"%");
        },function(result){
            //加载完成 result 里包含了当前加载完成的是哪个场景序号，以及总加载场景数有多少，所以
            //需要同时加载多个模块时可以判断已经加载好的后直接出内容，其他偷偷在后台加载
            if(result.sceneId==result.sceneTotal){
            	stage.addChild(new a2x.A2x());
            }
        });
    })
});