import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';

import { setContext } from '@apollo/client/link/context';

const uri = '/graphql'; // <-- add the URL of the GraphQL server here

export function createApollo(
  httpLink: HttpLink,
  oidcSecurityService: OidcSecurityService
): ApolloClientOptions<any> {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'application/json',
    },
  }));
  const auth = setContext((operation, context) => {
    const token = oidcSecurityService.getAccessToken();

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
  });
  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return { link, cache };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, OidcSecurityService],
    },
  ],
})
export class GraphQLModule {}
