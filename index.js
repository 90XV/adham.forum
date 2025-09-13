const container = document.querySelector('.container');
const card = document.querySelector('.hero');

container.addEventListener('mousemove',(e)=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    const rotateX = Math.max(-15,Math.min(15,(y/rect.height)*40));
    const rotateY = Math.max(-15,Math.min(15,(x/rect.width)*40));

    const shadowX = -(x/ rect.width)*40;
    const shadowY = -(y/rect.height)*40;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0,0,0,0.3)`;
})

container.addEventListener('mouseleave', () =>{
    card.style.transform= `rotateX(0) rotateY(0)`;
    card.style.boxShadow= `0 0 20px rgba(0,0,0,0)`;
})