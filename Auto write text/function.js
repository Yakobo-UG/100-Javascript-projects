var text= "Going to make it one day";

var num = 0;

function write() {
    document.body.innerText = text.slice(0, num);
    num++;

    if(num > text.length){
        num = 0;
    }
}

setInterval(write, 50);