import { Button, Modal,Space,Form ,Input,Select, message} from 'antd';
import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from '../../../../../app/store';
import { MinusCircleOutlined,PlusCircleOutlined,PlusOutlined } from '@ant-design/icons';
import { setMachine } from '../../../../../app/machine';

interface AddMachineProps {
  setopen: (value: boolean) => void;
  open: boolean;
}
type AttributeType = string[];
const Index: React.FC<AddMachineProps> = ({setopen,open}) => {
  const {machinetype} = useSelector((state:RootState)=>state.machinetype)
  const dispatch = useDispatch()
  const [getAttribute, setAttribute] = useState<AttributeType>([]);
  const [form] = Form.useForm()
  const handleOk = () => {
    // setIsModalOpen(false);
    setopen(false)
  };
  const {Option} = Select

  const handleCancel = () => {
    // setIsModalOpen(false);
    setopen(false)

  };
  const handleFinish = ()=>{
    form.validateFields().then(values => {
     
      console.log(values)
      dispatch(setMachine(values))
      setopen(false)
      message.info('machine successfully created')
      form.resetFields();
      setAttribute([])
     
       }).catch(err => {
 
         console.log(err)
 
       });
  }

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
    const existingIndex = machinetype.filter(
      (item) => item.title === value
    );
    setAttribute(existingIndex[0].attribute)
    // console.log(existingIndex[0].attribute)
    
  };


  return (
    <>
    
      <Modal 
      title="Add Machine" 
      style={{fontFamily:'Poppins'}}
      open={open} 
      onOk={handleOk} 
      onCancel={handleCancel}>

<Form
      
      layout={'vertical'}
      form={form} 
      onFinish={handleFinish}
  >
    
    <Form.Item label="Machine name" name="machine_name" style={{fontFamily:'Poppins'}}  rules={[{ required: true, message: 'Please input machine type!' }]}>
      <Input placeholder="Add machine name" style={{fontFamily:'Poppins'}}   />
    </Form.Item>
    <Form.Item label="Manufacturer" name="manufacturer" style={{fontFamily:'Poppins'}}  rules={[{ required: true, message: 'Please input machine type!' }]}>
      <Input placeholder="Add manufacturer" style={{fontFamily:'Poppins'}}   />
    </Form.Item>
    <Form.Item label="Serial number" name="serial_number" style={{fontFamily:'Poppins'}}  rules={[{ required: true, message: 'Please input machine type!' }]}>
      <Input placeholder="Add serial number" style={{fontFamily:'Poppins'}}   />
    </Form.Item>
    <Form.Item label="Machine Type" name="machine_type"  rules={[{ required: true, message: 'select at least one attribute!' }]}>
      <Select
        
        style={{ width: '100%',fontFamily:'Poppins' }}
        placeholder="Select machine type"
        onChange={handleChange}
        optionLabelProp="label"
       
      >
        {machinetype && machinetype.map((d,index)=>{
          return <Option key={index} value={d.title} label={d.title} style={{fontFamily:'Poppins'}} >
                    <Space>
                       {d.title}
                    </Space>
                  </Option>
        })}
        
        
      </Select>
      
    </Form.Item>

      {getAttribute && getAttribute.map((d,index)=>{
          return <Form.Item label={d} name={d} style={{fontFamily:'Poppins'}}  rules={[{ required: true, message: 'Please input machine attribute!' }]}>
                    <Input placeholder='Add machine attribute' style={{fontFamily:'Poppins'}}   />
                 </Form.Item>
        })}
    
    <Form.Item>
      <Button type="dashed" htmlType='submit' style={{fontFamily:'Poppins'}}>Save </Button>
    </Form.Item>
  </Form>
       
      </Modal>
    </>
  );
};

export default Index;