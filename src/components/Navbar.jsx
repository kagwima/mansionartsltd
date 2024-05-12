import {motion} from 'framer-motion'
import Logo from '../assets/images/mansion-arts-logo.png'
import Sidebar from './sidebar/Sidebar'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial={{ opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:0.5}}
                >
                    <img className='logo' src={Logo} alt="Mansion Arts Logo" />
                </motion.span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/youtube.png" alt="" /></a>
                    {/* <a href="#"><img src="/linkedin.png" alt="" /></a>
                    <a href="#"><img src="/tiktok.png" alt="" /></a> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar