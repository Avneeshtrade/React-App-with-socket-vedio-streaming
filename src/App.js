import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import styles from './App.module.css';
import Loader from './component/children/Loader';
import Logout from './component/Logout';
import { routes } from './routes';
import AppRoutes from './routes/AppRoutes';
import { useAuthState } from './store';
// const PageNotFound = React.lazy(()=>import('./component/PageNotFound'));

const App =()=> {
    const store = useAuthState();
    const defaultRoutes = routes && routes.filter(e=>store.token?e.isPrivate:!e.isPrivate);
    return (
      <Router>
        <div className={styles.App}>
          <ul className={styles.AppHeader}>
            {
              defaultRoutes && defaultRoutes.filter(e=>!e.notshow).map((r,i)=>{
                  return <li key={i}><Link to={r.path} >{r.title}</Link></li>
              })
            }
            {
              store.token?
              <li style={{
                position:'relative',
  
              }}><Logout /></li>
              :null
            }
            
          </ul>
      <React.Suspense fallback={Loader}>
        <Switch>
          {
            defaultRoutes && defaultRoutes.length > 0 &&
            defaultRoutes.map(route=><AppRoutes 
                key={route.key}
                path={route.path}
                exact={route.exact}
                name={route.title}
                component={route.component}
                isPrivate={route.isPrivate}
                />
            )
          }
         
          <Route
            path="*"
            name="Page Not Found"
            render={(props) => (store.token)?<Redirect to="/home" /> :<Redirect to="/login" />}
          />
         
        </Switch>
      </React.Suspense>
      </div>
    </Router>
    );
}

export default App;

