import { IsNotEmpty, IsNumberString } from 'class-validator';

export class IdRequest {
    @IsNotEmpty()
    @IsNumberString()
    public id: number;
}
