import { Name } from './name.model';

export class Language {
    id: number;
    iso639: string;
    iso3166: string;
    name: string;
    names: Array<Name>;
    official: boolean;

    constructor(data?: object) {
        Object.assign(this, data);
    }
}