import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { routes } from './routes';
// import { getToken } from './utilities/getToken';

const App =()=> {
  // const [state,setState] = useState({isLoggedIn:false})
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            {
              routes.guest.filter(e=>!e.notshow).map((r,i)=>{
                  return <li key={i}><Link to={r.path} >{r.title}</Link></li>
              })
            }
          </ul>

          <Switch>
            {

              routes.guest.map(r => (
                <Route key={r.key} exact={r.exact} path={r.path} component={(props)=><r.component {...props} />}></Route>
              ))
            }
            <Route>
              <Redirect to='/login' />
            </Route>
          </Switch>

        </div>
      </Router>
    );
}

export default App;

