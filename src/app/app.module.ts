import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { GraphQLModule } from './graphql.module';
import { SharedModule } from './shared/shared.module';
import { AdminComponent } from './layouts/admin/admin.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AuthConfigModule } from './auth/auth-config.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BASE_PATH as OPENAPI_BASE_PATH } from 'src/openapi';
import { AuthInterceptor } from 'angular-auth-oidc-client';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent, AdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    GraphQLModule,
    SharedModule,
    ReactiveFormsModule,
    AuthConfigModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: OPENAPI_BASE_PATH, useValue: '' },
    { provide: LOCALE_ID, useValue: 'zh-Hans' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
