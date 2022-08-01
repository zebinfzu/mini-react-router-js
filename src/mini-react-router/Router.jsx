import React from "react";
import { NavigationContext } from "./Context";

export default function Router({ navigator, children }) {
  let navigationContext = React.useMemo(() => ({ navigator }), [navigator]);

  return (
    <NavigationContext.Provider value={navigationContext}>
      {children}
    </NavigationContext.Provider>
  );
}
