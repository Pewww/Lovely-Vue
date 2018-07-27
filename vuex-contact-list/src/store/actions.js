import Constant from '../Constant'
import SearchApi from '../api/SearchAPI'

export default {
  [Constant.SHOW_CONTACT]: ({state, commit}, payload) => {
    SearchApi.showContact(payload.name)
    .then(response => {
      commit(Constant.SHOW_CONTACT, { contacts: response.data });
    })
    .catch(err => {
      console.log(err);
    })
  }
}