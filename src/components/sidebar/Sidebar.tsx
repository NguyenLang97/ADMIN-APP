import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleLight, handleDark } from '../../redux/store/action/darkModeAction';
import { authLogout } from '../../redux/store/action/authAction';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

const Sidebar = () => {
    const dispatch = useDispatch();
    const darkmode = useSelector<unknown, | any>((state) => state.darkModeReducer.darkMode);
    const handleLogout = () => {
        dispatch(authLogout(null));
        console.log('dang xuat');
    };
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">ADMIN</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    {/* <p className="title">MENU</p> */}
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <span>Dashboard</span>
                            <HomeSharpIcon className="icon" />
                        </li>
                    </Link>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li>
                            <span>Customer</span>
                            <PersonOutlineIcon className="icon" />
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li>
                            <span>Products</span>
                            <CategoryRoundedIcon className="icon" />
                        </li>
                    </Link>
                    <li>
                        <span>Orders</span>
                        <CreditCardIcon className="icon" />
                    </li>
                    <li>
                        <span>Delivery</span>
                        <LocalShippingIcon className="icon" />
                    </li>

                    <li>
                        <span>Notifications</span>
                        <NotificationsNoneIcon className="icon" />
                    </li>

                    <li>
                        <span>Profile</span>
                        <AccountCircleOutlinedIcon className="icon" />
                    </li>
                    <li onClick={handleLogout}>
                        <span >Logout</span>
                        <ExitToAppIcon className="icon" />
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch(handleLight(false))}></div>
                <div className="colorOption" onClick={() => dispatch(handleDark(true))}></div>
            </div>
        </div>
    );
};

export default Sidebar;
