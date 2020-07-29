import * as React from 'react';
import './search-panel.css';

type Props = {
  onSearchPanelType: (arg0:string) => void
};

const SearchPanel: React.FC<Props> = ({onSearchPanelType}) => {
  return (
    <div className='search-panel'>
      <svg className='search-panel__icon' width='20' height='20' fill='none'>
        <use xlinkHref="#icon-search1" />
      </svg>
      <input className='search-panel__text' placeholder='Поиск' 
      onChange={(evt) => onSearchPanelType(evt.target.value)}/>
    </div>
  );
}

export default SearchPanel;