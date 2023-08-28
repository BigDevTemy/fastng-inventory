import {Menu} from "antd";
import {Link} from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Index = () => {

       // const defaultOpenKeys = selectedKeys.split('/')[1];

    return (
        <>


            <div className="flex items-center justify-center py-2 px-2">
                
                {/*<AppsNavigation/>*/}
            </div>


            <Menu
                className="bg-blue text-white text-center text-base font-medium my-5"
                mode="inline"
                >


                <MenuItemGroup key="payroll" className="gx-menu-group"
                               title={<div className="px-3 text-left text-white"></div>}>


                    <SubMenu key="company"
                             title={<div className="flex my-3 text-white ">
                                 <div className="text-lg">

                                    
                                 </div>
                                 <div className="px-6 -my-3">Machine</div>
                             </div>}>


                        <Menu.Item key="machine">
                            <Link to="machine">
                                <span className="pl-7 text-gray-200 text-sm">Machine</span>
                            </Link>
                        </Menu.Item>
                       
                        <Menu.Item key="machinetype">
                            <Link to="machinetype">
                                <span className="pl-7 text-gray-200 text-sm">Machine Types</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="machineattribute">
                            <Link to="machineattribute">
                                <span className="pl-7 text-gray-200 text-sm">Machine Attributes</span>
                            </Link>
                        </Menu.Item>
                    
                    </SubMenu>
                   

                </MenuItemGroup>

            </Menu>
        </>
    );
};


export default Index;