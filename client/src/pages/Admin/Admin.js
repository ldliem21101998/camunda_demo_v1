import React, { useEffect, useState } from "react";
import {
  getUnApprovalRequest,
  handleApprovalRequest,
} from "../../services/absenceRequest";
import { Space, Table } from "antd";
import SideBar from "../../components/SideBar";

const Admin = () => {
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "processDefinitionId",
      dataIndex: "processDefinitionId",
      key: "processDefinitionId",
    },
    {
      title: "processInstanceId",
      dataIndex: "processInstanceId",
      key: "processInstanceId",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        console.log(record);
        return (
          <Space size="middle">
            <a
              onClick={() =>
                approveRequest({ id: record.id, approvalStatus: "approved" })
              }
            >
              Approve
            </a>
            <a
              onClick={() =>
                approveRequest({ id: record.id, approvalStatus: "rejected" })
              }
            >
              Reject
            </a>
          </Space>
        );
      },
    },
  ];

  const handleGetUnapprovalRequest = () => {
    getUnApprovalRequest().then((response) => {
      console.log(response.data.data.tasks);
      setDataSource(response.data.data.tasks);
    });
  };

  useEffect(() => {
    handleGetUnapprovalRequest();
  }, []);

  const approveRequest = (approvalStatus) => {
    handleApprovalRequest(approvalStatus);
    handleGetUnapprovalRequest();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
      }}
    >
      <SideBar />
      <div
        style={{
          marginLeft: "10vh",
          width: "140vh",
        }}
      >
        <h1 style={{ padding: "25px 0px" }}>Approve Request</h1>
        <Table
          style={{ border: "1px solid #ccc" }}
          columns={columns}
          dataSource={dataSource.map((item, index) => {
            return {
              key: index.toString(),
              processDefinitionId: item.processDefinitionId,
              processInstanceId: item.processInstanceId,
              id: item.id,
            };
          })}
        />
      </div>
    </div>
  );
};

export default Admin;
