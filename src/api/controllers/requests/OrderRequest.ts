import { IsNotEmpty } from 'class-validator';

export class OrderRequest {

    @IsNotEmpty()
    public cartKey: string;

    @IsNotEmpty()
    public taxId: number;

    @IsNotEmpty()
    public shippingId: number;
}
