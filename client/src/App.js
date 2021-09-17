import { BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './main/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/TopNav';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Login exact path="/login" component={Login}/>
        <Register exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
