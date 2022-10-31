function changecolor(e){
    if(this.style.backgroundColor != "")return;
    this.style.backgroundColor = `#${randomcolor()}`;
}
function randomcolor(){
    let str='';
    for(let i = 0; i<6;i++){
        str+=`${Math.floor((Math.random()*16)).toString(16)}`;
    }
    return str;
}
function inputreq(e){
    let cond;
    let numb;
    do{
     numb = prompt("input the number of grids : (the max is 100)");
    if(numb>100) cond = true;
    else cond = false;
    }while(cond);
    container.innerHTML ='';
for(let i = 0; i<numb*numb;i++){
    let div = (document.createElement("div"));
    let dim = (960/numb)-2;
    div.style.width=`${dim}px`;
    div.style.height=`${dim}px`;
    div.style.border = '1px solid';
    div.addEventListener('mouseover',changecolor);
    container.appendChild(div);
}

}
const body = document.querySelector('body');
const container = document.createElement("div");
const gridButton = document.createElement('button');
gridButton.style.backgroundColor = '#00000000';
gridButton.style.borderRadius ='12px';
gridButton.style.fontSize='28px';
gridButton.style.fontFamily='sans-serif';
gridButton.style.width='240px';
gridButton.style.height='100px';
gridButton.innerText='Number of grids';
gridButton.style.flexShrink='0';
gridButton.addEventListener('mousedown',inputreq)
body.appendChild(gridButton);
container.style.display='flex';
container.style.width='960px';
container.style.border='1px solid';
container.style.flexWrap='wrap';
body.appendChild(container);
body.style.display='flex';
body.style.flexDirection='column';
body.style.alignItems='center';
body.style.justifyContent='center';
for(let i = 0; i<16*16;i++){
    let div = (document.createElement("div"));
    div.style.width='58px';
    div.style.height='58px';
    div.style.border = '1px solid';
    div.addEventListener('mouseover',changecolor);
    container.appendChild(div);
}

