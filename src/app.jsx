import { HashRouter, Route } from "react-router-dom";
import "./service/firebaseStart";
import "./app.css";
import Home from "./routes/home/home";
import Maker from "./routes/maker/maker";
import Join from "./routes/join/join";

function App({ database, authService, FileInput }) {
  return (
    <HashRouter>
      <Route
        path={["/", "/home"]}
        exact={true}
        render={(props) => (
          <>
            <Home authService={authService} database={database} {...props} />
          </>
        )}
      />
      <Route
        path={"/maker"}
        exact={true}
        render={(props) => (
          <Maker
            FileInput={FileInput}
            authService={authService}
            database={database}
            {...props}
          />
        )}
      />
      <Route
        path={"/join"}
        exact={true}
        render={(props) => (
          <Join authService={authService} database={database} {...props} />
        )}
      />
    </HashRouter>
  );
}

export default App;
