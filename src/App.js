import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AllPosts from "./pages/home/AllPosts";
import Create from "./pages/home/Create";
import Edit from "./pages/home/Edit";
import PostDetail from "./pages/home/PostDetail";
import Posts from "./pages/home/Posts";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ProtectedRoute from "./navigation/ProtectedRoutes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Routes>
            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Home */}
            <Route path="/" component={AllPosts} />

            <Route exact path="/create" element={<ProtectedRoute />}>
              <Route exact path="/create" element={<Create />} />
            </Route>

            <Route exact path="/edit" element={<ProtectedRoute />}>
              <Route exact path="/edit" element={<Edit />} />
            </Route>

            <Route path="/post" component={PostDetail} />

            <Route exact path="/post" element={<ProtectedRoute />}>
              <Route exact path="/post" element={<Posts />} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
