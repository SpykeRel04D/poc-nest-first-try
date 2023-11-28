import { UUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryColumn({ nullable: false })
  id: UUID;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  price: number;
}
