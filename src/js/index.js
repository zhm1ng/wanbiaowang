    $(function(){
    //     $("#bannernav li,#twonav").mouseenter(function(){
    //         $("#twonav").show();
    //     $("#bannernav li,#twonav").mouseleave(function(){
    //         $("#twonav").hide();
    //     })
    // })
        $(".clear span").click(function(){
            $(this).hide(function(){
                 $(".clear").animate({'height':0},300);
            });

        })
        // $(".container img").each(function(){
        //     $(this).animate({transform: scale(1.6)},function(){
        //         // alert($(this));
        //         $(this).animate({"transform": "scale("1.0")"})
        //     })
        // })
        // var w = $(".container").width();//容器宽度
        // $(".container img").each(function(){//如果有很多图片，我们可以使用each()遍历
        // var img_w = $(this).width();//图片宽度
        // var img_h = $(this).height();//图片高度
        // if(img_w>w){//如果图片宽度超出容器宽度--要撑破了
        // var height = (w*img_h)/img_w; //高度等比缩放
        // $(this).css({"width":w,"height":height});//设置缩放后的宽度和高度
        // }
        // });
    })

