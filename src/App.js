import "./App.css";
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Header from "./components/Header";
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
        <Route path="/" exact component={ProductListing}/>
        <Route path="/product/:productId" exact component={ProductDetail}/>
        <Route>404 Not Found </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
