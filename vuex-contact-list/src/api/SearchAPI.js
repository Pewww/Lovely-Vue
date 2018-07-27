import axios from 'axios';
import Constant from '../Constant'

export default {
  showContact: (name) => {
    return axios.get(Constant.BASE_URI + name);
  }
}