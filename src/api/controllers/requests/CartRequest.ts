import { IsNotEmpty } from 'class-validator';

export class CartRequest {
    @IsNotEmpty({ groups: ['create'] })
    public attribute: string;

    @IsNotEmpty({ groups: ['create'] })
    public cartKey: string;

    @IsNotEmpty({ groups: ['create'] })
    public productId: number;

    @IsNotEmpty({ groups: ['update'] })
    public quantity: number;

}
