function tipCalculator(a)
{
    if(a<50)
        return .20*a;
    if(a>=50&&a<=200)
        return .15*a;
    if(a>200)
        return .10*a;
}