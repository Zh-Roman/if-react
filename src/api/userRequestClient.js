class UserRequestClient {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  getUserRequest = (params) => this.apiClient.get('/api/hotels', params);
}

export default UserRequestClient;
