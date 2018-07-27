import Constant from '../Constant'

export default {
  [Constant.SHOW_CONTACT]: (state, payload) => {
    state.contacts = payload.contacts;
  }
}