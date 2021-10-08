



function color(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    let str=`rgb(${a},${b},${c})`;
    return str;
}


function generate(n){

    const parent = document.createElement("div");
    document.body.appendChild(parent);
    parent.className='container';
    parent.id='box';
    parent.style.border='inset';
    const block_area=(440*440)/(n*n);
    const block_width=Math.sqrt(block_area);  
for (let row = 0; row < n; row++) {
  const rows = document.createElement("div");
  for (let i = 0; i < n; i++) {
    const blocks = document.createElement("div");
    //blocks.style.border = "inset #e1f2f1";
    blocks.style.width=`${block_width}px`;
    blocks.style.height=`${block_width}px`;
    blocks.addEventListener("mouseover", function () {
      let str=color();  
      blocks.style.backgroundColor = str;
    });
    rows.appendChild(blocks);
  }

  rows.style.display = "flex";
  parent.appendChild(rows);
}

}
const resetting=document.querySelector('button.reset');

resetting.addEventListener('click',function(){
    
    let n = prompt("enter dimension less than 100");
    console.log(typeof(n));
    if(n <=0 || n>=100){alert("Enter correct value");}
    else{
    document.getElementById('box').remove();
    generate(n);
    resetting.textContent='Click to reset'
    }
});