import React, { useState, useEffect } from "react";
import { Badge, Button, Card, Collapse, Input, Modal, Space } from "antd";
import axios from "axios";
import {
  EditTwoTone,
  DeleteOutlined,
  DeleteTwoTone,
  DownloadOutlined,
  FilePdfOutlined,
  FilePdfTwoTone,
  SelectOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import CustomRow from "../common/Form_header";
import WrapperCard from "../common/Wrapper_card";
import { Link, useParams, useNavigate } from "react-router-dom";
import DeleteModal from "../common/DeleteModal";

import "jspdf-autotable";

const { Search } = Input;

const Applied = () => {
  const [appliedList, setAppliedList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");

  function getAllAppliedJobs() {
    axios
      .get("http://localhost:4000/jobHire/")
      .then((res) => {
        setAppliedList(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  useEffect(() => {
    getAllAppliedJobs();
  }, []);

  const layout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 100,
    },
  };

  const { Panel } = Collapse;

  return (
    <div className="main-container">
      <div className="sub-container">
        <WrapperCard style={{ backgroundColor: "#37475E" }}>
          <CustomRow
            style={{ justifyContent: "space-between", padding: "16px" }}
          >
            <h1 style={{ color: "White" }}>Applied Job Details</h1>
          </CustomRow>
        </WrapperCard>

        <section className="main_addbtn-controller">
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="middle"
              onSearch={setSearchText}
              style={{
                marginLeft: "173%",
              }}
            />
          </Space>
        </section>
        {appliedList
          ?.filter((val) => {
            if (setSearchText === " ") {
              return val;
            } else if (
              val.jobTitle.toLowerCase().includes(searchText.toLowerCase()) ||
              val.location.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return val;
            }
          })
          .map((appliedtDetailsVal) => (
            <div className="event_main">
              <Collapse accordion>
                <Panel
                  header={
                    <Space>
                      <Badge
                        className="site-badge-count-109"
                        count={appliedtDetailsVal.applicationNo}
                        style={{
                          backgroundColor: "volcano",
                          fontSize: "16px",
                        }}
                      />
                    </Space>
                  }
                  extra={
                    <Space>
                      <Badge
                        className="site-badge-count-109"
                        count={appliedtDetailsVal.AppliedDate}
                        style={{
                          backgroundColor: "purple",
                          fontSize: "14px",
                        }}
                      />
                    </Space>
                  }
                  key="1"
                >
                  <Card
                    title={appliedtDetailsVal.eventName}
                    extra={<div className="main_btn-controller"></div>}
                  >
                    {/* <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                                            Inner Card content
                                        </Card> */}

                    <Card
                      style={{
                        width: "100%",
                      }}
                      title="Job Title"
                    >
                      {appliedtDetailsVal.jobTitle}
                    </Card>

                    <br />
                    <Card
                      style={{
                        width: "100%",
                      }}
                      title="Company"
                    >
                      {appliedtDetailsVal.company}
                    </Card>

                    <br />
                    <Card
                      style={{
                        width: "100%",
                      }}
                      title="Location"
                    >
                      {appliedtDetailsVal.location}
                    </Card>

                    <br />
                    <Card
                      style={{
                        width: "100%",
                      }}
                      title="Opening Date"
                    >
                      {appliedtDetailsVal.openingDate}
                    </Card>

                    <br />
                    <Card
                      style={{
                        width: "100%",
                      }}
                      title="Closing Date"
                    >
                      {appliedtDetailsVal.closingDate}
                    </Card>
                  </Card>
                </Panel>
              </Collapse>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Applied;
