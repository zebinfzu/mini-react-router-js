import React from "react";
import { NavigationContext, RouteContext } from "./Context";
import Outlet from "./Outlet";
import { normalizePathname } from "./utils";

export function useRoutes(routes) {
  const location = useLocation();
  const { pathname } = location;
  return routes.map((route) => {
    // const match = pathname === route.path || pathname === "/" + route.path;
    const match = pathname.startsWith(route.path);
    return (
      match &&
      route.children.map(
        (child) =>
          normalizePathname(child.path) === pathname && (
            <RouteContext.Provider
              value={{ outlet: child.element }}
              children={
                route.element !== undefined ? route.element : <Outlet />
              }
            />
          )
      )
    );
  });
}

export function useNavigate() {
  const { navigator } = React.useContext(NavigationContext);
  return navigator.push;
}

export function useLocation() {
  const { location } = React.useContext(NavigationContext);
  return location;
}

export function useOutlet() {
  const { outlet } = React.useContext(RouteContext);
  return outlet;
}
