import React, { Component } from 'react';
import WorldStats from '../components/WorldStats';
import axios from 'axios';
import { Typography, Row, Col, Space, Statistic } from "antd";
const { Title } = Typography;

export default class Global extends Component {
  constructor() {
    super();
    this.state = {
      result: {
        'Confirmed': 0,
        'Deaths': 0,
        'Recovered': 0,
        'Active': 0
			},
			isLoading: false
    };
  }
	async componentDidMount() {
		const globalData = await axios.get("https://disease.sh/v3/covid-19/all");
		const covidData = globalData.data;
		
		this.setState({
			result: {
				'Confirmed': covidData.cases,
        'Deaths': covidData.deaths,
        'Recovered': covidData.recovered,
        'Active': covidData.active
			}
		})
	}
	render() {
		const Stats = Object.keys(this.state.result).map((key, index) => {
			console.log(this.state.result)
			return <WorldStats
				key={index}
				desc={key}
				total={this.state.result[key]} />
		})
		return (
			<div className="world-stats">
				<Row>
					{Stats}
				</Row>
			</div>
		)
  }
}
