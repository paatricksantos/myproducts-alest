import HttpClient from './utils/HttpClient';

class ContactsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async listProducts() {
    return this.httpClient.get('/products');
  }

  async deleteProduct(id: string) {
    return this.httpClient.delete(`/products/${id}`);
  }

  async createProduct(body: BodyInit) {
    return this.httpClient.post('/products', body);
  }

  async updateProduct(id: string, body: BodyInit) {
    return this.httpClient.put(`/products/${id}`, body);
  }
}

export default new ContactsService();
