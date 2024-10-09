let sharebtn = document.querySelector('.btn1');
let followbtn = document.querySelector('.btn2');
let module = document.querySelector('.module');
let closed = document.querySelector('#close')
let overlay = document.querySelector('.overlay')

sharebtn.addEventListener('click', function(){
    if(module){
        module.classList.add('active');
        overlay.classList.add('overlayactive');
    }
});

function band(){
    if(module){
        module.classList.remove('active');
        overlay.classList.remove('overlayactive');
    }
}



followbtn.addEventListener('click', function(){

    let value = followbtn.innerText;
    if (value === "Follow Me") {
        followbtn.innerText = "Following";
    } else {
        followbtn.innerText = "Follow Me";
    }
});