import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import Login from "./loginAndRegister/Login";
import Register from "./loginAndRegister/Register";
import ForgotPassword from "./loginAndRegister/ForgotPassword";
import ResetPassword from "./loginAndRegister/ResetPassword";
import AddProduct from "./component/AddProduct";
import { Container } from "react-bootstrap";
import {
  ProtectRoute,
  WrapperContext,
  WrapperRoute,
  UserRoute,
  AdminRoute,
} from "./loginAndRegister/WrapperRoute";
import HeaderHome from "./component/HeaderHome";
import BusinessAccount from "./component/BusinessAccount";
import UserAccount from "./component/UserAccount";
import { useState } from "react";
import Confirmation from "./component/Confirmation";
import Footer from "./component/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState(null);
  const removeSearch = () => {
    setSearch(null);
  };
  const handleSearch = (data) => {
    setSearch(data);
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("auth_token");
  };

  const handleLogin = (usr, token) => {
    setUser(usr);
    setToken(token);
    setIsLoggedIn(true);
    localStorage.setItem("auth_token", token);
  };
  return (
    <Router>
      <WrapperContext.Provider
        value={{
          user,
          token,
          isLoggedIn,
          logout,
          search,
          removeSearch,
        }}
      >
        <div className="app">
          <Container fluid>
            <Switch>
              <Route
                path="/register/confirmation/:token"
                component={Confirmation}
              />
              <UserRoute exact path="/checkout" component={Checkout} />
              {/* <Route exact path="/" render={() => <Redirect to="/login" />} /> */}
              <WrapperRoute
                path="/login"
                render={(props) => (
                  <Login {...props} handleLogin={handleLogin} />
                )}
              />
              <ProtectRoute
                path="/admin/products"
                component={BusinessAccount}
              />
              <AdminRoute path="/AddProduct" component={AddProduct} />
              <ProtectRoute path="/user/products" component={UserAccount} />
              <Route exact path="/register" component={Register} />
              <Route path="/reset-password/:token" component={ResetPassword} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/">
                {/* <button onClick={showUser}>show user</button> */}
                <HeaderHome />
                <Home />
                <Footer />
              </Route>
            </Switch>
          </Container>
        </div>
      </WrapperContext.Provider>
    </Router>
  );
}

export default App;
