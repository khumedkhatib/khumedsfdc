import { LightningElement,track } from 'lwc';

export default class BasicCalculator extends LightningElement {
    @track result;
    num1;
    num2;
    InputChangeHandler(event){
        const name = event.target.name;
        if(name === 'value1'){
            this.num1 = event.target.value;
        }else if(name === 'value2'){
            this.num2 = event.target.value;
        }
    }
    handleClick(event){
        debugger;
        const mathoperator = event.target.label;
        const numb1 = parseInt(this.num1, 10);
        const numb2 = parseInt(this.num2, 10);
        var resulttemp = 0;
        if(mathoperator === 'Addition'){
            resulttemp = numb1 + numb2;
        }else if(mathoperator === 'Substract'){
            resulttemp = numb1 - numb2;
        }else if(mathoperator === 'Multiply'){
            resulttemp = numb1 * numb2;;
        }else if(mathoperator === 'Divide'){
            resulttemp = numb1 / numb2;;
        }
        
        this.result = resulttemp;
    }
}