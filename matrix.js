 $(document).ready(function(){ //using JQuery to run at load.
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    const FONT_SIZE = 10;
    const FONT_COLOR = "#5D5249";
    const BACKGROUND_COLOR = "rgba(255, 255, 255, 0.1)"
                
    let x1 = document.getElementById("x1"); // getting a canvas element with id x1
    let ctx = x1.getContext("2d");
                
    x1.height = HEIGHT;
    x1.width = WIDTH;
                
    ctx.fillStyle = "white";
    ctx.rect(0,0,WIDTH, HEIGHT);
    ctx.fill();
                
                
    let teksten = "Just keep in mind: the more we value things outside our control, the less control we have. Epictetus";
    let matrix = teksten.split("");


    let columns = WIDTH/FONT_SIZE;
    let rows = columns;
                
    let inserts = [];
            
    for ( let i = 0; i < rows; i++){
        inserts[i] = 1;
    }
                
    let count = 0;
                
    function updater(){
                    
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0,0,WIDTH, HEIGHT);
        ctx.fillStyle = FONT_COLOR;
        ctx.font = FONT_SIZE + "px monospace";
                    
        for ( let i = 0; i < inserts.length; i++ ){
            if ( Math.random() > 0.95 && count++ < 100){
                inserts[i] = 0;
            } else {
                    
            let tempLetter = matrix[Math.floor(Math.random()*matrix.length)];
            ctx.fillText(tempLetter, i*FONT_SIZE, inserts[i]*FONT_SIZE);
            if ( inserts[i]*FONT_SIZE > HEIGHT && Math.random() > 0.9)
                inserts[i] = 0;
                        
            if ( i%3 === 0 && Math.floor(Math.random()*10) > 6 )
                inserts[i]++;
                            
            inserts[i]++;
            }
                        
        }
    }
                
setInterval(updater, 40);
})
