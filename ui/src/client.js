import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache(),
})

export default client