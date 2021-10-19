import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "antd";
import Result from "../containers/Result";

const SearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showDetail = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const closeModal = (item) => {
    setIsModalVisible(false);
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/search_history`,
        { withCredentials: true }
      );
      setSearchHistory(response.data);
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

  useEffect(() => {
    (async () => {
      let res = await fetchHistory();
      if (res.success) {
        console.log("History Fetched");
        // setUser(res.data.results[0]);
      } else {
        console.log("History Fetch Error");
      }
    })();
  }, []);

  return (
    <div className={"white-text"}>
      <div className={"background-container"}></div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 className={"page-title"}>Search History</h2>
        <div className={"search-history-outer"}>
          {searchHistory.length == 0 && <h3>No Results</h3>}
          {console.log(searchHistory)}
          {searchHistory.length > 0 &&
            searchHistory.map((item, key) => (
              <a key={key} onClick={() => showDetail(item)} href={"#"}>
                <div className={"centertext"}>
                  <span>{item.date_searched}</span>&nbsp;-&nbsp;
                  <span>
                    <b>{item.search_result.area.name}</b>
                  </span>
                </div>
              </a>
            ))}
        </div>
      </div>
      <Modal
        title={
          selectedItem != null
            ? selectedItem.search_result.area.name
            : "Modal Title"
        }
        visible={isModalVisible}
        onCancel={closeModal}
        footer={[
          <Button key="back" onClick={closeModal}>
            Return
          </Button>
        ]}
      >
        {selectedItem != null && (
          <Result result={{ data: selectedItem.search_result }} />
        )}
      </Modal>
    </div>
  );
};

export default SearchHistory;
