// function Writing(c) {
//     var content = c;
//     this.getContent = function () {
//         return content;
//     }
// }
// function Post(c, d) {
//     Writing.call(this,c);
//     var date = d;
//     this.toString = function () {
//         return this.getContent()+","+date;
//     };
// }
// var p = new Post("post bla bla", new Date()); 
// console.log(p.toString());

// var text ="testing: 1, 2, 3";
// var pattern = /\d+/g;
// document.getElementById("c").innerHTML = "Nội dung thông báo";

// document.querySelector(".news").parentNode.style.backgroundColor= "green";
// document.querySelector(".news").firstChild.style.backgroundColor= "green";
// document.querySelector(".news").childNodes[1].style.backgroundColor= "green";
// document.querySelector(".news").childNodes[1].nextSibling.nextSibling.style.backgroundColor= "green";
// document.querySelector(".news").childNodes[1].childNodes[1].style.backgroundColor= "green";
// document.querySelector(".news").childNodes[5].style.backgroundColor= "green";
// document.querySelector(".news").childNodes[5].childNodes[1].style.backgroundColor= "green";
// document.querySelector(".news").childNodes[5].childNodes[1].nextSibling.nextSibling.style.backgroundColor= "green";
// var a = 3;
// var b = 2;
// var c = a;
// a=b=c=1;
// console.log(a)

// var Employee = {
//     firstname: "Mohammed", lastname: "Haddad"
// }
// //delete Employee.firstname;
// console.log(Employee.firstname);

// Đảo ngược
// var list = document.querySelector("#mylist");
// var items= document.querySelectorAll("#mylist li"); 
// for (var i= items.length-2;i>=0; i--) {
//     list.removeChild (items[i]);
//     list.appendChild (items[i]);
// }

// Không thay đổi
// var list = document.querySelector("#mylist");
// var items= document.querySelectorAll("#mylist li"); 
// for (var i=0;i<items.length; i++) {
//     list.removeChild (items[i]);
//     list.insertBefore (items[i],items[i+2]);
// }

// Đảo ngược
// var list = document.querySelector("#mylist");
// var items= document.querySelectorAll("#mylist li"); 
// var last = items[items.length-1]
// for (var i= items.length-2;i>=0; i--) {
//     list.removeChild (items[i]);
//     list.insertBefore (items[i],last.nextSibling);
//     last=items[i];
// } 

// Không làm thay đổi
// var items= document.querySelectorAll("#mylist li"); 
// var tmp;
// for (var i=0;i<items.length/2; i++) {
//     tmp=items[i];
//     items[i]=items[items.length-1-i];
//     items[items.length-1-i]=tmp;
// }

// var d = document.getElementById("answerbox");
// d.appendChild("<p>Hello</p>");

// var d = document.getElementById("answerbox");
// d.innerHTML+="<p>Hello</p>";

// var t=document.createTextNode("Hello");
// var p=document.createElement("p");
// d=document.getElementById("answerbox");
// p.appendChild(t);
// d.appendChild(p);

// answerbox.innerHTML +="<p>Hello</p>";

// Câu 58
// var i=1, j=2;
// tb= document.getElementById("mytable");
// r1= tb.rows[i];
// nr1=r1.nextSibling; 
// r2=tb.rows[j];
// tb.tBodies[0].insertBefore(r1, r2);
// tb.tBodies[0].insertBefore(r2, nr1);

// r2=tb.rows[j];
// tmp=r1;
// r1=r2;
// r2=tmp;

// nrl=rl.nextSibling; 
// r2=tb.rows[j];
// tb.insertBefore(r1, r2);
// tb.insertBefore(r2, nr1);

// r1=document.getElementById(i);
// r2=document.getElementById(j);
// tmp=r1;
// r1=r2;
// r2=tmp;

//Câu 64
// function a(){
//     function b(x,y){
//         return (x+y);
//     }
//     this.c=function(x,y){
//         return b.apply(this,[x,y]);
//         //return b(x,y);
//     }
// }
// var o=new a();
// console.log(o.c(1,2));

// var userAgent = navigator.appName;
// console.log(userAgent);
// if (userAgent.indexOf("Chrome") !== -1) {
//   console.log("Đang sử dụng trình duyệt Chrome");
// } else if (userAgent.indexOf("Firefox") !== -1) {
//   console.log("Đang sử dụng trình duyệt Firefox");
// } else if (userAgent.indexOf("Safari") !== -1) {
//   console.log("Đang sử dụng trình duyệt Safari");
// } else if (userAgent.indexOf("Edge") !== -1) {
//   console.log("Đang sử dụng trình duyệt Edge");
// } else if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) {
//   console.log("Đang sử dụng trình duyệt Opera");
// } else if (userAgent.indexOf("Trident") !== -1) {
//   console.log("Đang sử dụng trình duyệt Internet Explorer");
// } else {
//   console.log("Không thể xác định trình duyệt");
// }

// Câu 74
// function a(x,y){
//     function b(x,y){
//         return (x+y);
//     }
//     this.c=function(x,y){
//         // return b.apply(this,[x,y]);
//         return (x+y);
//     }
// }
// var o=new a();
// console.log(o.c(1, 2));

//Câu 77
// function tail(o){
//     for (;o.next;o=o.next);
//     return o
// }

// document.getElementById("demo").innerHTML="Javascripts";
// #demo.innerHTML="Javascripts";
// document.getElementsByName("p").innerHTML="Javascripts";
// document.getElementById("p").innerHTML="Javascipts";

var a=123;
var s=a.toString();
// var userInput = prompt('message', 'hello');

// function x(){
//     function y(){
//         console.log("xy");
//     }
//     y();
// }

// var x=0;
// do {console.log(x);} while (x>0);

// var obj={name="steve"};
// var obj={name:"steve"};
// var obj= new Object();
// var obj={}

// var count =[1,,3];
// console.log(count[1]);

var a=[1,2,3,4,5];
a.slice(0,3)

var a='1230';
console.log(typeof(a))
var m=parseFloat(a);
console.log(m);
console.log(typeof(m))