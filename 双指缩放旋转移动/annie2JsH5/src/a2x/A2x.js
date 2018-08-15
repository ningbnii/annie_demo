window.a2x=window.a2x||{};
a2x.A2x=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.test_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"a2x","A2x");
    var start1 = start2 = {};
    s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
        s.stage.isMultiTouch=true;
        s.stage.addEventListener(annie.TouchEvent.ON_MULTI_TOUCH,function (evt) {
            if(start1.x){
                var end1 = {x:evt.clientPoint1.x,y:evt.clientPoint1.y};
                var end2 = {x:evt.clientPoint2.x,y:evt.clientPoint2.y};

                res1 = (end1.x-start1.x)*(end2.x-start2.x);
                res2 = (end1.y - start1.y)*(end2.y - start2.y);
                if(res1<1000 || res2<1000){
                    if(res1>0 || res2>0){
                        var offsetX = end1.x - start1.x;
                        var offsetY = end1.y - start1.y;
                        if(offsetX<10 && offsetX>-10){
                            s.test_mc.x += offsetX*5;
                        }
                        if(offsetY<10 && offsetY>-10){
                            s.test_mc.y += offsetY*5;
                        }
                    }
                    if(res1<=0 || res2<=0){
                        s.test_mc.rotation+=evt.rotate;
                        s.test_mc.scaleY+=evt.scale;
                        s.test_mc.scaleX+=evt.scale;

                    }
                }

            }

            start1 = {x:evt.clientPoint1.x,y:evt.clientPoint1.y};
            start2 = {x:evt.clientPoint2.x,y:evt.clientPoint2.y};
        });
    });
    s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
        s.stage.isMultiTouch=false;
        s.removeAllEventListener();
    })
};
A2xExtend(a2x.A2x,annie.Sprite);
