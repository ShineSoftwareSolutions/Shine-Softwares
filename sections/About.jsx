'use client';
import {motion} from 'framer-motion'
import { TypingText } from '../components';
import styles from '../styles'
import {fadeIn,staggerContainer} from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div  className='gradient-02 z-0'/>
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Shine Software"
                  textStyles="text-center"
      />
      <motion.p 
      variants={fadeIn('up','tween',0.2, 1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
      Our software development company is committed to providing exceptional services to our clients. We understand that every project is unique, and we work closely with our clients to ensure that we fully understand their needs and goals.
     Our Specialize In
      <span className='font-extrabold text-white'> Web Development     </span><span className='font-extrabold text-white'>  App Development    </span><span className='font-extrabold text-white'>  UI/UX Design</span>
      
      
      </motion.p>

    </motion.div>
  </section>
);

export default About;
