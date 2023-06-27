// let billAmount = prompt(" тооцооны дүнг оруулна ?: ₮");
// let tipPercentage = prompt(
//     " өгөхийг хүсэж буй гарын мөнгөний (tip) хувь оруулна ?: ₮"
// );
// billAmount = parseFloat(billAmount);
// tipPercentage = parseFloat(tipPercentage);
// let tipAmount = billAmount * (tipPercentage / 100);
// let totalBill = billAmount + tipAmount;
// let result ="Таны нийт тооцоо (гарын мөнгө орсон): ₮" + totalBill.toFixed(2);

// console.log(result);
// alert(result);

// let x =prompt("x=");
// let y= prompt("y=");
// x = parseFloat(x);
// y= parseFloat(y);
// let rezult = "x="+y+",y="+x;
// console.log(rezult);
// alert(rezult);


// let B = prompt("B=?");
// let C = prompt("C=?");
// let D = prompt("D=?");

// B = parseFloat(B);
// C = parseFloat(C);
// D = parseFloat(D);
 
// let A = (B*C)-D;
// let ankwer ="answer="+A;
// console.log(ankwer);
// alert(ankwer);

// let days = prompt(" days=");
// let hours = prompt(" hour=");
// days = parseFloat(days);
// hours = parseFloat(hours);
// let dtoh = days*24;
// let total = hours+dtoh;
// let answer ="hours="+total;
// console.log(answer)
// alert(answer)

// let s = '1234'
// let o = s[3]+s[2]+s[1]+s[0]

// let falsy= 
//   [undefined,
//     NaN,
//     false,
//     undefined,
//     null,  
//     0
// ]
// let car = {
//     brand :"toyota",
//     name : "prius",
//     price: 2000000
// }
// const numbers = [1,2,3,4,5,6]
// const average = (numbers)=>{
     
//     for (let i = 0; i < numbers.length; i++) {
//         console.log = [i]; 
//     }
    
    
// }

// const output = average(numbers)
// alert(output)
 
// let a=3
// let b =6
// if (a<b){console.log(b)}
// else{console.log(a)}
// let x= prompt("height")
// let y = prompt("width")
// x = parseFloat(x)
// y = parseFloat(y)
// let result1= ("hevtee")
// let result2= ("bosoo")
// if ( y > x )
// {console.log(result1)
// alert(result1)}
// else {console.log(result2)
// alert(result2)}

const number=[2,3,123,545,745,745,7,4,5]
const max=(number) =>{
    let maxNumber = number[0];    
    for (let i = 1; i < number.length; i++) {
        const element = number[i];
        if(element > maxNumber )
        maxNumber = element
        
    }
    return maxNumber;
}

const result = max(number)
alert(result)