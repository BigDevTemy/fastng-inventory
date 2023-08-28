import { useSelector,useDispatch } from "react-redux"
import { RootState } from "../../../../app/store"
import illustrator from '../../../../assets/Illustration.svg'
import { Button,Table,Space } from "antd"
import { EditOutlined,DeleteOutlined } from "@ant-design/icons"
import AddMachineAttr from './AddMachineAttr'
import {useState} from 'react'
import { clearMachineAttribute } from "../../../../app/machineattribute"

const Index = ()=>{
    const {machineattribute} = useSelector((state:RootState)=>state.machineattribute)
    const [pagination, setPagination] = useState({current: 1, pageSize: 5});
    const [open, setopen] = useState<boolean>(false);
 
    // const dispatch = useDispatch()
    // dispatch(clearMachineAttribute())
    console.log('here',machineattribute)
    const columns = [
        {
          title: 'Attribute',
          dataIndex: 'attribute',
          key: 'attribute',
        },
        {
          title: 'Actions',
          key: 'actions',
          render: () => (
            <Space size="middle">
              <Button
                type="primary"
                icon={<EditOutlined style={{color:'#fff'}} />}
                style={{fontFamily:"Poppins",backgroundColor:'rgba(0,0,255,0.6)',color:'#fff'}}
                // Implement your edit logic
              >
                Edit
              </Button>
              <Button
                type="primary"
                icon={<DeleteOutlined style={{color:'white'}} />}
                // Implement your delete logic
                style={{fontFamily:"Poppins",backgroundColor:'rgba(255,0,0,0.6)',color:'#fff'}}
              >
                Delete
              </Button>
            </Space>
          ),
        },
      ];

      const dataSource :any= []
    return(
        <div style={{width:'100%',minHeight:'100vh',height:'100%',backgroundColor:'#fff'}}>
                <AddMachineAttr open={open} setopen={setopen}/>
                {
                    !machineattribute && <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <img src={illustrator} style={{width:'35%'}}/>
                            <div style={{fontFamily:'Poppins',fontSize:14,marginTop:10,color:'#222222'}}>
                                No machine atribute created yet.
                            </div>
                            <Button type="primary" style={{marginBottom:20,marginTop:10}} onClick={()=>setopen(true)}>Create Machine Attribute Type</Button>
                    </div>
                }
                {
                    machineattribute && <div style={{width:'100%',height:'100%'}}>
                    <div style={{width:'100%',display:'flex',flexDirection:'row',padding:20,justifyContent:'flex-end'}}>
                        <Button type="primary" onClick={()=>setopen(true)}>Add New Attribute</Button>
                    </div>
                        <Table 
                        dataSource={machineattribute.map((item:any, index:any) => ({ attribute: item, key: index }))} 
                        columns={columns} 
                        pagination={pagination}
                        />
                    </div>
                }
        </div>
    )
}

export default Index