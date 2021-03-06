import * as React from "react"
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom"

type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>

const isAuthenticated = (): boolean => {
  return localStorage.getItem('token') ? true : false;
}

export const PrivateRoute: React.StatelessComponent<RouteProps> = ({ component, ...rest }) => {
  const renderFn = (Component?: RouteComponent) => (props: RouteProps) => {
    if (!Component) {
      return null
    }

    if (isAuthenticated()) {
      return <Component {...props} />
    }

    const redirectProps = {
      to: {
        pathname: '/',
        state: { from: props.location },
      },
    }

    return <Redirect {...redirectProps} />
  }

  return <Route {...rest} render={renderFn(component)} />
}
