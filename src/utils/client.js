import {Config} from "./config";

/**
 * HTTP request client wrapper for fetch
 * @class Client
 */
class Client {
  /**
   * Creates an instance of Client.
   * @memberof Client
   */
  request(type, url, payload = null) {
    const { base } = Config.urls;
    let requestUrl = base + url;
    let data = ((payload) => {
      if (payload === null) return;
      if (typeof payload === "object") return JSON.stringify(payload);
      return new String(payload).toString();
    })(payload);
    let promise = new Promise((resolve, reject) => {
      let options = {
        method: type,
        headers: new Headers({
          ...Config.request.headers
        }),
        ...Config.request.options
      };
      if (payload) options["body"] = data;
      let request = new Request(requestUrl, options);
      fetch(request)
        .then((response) => {
          const contentType = response.headers.get("content-type");
          if (!response.ok) throw new Error(response.statusText);
          if (contentType && contentType.indexOf("application/json") === -1) throw new Error(response.statusText);
          return response;
        })
        .then((response) => response.json())
        .then(json => resolve(json))
        .catch(error => {
          reject(error);
        });
    });
    return promise;
  }
  /**
   * Sent a GET request to specified URL
   * @param {string} url URL to send a request at
   * @returns Promise
   * @memberof Client
   */
  get(url) {
    return this.request("GET", url);
  }
  /**
   * Sent a PUT request to specified URL
   * @param {string} url URL to send a request at
   * @param {Object} data Object to send in the rquest body
   * @returns Promise
   * @memberof Client
   */
  put(url, data) {
    return this.request("PUT", url, data);
  }
  /**
   * Sent a POST request to specified URL
   * @param {string} url URL to send a request at
   * @param {Object} data Object to send in the rquest body
   * @returns Promise
   */
  post(url, data) {
    return this.request("POST", url, data);
  }
  /**
   * Sent a DELETE request to specified URL
   * @param {string} url URL to send a request at
   * @returns Promise
   * @memberof Client
   */
  delete(url) {
    return this.request("DELETE", url);
  }
}

export default new Client();