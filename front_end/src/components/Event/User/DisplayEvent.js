import { Card, Col, Modal, Row, theme } from 'antd';
import React, { useState } from "react";
import { Form, notification } from "antd";
import WrapperCard from '../../common/Wrapper_card';
import CustomRow from '../../common/Form_header';
import '../Event-Main.css';
import { ReadOutlined } from '@ant-design/icons';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const DisplayEvent = () => {

    const { token } = theme.useToken();

    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    return (
        <div className="main-container">

            <div className="sub-container">

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                        <h1 style={{ color: "White" }}>Upcoming Events</h1>
                    </CustomRow>
                </WrapperCard>

                <div className="form">

                    <Card title="Card title" bordered={false} style={{ marginBottom: "20px" }}>
                        <p>{text}</p>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <ReadOutlined onClick={showModal} style={{ color: "#5DBB63", cursor: "pointer" }} />
                        </div>
                    </Card>

                    <Modal
                        visible={modalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        destroyOnClose={true}
                    >
                        <p>{text}</p>
                    </Modal>

                </div>
            </div>
        </div>
    );
};

export default DisplayEvent;
