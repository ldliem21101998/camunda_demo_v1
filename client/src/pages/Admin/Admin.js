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
    // {
    //   title: "id",
    //   dataIndex: "id",
    //   key: "id",
    // },
    {
      title: "Employee",
      dataIndex: "employeeName",
      key: "employeeName",
    },
    {
      title: "Leave Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "Leave End Time",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
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
              id: item.id,
              startTime: item.variables.startTime,
              endTime: item.variables.endTime,
              reason: item.variables.reason,
              employeeName: item.variables.employeeName
            };
          })}
        />
      </div>
    </div>
  );
};

export default Admin;
