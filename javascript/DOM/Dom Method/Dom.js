let body=document.body
let div=document.createElement('div')
div.style.height='400px'
div.style.width='300px'
div.style.border='1px solid black'
div.style.textAlign='center'
div.style.background='linear-gradient(black,grey)'
div.innerHTML+=`<img src="ab.jpg" height="200px" width="200px">
<h1>Mahindra Thar</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque dolore, quae inventore molestiae, qui ipsum rerum esse et, aperiam ex tempore.</p>
<button>Click</button>

`

body.appendChild(div)