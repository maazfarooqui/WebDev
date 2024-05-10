

let title = prompt("enter your title ");
let cname= prompt("enter the channel name");
let views = prompt("enter the views of the video");
let duration = prompt("enter how long ago was the video uploaded in months");
let time = prompt("enter duration of the video");

//  document.querySelector(".main").innerHTML= title
//  document.querySelector(".cname").innerHTML= cname
//  document.querySelector((".views")).innerHTML=views
//  document.querySelector((".duration")).innerHTML=duration


template(title, cname, views, duration, time);



function template(title, cname, views, duration, time){

    let viewstr;    

    if(views <1000)
    {
        viewstr = views + "k";
    }

    else if(views<1000000)
    {
        viewstr= views/1000 + "k";
    }

    else if(views>1000000)
    {
        viewstr= views/1000000 +"M";
    }


let html = `<div class="container">
<div class="image">
    
    <div class="time">${time}</div>
</div>
<div class="title">
    <div class="main">${title}</div>
    <div class="sub"> 
        <div class="cname">${cname}</div>
        <div class="views">${viewstr} views</div>
        <div class="duration">${duration} months ago</div>
    </div>
</div>
</div>`
document.querySelector(".card").innerHTML =  html;


}

// template("how to code", "code with me", 7500000, 5, "10:45");

