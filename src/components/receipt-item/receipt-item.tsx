import * as React from 'react';
import './receipt-item.css';

type data = {
  name: string,
  amount: number,
  price: number,
};

type Props = {
  itemData: data,
  onReceiptItemClick: () => void,
};

const ReceiptItem:React.FC<Props> = ({itemData, onReceiptItemClick}) => {

  const {name, amount, price} = itemData;

  return (
  <li className='receipt-item' onClick={onReceiptItemClick}>
    <span className='receipt-item__info'>
      <span className='receipt-item__name'>{name}</span>
      <span className='receipt-item__amount'>{amount} &times; {price.toFixed(2).replace('.',',')}</span>
    </span>
    <span className='receipt-item__total'>{(amount * price).toFixed(2).replace('.',',')}</span>
  </li>
  );
};

export default ReceiptItem;