import React from 'react'
import Spinner from '../SpecialComponent/spinner'
import Service from '../Services/index'
import Chart from 'chart.js'
class Country extends React.Component {
    country=""
    state = {
        data: "",
        country: this.props.match.params.country
    }
    componentDidMount() {

      
        let serv = new Service();
        serv.countryParam(this.state.country)
            .then(success => { this.setState({ data: success.data }); console.log(success.data); })
            .catch(error => console.log(error));


            //chart

            //chart end
    }
    render() {
        return (
            !this.state.data ? <Spinner></Spinner> : (
                <canvas className="Chart" ref={ref => this.country = ref}>

                </canvas>
            )
        )
    }
}

export default Country;
