var tip = {
bill: [124, 48, 268, 180, 42],
t : new Array(5),
    caltip: function (b){
    var i;
for (i=0;i<b.length;i++)
{
if (b[i]<50)
  this.t[i]= b[i]*0.2;
if (b[i]>=50&&b[i]<=200)
  this.t[i]= b[i]*0.15;
if (b[i] > 200)
  this.t[i]= b[i]*0.10;
        }
} 
          };

tip.caltip(tip.bill);

var totalpaid = new Array(5);
for(i=0;i<totalpaid.length;i++)
    totalpaid[i]=tip.t[i]+tip.bill[i];
tip.caltip(tip.bill);
console.log(tip.bill);
console.log(tip.t);