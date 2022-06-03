document.body.style.height = "10000px"  //add body hight

const strap = document.createElement('div');
document.body.appendChild(strap); 

let size = 10;
let grow = true;

strap.style.width = "100%";
strap.style.position = "fixed";
strap.style.marginTop = 0;
strap.style.marginLeft = 0;
strap.style.backgroundColor = "green";

const changedHeight = () => {

    if (grow) {
        size += 5;
        strap.style.height = size + "px";
        strap.style.backgroundColor = "green";
    }
    else {
        size -= 5;
        strap.style.height = size + "px";
        strap.style.backgroundColor = "red";
    }    
    
    if (size >= window.innerHeight * 0.5 ){
        grow = !grow;
    }

    else if (size == 0) {
        grow = !grow;
    }

}


window.addEventListener("scroll" , changedHeight);

