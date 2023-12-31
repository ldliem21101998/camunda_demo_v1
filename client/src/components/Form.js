import React from "react";
import { Form, DatePicker, Input, Button, Typography, message } from "antd";
import { postAbsenceRequest } from "../services/absenceRequest";

const { RangePicker } = DatePicker;

const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
};

const FormField = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const userInfo = JSON.parse(sessionStorage.getItem("user"))

  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue["date"];
    const reason = fieldsValue["reason"];
    const values = {
      "employeeName": userInfo?.Description,
      "startTime": rangeValue[0].format("DD-MM-YYYY"),
      "endTime": rangeValue[1].format("DD-MM-YYYY"),
      "reason": reason,
    };
    console.log("Received values of form: ", values);
    postAbsenceRequest(values).then((res) => {
      console.log(res);
    });
    messageApi.open({
      type: "success",
      content: "Send Request Successful!",
    });

    form.resetFields();
  };
  return (
    <div>
      {" "}
      {contextHolder}
      <Form
        form={form}
        name="form_item_path"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item label="Employee name:">
          <Typography>
            <pre>{userInfo?.Description}</pre>
          </Typography>
        </Form.Item>
        <Form.Item name="date" label="RangePicker:" {...rangeConfig}>
          <RangePicker />
        </Form.Item>
        <Form.Item name="reason" label="Reason:">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default FormField;
