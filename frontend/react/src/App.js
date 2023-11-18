import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import HomeScreen from "./pages/HomeScreen";
import CartScreen from "./pages/CartScreen";
import UserActivateScreen from "./pages/UserActivateScreen";
import SuccessVerificationPage from "./pages/SuccessVerificationPage";
import SuccessRegistration from "./pages/SuccessRegistration";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route
              path="/users/activate-account"
              element={<UserActivateScreen />}
            />
            <Route
              path="/SuccessVerificationPage"
              element={<SuccessVerificationPage />}
            />

            <Route
              path="/SuccessRegistration"
              element={<SuccessRegistration />}
            />
            <Route path="/about" />
            <Route path="/contact" />
          </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;

{
  /* <div className="App">
<Router>
{currentForm === "login" ? (
  <LoginScreen onFormSwitch={toggleForm} />
) : (
  <SignupScreen onFormSwitch={toggleForm} />
)}

<Routes>
<Route path="/home" element={<HomeScreen/>} />
<Route path="/cart" element={<CartScreen/>} />
</Routes>

</Router>
</div> */
}

{
  /* <div className="App">
      <Router>
        <Routes>
          {currentForm === "login" ? (
            <Route
              path="/login"
              element={<LoginScreen onFormSwitch={toggleForm} />}
            />
          ) : (
            <Route
              path="/signup"
              element={<SignupScreen onFormSwitch={toggleForm} />}
            />
          )}

          <Route path="/home" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </Router>
    </div> */
}
