import { BrowserRouter, Route } from "react-router-dom";
import "./service/firebaseStart";
import "./app.css";
import Home from "./routes/home/home";
import Maker from "./routes/maker/maker";

function App({ authService, uploadCloudinary }) {
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
          <Maker
            authService={authService}
            uploadCloudinary={uploadCloudinary}
            {...props}
          />
        )}
      />
    </BrowserRouter>
  );
}

export default App;
