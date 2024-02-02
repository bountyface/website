import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { INavigationItem } from './interfaces/navigation-item.model';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public navigationItems: INavigationItem[] = [
    { label: 'About me', routerLink: '/about-me' },
    { label: 'My Music', routerLink: '/my-music' },
    // { label: 'Platforms', routerLink: '/platforms' },
  ];
}
