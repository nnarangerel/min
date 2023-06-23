let billAmount = prompt(" тооцооны дүнг оруулна ?: ₮");
let tipPercentage = prompt(
    " өгөхийг хүсэж буй гарын мөнгөний (tip) хувь оруулна ?: ₮"
);
billAmount = parseFloat(billAmount);
tipPercentage = parseFloat(tipPercentage);
let tipAmount = billAmount * (tipPercentage / 100);
let totalBill = billAmount + tipAmount;
let result ="Таны нийт тооцоо (гарын мөнгө орсон): ₮" + totalBill.toFixed(2);

console.log(result);
alert(result);

let x =prompt("x=");
let y= prompt("y=");
x = parseFloat(x);
y= parseFloat(y);
let rezult = "x="+y+",y="+x;
console.log(rezult);
alert(rezult);


let B = prompt("B=?");
let C = prompt("C=?");
let D = prompt("D=?");

B = parseFloat(B);
C = parseFloat(C);
D = parseFloat(D);
 
let A = (B*C)-D;
let ankwer ="answer="+A;
console.log(ankwer);
alert(ankwer);

let days = prompt(" days=");
let hours = prompt(" hour=");
days = parseFloat(days);
hours = parseFloat(hours);
let dtoh = days*24;
let total = hours+dtoh;
let answer ="hours="+total;
console.log(answer)
alert(answer)

let s = '1234'
let o = s[3]+s[2]+s[1]+s[0]
