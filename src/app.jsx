import { BrowserRouter, Route } from "react-router-dom";
import "./service/firebaseStart";
import "./app.css";
import Home from "./routes/home/home";
import Main from "./components/main/main";

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
        path={"/app"}
        exact={true}
        render={(props) => <Main authService={authService} {...props} />}
      />
    </BrowserRouter>
  );
}

export default App;
