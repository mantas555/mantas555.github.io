window.addEventListener("load", function(){
    const canvas = document.querySelector("#myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    //pilnaviduris staciakakmpis
    // ctx.fillRect(100, 100, 200, 200);

    // //tusciaviduris staciakamapis
    // ctx.strokeStyle = "blue";
    // ctx.strokeRect(150, 150, 300, 350);

    // //pradzios taskas linijai
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
        // ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;

        ctx.lineWidth = 3;
        ctx.lineCap = "round"

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        ctx.strokeStyle = "blue"
    }

    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", endPainting);
    canvas.addEventListener("mousemove", draw);
});
    