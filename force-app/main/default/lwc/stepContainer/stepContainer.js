import { LightningElement, track } from 'lwc';

export default class StepContainer extends LightningElement {
    @track currentStep = 'step1';
    @track stepNo = 1;
    disableNext = false;
    disablePrev = true;
    maxStep = 3;

    connectedCallback() {
        this.updateDisability();
    }

    nextStep() {
        
        this.stepNo++;
        this.currentStep = 'step'+this.stepNo;
        this.updateDisability();
    }

    prevStep() {
        
        this.stepNo--;
        this.currentStep = 'step'+this.stepNo;
        this.updateDisability();
    }

    updateDisability() {
        if(this.stepNo === 1) {
            this.disablePrev = true;
        }

        else if(this.stepNo === this.maxStep) {
            this.disableNext = true;
        }
        
        else {
            this.disableNext = false;
            this.disablePrev = false;
        }
    }
}