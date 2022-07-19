import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track showFirst;
    @track showSecond;

    connectedCallback() {
        this.showFirst = true;
        this.showSecond = false;
    }
    handleNavigationChange(event) {
        const componentToShow = event.detail;
        if(componentToShow === 'firstComponent') {
            this.showFirst = true;
            this.showSecond = false;
        }
        else if(componentToShow === 'secondComponent') {
            this.showSecond = true;
            this.showFirst = false;
        }
    }
}