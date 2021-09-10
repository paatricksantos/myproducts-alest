class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(path: string) {
    const response = await fetch(`${this.baseURL}${path}`);

    return response.json();
  }

  async delete(path: string): Promise<void> {
    await fetch(`${this.baseURL}${path}`, {
      method: 'DELETE',
    });
  }

  async put(path: string, body: BodyInit): Promise<void> {
    await fetch(`${this.baseURL}${path}`, {
      method: 'PUT',
      body,
    });
  }

  async post(path: string, body: BodyInit): Promise<void> {
    await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body,
    });
  }
}

export default HttpClient;
