import { motion } from 'framer-motion'
import ServicesPhoto from '../../assets/images/people.jpg'
import './services.scss'

const Services = () => {
    return(
        <motion.div className="services">
            <motion.div className="textContainer">
                <p>
                    We focus on helping your brand grow
                    <br /> and move forwad
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src={ServicesPhoto} alt="" />
                    <h1>
                        <b>Unique</b> <span className="title-thin">Ideas</span>
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <b>For Your</b> <span className="title-thin">Business.</span> 
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <motion.div className="box" whileHover={{background: 'lightgray', color:'black'}}>
                    <h2>Graphic/design</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, consequatur!
                    </p>
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div className="box" whileHover={{background: 'lightgray', color:'black'}}>
                    <h2>Print</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, consequatur!
                    </p>
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div className="box" whileHover={{background: 'lightgray', color:'black'}}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, consequatur!
                    </p>
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div className="box" whileHover={{background: 'lightgray', color:'black'}}>
                    <h2>Advertising</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, consequatur!
                    </p>
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div className="box" whileHover={{background: 'lightgray', color:'black'}}>
                    <h2>Promo/items</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, consequatur!
                    </p>
                    {/* <button>Go</button> */}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services