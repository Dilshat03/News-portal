import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import HomePage from "./componets/Homepage";
import NewsDetails from "./componets/newsdetails";
import News from "./componets/News";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import NotFound from "./componets/NotFound";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'><HomePage/></Route>
                <Route  path='/news'><News/></Route>
                <Route  path='/newsDT/:id'><NewsDetails/></Route>
                <Route  path='/signIn'><SignIn/></Route>
                <Route  path='/signUp'><SignUp/></Route>
                <Route  path='*'><NotFound/></Route>
            </Switch>
        </Router>


    );
};

export default App;

