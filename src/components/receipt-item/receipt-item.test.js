import React from 'react';
import ReceiptItem from './receipt-item';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const data = {
  name: 'Гречка',
  amount: 2,
  price: 150,
}

it ('Should render ReceiptItem component', () => {
  const component = shallow(
  <ReceiptItem 
    itemData={data}
    onReceiptItemClick={()=>{}}
   />
  );
  expect(component).toMatchSnapshot();
});