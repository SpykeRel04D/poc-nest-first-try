import { IsNumber, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class ProductDto {
  @IsUUID()
  id: UUID;

  @IsString()
  name: string;

  @IsNumber()
  price: number;
}
