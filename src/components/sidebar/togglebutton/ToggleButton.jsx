import {motion} from 'framer-motion'
import './togglebutton.scss'

const ToggleButton = ({setOpen}) => {
    return (
        <button onClick={()=>setOpen((prev)=>!prev)}>
            <svg width='23' height='23' viewBox='0 0 23 23' fill='none'>
                <motion.path d='M2 6h19' stroke='white' stroke-width='3' stroke-linecap='round' variants={{closed:{d: 'M 2 6 L 21 6' }, open:{ d: 'M 3 16.5 L 17 2.5'} }}/>
                <motion.path d='M2 12h19' stroke='white' stroke-width='3' stroke-linecap='round' variants={{closed: {opacity: 1}, open: {opacity}}}/>
                <motion.path d='M2 18h19' stroke='white' stroke-width='3' stroke-linecap='round' variants={{closed:{d: 'M 2 18 R 21 18'}, open:{ d: 'M 2 2.5 R 20 2.5'} }}/>
            </svg>
        </button>
    )
}

export default ToggleButton