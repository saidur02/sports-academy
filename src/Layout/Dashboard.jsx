import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructors from '../Hooks/useInstructors';

const Dashboard = () => {

    const [isAdmin] = useAdmin()

    const [isInstructors] = useInstructors()

    return (
        <div className="drawer bg-slate-300 lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-slate-500 text-black">
                   
                  {
                    isAdmin ?<>
                    <li><Link to='/dashboard/allclasses'>Manage Classes</Link></li>
                    <li><Link to='/dashboard/users'>Manage Users</Link></li>
                    </> : <>
                    {
                        isInstructors ?<>
                        <li><Link to='/dashboard/addclass'>Add a Class</Link></li>
                    <li><Link to='/dashboard/myclass'>My Classes</Link></li>
                        </>:<>
                        <li><Link to='/dashboard/studentclass'> ST My Class</Link></li>
                    <li><Link to='/dashboard/enrollclass'>Enrolled Classe</Link></li>
                    </>
                        
                    }
                   
                    </>
                    
                  }
                 
                    <div className="divider"></div>
                    <li><Link to='/'>Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;