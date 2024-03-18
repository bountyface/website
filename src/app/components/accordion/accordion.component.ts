import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          // height: '100px',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
        })
      ),
      transition('open => closed', [animate('0.1s')]),
      transition('closed => open', [animate('0.25s')]),
    ]),
  ],
})
export class AccordionComponent {
  @Input() public header = '';
  @Input() public image = '';
  isOpen = false;
  public onAccordionClick(): void {
    this.isOpen = !this.isOpen;
  }
}
