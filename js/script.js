const images = [ "./images/BANK-LOCKER1.avif","./images/face-recognition-img.jpg","./images/OTP-img.jpg", ]
let index = 0;
const slide = document.getElementById('slide');
function next()
{
    if(index < images.length -1){

    
   index++;
}
else{
    index = 0;
}
   slide.src = images[index]



}
function prev()
{
    if(index > 0){

    
   index--;
}
else{
    index = images.length -1;
}
   slide.src = images[index]



}
setInterval(next, 2000);