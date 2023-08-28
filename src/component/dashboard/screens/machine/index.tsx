import { useSelector,useDispatch } from "react-redux"
import { RootState } from "../../../../app/store"
import illustrator from '../../../../assets/Illustration.svg'
import { Button } from "antd"

const Index = ()=>{
    const {machine} = useSelector((state:RootState)=>state.machine)

    return(
        <div style={{width:'100%',minHeight:'100vh',height:'100%',backgroundColor:'#fff'}}>
                {
                    !machine && <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <img src={illustrator} style={{width:'35%'}}/>
                            <div style={{fontFamily:'Poppins',fontSize:14,marginTop:10,color:'#222222'}}>
                                No machine created yet.
                            </div>
                            <Button type="primary" style={{marginBottom:20,marginTop:10}}>Create Machine</Button>
                    </div>
                }
        </div>
    )
}

export default Index