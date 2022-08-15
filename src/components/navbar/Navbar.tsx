import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { useDispatch } from 'react-redux'
import { handleToggle } from '../../redux/store/action/darkModeAction'
// import MenuIcon from '@mui/icons-material/Menu';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const Navbar = () => {
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        {/* English */}
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" onClick={() => dispatch(handleToggle())} />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <EmailOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </div>

                    <div className="item">
                        <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="avatar" />
                    </div>
                    {/* <div className="item">
                        <MenuIcon className="icon" />
                    </div> */}
                    {/* <div className="item">
                        <SettingsIcon className="icon" />

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
