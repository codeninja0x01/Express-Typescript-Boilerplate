import { EntityRepository, Repository } from 'typeorm';

import { Audit } from '../models/Audit';

@EntityRepository(Audit)
export class AuditRepository extends Repository<Audit> {

}
