class Display {
    constructor(displayPreviousValue, displayNewValue) {
        this.displayNewValue = displayNewValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculate = new Calculator();
        this.operationType = undefined;
        this.newValue = '';
        this.previousValue = '';
        this.symbols = {
            add: '+',
            divide: '/',
            multiply: '*',
            substract: '-'
        }
    }

    delete() {
        this.newValue = this.newValue.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll() {
        this.newValue = '';
        this.previousValue = '';
        this.operationType = '';
        this.printValues();
    }

    compute(type) {
        this.operationType !== 'result' && this.calculator();
        this.operationType = type;
        this.previousValue = this.newValue || this.previousValue;
        this.newValue = '';
        this.printValues();
    }

    addNumber(number){
        if(number === '.' && this.newValue.includes('.')) return
        this.newValue = this.newValue.toString() + number.toString();
        this.printValues();
    }

    printValues(){
        this.displayNewValue.textContent = this.newValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.symbols[this.operationType] || ''}`;
    }

    calculator() {
        const previousValue = parseFloat(this.previousValue);
        const newValue = parseFloat(this.newValue);

        if( isNaN(newValue) || isNaN(previousValue) ) return
        this.newValue = this.calculate[this.operationType](previousValue, newValue);
    }
}