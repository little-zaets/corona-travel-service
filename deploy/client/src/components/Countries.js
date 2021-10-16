import React, { Component } from 'react';
import axios from 'axios';
import { Select } from 'antd';
const { Option } = Select;

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      CountryDict: {}
    };
    this.handleTrigger = this.handleTrigger.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  handleTrigger = (value) => {
    this.props.onTrigger(value);
  };
	handleClick = () => {
		console.log('blalalalla')
    this.props.onSearch();
  };
  async componentDidMount() {
    try {
      let dict = {};
      const data = await axios.get('https://api.covid19api.com/summary');
      const countryList = data.data.Countries;
      countryList.forEach((item, index) => {
        dict[index] = {
          country: item.Country,
          countryCode: item.CountryCode
        };
      });
      this.setState({ CountryDict: dict });
      console.log(this.props);
    }
    catch (err) {
      console.error(err);
    }
  }
  

  render() {
    const CountriesList = Object.keys(this.state.CountryDict).map((key, i) => {
      return (
        <Option
          key={i}
          value={this.state.CountryDict[key].countryCode}
          style={{ textAlign: 'center', padding: 10}}
        >
          {this.state.CountryDict[key].countryCode} - 
          {this.state.CountryDict[key].country}
        </Option>
      );
    });
    return (
      <>
        <Select
          style={{ width: 400 }}
          placeholder='Select a Country'
          optionFilterProp='children'
          onChange={this.handleTrigger}
        >
          {this.state.CountryDict && CountriesList}
        </Select>
      </>
    );
  }
}

export default Countries;
