import React from 'react';
import Receipt from './receipt';
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

it ('Should render Receipt component', () => {
  const component = mount(
  <Receipt 
    data={data}
    onReceiptItemClick={()=>{}}
    onTotalButtonClick={()=>{}}
   />
  );
  expect(component).toMatchSnapshot();
});

