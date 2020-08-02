import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

import Country from '../component/Country'
import CovidNormal from '../component/CovidNormal'
import React from 'react'
function Index() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={CovidNormal} />
                <Route exact path="/country/:country" component={Country}/>
            </Switch>
        </Router>
    )
}
export default Index;
