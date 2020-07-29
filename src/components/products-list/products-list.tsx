import * as React from 'react';
import './products-list.css';

import SearchPanel from '../search-panel/search-panel';
import ProductsItem from '../products-item/products-item';

type data = {
  id: string,
  name: string,
  amount: number,
  price: number,
};

type Props = {
  data: Array<data>,
  onProductsItemClick: (id: string) => void, 
  onSearchPanelType: (arg0:string) => void,
};

const ProductsList:React.FC<Props> = ({data, onProductsItemClick, onSearchPanelType}) => {

  const productItemsMarkup = data.map(({id, name, amount, price}) => 
    <ProductsItem
      key={id}
      onProductsItemClick={() => onProductsItemClick(id)}
      itemData={{name, amount, price}} />);

  return (
      <section className='products-list'>
        <SearchPanel onSearchPanelType={onSearchPanelType}/>
        <ul>
          {productItemsMarkup}
        </ul>
      </section>
  );
};

export default ProductsList;