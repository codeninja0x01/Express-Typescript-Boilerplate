"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
// import { CustomerRepository } from '../repositories/CustomerRepository';
let IsEmailAlreadyExistConstraint = class IsEmailAlreadyExistConstraint {
    // constructor(
    // private customerRepository: CustomerRepository
    // ) { }
    validate(email, args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // const isExist = await this.customerRepository.findOne({email});
            // if (isExist) { return true; }
            return true;
        });
    }
};
IsEmailAlreadyExistConstraint = tslib_1.__decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsEmailAlreadyExistConstraint);
exports.IsEmailAlreadyExistConstraint = IsEmailAlreadyExistConstraint;
exports.IsEmailAlreadyExist = (validationOptions) => {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailAlreadyExistConstraint,
        });
    };
};
//# sourceMappingURL=IsEmailAlreadyExist.js.map