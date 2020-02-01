export class NamedApiResource<T> {
    name: string;
    url: string;

    constructor(data?: object) {
        Object.assign(this, data);
    }
}