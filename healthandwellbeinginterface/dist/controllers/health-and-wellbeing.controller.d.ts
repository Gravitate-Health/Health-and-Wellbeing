import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { HealthAndWellbeing } from '../models';
import { HealthAndWellbeingRepository } from '../repositories';
export declare class HealthAndWellbeingController {
    healthAndWellbeingRepository: HealthAndWellbeingRepository;
    constructor(healthAndWellbeingRepository: HealthAndWellbeingRepository);
    create(healthAndWellbeing: Omit<HealthAndWellbeing, 'internalID'>): Promise<HealthAndWellbeing>;
    count(where?: Where<HealthAndWellbeing>): Promise<Count>;
    find(filter?: Filter<HealthAndWellbeing>): Promise<HealthAndWellbeing[]>;
    updateAll(healthAndWellbeing: HealthAndWellbeing, where?: Where<HealthAndWellbeing>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<HealthAndWellbeing>): Promise<HealthAndWellbeing>;
    updateById(id: string, healthAndWellbeing: HealthAndWellbeing): Promise<void>;
    replaceById(id: string, healthAndWellbeing: HealthAndWellbeing): Promise<void>;
    deleteById(id: string): Promise<void>;
}
