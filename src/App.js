import './App.css';
import ImageConvolution from './Home';
import Home from './Home';
import Video from './Video';
import VideoPlayer from './Video';
import AdminList from './component/AdminList';
import FormComponent from './component/Form';
import Dashboard from './component/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImageKonva from './component/konva/imagekonva';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/form-admin' Component={FormComponent} />
        <Route path='/admin-list' Component={AdminList} />
        <Route path='/video-play' Component={Video} />
        <Route path='/image-canvas' Component={ImageKonva} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
