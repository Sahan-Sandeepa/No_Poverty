import React, { useState, useEffect } from "react";
import { Table, Icon, Button, Row, Input, Col, Card } from "antd";
import axios from "axios";
import { CheckCircleOutlined } from "@ant-design/icons";
import CustomRow from "../common/Form_header";
import WrapperCard from "../common/Wrapper_card";
import { Link } from "react-router-dom";
import PageWithTitleSearch from "../common/PageWithTitleSearch";

const { Search } = Input;

const Showvacancies = () => {
  const [jobList, setJobList] = useState([]);
  const [searchText, setSearchText] = useState("");

  function getAds() {
    axios
      .get("http://localhost:4000/jobHire/")
      .then((res) => {
        setJobList(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  useEffect(() => {
    getAds();
  }, []);

  const columns = [
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Opening Date",
      dataIndex: "openingDate",
      key: "openingDate",
    },
    {
      title: "Closing Date",
      dataIndex: "closingDate",
      key: "closingDate",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link to={"/jobApply/" + record._id}>
            <Button icon={<CheckCircleOutlined />}></Button>
          </Link>

          {/* <Button icon={<DeleteOutlined style={{ color: 'red' }} />}
                    onClick={() => {
                        navigateJobApply();
                    }}
                /> */}
        </span>
      ),
    },
  ];

  return (
    <PageWithTitleSearch
      hasSearch={true}
      title={"Job vacancies"}
      onSearch={setSearchText}
    >
      <Table
        columns={columns}
        dataSource={jobList.filter((job) =>
          job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
        )}
      />
    </PageWithTitleSearch>
  );
};
export default Showvacancies;
