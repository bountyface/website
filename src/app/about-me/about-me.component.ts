import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { AUDIO_STACK } from '../data/audio-stack';
import { WEB_DEV_STACK } from '../data/web-dev-stack';
import { IStackInfo } from '../interfaces/navigation-item.model';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [AccordionComponent, MarkdownModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  protected webDevStackInfos: IStackInfo[] = WEB_DEV_STACK;
  protected audioStackInfos: IStackInfo[] = AUDIO_STACK;
}
