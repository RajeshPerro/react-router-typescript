import * as React from 'react'
import { Route, Switch } from 'react-router'

import About from '../components/About';
import Company from '../components/Company';
import Contact from '../components/Contact';
import Home from '../components/Home';
import NavBar from '../components/Navbar';
import NoMatch from '../components/NoMatch';



const routes = (
    <div>
       
            <NavBar />
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/company" component={Company} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
            </Switch>
        
    </div>
)

export default routes