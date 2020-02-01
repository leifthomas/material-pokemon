import { Language } from './language.model';
import { NamedApiResource } from './named-api-resource.model';

export class Name {
    language: NamedApiResource<Language>;
    name: string;

    constructor(data?: object) {
        Object.assign(this, data);
    }
}