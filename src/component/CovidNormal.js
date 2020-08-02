import React from 'react';
import Spinner from '../SpecialComponent/spinner'
import Card from './Card'
import Service from '../Services/index'
import {
  Redirect
} from "react-router-dom";
import { Line } from "react-chartjs-2";

class CovidNormal extends React.Component {

  state = {
    countries: "",
    click: false,
    clickableView: "",
    all: ""

  }
  

  componentDidMount() {



    let serv = new Service();
    serv.country()
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
      .catch(error => console.log(error));

    serv.all()
      .then(success => this.setState({ all: success.data }))
      .catch(error => console.log(error));


  }

  changeLink = (elements) => {

    this.setState({ click: true, clickableView: elements.country })
  }

  render() {
    return (

      <div className="container mt-3">
        {this.state.click && <Redirect push to={"/country/" + this.state.clickableView} />}
        {!this.state.countries ? <Spinner></Spinner> : (
          <div className="row justify-content-between">
            <div className="col-md-8">
              <h2>COVID-19 TRACKER</h2>
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
              <div className="content">
                <h3>Live Cases by Country</h3>
                <br />
                <div className="table-container table-responsive">
                  <table className="table table-sm">
                    <thead className="">
                    </thead>
                    <tbody >
                      {this.state.countries && this.state.countries.map((elements, key) => {
                        return (
                          <tr key={key} onClick={() => this.changeLink(elements)}>
                            <td>{elements.country}</td>
                            <td>{elements.cases}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>

                {/* //graph */}
                {/* <Line data={this.casesType} /> */}
                {/* graph end */}
              </div>
            </div>

          </div>
        )}

      </div>

    );
  }
}


export default CovidNormal;
