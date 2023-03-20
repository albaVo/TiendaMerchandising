import { Categoria } from 'src/modules/categorias/entities/categoria.entity';
import { DetallesPedido } from 'src/modules/detalles_pedidos/entities/detalles_pedido.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Producto {
  @PrimaryColumn()
  codigo: string;

  @Column('text', { unique: true })
  nombre: string;

  @Column('text')
  thumbnail: string;

  @Column('text')
  tipo: string;

  // @Column('text')
  // tallas?: string[];

  @Column('text')
  precio: string;

  @Column('text')
  estado: string;

  @Column({
    type: 'text',
    default: 0,
  })
  stock: string;

  @ManyToOne(
    () => Categoria, 
    (categoria) => categoria.productos, 
    {onDelete: 'CASCADE'}
  )
  categoria?: Categoria;

  @ManyToMany(
    () => DetallesPedido,
    (detalles_pedido) => detalles_pedido.productos,
    {onDelete: 'CASCADE'}
  )
  detalles_pedidos: DetallesPedido[];
}
