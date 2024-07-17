import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation, } from 'framer-motion'
import { Link } from 'react-router-dom';
import '../styles/pricing.css'

const Pricing = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView){
        mainControls.start("visible");
    }
  })

  return (
    <div ref={ref} className="container pt-5">
      <motion.div
      variants={{
        hidden: { opacity: 0, y:75},
        visible: { opacity: 1, y: 0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.5, delay: 0.5}}
    >
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h2 className="display-4 fw-normal text-body-emphasis">A Plan for Every Dog's Needs</h2>
          <p className="fs-5 text-body-secondary">Simple and affordable price plans for you and your dog.</p>
        </div>
    
      <main />
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <motion.div className="card mb-4 rounded-3 shadow-sm" 
            whileHover={{
              x: [0, -10, 10, -10, 10, -10, 10, 0],
            }}
            transition={{
              duration: 0.6, 
              ease: 'easeInOut', 
            }}
            >
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Chihuahua</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>5 Matches Per Day</li>
                  <li>10 Messages Per Day</li>
                  <li>Unlimited App usage</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-dark">
                  <Link to="/LoginSignUp" style={{ color: 'inherit', textDecoration: 'none' }}>Sign up for free</Link>
                </button>
              </div>
            </motion.div>
          </div>
          <motion.div className="col" 
          whileHover={{ scale:1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)"
           }}
          >
            <div className="card mb-4 rounded-3 shadow-sm border-dark">
                  <div className="card-header py-3 text-bg-dark border-dark">
                    <h4 className="my-0 fw-normal">Mastiff</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Priority Listing</li>
                      <li>unlimited Matches & Messages</li>
                      <li>Unlimited App Usage</li>
                    </ul>
                  <button type="button" className="w-100 btn btn-lg btn-dark">Contact us</button>
                  </div>
              </div>
          </motion.div>
          <motion.div className="col"
          whileHover={{
            x: [0, -10, 10, -10, 10, -10, 10, 0], 
          }}
          transition={{
            duration: 0.6, 
            ease: 'easeInOut',
          }}
          >
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Labrador</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Unlimited Matches</li>
                  <li>Unlimited Messages</li>
                  <li>Unlimited App Usage</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-dark">Get started</button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Pricing