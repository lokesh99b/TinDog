
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Herotwo = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView){
        mainControls.start("visible");
    }
  })
  
  return (
    <div ref={ref}>
        <motion.div 
        variants={{
          hidden: { opacity: 0, y:75},
          visible: { opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5, delay: 1}}
        >
        <div>
        <h1 className='d-flex p-3 justify-content-center text-center '>Find a match. For You, And Your Hooman!</h1>
        </div>
        <div>
        <h2 className='d-flex p-3 pb-5 justify-content-center text-center '>Welcome to TinDog! Over the past five years, we've become a leading platform for connecting dog lovers and their furry friends. Our user base has grown exponentially, with millions of successful matches made across the globe. We've expanded our services to include dog-friendly events, expert advice, and premium features that enhance the bonding experience. Our commitment to quality and user satisfaction has earned us numerous accolades and a loyal community. TinDog's success story is a testament to our innovative approach and dedication to bringing joy to dogs and their owners. Join us and be part of the TinDog legacy!</h2>
        </div>
        </motion.div>
      </div>
  )
}

export default Herotwo