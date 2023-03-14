import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Space, Input, Col } from 'antd';
import Header from '../header';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import swal from 'sweetalert';



const { Search } = Input;


const Financial = () => {
    const [financial, setFinancial] = useState([]);
    const [column, setColumns] = useState([]);
    const [isDeleteModalOpen, setIsDelete] = useState(false)


    function getFinancial() {
        axios.get("http://localhost:4000/financial/")
            .then((res) => {
                setFinancial(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }
    useEffect(() => {
        getFinancial();
    }, [])

    //delete fubction
  function deleteFinancial(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        //true
        //save.it
      axios
      .delete("http://localhost:4000/financial/" +id)
      .then((result) => {
        swal("Done! Record has been deleted!", {
          icon: "success",
        });
        setTimeout(function () {

          window.location.reload();

        }, 2000);
      })
        .catch((err)=>{
           alert((err.message));
        })  
      } else {
        swal("Your record is safe!");
      }
    });
  }

    const onSearch = (value) => console.log(value);

    // const columns = [{
    //     title: 'Donation Name',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: text => <a href="#">{text}</a>,
    // }, {
    //     title: 'Fund',
    //     dataIndex: 'address',
    //     key: 'address',
    // },
    // ];
    

    const Columns=[{
        title: 'Program Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    }, {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Venue',
        dataIndex: 'venue',
        key: 'venue',
    }, {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>

                <Button icon={<EditTwoTone />}></Button>
                <Button icon={<DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />} onClick={deleteFinancial(financial._id)}></Button>

                {/* <a href="#">Action 一 {record.name}</a>
                <span className="ant-divider" />
                <a href="#">Delete</a> */}
            </span>
        ),
    }];
    return (
        <div style={{ padding: 1, alignItems: "center", width: 900, height: 650, borderRadius: 5 }}>
            <Col span={50} />
            <Col span={30}>

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                        <h1 style={{ color: "White" }}>Financial Summmary</h1>
                        <Col span={10} />
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{
                                width: 200,
                            }}
                        />
                        <Button icon={<FilePdfOutlined style={{ fontSize: '22px', color: 'red' }} />} />
                    </CustomRow>
                </WrapperCard>
                <Table columns={Columns} dataSource={financial}
                    bordered
                // title={() => 'Financial Details'}
                />
                <a href='/action2'>Tag</a>
            </Col>
        </div>
    )
}

export default Financial