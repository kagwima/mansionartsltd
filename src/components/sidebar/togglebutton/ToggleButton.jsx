import {motion} from 'framer-motion'
import './togglebutton.scss'

const ToggleButton = ({setOpen}) => {
    return (
        <button onClick={()=>setOpen((prev)=>!prev)}>
            <svg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 6h19' stroke='black' stroke-width='2'/>
                <path d='M2 12h19' stroke='black' stroke-width='2'/>
                <path d='M2 18h19' stroke='black' stroke-width='2'/>
            </svg>
        </button>
    )
}

export default ToggleButton