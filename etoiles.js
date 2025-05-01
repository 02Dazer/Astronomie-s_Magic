

const canvas1=document.querySelector('.starCanvas');

    const ctx1=canvas1.getContext("2d");
    canvas1.width=window.innerWidth;
    canvas1.height=window.innerHeight;
    
    const stars=[];
    for (let i=0;i<200;i++){
        stars.push({
           x: Math.random()*canvas1.width, y: Math.random()*canvas1.height, radius: Math.random()*2, speed: Math.random()*0.3+ 0.2 })
        }
    function drawStars1(){
        ctx1.clearRect(0,0,canvas1.width,canvas1.height);
        ctx1.save();
        ctx1.fillStyle="white";
        stars.forEach(star => {
            ctx1.beginPath();
            ctx1.arc(star.x,star.y,star.radius,0,Math.PI*2);
            ctx1.fill();
            
            star.y+=star.speed;
            if (star.y>canvas1.height) star.y=0;
        });
        requestAnimationFrame(drawStars1);
        }
        drawStars1();
    
    
    /*universeImage.onload=()=>{
        function animate() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            
            ctx.translate(canvas.width/2,canvas.height/2);
            ctx.rotate(angle);
            /*const scale=Math.max(canvas.width/universeImage.width,canvas.height/universeImage.height);
            const x=(canvas.width/2)-(universeImage.width/2)*scale;
            const y=(canvas.height/2)-(universeImage.height/2)*scale;
            ctx.drawImage(universeImage,-universeImage.width/2,-universeImage.height/2,canvas.width,canvas.height);
            
            drawStars();
            angle+=0.002;*/
            
    
    window.addEventListener('scroll', ()=>{
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 200;

        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
});
const canvas2=document.getElementById('canvas2');

    const ctx2=canvas2.getContext("2d");
    canvas2.width=window.innerWidth;
    canvas2.height=window.innerHeight*2.3;
    
    const stars2=[];
    for (let i=0;i<2000;i++){
        stars2.push({
           x: Math.random()*canvas2.width, y: Math.random()*canvas2.height, radius: Math.random()*0.6, speed: Math.random()*0.4+ 0.1  })
        }
    function drawStars2(){
        ctx2.clearRect(0,0,canvas2.width,canvas2.height);
        ctx2.save();
        
        ctx2.fillStyle="snow";
        
        stars2.forEach(star2 => {
            ctx2.beginPath();
            ctx2.arc(star2.x,star2.y,star2.radius,0,Math.PI*4);
            ctx2.fill();
            
            star2.x+=star2.speed;
            star2.y+=star2.speed;
            if (star2.y>canvas2.height){
                star2.y=0;
            }
            if(star2.x>canvas2.width){
                star2.x=0;
            }
        });
        requestAnimationFrame(drawStars2);
        }
        drawStars2();

       

