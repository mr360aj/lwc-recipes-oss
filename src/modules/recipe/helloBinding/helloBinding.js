import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    greeting = 'AJ';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
