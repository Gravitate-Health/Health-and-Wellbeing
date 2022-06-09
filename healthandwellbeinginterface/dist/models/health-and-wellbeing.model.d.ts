import { Entity } from '@loopback/repository';
export declare class HealthAndWellbeing extends Entity {
    internalId?: string;
    contentType?: any;
    language?: any;
    data?: any;
    url?: string;
    size?: string;
    hash?: any;
    title?: string;
    creation?: any;
    height?: number;
    width?: number;
    frames?: number;
    duration?: string;
    pages?: number;
    [prop: string]: any;
    constructor(data?: Partial<HealthAndWellbeing>);
}
export interface HealthAndWellbeingRelations {
}
export declare type HealthAndWellbeingWithRelations = HealthAndWellbeing & HealthAndWellbeingRelations;
