export class ApiResource {
    url: string;

    constructor(data?: object) {
        Object.assign(this, data);
    }
}