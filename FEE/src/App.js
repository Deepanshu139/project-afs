import logo from "./logo.svg";
import "./App.css";
import Posts from './pages/Posts';
import Home from './pages/Home';
import Login from './pages/Login';
import Counter from './pages/Counter';
import ViewPosts from './pages/ViewPosts';
import Registeration from './pages/Registeration';
import CreatePost from './pages/CreatePost';
import Video from "./pages/Video";
import { Router, Route,Routes} from 'react-router-dom';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/:postId" element={<Posts />} />
        <Route path="/posts" element={<ViewPosts />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/showVideo" element={<Video />} />
        {/* Default Route for Page Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    
  );
}

export default App;
