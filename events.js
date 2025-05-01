const canvas3=document.getElementById('canvas3');

const ctx3=canvas3.getContext("2d");
canvas3.width=window.innerWidth;
canvas3.height=window.innerHeight*2.3;

const stars3=[];
for (let i=0;i<2000;i++){
    stars3.push({
       x: Math.random()*canvas3.width, y: Math.random()*canvas3.height, radius: Math.random()*0.6, speed: Math.random()*0.4+ 0.1  })
    }
function drawStars3(){
    ctx3.clearRect(0,0,canvas3.width,canvas3.height);
    ctx3.save();
    
    ctx3.fillStyle="snow";
    
    stars3.forEach(star3 => {
        ctx3.beginPath();
        ctx3.arc(star3.x,star3.y,star3.radius,0,Math.PI*4);
        ctx3.fill();
        
        star3.x+=star3.speed;
        star3.y+=star3.speed;
        if (star3.y>canvas3.height){
            star3.y=0;
        }
        if(star3.x>canvas3.width){
            star3.x=0;
        }
    });
    requestAnimationFrame(drawStars3);
}
    drawStars3();

