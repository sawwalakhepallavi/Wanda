function grandparent(){
    console.log("I am grandparent");
    function parent(){
        console.log("I am parent");
        function child(){
            console.log("I an child");
        }
        child()
    }
    parent()
}
grandparent()