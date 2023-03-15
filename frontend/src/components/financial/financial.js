import React, { useState, useEffect,useContext } from 'react'
import { Table, Icon, Button, Space, Input, Col } from 'antd';
import Header from '../header';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import swal from 'sweetalert';
import { Link ,useParams} from 'react-router-dom'
import AddFinancial from './AddFinancial';



const { Search } = Input;


const Financial = () => {
    const [financial, setFinancial] = useState([]);
    const [column, setColumns] = useState([]);
    const [isDeleteModalOpen, setIsDelete] = useState(false);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState('');
    const [venue, setVenue] = useState("");
    const [total, setTotal] = useState("");
    const [status, setStatus] = useState("");
    const [isOpen, setIsOpen] = useState(false)
    const { _id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    


    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

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

    useEffect(()=>{


    },[])

    const handleDelete = (_id) => {
        setFinancial(financial => financial.filter(financial => financial._id !== _id));
      };
    // const handleDelete = async (_id) => {
    //         axios.delete("http://localhost:4000/financial/" + _id)
    //         .then((result) => {
    //             console.log("Deleted", result);
    //         }).catch((err) => {
    //             console.log(err);
    //         })
    //   };
    // function getDeleted(id) {
    //     axios.delete("http://localhost:4000/financial/" + id)
    //         .then((result) => {
    //             console.log("Deleted", result);
    //         }).catch((err) => {
    //             console.log(err);
    //         })
    
    // axios.delete("http://localhost:4000/financial/" + id)
    //     .then(response => setStatus('Delete successful'))
    //     .catch(error => {
    //         console.log(error.message);
    //         console.error('There was an error!', error);
    //     });

    // }


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


    const Columns = [{
        title: '_id',
        dataIndex: '_id',
        key: '_id',
        hidden: true
          
    },{
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

                <Button icon={<EditTwoTone /> } onClick={()=>setIsOpen(true)} ></Button>
                <Button icon={<DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />}
                //  onClick={handleDelete}
                onClick={() => handleDelete(record._id)}

                ></Button>

                {/* <a href="#">Action 一 {record.name}</a>
                <span className="ant-divider" />
                <a href="#">Delete</a> */}
            </span>
        ),
    }];
    return (
        isModalOpen?<>
        <AddFinancial 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        showModal={showModal}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
        handleOk={handleOk}

        /> 
        </>
        :
<>

        <div>
            <a href="/addfinancial"> <Button >Create Report</Button></a>
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
                </Col>
            </div>
        </div>
        </>
    )
}

export default Financial