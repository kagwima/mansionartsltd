import { motion } from 'framer-motion'
import './contact.scss'

const variants = {
    initial:{
        y:500,
        opacity: 0,
    },
    animate:{
        y:0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    }
}

const Contact = () => {
    return (
        <motion.div  className="contact" variants={variants} initial='initial' whileInView='animate'>
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>info@mansionarts.net</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Pioneer House, Kenyatta Avenue</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>(+254)700-000-000</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">

                {/* <svg width="800px" height="800px" viewBox="0 -0.5 25 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.24033 8.16795C6.99433 7.37295 7.26133 7.14995 7.58233 7.04695C7.80482 6.98843 8.03822 6.98499 8.26233 7.03695C8.55733 7.12295 8.63433 7.18795 9.60233 8.15095C10.4523 8.99695 10.5363 9.08895 10.6183 9.25095C10.7769 9.54253 10.8024 9.88825 10.6883 10.1999C10.6043 10.4349 10.4803 10.5909 9.96533 11.1089L9.62933 11.4459C9.54093 11.5356 9.51997 11.6719 9.57733 11.7839C10.3232 13.0565 11.3812 14.1179 12.6513 14.8679C12.7978 14.9465 12.9783 14.921 13.0973 14.8049L13.4203 14.4869C13.6199 14.2821 13.8313 14.0891 14.0533 13.9089C14.4015 13.6935 14.8362 13.6727 15.2033 13.8539C15.3823 13.9379 15.4423 13.9929 16.3193 14.8669C17.2193 15.7669 17.2483 15.7959 17.3493 16.0029C17.5379 16.3458 17.536 16.7618 17.3443 17.1029C17.2443 17.2949 17.1883 17.3649 16.6803 17.8839C16.3733 18.1979 16.0803 18.4839 16.0383 18.5259C15.6188 18.8727 15.081 19.043 14.5383 19.0009C13.5455 18.9101 12.5847 18.6029 11.7233 18.1009C9.81416 17.0894 8.18898 15.6155 6.99633 13.8139C6.73552 13.4373 6.50353 13.0415 6.30233 12.6299C5.76624 11.7109 5.48909 10.6638 5.50033 9.59995C5.54065 9.04147 5.8081 8.52391 6.24033 8.16795Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.8417 4.29409C14.4518 4.15416 14.0224 4.35677 13.8824 4.74664C13.7425 5.1365 13.9451 5.56598 14.335 5.70591L14.8417 4.29409ZM18.7868 10.0832C18.9333 10.4707 19.3661 10.666 19.7536 10.5195C20.141 10.373 20.3364 9.94021 20.1899 9.55276L18.7868 10.0832ZM13.6536 6.52142C13.2495 6.43018 12.848 6.68374 12.7568 7.08778C12.6655 7.49182 12.9191 7.89333 13.3231 7.98458L13.6536 6.52142ZM16.5696 11.1774C16.6676 11.5799 17.0733 11.8267 17.4757 11.7287C17.8782 11.6307 18.125 11.2251 18.0271 10.8226L16.5696 11.1774ZM14.335 5.70591C16.3882 6.44286 18.0153 8.04271 18.7868 10.0832L20.1899 9.55276C19.2631 7.10139 17.3084 5.17942 14.8417 4.29409L14.335 5.70591ZM13.3231 7.98458C14.9238 8.34607 16.1815 9.58301 16.5696 11.1774L18.0271 10.8226C17.5042 8.67475 15.8098 7.0084 13.6536 6.52142L13.3231 7.98458Z" fill="#000000"/>
                </svg> */}

                <form>
                    <input type="text" required placeholder='Name' />
                    <input type="email" required placeholder='Email'/>
                    <textarea rows={8} placeholder='Message'/>
                    <button>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact