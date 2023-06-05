import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import convertTemp from '@salesforce/apex/TemperatureConverter.convertCtoF';

export default class TemperatureConverter extends LightningElement {
    @track convertedTemperature;
    @track celsiusTemperature;

    showToast(title, message, variant) { 
        const event = new ShowToastEvent({ 
        title: title, message: message, variant: variant });
        this.dispatchEvent(event); 
    }

    handleInput(event){
        this.celsiusTemperature = event.detail.value;
    }
    handleReset(){
        this.celsiusTemperature = null;
        this.convertedTemperature = null;
    }
    handleConvert(){
        const celsius = parseFloat(this.celsiusTemperature);
        if(!isNaN(celsius)){
            convertTemp({celsiusTemp: celsius})
            .then(result => {
                if(result != null){
                    this.convertedTemperature = result;
                    this.showToast('Success','Temperature converted from Celsius to Fahrenheit successfully.', 'success');
                }
                else{
                    this.convertedTemperature = undefined;
                    this.showToast('Error','Error in Apex.', 'error');
                }
            })
            .catch((error) => {
                this.convertedTemperature = undefined;
                console.log('Error==>',error);
                this.showToast('Error','Some Error Occured. Please contact Admin.', 'error');
            });
        }
    }
}