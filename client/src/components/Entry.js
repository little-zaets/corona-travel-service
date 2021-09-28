import { Card } from 'antd';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>
};

class TabsCard extends React.Component {
	state = {
		key: 'tab1'
	};

	onTabChange = (key, type) => {
		console.log(key, type);
		this.setState({ [type]: key });
	};

	render() {
		return (
			<>
				<Card
					style={{ width: '100%' }}
					title="Entry Restrictions"
					extra={<a href="#">More</a>}
					tabList={tabList}
					activeTabKey={this.state.key}
					onTabChange={key => {
						this.onTabChange(key, 'key');
					}}
				>
					{contentList[this.state.key]}
				</Card>
			</>
		)
	}
}
export default TabsCard;