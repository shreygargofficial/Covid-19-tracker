import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect

} from "react-router-dom";


import CovidNormal from '../component/CovidNormal'
import React,{useEffect} from 'react'
function Index() {
    let weight=""
    useEffect(()=>{
        let ctx=weight;
        console.log(ctx);
    })
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={CovidNormal}  />
                    <Route path="/*" render={()=><Redirect to="/"/>}/>
                </Switch>
            </Router>
            <canvas className="chart" ref={ref=>weight=ref}>

        </canvas>
        </React.Fragment>
    )
}
export default Index;
