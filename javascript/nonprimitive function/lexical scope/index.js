console.log("start");
let a=10;
console.log(a);
function x(){
    var b=20;
    let c=30;
    console.log(c);
    function y(){
        console.log(b);
        console.log(d);
        var d=40;
    }
    return y
}x()()
    console.log("End");