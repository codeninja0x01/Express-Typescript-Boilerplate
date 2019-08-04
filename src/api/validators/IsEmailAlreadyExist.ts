import {
    registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';

// import { CustomerRepository } from '../repositories/CustomerRepository';

@ValidatorConstraint({ async: true })
export class IsEmailAlreadyExistConstraint implements ValidatorConstraintInterface {

    // constructor(
        // private customerRepository: CustomerRepository
    // ) { }

    public async validate(email: any, args: ValidationArguments): Promise<boolean> {
        // const isExist = await this.customerRepository.findOne({email});
        // if (isExist) { return true; }
        return true;
    }
}

export const IsEmailAlreadyExist = (validationOptions?: ValidationOptions) => {
   return (object: object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailAlreadyExistConstraint,
        });
   };
};
