//creating class Bus
class Bus {
    constructor(name, model, longDistance) {
        this._name = name;
        this._model = model;
        this._longDistance = longDistance;
    }
    
    get busDetails() {
        return `${this._name}, ${this._model}, ${this._longDistance}`
    }
    
    set longDistance(value) {
        this._longDistance = value;
    }
}
//inheriting from bus class
class Train extends Bus {
    constructor(name, model, longDistance, operatedBy) {
        super(name, model, longDistance);
        this._operatedBy =  operatedBy;
    }
    
    get trainDetails() {
        return `${super.busDetails}, ${this._operatedBy}`
    }
}

const bus1 = new Bus('Venad', 'Leyland', false);
const bus2 = new Bus('Swift', 'TATA', true);

const train1 = new Train('Janashathabthi', 'WAP-7', true, 'Indian Railways');

console.log(train1.trainDetails);
