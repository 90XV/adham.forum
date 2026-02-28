const root=document.documentElement;
const modeButton=document.querySelector('.d-l-selector');

const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('theming',savedTheme);

const savedLine = localStorage.getItem('selectorOption')||'light-mode';
document.querySelector('.d-l-selector').textContent = savedLine;

function modeSwitch(){
    modeButton.textContent=(modeButton.textContent==='dark-mode')?'light-mode':'dark-mode';
    localStorage.setItem('selectorOption', modeButton.textContent);

    const currentTheme=(root.getAttribute('theming')==='dark')?'light' : 'dark';
    root.setAttribute('theming',currentTheme);
    localStorage.setItem('theme',currentTheme);
};