import React, { useContext } from "react";
import { Redirect, Route } from "react-router";

export const WrapperContext = React.createContext({
  user: null,
  token: null,
  isLoggedIn: false,
  logout: () => {},
  search: null,
  removeSearch: () => {},
});

export const WrapperRoute = ({ render, ...restProps }) => {
  const { isLoggedIn, user } = useContext(WrapperContext);
  return (
    <Route
      {...restProps}
      render={(props) => {
        if (isLoggedIn) {
          if (user.role) {
            return <Redirect to={`/admin/products`} />;
          } else {
            return <Redirect to={`/user/products`} />;
          }
        } else {
          return render(props);
        }
      }}
    />
  );
};

export const ProtectRoute = ({ component: Component, ...restProps }) => {
  const { isLoggedIn, user } = useContext(WrapperContext);
  return (
    <Route
      {...restProps}
      render={(props) => {
        if (!isLoggedIn) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} user={user} />;
        }
      }}
    />
  );
};

export function AdminRoute({ component: Component, ...rest }) {
  const { isLoggedIn, user } = useContext(WrapperContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && user.role ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export function UserRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useContext(WrapperContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
