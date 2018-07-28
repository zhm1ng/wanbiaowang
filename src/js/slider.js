class Slider{//Slider类
    constructor(id){//默认方法 构造器方法
        //获取大盒子
        this.Bigbox = $id(id);
        //获取所有大图
        this.ullis = $get($get(this.Bigbox,"ul")[0],'li');
        //this.ullis = $get($get(this.bigBox,'ul')[0],'li');
        //记录大图数目
        this.num = this.ullis.length;
        //创建所有li并返回
        this.ollis = this.createEle();
        //记录当前轮播的下标
        this.index = 0;

        //设置轮播
        this.Slide();
        //获取左右按钮
        this.obntl = $id("ltBnt");
        this.obntr= $id("rtBtn");
        //添加事件
        this.addEvent();
        //自动轮播
        this.timer = null;
        this.autoPlay();
    }

    createEle(){
        let ol = $create('ol');
        let arr = [];
        for(let i=0;i<this.num;i++){
            let li = $create('li');
            arr.push(li);
            ol.appendChild(li);
        }
        this.Bigbox.appendChild(ol);

        //创建左右按钮
        let obntl = $create('span');
        // obntl.innerHTML = "&lt";
        obntl.id="ltBnt";
        this.Bigbox.appendChild(obntl);

        let obntr = $create('span');
        // obntr.innerHTML = "&gt";
        obntr.id = "rtBtn";
        this.Bigbox.appendChild(obntr);

        return arr;

    }
    Slide(){
        //设置所有大图隐藏，所有圆点红色
        for(var i=0 ;i<this.num;i++){
            this.ullis[i].style.display = "none";
            this.ollis[i].style.width = '19px';
            this.ollis[i].style.opacity=0.3;
        }
        this.ullis[this.index].style.display="block";
        this.ollis[this.index].style.width = '44px';
        this.ollis[this.index].style.opacity =1;

    }
    addEvent(){


        //给左按钮添加事件
        this.obntl.onclick = ()=>{
        this.index--;
        if(this.index==-1){
            this.index = this.num-1;
        }
        this.Slide();
        }
        //给右按钮添加事件
        this.obntr.onclick = ()=>{
            this.index++;
            if(this.index == this.num){
                this.index = 0;
            }
        this.Slide();
        }
        //给圆点添加移入事件
        //onmouseenter onmouseover 移入事件
        //onmouseleave onmouseout 移出事件
        //onmouseenter onmouseleave 阻止事件冒泡
        for(let i = 0 ; i<this.num;i++){
            this.ollis[i].onmouseenter = ()=>{
                this.index = i;
                this.Slide();
            }
        }
    }
    autoPlay(){
        this.timer=setInterval(()=>{
            this.index++;
            if(this.index == this.num){
                this.index = 0;
            }
            this.Slide();
        },6000);

        this.Bigbox.onmouseenter = ()=>{
            // alert($(this.obntl));
            // $(".container span").show();
            this.obntl.style.display = "block";
            this.obntr.style.display = "block";
            clearInterval(this.timer);
        }
        this.Bigbox.onmouseleave = ()=>{
            // $(".container span").hide();
            //alert(this.obntl);
            this.obntl.style.display = "none";
            this.obntr.style.display = "none";
            this.autoPlay();
        }
    }
}