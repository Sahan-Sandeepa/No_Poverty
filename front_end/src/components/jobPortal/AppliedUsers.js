import React, { useState, useEffect } from "react";
import { Table, Button, Input } from "antd";
import axios from "axios";
import PageWithTitleSearch from "../common/PageWithTitleSearch";

const Showvacancies = () => {
  const [appliedUsersList, setAppliedUsersList] = useState([]);
  const [searchText, setSearchText] = useState("");

  function getAppliedUsers() {
    axios
      .get("http://localhost:4000/jobFind")
      .then((res) => {
        setAppliedUsersList(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  useEffect(() => {
    getAppliedUsers();
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact Number",
      dataIndex: "contactNum",
      key: "contactNum",
    },
    {
      title: "Past Experience",
      dataIndex: "pastExp",
      key: "pastExp",
    },
  ];

  return (
    <PageWithTitleSearch
      hasSearch={true}
      title={"Applied Users"}
      onSearch={setSearchText}
    >
      <Table
        columns={columns}
        dataSource={appliedUsersList.filter((job) =>
          job.email.toLowerCase().includes(searchText.toLowerCase())
        )}
      />
    </PageWithTitleSearch>
  );
};
export default Showvacancies;
