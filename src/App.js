import NavBar from "./components/navBar/NavBar";
// import { Home } from "./pages/home/Home";
// import { Post } from "./pages/post/Post";
import { Login } from "./pages/login/Login";

import "./app.css";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      {/* <Post /> */}
      <Login />
    </div>
  );
}

export default App;
