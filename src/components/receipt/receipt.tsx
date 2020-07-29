import * as React from 'react';
import './receipt.css';

import ReceiptItem from '../receipt-item/receipt-item';

type data = {
  id: string,
  name: string,
  amount: number,
  price: number,
}

type Props = {
  data: Array<data>,
  onReceiptItemClick: (id:string) => void,
  onTotalButtonClick: () => void
};

const Receipt:React.FC<Props> = ({data, onReceiptItemClick, onTotalButtonClick}) => {

  const receiptItemMarkup = data.map(({id, name, amount, price}) => (
    <ReceiptItem
      key={id}
      itemData={{name, amount, price}}
      onReceiptItemClick={()=> onReceiptItemClick(id)}
    />
  ));

  const totalSum = data.reduce((total, item) => total + (item.amount * item.price), 0);

  return (
    <section className='receipt'>
      <div className='receipt__top'>
        <h2>Чек</h2>
        <ul>
          {receiptItemMarkup}
        </ul>
      </div>

      <button className='receipt__button' onClick={onTotalButtonClick} type='button'>
        <svg width='20' height='20' fill='none'>
          <use xlinkHref='#icon-credit-card' />
        </svg> Итого: {totalSum.toFixed(2).replace('.',',')}
      </button>
    </section>
  );
}

export default Receipt;