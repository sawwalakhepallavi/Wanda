let a=document.querySelector('#btn1')
a.addEventListener('click',()=>{
    document.body.style.backgroundColor='black'
})

let b=document.getElementById('ip1')
b.addEventListener("keyup",function(){
    document.body.style.backgroundColor='green'
})
b.addEventListener("keydown",function(){
    document.body.style.backgroundColor='blue'
})

let c=document.getElementById('btn2')
c.addEventListener('mouseover',()=>{
    document.body.style.backgroundColor='orange'
})
c.addEventListener('mouseout',()=>{
    document.body.style.backgroundColor='white'
})
