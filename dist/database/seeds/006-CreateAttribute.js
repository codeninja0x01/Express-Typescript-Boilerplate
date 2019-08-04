"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateAttribute {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            yield em.createQueryBuilder()
                .insert()
                .into('attribute')
                .values([
                { name: 'Size' },
                { name: 'Color' },
            ])
                .execute();
        });
    }
}
exports.CreateAttribute = CreateAttribute;
//# sourceMappingURL=006-CreateAttribute.js.map