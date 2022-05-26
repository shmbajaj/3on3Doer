import { Routes, Route } from "react-router-dom";
import { Home, NotFound, Login, Signup } from "pages";
import { CheckAuth } from "./CheckAuth";

function RouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <CheckAuth>
            <Login />
          </CheckAuth>
        }
      />
      <Route
        path="/signup"
        element={
          <CheckAuth>
            <Signup />
          </CheckAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export { RouteSwitch };
