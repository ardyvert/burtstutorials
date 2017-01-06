function quadratic(a,b,c,d,e,f,g,h,i,j,k,m,l,n){
a=document.getElementById("demo1").value,
b=document.getElementById("demo2").value,
c=document.getElementById("demo3").value;
d=b*b;
e=4*a*c;
f=d-e;
g=2*a;
h=-b;
i=d-e;
if(d<e){alert("Square root of a negative is undefined");}
j=Math.sqrt(i);
k=h+j;
m=h-j;
l=k/g;
n=m/g;
alert("Answer is "+l+" or "+n);
}