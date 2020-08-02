import Axios from 'axios'
import {Endpoint} from './Endpoint'
class Index {
   
        country(){
           return Axios.get(Endpoint.API_SIMPLE)
            
        }
        countryParam(country){
                console.log(country);
                return Axios.get(Endpoint.API_COUNTRY+country)
        }
       
        all(){
                return Axios.get(Endpoint.API_ALL)
                 
             }
    
   
  
}

export default Index;
