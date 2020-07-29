import React from 'react';
import App from './app';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const setUp = () => mount(<App />);

describe(`App component test`, () => {
  let component;
  let instance;
  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });
  

  it ('should render App component', () => {
    expect(component).toMatchSnapshot();
  });

  it('Product-item click handler', () => {
    const item = component.find('.products-item').at(0);
    item.simulate('click');

    expect(component.state().storeData[0].amount).toBe(3);
  })

  it('Receipt-item click handler', () => {
    const item1 = component.find('.products-item').at(0);
    const item2 = component.find('.products-item').at(1);
    item1.simulate('click');
    item2.simulate('click');
    const item = component.find('.receipt-item').at(0);
    item.simulate('click');

    expect(component.state().cashData[0].amount).toBe(1);
  })

  it('TotalButton click handler', () => {
    const item1 = component.find('.products-item').at(0);
    const item2 = component.find('.products-item').at(1);
    item1.simulate('click');
    item2.simulate('click');
    const item = component.find('.receipt__button');
    item.simulate('click');

    expect(component.state().cashData).toEqual([]);
  })

  it('on SearchPanel type handler', () => {
    instance.searchPanelTypeHandler('test');
    expect(component.state().searchingText).toEqual('test');
  })
})

