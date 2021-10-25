import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import ContactUs from './components/ContactUs';
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <Header />
      <NavigationBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path='/ContactUs'>
            <ContactUs />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
