import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private oidcSecurityService: OidcSecurityService) {
    if (window.location.href.indexOf('mobile') !== -1) {
      const removeAdmin = window.location.href.replace('mobile', 'admin');
      window.location.replace(removeAdmin);
    }
  }
  ngOnInit(): void {
    const path = window.location.href.replace(window.location.origin, '');
    if (!localStorage.getItem('redirectUrl')) {
      localStorage.setItem('redirectUrl', path);
    }

    this.oidcSecurityService.checkAuth().subscribe((x) => {
      if (!x.isAuthenticated) {
        // this.oidcSecurityService.authorize();
      }
    });
  }
}
