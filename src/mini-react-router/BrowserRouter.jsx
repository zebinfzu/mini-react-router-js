import { createBrowserHistory } from "history";
import React from "react";
import Router from "./Router";
export default function BrowserRouter({ children }) {
  const historyRef = React.useRef();
  if (historyRef.current === undefined) {
    historyRef.current = createBrowserHistory();
  }
  const history = historyRef.current;
  const [state, setState] = React.useState({ location: history.location });
  React.useLayoutEffect(() => {
    history.listen(setState);
  }, [history]);
  return (
    <Router children={children} navigator={history} location={state.location} />
  );
}
