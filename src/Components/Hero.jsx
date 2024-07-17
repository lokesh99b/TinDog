import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import dog from '../assets/images/dogsplayingseven.jpg'

const Hero = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView){
        mainControls.start("visible");
    }
  })

  return (
    <div ref={ref}>
    <motion.div className="container col-xxl-8 px-4 py-5 p-3 mb-2 bg-info-subtle text-info-emphasis"  style={{'border-radius': '20px'}}
    variants={{
      hidden: { opacity: 0, y:75},
      visible: { opacity: 1, y: 0},
    }}
    initial="hidden"
    animate={mainControls}
    transition={{duration:0.5, delay: 1}}
    >
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={dog} className="d-block mx-lg-auto border rounded-4 img-fluid shadow-lg" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">The Real Deal!</h1>
        <p className="lead">TinDog is the real deal, trusted by millions worldwide. With five years of proven success, we’ve revolutionized how dog lovers connect. Our robust platform, glowing user reviews, and numerous accolades showcase our commitment to quality and satisfaction. Join TinDog and experience the ultimate community for dog enthusiasts.</p>
      </div>
    </div>
  </motion.div>
  </div>
  )
}

export default Hero