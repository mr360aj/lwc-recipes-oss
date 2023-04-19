import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    greeting = 'Aj';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
