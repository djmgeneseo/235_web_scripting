let xRect = 5;
let yRect = 15;
let rectWidth = 50;
let rectHeight = 20;

/* 
*   Returns an object that makes methods accessible:
*       https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
*/
let gameContext = document.getElementById("game").getContext("2d");
//gameContext.fillStyle = "blue";

/* starting point (x,y) size (width, height)  */
//gameContext.fillRect(5, 15, 50, 20);

// gameContext.clearRect(5, 15, 50, 20);

/* Rather than freeze browser with repeated requests, we can repeatedly ask the browser to schedule a change whenever it'd naturally repaint the screen using requestAnimationFrame */

/* 
*   Render doesn't calculate anything except for printing 
*   miliseconds to console. The last line schedules render to 
*   repeat itself for the next time the browser repaints the
*   screen. 
*   What happens in render happends every millisecond.
*/
//let render = milliseconds => {
//    console.log(milliseconds);
//    requestAnimationFrame(render);
//};

//requestAnimationFrame(render);

/****** MOVING RECT ******/
function moveRect(x){
    x=x+5;
}

let render = milliseconds => {
    gameContext.clearRect(xRect, yRect, rectWidth, rectHeight);
    xRect++;
    /* The rectangle resets to start once right edge touches the canvas's right-most side (the canvas's width) */
    xRect = xRect%(320-rectWidth);
    gameContext.fillRect(xRect, yRect, rectWidth, rectHeight);
    console.log(xRect);
    requestAnimationFrame(render);
};
requestAnimationFrame(render);