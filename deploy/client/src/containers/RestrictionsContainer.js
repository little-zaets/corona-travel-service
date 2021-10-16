import Form from 'react-bootstrap/Form';
import { Row, Col, Select } from 'antd';
import { React, Component } from 'react';
import axios from 'axios';
import Result from './Result';
import Countries from '../components/Countries';
import Spinner from '../components/Spinner';

class RestrictionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      tokenStatus: '',
      searchField: '',
      result: null,
      isLoading: false
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (value) => {
    console.log(value);
    this.setState({
        searchField: value
    });
     this.getRestrictions(this.props.userLoaded, value);
  };

  getAuthToken = async () => {
    const client_id = '4UjCoZLnTK3AGJAxMBs9wuzgEt7Oqlel';
    const client_secret = '41GADDaEUJ32t7uv';
    const api_call = await fetch(
      'https://test.api.amadeus.com/v1/security/oauth2/token?',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
      }
    );
    const response = await api_call.json();
    this.setState({
      token: response.access_token,
      tokenStatus: response.state,
      isLoading: true
    });
    return response.access_token;
  };

  getRestrictions = async (userLoaded, value) => {
    const token_status = this.state.tokenStatus;
    if (token_status !== 'approved') {
      const authToken = await this.getAuthToken();
    }
    const response = await fetch(
      `https://test.api.amadeus.com/v1//duty-of-care/diseases/covid19-area-report?countryCode=${value}`,
      {
        headers: { Authorization: `Bearer ${this.state.token}` }
      }
    );
    const result = await response.json();
     console.log(result);
    if (userLoaded) {
      await axios.post(`${process.env.REACT_APP_API}/save`, result, {
        withCredentials: true
      });
    }

    this.setState({ result: result, isLoading: false });
    return;
  };

  handleSubmit = async () => {
    try {
      const response = this.getRestrictions(this.props.userLoaded);
      return <>{this.state.result}</>;
    }
    catch (err) {
      console.error(err);
    }
  };
  
  render() {
    const { result } = this.state;

    return (
      <>
        <Countries onTrigger={this.handleChange} />
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          this.state.result && <Result result={result} />
        )}
      </>
    );
  }
}

export default RestrictionsContainer;
