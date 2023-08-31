
let character=document.getElementById('characters')
let block= document.getElementById('block')

let ups= document.querySelector('button');
ups.addEventListener('click', ()=> {
 function jump(){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500); 
}
});
ups.onclick= "jump()"

/*let checkDead = setInterval(function(){
    let characterTop=
parseInt(window.getComputedStyle(character).getPropertyValue("top"));

let blockLeft=
parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if(blockLeft<20 && blockLeft>0 && characterTop>=130){
    block.style.animation="none";
block.style.display= "none";
    alert("you lose.");
}
},10);

*/

 



