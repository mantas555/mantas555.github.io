indow.addEventListener("load", function(){
    const canvas = document.querySelector("#myCanvas");
    const ctx = canvas.getContext("2d");
 
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
 
    // //pilnaviduris stačiakampis
    // ctx.fillRect(100, 100, 200, 200);
 
    // //tuščiaviduris
    // ctx.strokeStyle = "blue";
    // ctx.strokeRect(150, 150, 300, 350);
    
    //pradžios taškas linijai
    // ctx.beginPath();
    // ctx.lineTo(200, 200);
    // ctx.lineTo(300, 250);
    // ctx.closePath();
    // ctx.stroke();
 
    //paint.js
    let painting = false;
 
    function startPainting(){
        painting = true;
        draw();
    }
 
    function endPainting(){
        painting = false;
        ctx.beginPath();
    }
 
    function draw(e){
        if(!painting) return;
 
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
 
        ctx.lineTo(event.touches[0].clientX, event.touches[0].clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.touches[0].clientX, event.touches[0].clientY);
    }
 
    canvas.addEventListener("touchstart", startPainting);
    canvas.addEventListener("touchend", endPainting);
    canvas.addEventListener("touchmove", draw);
 
});
 
// window.addEventListener("load", ()=>{
 
// });