import React from 'react';
import ProductsList from './products-list';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const data = [{
    id: '1',
    name: 'Гречка',
    amount: 2,
    price: 150,
  },
  {
    id: '2',
    name: 'Хлеб',
    amount: 2,
    price: 150,
  },
];

it ('Should render ProductsList component', () => {
  const component = mount(
  <ProductsList 
    data={data}
    onProductsItemClick={()=>{}}
    onSearchPanelType={()=>{}}
   />
  );
  expect(component).toMatchSnapshot();
});