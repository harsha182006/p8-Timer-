const time = document.getElementById("time");
const start = document.getElementById("start");
const stop=document.getElementById("stop")
const reset=document.getElementById("reset")
let h = 0;
let m = 0;
let s = 0;
let a =null
start.addEventListener("click", () => {
    if (a!==null){
        return
    }
  a=setInterval(() => {
    time.textContent = `${h}:${m}:${s}`;

    console.log(h, ":", m, ":", s);
    s++;
    if (s === 60) {
      m++;
      s = 0;
    }
    if (m === 60) {
      h++;
      m = 0;
      s = 0;
    }
  }, 1000);
});

stop.addEventListener("click",()=>{
    clearInterval(a)
    a=null
})
reset.addEventListener("click",()=>{
    clearInterval(a)
    a=null
    s=0
    m=0
    h=0
    time.textContent=`${h}:${m}:${s}`;
})