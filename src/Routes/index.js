import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect

} from "react-router-dom";


import CovidNormal from '../component/CovidNormal'
import React from 'react'
function Index() {
    
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={CovidNormal}  />
                    <Route path="/*" render={()=><Redirect to="/"/>}/>
                </Switch>
            </Router>
        </React.Fragment>
    )
}
export default Index;
