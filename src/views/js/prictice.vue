<template>
  <div class="practice">
    <!-- <canvas
      id="myCanvas"
      width="200"
      height="100"
      style="border:1px solid #000000;"
    ></canvas> -->
     <div id='container' style="width: 100%;height: 100%;position: absolute;z-index: 2;"></div>
    <canvas id='canvas' style="position: absolute;z-index: 1;filter: blur(5px);"></canvas>
  </div>
</template>
<script>
export default {
  name: "practice",
  data() {
    return {
      inputdata: "",
      tableData: [],
      dialogVisible: false,
    };
  },
  computed: {},
  components: {},
  methods: {
      //  init(){
      //       drawDragonImageInCanvas();
      //   },
        drawDragonImageInCanvas(){
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");

            var image = new Image();//使用的new方法拉实现
            // console.log(image);
            image.src = require("@/assets/bm1.jpg");
            image.onload = function(){
                canvas.width = image.width;
                canvas.height = image.height;

                ctx.drawImage(image,0,0);

                var imageData = ctx.getImageData(0,0,image.width,image.height).data;
                // console.log(image.width);
                // console.log(image.height);
                
                ctx.clearRect(0,0,image.width,image.height);

                var gap = 10;

                var dragonContainer = document.getElementById("container");
                var dragonScale = 2;

                for (var h = 0; h < image.height; h+=gap) {
                    for(var w = 0; w < image.width; w+=gap){
                            var position = (image.width * h + w) * 4;
                            var r = imageData[position], g = imageData[position + 1], b = imageData[position + 2];

                            if(r+g+b==0){
                                var bubble = document.createElement("img");
                                bubble.src = "bubble.png";
                                bubble.setAttribute("class","bubble");

                                var bubbleSize = Math.random()*10+20;

                                bubble.style.left = (w*dragonScale-bubbleSize/2) + "px";
                                bubble.style.top = (h*dragonScale-bubbleSize/2) + "px";

                                bubble.style.width = bubble.style.height = bubbleSize+"px";

                                bubble.style.animationDuration = Math.random()*6+4 + "s";

                                 dragonContainer.appendChild(bubble);
                            }
                    }
                }


            }
        },
  },
  mounted() {
    this.drawDragonImageInCanvas();
    // var c = document.getElementById("myCanvas");
    // var ctx = c.getContext("2d");
    // -----颜色
    // ctx.fillStyle = "#FF0000";
    // ctx.fillRect(0, 0, 150, 75);

    // -----一条线
    // ctx.moveTo(0, 0);
    // ctx.lineTo(200, 100);
    // ctx.stroke();

    // -----一个圆
    // ctx.beginPath();
    // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    // ctx.stroke();

    // -----绘制实心文字
    // ctx.font = "30px Arial";
    // ctx.fillText("Hello World", 10, 50);

     // -----绘制空心文字
    //  ctx.font="30px Arial";
    //  ctx.strokeText("Hello World",10,50);
  },
};
</script>
<style scoped lang="scss">
 html,body{
            margin: 0;
            padding: 0;
            background: #333;
        }
        .bubble
        {
            position: absolute;
            animation-timing-function: linear;
            animation-name: floating;
            animation-iteration-count: infinite;
        }

        @keyframes floating
        {
            0%{
                transform: translateY(0px);
            }
            50%{
                transform: translateY(-5px);
            }
            100%{
                transform: translateY(0px);
            }
        }</style>
