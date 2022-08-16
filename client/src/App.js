import BookList from "./Components/BookList";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import AddBook from "./Components/AddBook";

const client = new ApolloClient({
    url: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
          Client Reading List 
          <BookList />
          <AddBook />
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
