function b1(){
    document.body.style.backgroundColor='black'
    document.body.style.color='white'
}
function b2(){
    document.body.style.backgroundColor='grey'
    document.body.style.color='black'
}

const keyup=()=>{
    document.body.style.backgroundColor='yellow'
}
const keydoun=()=>{
    document.body.style.backgroundColor='green'
}
function over(){
    document.body.style.backgroundColor='pink'
}
function out(){
    document.body.style.backgroundColor='blue'
}
function capitalize(){
    let x=document.getElementById('ip1')
    x.value=x.value.toUpperCase()
}