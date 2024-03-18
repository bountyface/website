import { Component } from '@angular/core';
import { AccordionComponent } from '../components/accordion/accordion.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
