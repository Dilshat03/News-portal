import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import HomePage from "./componets/Homepage";
import NewsDetails from "./componets/Newsdetails";
import News from "./componets/News";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import NotFound from "./componets/NotFound";
import CallBAck from "./componets/CallBack";

const App = () => {
    return (
        <Router>
           <Switch>
               <Route exact path='/'><HomePage/></Route>
               <Route exact path='/news'><News/></Route>
               <Route path='/news/:id'><NewsDetails/></Route>
               <Route path='/signIn'><SignIn/></Route>
               <Route path='/signUp'><SignUp/></Route>
               <Route path='/callBack'><CallBAck/></Route>
               <Route path='*'><NotFound/></Route>
           </Switch>

        </Router>


    );
};

export default App;

