import {motion} from 'framer-motion'
import ArrowRight from '../../assets/images/right-arrow.svg'
import './about.scss'

const variants = {
    aboutButton:{
        opacity: 0,
        x: 10,
        transition:{
            duration: 2,
            repeat: Infinity,
        }
    }
}


const About = () => {
    return (
        <div className="about">
            <div className="textContainer">
                <div className="titleContainer">
                    <h2>Growing brands for creative, commercial and cultural impact.</h2>
                </div>
                <div className="descContainer">
                    <div className="aboutDesc">
                        We are an artistic design company based in Nairobi - Kenya offering cutting-edge solutions in Graphic Design, Advertising, Printing and Building Corporate Identity. We pride ourselves in offering quality jobs which build a positive rapport between us and our Clients. We are devoted to what we do and we always excute our assignments in an unsuparssed fashion; paying attention to the smallest detail in order to provide you a customized service second to none.
                    </div>
                    <span className="aboutusButton">
                        <p>Read more about us</p>
                        <motion.img src={ArrowRight} alt="" variants={variants} animate='aboutButton'/>
                    </span>
                    {/* <div className="valuesDesc">
                        <div className="mission">
                            <h3>Mission</h3>
                            <p> To use our talents and skills to provide Quality and Timely services to our Clients.</p>
                        </div>
                        <div className="mission">
                            <h3>Vision</h3>
                            <p>To see growth from within, to our Clients through a steady commitment in Service to God and Humanity.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default About