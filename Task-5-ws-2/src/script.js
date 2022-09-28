function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0";
}

function changeNavColor(color){
    let white = "rgb(0,0,0,0.6)"
    if (color == "white"){
        header.style.backgroundColor = white;
        // header.style.fill = "black";
        // header.style.color = "black";
        header.style.position = "fixed";
        header.style.paddingTop = "28px"
        header.style.paddingBottom = "14px"
        console.log("turned white")
    }else{
        header.style.backgroundColor= "transparent";
        // header.style.fill = "initial";
        // header.style.color = "initial";
        header.style.position = "absolute" ;
        header.style.paddingTop = "56px"
        header.style.paddingBottom = "0px"
        console.log("turned initial")
    }
}

console.log("hello")
let header = document.getElementById("header");

console.log(header);



document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition >= 100){
        changeNavColor("white")
    }else if(lastKnownScrollPosition == 0){
        changeNavColor()
    }
})
