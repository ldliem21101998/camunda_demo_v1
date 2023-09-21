import React from "react";
import { Form, DatePicker, Input, Button, Typography } from "antd";

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
  const rangeValue = fieldsValue["range-picker"];
  const values = {
    ...fieldsValue,
    "range-picker": [
      rangeValue[0].format("YYYY-MM-DD"),
      rangeValue[1].format("YYYY-MM-DD"),
    ],
  };
  console.log("Received values of form: ", values);
};

const FormField = () => {
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <Form.Item name="id" label="Employee name:">
        <Typography>
          <pre>Pham Gia Hien</pre>
        </Typography>
      </Form.Item>
      <Form.Item name="range-picker" label="RangePicker:" {...rangeConfig}>
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
