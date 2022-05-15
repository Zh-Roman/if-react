import RestClient from './restClient';
import UserRequestClient from './userRequestClient';

const basicUrlForSearch = 'https://fe-student-api.herokuapp.com';

class ApiClient {
  constructor() {
    this.restClient = new RestClient(basicUrlForSearch);
    this.userRequestApi = new UserRequestClient(this.restClient);
  }
}

export default new ApiClient();
