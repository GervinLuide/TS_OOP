class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getResistance(): number {
        return this.r;
    }
}

class SeriesCircuit {
    resistors: Resistor[] = []
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getTotalResistance() {
        let sum: number = 0;
        this.resistors.forEach((r: Resistor) => { sum += r.getResistance() });
        return sum;
    }
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }
    getTotalPower(u: number) {
        let current = this.getCurrent(u);
        let power = 0;
        this.resistors.forEach((r: Resistor) => power += r.getPower(current));
        return power;
    }
    getHighestResistance(): number {
        return Math.max(...this.resistors.map(resistor => resistor.getResistance()));
    }
    getHighestVoltageDrop(totalVoltage: number): number {
        let current = this.getCurrent(totalVoltage);
        return Math.max(...this.resistors.map(resistor => current * resistor.getResistance()));
    }
    getHighestPowerDissipation(totalVoltage: number): number {
        let current = this.getCurrent(totalVoltage);
        return Math.max(...this.resistors.map(resistor => current * current * resistor.getResistance()));
    }

}

let sc1: SeriesCircuit = new SeriesCircuit();
sc1.push(new Resistor(220));
sc1.push(new Resistor(220));
sc1.push(new Resistor(110));


//let sc2: SeriesCircuit = new SeriesCircuit();
//sc2.push(new Resistor(310))
//sc2.push(new Resistor(310))
//sc2.push(new Resistor(210))

console.log(sc1.getTotalResistance());
console.log(sc1.getCurrent(12));
console.log(sc1.getTotalPower(12));
console.log(sc1.getHighestResistance());
console.log(sc1.getHighestVoltageDrop(5));
console.log(sc1.getHighestPowerDissipation(5));

//console.log(sc2.getTotalResistance());
//console.log(sc2.getCurrent(19));