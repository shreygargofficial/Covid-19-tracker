
import React from 'react';
import Spinner from '../SpecialComponent/spinner'
import Card from './Card'
import Service from '../Services/index'
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Chart from 'chart.js'



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class CovidNormal extends React.Component {

  state = {
    countries: "",
    all: "",
    selectedLocation: "WorldWide",
    open: false,
    error: "",
  }




  //did mount
  componentDidMount() {

    //Initialise Service
    let serv = new Service();
    //Graph Service
    serv.graph()
      .then(data => {
        let dataForGraph = [];
        let label = []
        for (let dateWiseData in data.data.cases) {
          dataForGraph.push(data.data.cases[dateWiseData])
          label.push(dateWiseData)
        }

        let ctx = this.weight;
        if (ctx) {
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: label,
              datasets: [{
                label: 'Cases',
                data: dataForGraph,
                backgroundColor: 'rgba(0,0,0, 0.2)',
                borderColor: 'rgba(0,0,2, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0,0,0,1)'
              }
              ]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: false
                  }
                }]
              }
            }
          });
        }

      })
      .catch(error => {
        if (error.response) {
          this.setState({ error: error.response.data.message, open: true })
        }
        else {
          this.setState({ error: error.message, open: true })
        }
      })



    //Bringing All counties statistics Service
    serv.countryParam("countries")
      .then(success => {
        let temp = {}
        for (var i = 0; i < success.data.length; i++) {
          for (var j = 0; j < success.data.length - 1; j++) {
            if (success.data[j].cases < success.data[j + 1].cases) {
              temp = success.data[j];
              success.data[j] = success.data[j + 1]
              success.data[j + 1] = temp;
            }
          }
        }

        this.setState({ countries: success.data })
      })
      .catch(error => {
        if (error.response) {
          this.setState({ error: error.response.data.message, open: true })
        }
        else {
          this.setState({ error: error.message, open: true })
        }
      });


    //Bringing World Wide Data Service Call
    serv.countryParam("all")
      .then(success => this.setState({ all: success.data }))
      .catch(error => {
        if (error.response) {
          this.setState({ error: error.response.data.message, open: true })
        }
        else {
          this.setState({ error: error.message, open: true })
        }
      });


  }

  //did mount end




  //select option change
  handleChange = (e) => {

    let countryName = e.target.value;
    this.setState({ selectedLocation: countryName })
    let serv = new Service();
    let param = (countryName === "WorldWide") ? "all" : "countries/" + countryName
    serv.countryParam(param)
      .then(success => {
        this.setState({ all: success.data })
      })
      .catch(error => {
        if (error.response) {
          this.setState({ error: error.response.data.message, open: true })
        }
        else {
          this.setState({ error: error.message, open: true })
        }
      });



  }
  //select option send close





  //snackbar exit button
  handleClose = () => {

    this.setState({ open: false })
  }
  //snackbar close


  //render
  render() {
    //console.log("render");
    return (

      <div className="container-fluid mt-3">
        <div className="row justify-content-between">
          <div className="col-md-8">
            <div className="row">
             
              <h2 className="col-md-8">COVID-19 TRACKER</h2>
              
            
              <form className="form-group offset-md-1 col-md-3 ">
                <Select
                  className="select ml-3"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.selectedLocation}
                  onChange={this.handleChange}
                >
                  <MenuItem value={"WorldWide"}>WorldWide</MenuItem>
                  {this.state.countries && this.state.countries.map((ele, key) => {
                    return (<MenuItem key={key} value={ele.countryInfo.iso2}>{ele.country}</MenuItem>)
                  })}
                </Select>
              </form>
            </div>
            <br />
            <div className="World-content">
              {this.state.all && (
                <React.Fragment>
                  <Card tag={"Coronovirus Cases"} today={this.state.all.todayCases} total={this.state.all.cases} />
                  <Card tag={"Recovered"} today={this.state.all.todayRecovered} total={this.state.all.recovered} />
                  <Card tag={"Deaths"} today={this.state.all.todayDeaths} total={this.state.all.deaths} />
                </React.Fragment>)}

            </div>
          </div>
          <div className="col-md-4">
            <Paper className="content">
              <h3>Live Cases by Country</h3>
              <br />
              <div className="table-container table-responsive">
                <table className="table table-sm">
                  <thead className="">
                  </thead>
                  <tbody >
                    {this.state.countries && this.state.countries.map((elements, key) => {
                      return (
                        <tr key={key} >
                          <td>{elements.country}</td>
                          <td>{elements.cases}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <canvas className="chart" ref={ref => this.weight = ref}></canvas>
            </Paper>
          </div>

        </div>

        <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity="error">
            {this.state.error}
          </Alert>
        </Snackbar>
      </div>

    );
  }
}


export default CovidNormal;

