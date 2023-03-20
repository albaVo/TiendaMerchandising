import { FC } from 'react'

interface Props {
  cart: any[];
}

export const CartList: FC<Props> = ({ cart }) => {
  return (
    <div>
      {cart.map((item, index) => (
        <>
            <img src={item.thumbnail}/>
            <span>{item.nombre}</span>
            <button>-</button>
            <span>{item.quantity}</span>
            <button>+</button>
            <span>{item.precio}</span>
        </>
      ))}
    </div>
  );
}
