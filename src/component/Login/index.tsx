
import {SearchOutlined} from '@ant-design/icons'
import type { FormInstance } from 'antd';
import Illustration from '../../assets/Illustration.svg'
import React,{useEffect} from 'react';
import { Button, Form, Input, Space,message } from 'antd';
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from '../../app/store';
import { setUserDetails } from '../../app/userDetails';
import { useNavigate } from 'react-router-dom';

const Index = ():JSX.Element=>{
    const {value} = useSelector((state:RootState)=>state.message)
    const {userdetails} = useSelector((state:RootState)=>state.userdetails)
  console.log('userdetails',userdetails)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [form] = Form.useForm();

    useEffect(()=>{
      if(userdetails){
        navigate('/dashboard')
      }

    },[userdetails])

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
          <Button type="primary" style={{flex:1,width:'100%',borderRadius:12}} htmlType="submit" disabled={!submittable}>
            Submit
          </Button>
        );
      };

      const handleLogin = async()=>{
       
        try {
          const values = await form.validateFields();
          if(values){
            dispatch(setUserDetails(values))
            message.info('You have successfully logged In')
            navigate('/dashboard',{replace:true})
            console.log(userdetails)
          }
        } catch (errorInfo) {
          console.log('Failed:', errorInfo);
        }
      }

    return(
        <div style={{width:'100%',height:'100vh',padding:0,backgroundColor:'#E7EFF3'}}>
           <div style={{width:'100%',height:50,backgroundColor:"#4796BD",paddingRight:20,display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                <div style={{marginLeft:20}}>
                    <Button type='primary' style={{backgroundColor:"#fff",color:'#000',fontFamily:'Poppins'}}>Logo</Button>
                </div>
                <div style={{marginRight:20}}>
                    <SearchOutlined style={{color:'#fff'}}/>
                </div>
           </div>
           <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:'45%',height:'45%',backgroundColor:'#fff',borderRadius:12,padding:20,display:'flex',flex:'row',alignItems:'center'}}>
                            <div style={{flex:1,width:'100%',margin:10}}>
                                <img src={Illustration} style={{width:'100%'}}/>
                            </div>
                            <div style={{flex:1,display:'flex',width:'100%',height:'100%',alignItems:"center",margin:10,flexDirection:'column',justifyContent:'center'}}>
                                    <div style={{color:'#222',fontFamily:'Poppins',fontSize:18,marginTop:20,}}>Login</div>
                                    <div style={{flex:1,marginTop:20,width:'90%'}}>
                                        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={()=>handleLogin()}>
                                            <Form.Item name="email" label="Email Address" rules={[{ required: true }]} style={{marginBottom:8}}>
                                                <Input  type="email" placeholder='Email Address' />
                                            </Form.Item>
                                            <Form.Item name="password" label="Password" rules={[{ required: true }]} style={{marginBottom:20}}>
                                                <Input type='password' placeholder='Password' />
                                            </Form.Item>
                                            
                                            <Form.Item>
                                                <Space>
                                                <SubmitButton form={form} />
                                                </Space>
                                            </Form.Item>
                                        </Form>
                                    </div>
                            </div>

                    </div>
           </div>
        </div>
    )
}

export default Index;