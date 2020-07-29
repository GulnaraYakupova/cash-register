import React from 'react';
import SearchPanel from './search-panel';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it ('Should render SearchPanel component', () => {
  const component = shallow(
    <SearchPanel 
      onSearchPanelType={()=>{}}
    />
  );
  expect(component).toMatchSnapshot();
});