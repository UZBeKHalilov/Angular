import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, MatIconModule],
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})

export class NavigatorComponent {
  readonly navigationModules: NavigationModule[];
  selectedModule: NavigationModule | null;
  selectedNav: NavItem | null = null;
  isMobileOpen = false;


  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedNav(event.urlAfterRedirects);
      }
    });

    this.navigationModules = [
      {
        id: '1-9-lessons',
        label: '1 - 9 Lessons',
        icon: 'menu_book',
        navItems: [
          { link: 'components', label: '1,2 - Angular Components', icon: 'widgets' },
          { link: '3', label: '3-Templates and Databinding', icon: 'code' },
          { link: '4', label: '4-Services and Dependency Injection', icon: 'build' },
          { link: '5', label: '5-Forms in Angular', icon: 'assignment' },
          { link: '6', label: '6-Routing and Navigation', icon: 'alt_route' },
          { link: '7', label: '7-HTTP Client and APIs', icon: 'http' },
          { link: '8', label: '8-Pipes', icon: 'filter_alt' },
          { link: '9', label: '9-Directives', icon: 'settings_input_component' }
        ]
      },
      {
        id: 'state-management',
        label: 'State Management',
        icon: 'sync_alt',
        navItems: [
          { link: 'Counter', label: 'Counter', icon: 'exposure_plus_1' },
          { link: 'State', label: 'Todos', icon: 'checklist' }
        ]
      },
      {
        id: 'roadmap',
        label: 'Roadmap',
        icon: 'map',
        navItems: [
          { link: 'overview', label: 'Overview', icon: 'info' }
        ]
      }
    ];

    this.selectedModule = this.navigationModules[0] || null;
  }

  selectModule(navigationModule: NavigationModule): void {
    this.selectedModule = navigationModule;
  }

  toggleMobileMenu(): void {
    this.isMobileOpen = !this.isMobileOpen;
  }

  closeMobileMenu(): void {
    this.isMobileOpen = false;
  }

  updateSelectedNav(currentUrl: string): void {
    for (const module of this.navigationModules) {
      for (const navItem of module.navItems) {
        if (navItem.link && currentUrl.includes(navItem.link)) {
          this.selectedNav = navItem;
          return;
        }
      }
    }
    this.selectedNav = null;
  }
}

interface NavigationModule {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
  readonly navItems: readonly NavItem[];
}

interface NavItem {
  readonly link: string;
  readonly label: string;
  readonly icon: string;
}