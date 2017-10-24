let cloudX = 5;
let cloudY = 5;


var clouds = new Image();
clouds.src = "cloud-background.jpg";

let canvas=document.getElementById("game");
let context=canvas.getContext("2d");

let render = milliseconds => {
    context.clearRect(5, 5, canvas.width, canvas.height);
    context.drawImage(clouds, cloudX, cloudY,clouds.width, clouds.height);
    cloudX--;
    cloudX = cloudX%(1920-320);
    requestAnimationFrame(render);
}

requestAnimationFrame(render);