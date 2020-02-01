import { Language } from './language.model';
import { NamedApiResource } from './named-api-resource.model';

export class FlavorText {
    flavor_text: string;
    language: NamedApiResource<Language>;
    // version: NamedApiResource<Version>;
}