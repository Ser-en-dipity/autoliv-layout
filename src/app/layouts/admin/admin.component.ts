import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { MobileDetectorService } from 'src/app/shared/mobile-detector.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
})
export class AdminComponent implements OnInit {
  public onTouchScreenchecked = false;
  public showDefault = true; // default state



  constructor(
    private mobileDetector: MobileDetectorService,
    private oidcService: OidcSecurityService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // get from local storage if exists and set the onTouchScreenchecked value
    const onTouchScreen = localStorage.getItem('onTouchScreenchecked');
    if (onTouchScreen) {
      this.onTouchScreenchecked = onTouchScreen === 'true';
    }

    this.oidcService.isAuthenticated$.subscribe((x) => {
      if (x.isAuthenticated) {
        const url = localStorage.getItem('redirectUrl');
        if (url) {
          setTimeout(() => {
            this.route.navigateByUrl(url);
            localStorage.removeItem('redirectUrl');
          }, 780);
        }
      }
    });
    // this.oidcService.checkAuth()
  }

  public get isMobile(): boolean {
    return this.mobileDetector.isMobile() && window.innerWidth <= 780;
  }

  public get isPC(): boolean {
    localStorage.setItem('onTouchScreenchecked', this.onTouchScreenchecked.toString());
    return !this.onTouchScreenchecked;
  }

  public get isCollapsed(): boolean {
    const cStr = localStorage.getItem('sideBarCollapsed');
    if (cStr && cStr === 'false') {
      return false;
    }
    return true;
  }
  public onClickCollapsed(): void {
    if (this.isCollapsed) {
      localStorage.setItem('sideBarCollapsed', 'false');
    } else {
      localStorage.setItem('sideBarCollapsed', 'true');
    }
  }

  public onClickLogout():void {
    this.oidcService.logoff()
    .subscribe((res) => console.log(res));
  }

  public toggleDefault(state: boolean) {
    this.showDefault = state;
  } 

  public get isTSCollapsed(): boolean {
    return false;
  }
}
