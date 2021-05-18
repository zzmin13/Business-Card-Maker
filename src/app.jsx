import { BrowserRouter, Route } from "react-router-dom";
import "./service/firebaseStart";
import "./app.css";
import Home from "./routes/home/home";
import Maker from "./components/maker/maker";

function App({ authService }) {
  return (
    <BrowserRouter>
      <Route
        path={["/", "/home"]}
        exact={true}
        render={(props) => (
          <>
            <Home authService={authService} {...props} />
          </>
        )}
      />
      <Route
        path={"/maker"}
        exact={true}
        render={(props) => <Maker authService={authService} {...props} />}
      />
    </BrowserRouter>
  );
}

export default App;
