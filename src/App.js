import React from "react";
import Bar from "./components/bar/Bar";
import { BrowserRouter, Route, Link, } from 'react-router-dom'
import FormikYup from './components/formik/FormikYup'
import Home from './components/formik/Home'
import { Nav, Nv } from './components/formik/Style.style'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const App = () => {
  return (
    <div>
       <BrowserRouter>
      <Nav>
        <Link to='/login' >
      <Toolbar>
          <Button color="inherit">Login</Button>
      </Toolbar>
      </Link>
      </Nav> 
      <Nv>
      <Link to='/home' >
        <Toolbar>
          <Button color="inherit">Home</Button>
      </Toolbar>
      </Link>
      </Nv>
        
      
       <Route path='/login' component={FormikYup} />
       <Route path='/home' component={Home} />
      </BrowserRouter>  
      <Bar />
    </div>
  );
};

export default App;