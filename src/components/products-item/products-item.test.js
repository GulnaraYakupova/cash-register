import React from 'react';
import ProductsItem from './products-item';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const data = {
  name: 'Гречка',
  amount: 2,
  price: 150,
}

it ('Should render ProductsItem component', () => {
  const component = shallow(
  <ProductsItem
    itemData={data}
    onProductsItemClick={()=>{}}
   />
  );
  expect(component).toMatchSnapshot();
});