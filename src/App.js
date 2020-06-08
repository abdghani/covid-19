import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Cards, Charts, CountryPicker} from './components';
import style from './App.module.css';
import {fetchData } from './api'

import coronaImage from './images/image.png'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount(){
    const fetchedData  = await fetchData();
    this.setState({data:fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData  = await fetchData(country);
    this.setState({data:fetchedData, country: country});
  }

  render(){
    const {data, country} = this.state;
    return (
      <div className={style.container}>
        <img src={coronaImage} className={style.image} alt="COVID-19"/>
          <Cards data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Charts data={data} country={country}/>
      </div>
    );
  }
}

export default App;
