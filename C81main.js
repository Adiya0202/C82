var mouseEvent="";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
  color=document.getElementById("color").value;
  radius=document.getElementById("radius").value;
  lw=document.getElementById("lw").value;
  mouseEvent="mousedown"; 
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
  mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
  mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=lw;
    ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI);
    ctx.stroke();  
}
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}