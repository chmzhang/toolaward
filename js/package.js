
//一屏一屏滚动
$(function () {
    carousel("#sell_lunbo",270);
    carousel("#case_lunbo",216);
    carousel("#video_lunbo",292);

    function carousel(iWrap,rWidth)
    {
        var wrap = $(iWrap);
        var lunbo = wrap.find(".lunbo");
        var lunbo_width = lunbo.width();
        var aLi = wrap.find("li");
        var len = aLi.length;
        var i = Math.ceil(lunbo_width / rWidth);
        var page_count = Math.ceil(len / i); //只要不是整数，就往大的方向取最小整数
        var page = 1;

        var outer = wrap.find(".outer");
        var unit_width = outer.width(); //获取框架内容的宽度,不带单位

        var $parent = wrap.find(".inner");
        var unit_inner_width = $parent.width();
        $parent.width(rWidth * len + 'px');

        var Left = wrap.find(".right");
        var Right = wrap.find(".left");

        // 向右 按钮
        Left.click(function(){
            if (!$parent.is(":animated")){
                if (page == page_count)
                { //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
                    // $parent.animate( { left : 0 }, 500 ); //通过改变left值，跳转到第一个版面
                    page = page_count;
                } else {
                    $parent.animate({ left: '-=' + ( unit_width ) }, 500);
                    page++;
                }
            }
        });
        // 往左 按钮
        Right.click(function () {
            if (!$parent.is(":animated")) {
                if (page == 1)
                {
                    $parent.animate({
                        /*left : '-=' + ( unit_width.width() + 56 )*/
                        left: 0
                    }, 500); //通过改变left值，跳转到最后一个版面
                    page = 1;
                }
                else
                {
                    $parent.animate({ left: '+=' + ( unit_width ) }, 500);  //通过改变left值，达到每次换一个版面
                    page--;
                }
            }
        });
    }
});

