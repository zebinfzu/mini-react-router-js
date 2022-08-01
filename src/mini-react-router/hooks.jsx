import React from "react";
import { NavigationContext } from "./Context";

export function useRoutes(routes) {
  const pathname = window.location.pathname;
  return routes.map((route) => {
    // const match = pathname === route.path || pathname === "/" + route.path;
    const match = pathname.startsWith(route.path);
    return match ? route.element : null;
  });
}

export function useNavigate() {
  console.log(React.useContext(NavigationContext));
  const { navigator } = React.useContext(NavigationContext);
  return navigator.push;
}
