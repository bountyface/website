import { Component } from '@angular/core';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { WEB_DEV_STACK } from '../data/web-dev-stack';
import { IStackInfo } from '../interfaces/navigation-item.model';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  protected stackInfos: IStackInfo[] = WEB_DEV_STACK;
}
