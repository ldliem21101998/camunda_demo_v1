import React from "react";
import { Form, DatePicker, Input, Button, Typography } from "antd";
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

const onFinish = (fieldsValue) => {
  // Should format date value before submit.
  const rangeValue = fieldsValue["date"];
  const reason = fieldsValue["reason"];
  const values = {
    "start-date": rangeValue[0].format("YYYY-MM-DD"),
    "end-date": rangeValue[1].format("YYYY-MM-DD"),
    reason: reason,
  };
  console.log("Received values of form: ", values);
  postAbsenceRequest().then((values) => {
    console.log(values);
  });
};

const FormField = () => {
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <Form.Item label="Employee name:">
        <Typography>
          <pre>Pham Gia Hien</pre>
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
  );
};
export default FormField;
