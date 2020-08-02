import React from 'react';
import './App.css';
import RouterIndex from './Routes/index'
import Chart from 'chart.js'
class App extends React.Component {

componentDidMount(){
  let ctx=this.weight;
  console.log(ctx);
}
  render() {
    return (
      <React.Fragment>
        <RouterIndex />
        <canvas className="chart" ref={ref=>this.weight=ref}>

        </canvas>
      </React.Fragment>

    );
  }
}

export default App;
