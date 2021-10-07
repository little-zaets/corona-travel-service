import React from 'react';
import {Input} from 'antd';
const { Search } = Input;

const RestrictionsForm = (props) => {
	return (
    <>
      <Search
        placeholder="Where are you flying?"
        allowClear
        enterButton="Search" onClick={() => props.handleSubmit()}
        size="large"
        onChange={props.handleChange}
      />
    </>
  );
}
export default RestrictionsForm;