import { LightningElement } from 'lwc';

export default class MainComponent extends LightningElement {
    handleClick(event) {
        const customEvent = new CustomEvent('changenavigation', {
            detail: event.target.name
        })

        this.dispatchEvent(customEvent);
    }
}