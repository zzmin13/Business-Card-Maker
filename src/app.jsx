import { BrowserRouter, Route } from "react-router-dom";
import "./service/firebaseStart";
import "./app.css";
import Home from "./routes/home/home";

function App({ FireBase }) {
  return (
    <BrowserRouter>
      <Route
        path={["/", "/home"]}
        exact={true}
        render={(props) => (
          <>
            <Home FireBase={FireBase} {...props} />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
