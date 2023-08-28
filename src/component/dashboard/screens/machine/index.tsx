import { useSelector,useDispatch } from "react-redux"
import { RootState } from "../../../../app/store"
import illustrator from '../../../../assets/Illustration.svg'
import { Button ,Input} from "antd"
import AddMachine from './Addmachine'
import { useState } from "react"
import Escavator from '../../../../assets/machine/Escavator.webp'
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"

const Index = ()=>{

    
    const {machine} = useSelector((state:RootState)=>state.machine)
    console.log(machine)
    const [open,setopen] = useState(false)

    return(
        <div style={{width:'100%',minHeight:'100vh',height:'100%',backgroundColor:'#fff',padding:10,position:'relative'}}>
                <AddMachine setopen={setopen} open={open}/>
                {
                    !machine && <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <img src={illustrator} style={{width:'35%'}}/>
                            <div style={{fontFamily:'Poppins',fontSize:14,marginTop:10,color:'#222222'}}>
                                No machine created yet.
                            </div>
                            <Button type="primary" onClick={()=>setopen(true)} style={{marginBottom:20,marginTop:10}}>Create Machine</Button>
                    </div>
                }
                <div style={{width:'100%',display:'flex',flexDirection:'row',padding:20,justifyContent:'space-between'}}>
                <Input placeholder="Search machine" style={{fontFamily:'Poppins',width:'25%'}}   />
                        <Button type="primary" onClick={()=>setopen(true)}>Add New Machine Type</Button>
                </div>
                <div style={{width:'100%',display:'flex',flexDirection:'row',height:'100%',flexWrap:'wrap',flex:'1 1 50%'}}>
                    {
                        machine && machine.map((d,index)=>{
                            return <div key={index} style={{width:'30%',height:'48%',borderRadius:20,borderColor:'#222' ,position:'relative',backgroundImage: 'url("../../../../assets/machine/Escavator.webp")',margin:10}}>
                                        <img src={Escavator} style={{width:'100%',borderRadius:20}}/>
                                        <div style={{width:'100%',height:'40%',backgroundColor:'#222',position:'absolute',bottom:0,borderBottomLeftRadius:15,borderBottomRightRadius:15,padding:10}}>
                                            <div style={{color:'#fff',fontFamily:'Poppins'}}>machine name: {d.machine_name}</div>
                                            <div style={{color:'#fff',fontFamily:'Poppins'}}>machine type: {d.machine_type}</div>
                                            <div style={{color:'#fff',fontFamily:'Poppins',marginTop:5}}><Button style={{backgroundColor:'rgba(0,0,255,0.7)'}}><EditOutlined style={{color:'#fff'}}/></Button><Button style={{backgroundColor:'rgba(255,0,0,0.7',marginLeft:5}}><DeleteOutlined style={{color:'#fff'}}/></Button></div>
                                        </div>
                                    </div>
                        })
                    }
                </div>
               
        </div>
    )
}

export default Index