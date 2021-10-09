import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/home';
import Playlists from './pages/playlists/playlists';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/playlists" component={Playlists} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
