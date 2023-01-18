let resistors:number[]=[110, 220, 220];
let inversesum:number=0;
for(let resistance of resistors){
    inversesum+=1/resistance;
}
let amps = 0.5
let totalResistance = 1 / inversesum;
let voltage = 4.5;
let current = 1;
let power = voltage * current;
let ohms = voltage / amps;
console.log("Power: " + power + " watts, Resistance: " + totalResistance + " ohms");
let secondtotalResistance = 0.5 / inversesum;
let secondcurrent = 0.5;
let secondPower = voltage * secondcurrent;
console.log("Secondary Power(tagatuli): " + secondPower + " watts, Secondary Resistance: " + secondtotalResistance + " ohms");
console.log(ohms)
