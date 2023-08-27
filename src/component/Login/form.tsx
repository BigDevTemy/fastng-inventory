import React from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input, Space } from 'antd';

const SubmitButton = ({ form }: { form: FormInstance }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    );
  }, [values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

const Index: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Form.Item name="email" label="Email Address" rules={[{ required: true }]}>
        <Input placeholder='Email Address' />
      </Form.Item>
      <Form.Item name="email" label="Email Address" rules={[{ required: true }]}>
        <Input placeholder='Email Address' />
      </Form.Item>
     
      {/* <Form.Item>
        <Space>
          <SubmitButton form={form} />
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item> */}
    </Form>
  );
};

export default Index;