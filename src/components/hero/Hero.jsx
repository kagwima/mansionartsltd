import {motion} from 'framer-motion'
import ScrollImg from '../../assets/images/scroll.png' 
import './hero.scss'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition:{
            duration: 2,
            repeat: Infinity,
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate:{
        x: '-220%',
        transition: {
            repeat:Infinity,
            repeatType: 'mirror',
            duration: 20,
        },
    },
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
                    <motion.h2 variants={textVariants}>Lorem, ipsum.</motion.h2>
                    <motion.h1 variants={textVariants}>Lorem ipsum dolor sit amet.</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See the latest works</motion.button>
                        <motion.button variants={textVariants}>Contact us</motion.button>
                    </motion.div>
                    <motion.img src={ScrollImg} alt="" variants={textVariants} animate='scrollButton'/>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>
                Graphic Design Printing Branding Promo Items Advertising
            </motion.div>
            <div className="imageContainer">
                {/* <img src="" alt="" /> */}
            </div>
        </div>
    )
}

export default Hero