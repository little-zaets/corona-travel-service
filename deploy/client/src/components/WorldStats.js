import React from 'react';
import { Col, Statistic } from "antd";

const WorldStats = props => {
	return (
    <>
        <Col span={12}>
					<Statistic title={`Total ${props.desc}`} value={props.total} />
        </Col>
		</>
	)
}
export default WorldStats;