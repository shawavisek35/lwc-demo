import { LightningElement } from 'lwc';

export default class MainComponent extends LightningElement {
    locationRef;
    renderedCallback() {
        if(location.pathname === 'blank') {
            this.locationRef = '/';
        }
        else {
            this.locationRef = location.pathname;
        }
        this.setComponent();
        console.log("Hwllo here: ", this.locationRef);
    }

    setComponent() {
        console.log('Inside setComponent');
        if(this.locationRef === '/fComponent') {
            const switchSection = this.template.querySelector('#switch-app');            
            switchSection.appendChild('c-f-component');
        }
        else if(this.locationRef === '/sComponent') {
            const switchSection = this.template.querySelector('#switch-app');            
            switchSection.appendChild('c-s-component');   
        }
        else {
            const switchSection = this.template.querySelector('#switch-app');
            console.log(switchSection);
            //switchSection.appendChild('<p>Nothing added to the dom</p>');
        }
    }
}