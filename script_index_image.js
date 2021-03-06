const pic = document.querySelectorAll('.content');
const bt = document.querySelectorAll('.cir-btn');
let num = 0;
let timer = null;
showDiv(num);

function clickDiv(n){
    clearTimeout(timer);
    showDiv(num = n);
}

function showDiv(n){
    timer = setTimeout(showDiv,3000);
    if(n === undefined){n = num++;}
    for(let i=0; i<pic.length; i++){
        pic[i].style.display = 'none';
        bt[i].style.background = 'none';
    }
    if(num>=pic.length){num = 0;}
    pic[num].style.display = 'flex';
    bt[num].style.background = 'white';
    timer;
}