let like = document.querySelector("main .div1 h6");
like.innerHTML = Math.floor(Math.random() * 10000);
let comment = document.querySelector("main .div2 h6");
comment.innerHTML = Math.floor(Math.random() * 10000);
let share = document.querySelector("main .div3 h6");
share.innerHTML = Math.floor(Math.random() * 10000);

let sub = document.querySelector(".btn .sub");
let flag = 0;
sub.addEventListener("click", () => {
  if (flag === 0) {
    sub.style.backgroundColor = "red";
    sub.style.color = "white";
    sub.innerHTML = "Subscribed";
    sub.style.width = "35%";
    flag = 1;
  } else {
    sub.style.backgroundColor = "white";
    sub.style.color = "black";
    sub.innerHTML = "Subscribe";
    sub.style.width = "30%";
    flag = 0;
  }
});

let msg = document.querySelector(".btn .msg");
let flag1 = 0;
msg.addEventListener("click", () => {
  if (flag1 === 0) {
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    msg.innerHTML = "Massege";
    msg.style.width = "30%";
    flag1 = 1;
  } else {
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
    msg.innerHTML = "Massage";
    msg.style.width = "25%";
    flag1 = 0;
  }
});   

 
