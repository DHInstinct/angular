import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})

export class SuccessAlert implements OnInit {

    constructor() { }

    ngOnInit(): void {

    }

    message = 'WOOHOO! SUCCESS'
}