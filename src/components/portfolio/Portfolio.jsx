import { useRef } from 'react'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import './portfolio.scss'

const items = [
    {
        id: 1,
        title: 'Client One',
        img: 'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laudantium fugiat corporis quo nam doloremque. Laborum fugiat temporibus, quidem provident quos assumenda nostrum vitae incidunt?`
    },
    {
        id: 2,
        title: 'Client Two',
        img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laudantium fugiat corporis quo nam doloremque. Laborum fugiat temporibus, quidem provident quos assumenda nostrum vitae incidunt?`
    },    {
        id: 3,
        title: 'Client Three',
        img: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laudantium fugiat corporis quo nam doloremque. Laborum fugiat temporibus, quidem provident quos assumenda nostrum vitae incidunt?`
    },
    {
        id: 4,
        title: 'Client Four',
        img: 'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laudantium fugiat corporis quo nam doloremque. Laborum fugiat temporibus, quidem provident quos assumenda nostrum vitae incidunt?`
    }
]

const Single = ({item}) =>{

    const ref = useRef();

    const{scrollYProgress} = useScroll({
        target:ref,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);

    return(
        <section ref={ref} id='Portfolio'>
            <div className="container">
                <p></p>
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="texContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button className='portfolio-button'>View More</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();

    const{scrollYProgress} = useScroll({
        target:ref,
        offset: ['end end', 'start start']
    });

    const scaleX = useSpring( scrollYProgress,{
        stiffness: 100,
        damping:30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Feautured Works</h1>
                <motion.div style={{scaleX}} className="progress-bar">
                </motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Portfolio