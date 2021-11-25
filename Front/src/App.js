// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Posts from './components/posts/Posts';
import PostForm from './components/postForm/PostForm';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/postform' element={<PostForm/>}/>
      </Routes>
    </div>
  );
}

export default App;