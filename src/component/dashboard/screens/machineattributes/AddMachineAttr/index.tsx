
import React, { useState } from 'react';
import { Button, Form, Input ,Modal, message} from 'antd';
import {PlusOutlined,MinusCircleOutlined} from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { setMachineAttribute } from '../../../../../app/machineattribute';

interface AddMachineAttrProps {
  setopen: (value: boolean) => void;
  open: boolean;
}

const Index: React.FC<AddMachineAttrProps> = ({setopen,open}) => {
    const [form] = Form.useForm();
    const dispatch  = useDispatch()
    
  const handleOk = () => {
    // setIsModalOpen(false);
    setopen(false)
  };

  const handleCancel = () => {
    // setIsModalOpen(false);
    setopen(false)

  };


  

  const onFinish = async () => {

    form.validateFields().then(values => {
     
     
      const { attribute, attribute_more } = values; // Extract values from the form

  // Combine the values from Name and names into a single array
      const combinedNames = [attribute, ...attribute_more.map((item: any) => item)];

      console.log('Combined Names:', combinedNames);
    
      dispatch(setMachineAttribute(combinedNames))
      setopen(false)
      message.info('attribute successfully updated')
      
      }).catch(err => {

        console.log(err)

      });
  };
 

  return (
    <>
    
      <Modal 
      title="Add Machine Attribute" 
      open={open} 
      onOk={handleOk} 
      onCancel={handleCancel}>

    <Form
      
      layout={'vertical'}
      form={form}
        onFinish={()=>onFinish()}
    >
      
      <Form.Item label="Machine Attribute" name="attribute"  rules={[{ required: true, message: 'Please input your machine attributes!' }]}>
        <Input placeholder="Add Machine Attributes e.g weight" />
      </Form.Item>
      
      <Form.List
        name="attribute_more"
        rules={[
          {
            validator: async (_, names) => {
            //   if (!names || names.length < 1) {
            //     return Promise.reject(new Error('At least 1 attribute'));
            //   }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                label={index === 0 ? 'Add more machine attribute' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  
                  noStyle
                >
                  <Input placeholder="Add machine attribute e.g weight"/>
                </Form.Item>
                {fields.length >= 1 ? (
                  <MinusCircleOutlined
                    color='#ff0000'
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '100%' }}
                icon={<PlusOutlined />}
              >
                Add More
              </Button>
              
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
    
      <Form.Item>
        <Button type="dashed" htmlType='submit'>Add</Button>
      </Form.Item>
    </Form>
       
      </Modal>
    </>
  );
};

export default Index;