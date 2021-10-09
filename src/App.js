import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import Playlists from './pages/playlists/playlists';
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
    </div>
  );
}

export default App;
