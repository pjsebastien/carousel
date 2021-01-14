//We select everything we'll need on html

const imgs = document.querySelector("#imgs");
const img = document.querySelectorAll("#imgs img");

//Initialisation at 0 to start 
let idx = 0;
//Run function will move the index one by one to change picture
function run(){
    idx++;
    //When index is upper than the numbers of images, index come back to 0
    if(idx > img.length -1) {
        idx = 0;
    }
    /*Each time run function is called, the length X takes 500px less multiplicate 
    by the index to go to the next image (separate eachother by 500px)
    For example -500px for the first, -1000px for the second ect...*/
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

//Run function is called every 4seconds.
setInterval(run, 4000);