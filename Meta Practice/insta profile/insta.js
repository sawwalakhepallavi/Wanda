
function click1(){
        let a=document.getElementById('btn1')
        a.style.color='red'
}
function click2(){
        let body=document.body
        let main=document.createElement('main')
        main.style.height='300px'
        main.style.width='300px'
        main.style.border='5px solid black'
        main.style.background='linear-gradient(pink,white)'
        main.style.textAlign='center'
        main.style.position='absolute'
        main.style.top='10px'
        main.style.left='10px'
        main.innerHTML+=`
        <div>
        <form action="#" method="get" onsubmit="fetch()">
        <br>
        <label for="name">Nmae</label>
        <input type="name" id="name">
        <br>
        <br>
        <label for="email">Email</label>
        <input type="email" id="email">
        <br>
        <br>
        <label for="password">Password</label>
        <input type="password" id="password">
        <br>
        <br>
        <input type="submit" value="reset">
        <input type="submit" value="submit">
       </form>
      </div>`
   body.appendChild(main)

}
function click3(){
        let c=document.getElementById('Page_remove')
        c.remove();
}
function fetch(){
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    const body = document.body
    const div = document.createElement('div')
    div.innerHTML+=`<table>
    <tr>
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    </tr>
    </table>`
    body.appendChild(div)
}