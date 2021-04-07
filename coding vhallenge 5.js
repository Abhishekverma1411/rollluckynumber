
var tip={
billvalue:[124,48,268,180,42],
t:[],
caltip:function(b[]){
for(var i=0;i<b.length;i++)
{
if(b[i]<50)
  t[i]= b[i]*.2;
if(b[i]>=50&&b[i]<=200)
  t[i]=b[i]*.15;
if(b[i]>200)
  t[i]=b[i]*.10;
}
}



}