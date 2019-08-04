"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateDepartment {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            yield em.createQueryBuilder()
                .insert()
                .into('department')
                .values([
                { name: 'Regional', description: 'Proud of your country? Wear a T-shirt with a national symbol stamp!' },
                { name: 'Nature', description: 'Find beautiful T-shirts with animals and flowers in our Nature department!' },
                { name: 'Seasonal', description: 'Each time of the year has a special flavor. Our seasonal T-shirts express'
                        + 'traditional symbols using unique postal stamp pictures.' },
            ])
                .execute();
        });
    }
}
exports.CreateDepartment = CreateDepartment;
//# sourceMappingURL=002-CreateDepartment.js.map