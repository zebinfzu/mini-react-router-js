import React from "react";
export default function createRoutesFromChildren(children) {
  const routes = [];
  React.Children.forEach(children, (child) => {
    const route = {
      path: child.props.path,
      element: child.props.element,
    };
    routes.push(route);
  });
  return routes;
}
