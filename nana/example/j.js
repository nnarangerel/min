for (let i = 0; i <= (10); i++) {
    if( i%3===0 || i%5 ===0) console.log(i);
    
}

let input = [57,60,80,100]

const average = (input)=>{
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i]
    }
    const avg = sum / input.length
    return avg

}
 const avg = average(input)

 if (95<=avg<=100) {
    console.log("A,4.0")
}
else if (90<=avg<95)
{console.log("A-,3.6")}

else if(84<avg<90 )
{console.log("B,3.1")}

else if(79<avg<85 )
{console.log("B-,2.7")}

else if(74<avg<80 )
{console.log("C,2.3")}

else if(69<avg<75 )
{console.log("C-,1.9")}

else if(64<avg<70 )
{console.log("D,1.4")}

else if(59<avg<65 )
{console.log("D-,1")}

else if(0<avg<60 )
{console.log("F,0")}

let inp= 100
for (let i = 0; i <= inp; i++) {
    if ( i%1===0 && i % i===0){
        console.log(i)
    }
    ;
    
}
