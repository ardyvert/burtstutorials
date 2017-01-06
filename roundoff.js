function roundoff(x,y,ans,w,a){
x=document.getElementById("demo1").value,
y=document.getElementById("demo2").value,
ans=x*1,
w=y*1,
a=ans.toFixed(w),
alert(a);
}
function significant(x,y,ans,w,a){
x=document.getElementById("demo3").value,
y=document.getElementById("demo4").value,
ans=x*1,
w=y*1,
a=ans.toPrecision(w),
alert(a);
}
