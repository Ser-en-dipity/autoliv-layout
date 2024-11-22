import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://auth.sz-icnc.com',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: environment.production ? 'erp-spa' : 'erp-spa-dev',
        scope: 'openid profile offline_access erp', // 'openid profile offline_access ' + your scopes
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 18,
        logLevel: environment.production ? LogLevel.Error : LogLevel.Debug,
        secureRoutes: ['/api', '/graphql', '/scanner'],
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
