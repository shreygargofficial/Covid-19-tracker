import Axios from 'axios'
import {Endpoint} from './Endpoint'
class Index {
   
       
       
        countryParam(param){
                return Axios.get(Endpoint.API_COUNTRY+param)
                 
             }
        graph(){
                return Axios.get(Endpoint.API_GRAPH_ALL)
        }
   
  
}

export default Index;
