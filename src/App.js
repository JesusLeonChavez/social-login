import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import { Post } from "./pages/post/Post";

import "./app.css";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      <Post />
    </div>
  );
}

export default App;
