import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'node-fetch'
import { createUploadLink }  from 'apollo-upload-client'

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    // link: new HttpLink({
    link: createUploadLink({
        // uri: 'http://localhost:1337/graphql',
        uri: 'https://redancash.herokuapp.com/graphql',
        fetch
    })
})

export default client