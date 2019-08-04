"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateAttributeValue {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            yield em.createQueryBuilder()
                .insert()
                .into('attribute_value')
                .values([
                { attributeId: 1, name: 'S' },
                { attributeId: 1, name: 'M' },
                { attributeId: 1, name: 'L' },
                { attributeId: 1, name: 'Xl' },
                { attributeId: 1, name: 'XXL' },
                { attributeId: 2, name: 'White' },
                { attributeId: 2, name: 'Black' },
                { attributeId: 2, name: 'Orange' },
                { attributeId: 2, name: 'Red' },
                { attributeId: 2, name: 'Yellow' },
                { attributeId: 2, name: 'Green' },
                { attributeId: 2, name: 'Indigo' },
                { attributeId: 2, name: 'Blue' },
                { attributeId: 2, name: 'Purple' },
            ])
                .execute();
        });
    }
}
exports.CreateAttributeValue = CreateAttributeValue;
//# sourceMappingURL=007-CreateAttributeValue.js.map