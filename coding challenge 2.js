var johna,johnb,johnc,avgjohn;
var mikea,mikeb,mikec,avgmike;
var marya,maryb,maryc,avgmary;
johna=89;
johnb=120;
johnc=103;
mikea=116;
mikeb=94;
mikec=123;
marya=97;
maryb=134;
maryc=105;
avgmary=(marya+maryb+maryc)/3;

avgjohn=(johna+johnb+johnc)/3;
avgmike=(mikea+mikeb+mikec)/3;
switch(true)
    {
        case (avgjohn>avgmike)&&(avgjohn>avgmary):
            console.log("winner is john.And his average score is :"+avgjohn);
            break;
        case (avgmike>avgjohn)&&(avgmike>avgmary):
            console.log("winner is mike .And his average score is :"+avgmike);
            break;
            case (avgmary>avgjohn)&&(avgmary>avgmike):
            console.log("winner is mary .And his average score is :"+avgmary);
            break;
            case (avgmike===avgjohn)&&(avgmike===avgmary):
           console.log("match draw between all the teams john,mike and mary");
            break;
        default:
            console.log("match draw between any of two teams");
            
            
    }
