function bases(x,y,b,c,val){
x=document.getElementById("demo1").value,
y=document.getElementById("demo2").value,
b=x*1,
c=y*1,
val=b.toString(c);
alert(val+" base "+c);
}
function base10 (a,b,c,d,e,f,y,r,r1,r2,r3,r4,r5,s,s1,s2,s3,s4,t,t1,t2,t3,u,u1,u2,v,v1,x,z,z1,z2,z3,z4,z5){
a=document.getElementById("d1").value,
b=document.getElementById("d2").value,
c=document.getElementById("d3").value,
d=document.getElementById("d4").value,
e=document.getElementById("d5").value,
f=document.getElementById("d6").value,
y=document.getElementById("demo4").value;
r=y*y*y*y*y*a;
r1=y*y*y*y*a;
r2=y*y*y*a;
r3=y*y*a;
r4=y*a;
r5=1*a;
s=y*y*y*y*b;
s1=y*y*y*b;
s2=y*y*b;
s3=y*b;
s4=1*b;
t=y*y*y*c;
t1=y*y*c;
t2=y*c;
t3=1*c;
u=y*y*d;
u1=y*d;
u2=1*d;
v=y*e;
v1=1*e;
x=1*f;
z=r+s+t+u+v+x;
z1=r1+s1+t1+u1+v1+x;
z2=r2+s2+t2+u2+v1+x;
z3=r3+s3+t3+v1+x;
z4=r4+s4+t3+x;
z5=r5+s4+x;
if(a,b,c,d,e,f){alert(z+" base 10");}
else if(a,b,c,d,e){alert(z1+" base 10");}
else if(a,b,c,d){alert(z2+" base 10");}
else if(a,b,c){alert(z3+" base 10");}
else if(a,b){alert(z4+" base 10");}
else if(a){alert(z5+" base 10");}
}
function basechange(a,b,c,d,e,f,y,r,r1,r2,r3,r4,r5,s,s1,s2,s3,s4,t,t1,t2,t3,u,u1,u2,v,v1,x,z,z1,z2,z3,z4,z5){
a=document.getElementById("b1").value,
b=document.getElementById("b2").value,
c=document.getElementById("b3").value,
d=document.getElementById("b4").value,
e=document.getElementById("b5").value,
f=document.getElementById("b6").value,
y=document.getElementById("demo5").value,
y1=document.getElementById("demo6").value;
e1=y1*1;
r=y*y*y*y*y*a;
r1=y*y*y*y*a;
r2=y*y*y*a;
r3=y*y*a;
r4=y*a;
r5=1*a;
s=y*y*y*y*b;
s1=y*y*y*b;
s2=y*y*b;
s3=y*b;
s4=1*a;
t=y*y*y*c;
t1=y*y*c;
t2=y*c;
t3=1*c;
u=y*y*d;
u1=y*d;
u2=1*d;
v=y*e;
v1=1*e;
x=1*f;
z=r+s+t+u+v+x;
z1=r1+s1+t1+u1+v1+x;
z2=r2+s2+t2+u2+v1+x;
z3=r3+s3+t3+v1+x;
z4=r4+s4+t3+x;
z5=r5+s4+x;
c1=z*1;
c2=z1*1;
c3=z2*1;
c4=z3*1;
c5=z4*1;
c6=z5*1;
d1=c1.toString(e1);
d2=c2.toString(e1);
d3=c3.toString(e1);
d4=c4.toString(e1);
d5=c5.toString(e1);
d6=c6.toString(e1);
if(a,b,c,d,e,f){alert(d1+" base "+ e1);}
else if(a,b,c,d,e){alert(d2+" base "+ e1);}
else if(a,b,c,d){alert(d3+" base "+e1);}
else if(a,b,c){alert(d4+" base "+e1);}
else if(a,b){alert(d5+" base "+e1);}
else if(a){alert(d6+" base "+e1);}
}
function check(){
a=document.getElementById("d1").value,

b=document.getElementById("d2").value;
c=document.getElementById("d3").value;
d=document.getElementById("d4").value;
e=document.getElementById("d5").value;
f=document.getElementById("d6").value;
y=document.getElementById("demo4").value;
if(document.getElementById("d1").value.length>1){alert("Enter 1 digit only!");return false;}
else if(a>=y){alert("Digit cannot be greater than or equal to base!");}
else if(document.getElementById("d2").value.length>1){alert("Enter 1 digit only!");}
else if(b>=y){alert("Digit cannot be greater than or equal to base!");}
else if(document.getElementById("d3").value.length>1){alert("Enter only 1 digit!");}
else if(c>=y){alert("Digit cannot be greater than or equal to  base!");}
else if(document.getElementById("d4").value.length>1){alert("Enter only 1 digit!");}
else if(d>=y){alert("Digit cannot be greater than or equal base!");}
else if(document.getElementById("d5").value.length>1){alert("Enter only 1 digit!");}
else if(e>=y){alert("Digit cannot be greater than or equal to base!");}
else if(document.getElementById("d6").value.length>1){alert("Enter only 1 digit!");}
else if(f>=y){alert("Digit cannot be greater than or equal to base!");}
else if(document.getElementById("demo4").value.length>1){alert("Enter 1 digit only!");}

if(isNaN(a)){alert("Enter digits only!");}
else if(isNaN(b)){alert("Enter digits only!");}
else if(isNaN(c)){alert("Enter digits only!");}
else if(isNaN(d)){alert("Enter digits only!");}
else if(isNaN(e)){alert("Enter digits only!");}
else if(isNaN(f)){alert("Enter digits only!");}
else if(isNaN(y)){alert("Enter digits only!");}
}
function check1(){
a=document.getElementById("b1").value;
b=document.getElementById("b2").value;
c=document.getElementById("b3").value;
d=document.getElementById("b4").value;
e=document.getElementById("b5").value;
f=document.getElementById("b6").value;
y=document.getElementById("demo5").value;
y1=document.getElementById("demo6").value;
if(a.length>1){alert("Enter only 1 digit!");}
else if(a>=y){alert("Digit must not be greater or equal to base!");}
else if(b.length>1){alert("Enter only 1 digit!");}
else if(b>=y){alert("Digit cannot be greater than or equal to base!");}
else if(c.length>1){alert("Enter only 1 digit!");}
else if(c>=y){alert("Digit cannot be greater or equal to base!");}
else if(d.length>1){alert("Enter only 1 digit!");}
else if(d>=y){alert("Digit must not be greater or equal to base!");}
else if(e.length>1){alert("Enter only 1 digit!");}
else if(e>=y){alert("Digit must not be greater or equal to base!");}
else if(f.length>1){alert("Enter only 1 digit!");}
else if(f>=y){alert("Digit must not be greater or equal to base!");}
else if(y==y1){alert("Final base must be different from original base!");}
else if(y.length>1){alert("Enter only 1 digit!");}
else if(y1.length>1){alert("Enter only 1 digit!");}
if(isNaN(a)){alert("Enter digits only!");}
else if(isNaN(b)){alert("Enter digits only!");}
else if(isNaN(c)){alert("Enter digits only!");}
else if(isNaN(d)){alert("Enter digits only!");}
else if(isNaN(e)){alert("Enter digits only!");}
else if(isNaN(f)){alert("Enter digits only!");}
else if(isNaN(y)){alert("Enter digits only!");}
else if(isNaN(y1)){alert("Enter digits only!");}
}
