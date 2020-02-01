import { ApiResource } from './api-resource.model';

export class ApiResourceList {
    count: number;
    next: string;
    previous: string;
    results: Array<ApiResource>;

    constructor(data?: object) {
        Object.assign(this, data);
    }
}