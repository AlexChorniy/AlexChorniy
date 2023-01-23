import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick() ">
            <div class="well votingWidget">
                <div class="votingButton">
                    <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `
})

export class UpvoteComponent {
    @Input() count: number = 0;
    @Output() vote = new EventEmitter<MouseEvent>();
    iconColor: string = 'white';

    @Input() set voted(val: boolean) {
        this.iconColor = val ? 'red' : 'white';
    };

    onClick() {
        this.vote.emit();
    }
}


