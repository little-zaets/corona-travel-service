import React from "react";
import axios from "axios";

const withAuth = (ComponentToProtect) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false
      };
    }

    async componentDidMount() {
      try {
        await axios.get(`${process.env.REACT_APP_API}/checkToken`, {
          withCredentials: true
        });
        this.setState({ loading: false });
      } catch (error) {
        console.log(error);
        this.setState({ loading: false, redirect: true });
      }
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        window.location = "/login";
        // return <Redirect to='/login'/>
      }
      return <ComponentToProtect {...this.props} user={""} />;
    }
  };
};
export default withAuth;
