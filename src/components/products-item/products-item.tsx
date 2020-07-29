import * as React from 'react';
import './products-item.css';

type Props = {
  itemData: {name: string, amount: number, price: number},
  onProductsItemClick: () => void, 
}

const ProductsItem:React.FC<Props> = ({itemData, onProductsItemClick}) => {
  const {name, amount, price} = itemData;

  return (
    <li className='products-item' onClick={onProductsItemClick}>
      <span className='products-item__info'>
        <span className='products-item__name'>{name} </span>
        <span className='products-item__amount'>
          <svg width='30' height='30'>
          <use xlinkHref="#icon-box" />
        </svg>
        {amount}</span>
      </span>
      <span className='products-item__price'>{price.toFixed(2).replace('.',',')}</span>
    </li>
  );
}

export default ProductsItem;