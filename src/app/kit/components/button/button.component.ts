import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 's-button',
    templateUrl: './button.template.html',
    styleUrls: ['./button.style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuiButtonComponent {}
