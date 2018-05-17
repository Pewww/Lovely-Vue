const BASE_URL = '/api';

export default {
  PAGESIZE: 5,
  FETCH: BASE_URL + '/contacts',
  ADD: BASE_URL + '/contacts',
  UPDATE: BASE_URL + '/contacts/${no}',
  FETCH_ONE: BASE_URL + '/contacts/${no}',
  DELETE: BASE_URL + '/contacts/${no}',
  UPDATE_PHOTO: BASE_URL + '/contacts/${no}/photo'
}