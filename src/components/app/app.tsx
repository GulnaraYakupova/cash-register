import * as React from 'react';
import './app.css';

import ProductsList from '../products-list/products-list';
import Receipt from '../receipt/receipt';

type data = {
  id: string,
  name: string,
  amount: number,
  price: number,
}

type State = {
  storeData: [] | data[],
  cashData: [] | data[],
  searchingText: string,
};

export default class App extends React.PureComponent<{}, State> {
  
  state = {

      storeData: [
        this.createMockData('1', 'Греча', 4 , 150),
        this.createMockData('2', 'Спички', 11 , 50),
        this.createMockData('3', 'Хлебушек', 25 , 80),
        this.createMockData('4', 'Мыло', 12 , 95.8),
        this.createMockData('5', 'Молоко', 1 , 100),  
      ],
      cashData :[],
      searchingText: '',
      
    }

  productsItemClickHandler = (id: string):void => {
    this.setState(({storeData, cashData}) => {

      const {newDelete, newAdd} = this.deleteFromOneAddToAnother(storeData, cashData, id);

      return {
        storeData: newDelete,
        cashData: newAdd,
      }
    });
  }

  receiptItemClickHandler = (id:string):void => {
    this.setState(({storeData, cashData}) => {

      const {newDelete, newAdd} = this.deleteFromOneAddToAnother(cashData, storeData, id);

      return {
        storeData: newAdd,
        cashData: newDelete,
      }
    });
  }

  totalButtonClickHandler = ():void => {
    this.setState({
      cashData: [],
    });
  }

  searchPanelTypeHandler = (text: string):void => {
    this.setState({
      searchingText: text,
    });
  }

  createMockData(id:string, name:string, amount:number, price:number) {
    return {id, name, amount, price};
  }

  deleteFromOneAddToAnother(deleteData:data[], addData:data[], id:string) {
    const indexDelete = deleteData.findIndex((item) => item.id === id);
    const indexAdd = addData.findIndex((item) => item.id === id);

    const newData: {newDelete:data[], newAdd: data[]}= {
      newDelete: [],
      newAdd: [],
    }

    if (deleteData[indexDelete].amount >  1) {
      newData.newDelete = this.decreaseAmount(deleteData, indexDelete)
    } else {
      newData.newDelete = this.deleteData(deleteData, indexDelete);
    }

    if (indexAdd > -1) {
      newData.newAdd = this.increaseAmount(addData, indexAdd);
    } else {
      newData.newAdd = this.addData(addData, {...deleteData[indexDelete], amount: 1});
    }

    return newData;
  }

  increaseAmount(items:data[], index:number) {
    return [
      ...items.slice(0, index), {
      ...items[index],amount: items[index].amount + 1},
      ...items.slice(index + 1),
    ];
  }

  decreaseAmount(items:data[], index:number) {
    return [
      ...items.slice(0, index), {
      ...items[index],amount: items[index].amount - 1},
      ...items.slice(index + 1),
    ];
  }

  addData(items:data[], data:data) {
    const newData = [...items];
    newData.push(data);

    return newData
  }

  deleteData(items:data[], index:number) {
    return [...items.slice(0, index),
      ...items.slice(index + 1)];
  }

  searchItems(items:data[], searchingText:string) {
    return items.filter((item) => item.name.toLowerCase().includes(searchingText.toLowerCase()));
  }

  render() {

    const {storeData, cashData, searchingText} = this.state;
    const searchedStore = this.searchItems(storeData, searchingText);

    return (
      <main className='app'>
        <ProductsList
          data={searchedStore}
          onProductsItemClick={this.productsItemClickHandler} 
          onSearchPanelType={this.searchPanelTypeHandler}/>
        <Receipt
        data={cashData}
        onReceiptItemClick={this.receiptItemClickHandler}
        onTotalButtonClick={this.totalButtonClickHandler} />
      </main>
    );
  } 
}
