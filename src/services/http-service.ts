import apiClient from "./api-client";
import { Time } from "./time-service";

class HttpService {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint)
        return { request, cancel: () => controller.abort() }
    }

    // getSavedTimes() {
    //     return apiClient.get<Time[]>(this.endpoint).then(res => res.data)
    // }

    delete(id: number) {
        return apiClient.delete(this.endpoint + '/' + id)
    }

    create<T>(entity: T) {
        return apiClient.post(this.endpoint, entity)
    }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create