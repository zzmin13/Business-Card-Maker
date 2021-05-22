import { BrowserRouter, Route } from "react-router-dom";
import "./service/firebaseStart";
import "./app.css";
import Home from "./routes/home/home";
import Maker from "./routes/maker/maker";

function App({ database, authService, FileInput }) {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
