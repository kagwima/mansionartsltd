import { useRef } from 'react'
import './parallax.scss'
import {motion, useScroll, useTransform} from 'framer-motion'

const Parallax = ({type}) => {

const ref = useRef();

const {scrollYProgress} = useScroll({
    target:ref,
    offset: ['start start', 'end start']
});

const textT = useTransform(scrollYProgress, [0,1], ['0%', '500%']);
const bgT = useTransform(scrollYProgress, [0,1], ['0%', '500%']);
const xaxisT = useTransform(scrollYProgress, [0,1], ['0%', '500%']);


    return (
        <div ref = {ref} className="parallax" style={{ background: type==='services'? '#000': '#000'}}>
            <motion.h1  style={{y:textT}}>{
            type === 'services' ? 'Our Services' : 
            type === 'portfolio' ? 'Portfolio' : 'Contact Us'
            }
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div classNstyle={{y:bgT}} ame="planets"></motion.div>
            <motion.div style={{x:xaxisT}}className="stars"></motion.div>
        </div>
    )
}

export default Parallax