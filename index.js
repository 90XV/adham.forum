const container = document.querySelector('.master-content');
const card = document.querySelector('.hero1');
const masterBody = document.querySelector('.master-body');
const navClass = document.querySelectorAll('a');
const clickme = document.querySelector('.clickme');
const emailbug = document.querySelector('.emailbug');
let showingBack = false;

const mediaQuery = window.matchMedia('(max-width: 600px)');

container.addEventListener('mousemove',(e)=>{
    clickme.style.display='flex';
    masterBody.style.backgroundColor=`var(--main-dark)`;
    card.style.color='var(--white)';

    navClass.forEach(nav => {
        nav.style.color='var(--white)';
    });
    
    emailbug.style.color='var(--white)';

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    const rotateX = Math.max(-15,Math.min(15,(y/rect.height)*40));
    const rotateY = Math.max(-15,Math.min(15,(x/rect.width)*40));

    const shadowX = -(x/ rect.width)*30;
    const shadowY = -(y/rect.height)*30;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${shadowX}px ${shadowY}px 1px var(--white)`;
})

container.addEventListener('mouseleave', () =>{
    clickme.style.display='none';
    card.style.transform= `rotateX(0) rotateY(0)`;
    card.style.boxShadow= `0 0 20px rgba(0,0,0,0)`;
    masterBody.style.backgroundColor = 'var(--beige)';
    card.style.color='var(--main-dark)';

    emailbug.style.color='rgba(0,0,0,0)';

    if (mediaQuery.matches){
        navClass.forEach(nav=> {
            nav.style.color='var(--main-dark)';
        });
    } else {
    navClass.forEach(nav=> {
        nav.style.color='rgba(0,0,0,0.1)';
    });
    }
})

card.addEventListener('click', () => {
    const isFront = document.querySelector('.hero1div').style.display !== 'none';
    document.querySelector('.hero1div').style.display=isFront ? 'none' : 'block';
    document.querySelector('.hero1divOut').style.display=isFront ? 'block' : 'none';

    clickme.style.display='none';
});