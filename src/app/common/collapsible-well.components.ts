import {Component, Input} from "@angular/core";

@Component({
    selector: 'collapse-well',
    template: `
        <div (click)="toggleContent()" class="well pointable">
            <h4 class="well-title">{{title}}</h4>
            <ng-content *ngIf="visible"></ng-content>
        </div>
    `,
})

export class CollapsibleWellComponents {
    @Input() title: string = '';
    visible: boolean = false;

    toggleContent() {
        this.visible = !this.visible;
    }
}