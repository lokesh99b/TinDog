import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import logo from '../assets/images/logo.png'
import mashable from '../assets/images/mashable.png'
import bizinsider from '../assets/images/bizinsider.png'
import tnw from '../assets/images/tnw.png'


const Features = () => {

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
      <motion.div class="container px-4 py-5" id="custom-cards"
      variants={{
        hidden: { opacity: 0, y:75},
        visible: { opacity: 1, y: 0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration:1, delay: 0.5}}
      >
        <h2 class="pb-2 border-bottom"></h2>
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <motion.div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              whileHover={{ scale:1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)"
               }}
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Our safety is provided by leading anti-scam system in the industry.</h3>
                <h2>Protection</h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img id="first" src={logo} alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small><Link to='/LoginSignUp' style={{ color: 'inherit', textDecoration: 'none' }}>Try Today!</Link></small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div class="col">
            <motion.div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              whileHover={{ scale:1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)"
               }}
            >
              <div id="two" class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">The #1 Trusted Dating App</h3>
                <h2>Ask our Partners!</h2><br/>
                <img src={mashable} /><br/>
                <img src={bizinsider} /><br/>
                <img src={tnw} />
                <ul class="d-flex list-unstyled mt-3">
                  <li class="me-auto">
                    <img id="second" src={logo} alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small>India</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div class="col">
            <motion.div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              whileHover={{ scale:1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)"
               }}
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">All members are personally confirmed by our staff to prove they are real.</h3>
                <p>Verification</p>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img id="third" src={logo} alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small>California</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Features