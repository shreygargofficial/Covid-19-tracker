import Axios from 'axios'
import {Endpoint} from './Endpoint'
class Index {
   
        countryParam(country){
                return Axios.get(Endpoint.API_COUNTRY+country)
        }
       
        all(){
                return Axios.get(Endpoint.API_ALL)
                 
             }
    
   
  
}

export default Index;
