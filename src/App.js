import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComponent from './routes/Home';

const App = (props) => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomeComponent {...props} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
