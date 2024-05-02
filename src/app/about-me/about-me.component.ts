import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { MarkdownModule } from 'ngx-markdown';
import { Subject } from 'rxjs';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { AUDIO_STACK } from '../data/audio-stack';
import { WEB_DEV_STACK } from '../data/web-dev-stack';
import { IStackInfo } from '../interfaces/navigation-item.model';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    AccordionComponent,
    CommonModule,
    MarkdownModule,
    FontAwesomeModule,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  protected webDevStackInfos: IStackInfo[] = WEB_DEV_STACK;
  protected audioStackInfos: IStackInfo[] = AUDIO_STACK;
  protected toggleIcon = faChevronUp;
  protected closeAccordions$ = new Subject<void>();
  protected shouldShowIcon = false;

  public toggleAccordions(): void {
    console.log('toggle');
    this.shouldShowIcon = false;
    this.closeAccordions$.next();
  }

  public changeIcon(isAccordionOpen: boolean): void {
    this.shouldShowIcon = isAccordionOpen;
  }
}
