import React from 'react';
import Spinner from '../SpecialComponent/spinner'
import Card from './Card'
import Service from '../Services/index'
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {
  Redirect
} from "react-router-dom";
import { Line } from "react-chartjs-2";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class CovidNormal extends React.Component {

  state = {
    countries: "",
    all: "",
    selectedLocation: "WorldWide",
    open: false,
    error: ""
  }


  //did mount

  componentDidMount() {

    let ctx = this.weight;
    console.log(ctx);

    let serv = new Service();
    serv.countryParam("")
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
        if(error.response)
          {
            this.setState({error:error.response.data.message,open:true})
          }
        else{
          this.setState({error:error.message,open:true})
        }
      });

    serv.all()
      .then(success => this.setState({ all: success.data }))
      .catch(error => console.log(error));


  }

  //did mount end

  //select option change
  handleChange = (e) => {
    let countryName = e.target.value;
    this.setState({ selectedLocation: countryName })

    let serv = new Service();
    if (countryName === "WorldWide") {
      serv.all()
        .then(success => {
          this.setState({ all: success.data })
        })
        .catch(error => console.log(error));
    }
    else {
      serv.countryParam(countryName)
        .then(success => {
          this.setState({ all: success.data })
        })
        .catch(error => console.log(error));

    }
  }
  //select option send close

  //snackbar exit button
  handleClose = () => {

    this.setState({ open: false })
  }
  //snackbar close


  //render
  render() {
    return (

      <div className="container mt-3">
        {!this.state.countries ? <Spinner></Spinner> : (
          <div className="row justify-content-between">
            <div className="col-md-8">
              <div className="row">
                <h2>COVID-19 TRACKER</h2>
                <form className="form-group">
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

                {/* //graph */}
                <canvas className="chart" ref={ref => this.weight = ref}>

                </canvas>

                {/* graph end */}
              </Paper>
            </div>

          </div>
        )}
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
