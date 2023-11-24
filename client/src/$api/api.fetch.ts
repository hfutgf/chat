class FetchClient {
  private API_URL = process.env.API_URL as string;

  constructor(private defaultHeader: Record<string, string> = {}) {}

  async get<T>(
    path: string,
    headers?: Record<string, string>,
    isAuth: boolean = false
  ): Promise<T> {
    return this.fetch<T>(path, "GET", undefined, headers, isAuth);
  }

  async post<T>(
    path: string,
    body?: Record<string, any>,
    headers?: Record<string, string>,
    isAuth: boolean = false
  ): Promise<T> {
    return this.fetch<T>(path, "POST", body, headers, isAuth);
  }

  async put<T>(
    path: string,
    body?: Record<string, any>,
    headers?: Record<string, string>,
    isAuth: boolean = false
  ): Promise<T> {
    return this.fetch<T>(path, "PUT", body, headers, isAuth);
  }

  async delete<T>(
    path: string,
    isAuth: boolean = false,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.fetch<T>(path, "DELETE", undefined, headers, isAuth);
  }

  async fetch<T>(
    path: string,
    method: string,
    body?: Record<string, any>,
    headers?: Record<string, string>,
    isAuth: boolean = false
  ): Promise<T> {
    const url = `${this.API_URL}/${path}`;

    const authorizationHeader: HeadersInit = isAuth
      ? { Authorization: `Bearer ${localStorage.getItem("token")}` }
      : {};

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...this.defaultHeader,
          ...authorizationHeader,
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Fetch error:", data);
        throw new Error("Fetch error:" + JSON.stringify(data));
      }

      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
}

export const $fetch = new FetchClient();
