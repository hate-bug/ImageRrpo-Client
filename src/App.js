import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UploadImage from "./components/Image/UploadImage";
import { Provider } from "react-redux";
import store from "./store";
import landingpage from "./components/Layout/landingpage";
import register from "./components/UserManagement/register";
import login from "./components/UserManagement/login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          {
            //public routes
          }
          <Route exact path="/" component={landingpage} />
          <Route exact path="/register" component={register} />
          <Route exact path="/login" component={login} />

          {
            //private routes
          }
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addimage" component={UploadImage} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
