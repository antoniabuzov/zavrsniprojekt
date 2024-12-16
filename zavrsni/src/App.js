import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "./Components/SignupForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={LoginForm} />
          <Route path="/signup" Component={SignupForm} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
