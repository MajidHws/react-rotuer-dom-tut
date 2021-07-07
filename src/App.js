import {useState} from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Post } from './pages/Post';
import Profile from './pages/Profile';

function App() {

  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)}>{login ? 'logout' : 'login'}</button>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile">
          <Profile login={login} />
          {/* {login ? <Profile /> : <Redirect to="/" /> } */}
        </Route>
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
