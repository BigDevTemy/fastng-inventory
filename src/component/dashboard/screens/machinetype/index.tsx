import { useSelector,useDispatch } from "react-redux"
import { RootState } from "../../../../app/store"
import illustrator from '../../../../assets/Illustration.svg'
import { Button,Table,Space } from "antd"
import { EditOutlined,DeleteOutlined } from "@ant-design/icons"
import AddMachineType from './AddMachineType'
import { useState } from "react"
const Index = ()=>{
    const {machinetype} = useSelector((state:RootState)=>state.machinetype)
    console.log(machinetype)
    const [open, setopen] = useState<boolean>(false);
    const [pagination, setPagination] = useState({current: 1, pageSize: 5});
    const columns = [
        {
          title: 'Machine Type',
          dataIndex: 'title',
          key: 'title',
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
    return(
        <div style={{width:'100%',minHeight:'100vh',height:'100%',backgroundColor:'#fff'}}>
            <AddMachineType open={open} setopen={setopen}  />
                {
                    !machinetype && <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <img src={illustrator} style={{width:'35%'}}/>
                            <div style={{fontFamily:'Poppins',fontSize:14,marginTop:10,color:'#222222'}}>
                                No machine type created yet.
                            </div>
                            <Button type="primary" style={{marginBottom:20,marginTop:10}} onClick={()=>setopen(true)}>Create Machine Type</Button>
                    </div>
                }

{
                    machinetype && <div style={{width:'100%',height:'100%'}}>
                    <div style={{width:'100%',display:'flex',flexDirection:'row',padding:20,justifyContent:'flex-end'}}>
                        <Button type="primary" onClick={()=>setopen(true)}>Add New Machine Type</Button>
                    </div>
                        <Table 
                        dataSource={machinetype} 
                        columns={columns} 
                        pagination={pagination}
                        />
                    </div>
                }
        </div>
    )
}

export default Index