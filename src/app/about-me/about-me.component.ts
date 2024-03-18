import { Component } from '@angular/core';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { STACK_INFO } from '../data/data';
import { IStackInfo } from '../interfaces/navigation-item.model';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  protected stackInfos: IStackInfo[] = STACK_INFO;
}
