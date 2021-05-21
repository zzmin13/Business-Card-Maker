import { BrowserRouter, Route } from "react-router-dom";
import "./service/firebaseStart";
import "./app.css";
import Home from "./routes/home/home";
import Maker from "./routes/maker/maker";

function App({ authService, FileInput }) {
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
        render={(props) => (
          <Maker FileInput={FileInput} authService={authService} {...props} />
        )}
      />
    </BrowserRouter>
  );
}

export default App;
