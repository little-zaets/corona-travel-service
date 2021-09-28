import React from 'react';
import {Input} from 'antd';
const { Search } = Input;

export default RestrictionsForm = (props) => {
	return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
				onClick={props.handleSubmit}
				onChange={props.handleChange}
      />
    </>
  );
}