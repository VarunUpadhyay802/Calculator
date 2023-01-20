const duration=new Date();
console.log(duration);
console.log(duration.getHours());
console.log(duration.getMinutes());
console.log(duration.getSeconds());

const greet = document.getElementById("top");
const mid=document.getElementById("mid")
const hour=document.getElementById("hr")

var x=duration.getSeconds();
var y=duration.getMinutes();
var z=duration.getHours();
mid.innerHTML=y;
greet.innerHTML=x;
hour.innerHTML=z;
function seconds() {
    greet.innerHTML=x;
  console.log(x);
  x++;
   if(x==60){
    x=0;
    mid.innerHTML=y;
    y++;
    if(y==60){
        y=0;
        hour.innerHTML=z
        z++;
        
    }
   }
}
var id=setInterval(seconds,1000)
//  hi its varun here







