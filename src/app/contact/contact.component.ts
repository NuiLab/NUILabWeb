import { Component } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
    lat: number = 51.678418;
    lng: number = 7.809007;
    
    constructor() { }
}