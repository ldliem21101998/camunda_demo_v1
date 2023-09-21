import React, { useEffect, useState } from "react";
import { getUnApprovalRequest } from "../../services/absenceRequest";
import { Space, Table, Tag } from "antd";

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
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        );
      },
    },
  ];

  useEffect(() => {
    getUnApprovalRequest().then((response) => {
      console.log(response.data.data.tasks);
      setDataSource(response.data.data.tasks);
    });
  }, []);

  return (
    <div
      style={{
        width: "150vh",
        height: "50vh",
        margin: "auto",
        paddingTop: "30vh",
      }}
    >
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
  );
};

export default Admin;
