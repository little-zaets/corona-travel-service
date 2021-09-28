import Form from "react-bootstrap/Form";
import { Row, Col } from 'antd';
import { React, Component } from "react";
import axios from "axios";

class RestrictionsContainer extends Component {
	// const [country, setCountry] = useState('US');
	constructor() {
		super();
		this.state = {
			token: '',
			tokenStatus: '',
			searchField: 'US',
			result: null
		}
	}
	
	handleChange = (e) => {
		this.setState({
			searchField: e.target.value
		})
	};
	
	getAuthToken = async () => {
		const client_id = 'ZUQpfRVAJMADPS7ZHulMtYCqD57Xvho3';
		const client_secret = 'S0iP81nCLDcxW9Ig';
		const api_call = await fetch(
      'https://test.api.amadeus.com/v1/security/oauth2/token?',
      {
        method: 'POST',
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
        })
		const response = await api_call.json();
    console.log(response);
		this.setState({ token: response.access_token, tokenStatus: response.state });
		return response.access_token;
	}
	
	getRestrictions = async() => {
		const token_status = this.state.tokenStatus;
		if (token_status !== 'approved') {
			const authToken = await this.getAuthToken();
		}
		console.log()
		const response = await fetch(
      `https://test.api.amadeus.com/v1//duty-of-care/diseases/covid19-area-report?countryCode=${this.state.searchField}`,
      {
        headers: { Authorization: `Bearer ${this.state.token}` }
      }
		);
		const result = await response.json();
		await axios.post(`${process.env.REACT_APP_API}/save`, result, {
      withCredentials: true
    });
		console.log(result);
		this.setState({ result: result });
	}
	
	handleSubmit = async () => {
		try {
			const response = await this.getRestrictions();
			return (
				<p>{this.state.result}</p>
			)
		}
		catch (err) {
			console.log(err);
		}
	}
	render() {
		const { result } = this.state;
		return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <input
            className="searchbar"
            type="text"
            placeholder="Search Country"
            onChange={this.handleChange}
          />
          <button
          // onClick={() => x}
          >
            Search
          </button>
        </form>
        {this.state.result && (
          <>
            <Row gutters={[32, 32]} className="result-card-container">
              <Col xs={24} sm={12} lg={6} className="result-card">
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.result.data.summary
                  }}
                />
              </Col>
            </Row>
          </>
        )}
      </>
    );
	}
}
export default RestrictionsContainer;