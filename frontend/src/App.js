import "./App.css";
// import {ApolloClient, HttpLink, InMemoryCache }  from  "@apollo/client"

// import {ApolloProvider}  from  "@apollo/client/react"
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import Header from "./componets/Header";
import Clients from "./componets/Clients";
import AddClientModal from "./componets/AddClientModal";

// const client  = new ApolloClient ({
//   uri: "http://localhost:9000/graphql",
//   cache:new InMemoryCache()
// })

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:9000/graphql",
  }),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
         <Header />
        <div className="container">
         
           <AddClientModal/>
             <Clients />
          
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
