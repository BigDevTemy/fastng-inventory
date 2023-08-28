
import React, { useState } from 'react';
import { Button, Form, Input ,Modal, message,Select,Space} from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../../../../app/store';
import { setMachineType } from '../../../../../app/machinetype';

interface AddMachineAttrProps {
  setopen: (value: boolean) => void;
  open: boolean;
}

const Index: React.FC<AddMachineAttrProps> = ({setopen,open}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const { Option } = Select;
  const {machineattribute} = useSelector((state:RootState)=>state.machineattribute)
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleOk = () => {
    // setIsModalOpen(false);
    setopen(false)
  };

  const handleCancel = () => {
    // setIsModalOpen(false);
    setopen(false)

  };

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
    setDropdownVisible(false);
  };
  const toggleDropdown = () => {
    // Toggle the dropdown visibility
    setDropdownVisible(!dropdownVisible);
  };
 
  const handleFinish=()=>{
    form.validateFields().then(values => {
     
     console.log(values)
     dispatch(setMachineType(values))
     form.resetFields();
     message.info('machine type successfully saved')
     setopen(false)
     
    
      }).catch(err => {

        console.log(err)

      });
  }

  return (
    <>
    
      <Modal 
      title="Add Machine Type" 
      open={open} 
      onOk={handleOk} 
      onCancel={handleCancel}>
        <Form
      
        layout={'vertical'}
        form={form} 
        onFinish={handleFinish}
    >
      
      <Form.Item label="Machine Type" name="title" rules={[{ required: true, message: 'Please input machine type!' }]}>
        <Input placeholder="Add Machine Attributes e.g weight"   />
      </Form.Item>
      <Form.Item label="Machine Attribute" name="attribute"  rules={[{ required: true, message: 'select at least one attribute!' }]}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="select machine attribute"
          defaultValue={['weight']}
          onChange={handleChange}
          optionLabelProp="label"
          onDropdownVisibleChange={toggleDropdown}
          open={dropdownVisible}
        >
          {machineattribute && machineattribute.map((d,index)=>{
            return <Option key={index} value={d} label={d}>
                      <Space>
                         {d}
                      </Space>
                    </Option>
          })}
          
          
        </Select>
      </Form.Item>
      
      <Form.Item>
        <Button type="dashed" htmlType='submit'>Add</Button>
      </Form.Item>
    </Form>
      </Modal>
    </>
  );
};

export default Index;