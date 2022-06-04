import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route
        path="/mengapa-kita-harus-vaksinasi-covid"
        component={() => {
          console.log("test");
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
          return null;
        }}
      />
    </Router>
  );
}

export default App;
