import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const hoverVariant = {
  hover: {
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
    transition: { duration: 0.3 },
  },
};

const Footer = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const items = ['Home', 'Features', 'Pricing', 'FAQs', 'About']

  useEffect(() => {
    if (isInView){
        mainControls.start("visible");
        slideControls.start("visible");
    }
  })

  return (
    <div ref={ref}>
    <motion.div class="container" 
    variants={{
      hidden: { opacity: 0, y:75},
      visible: { opacity: 1, y: 0},
    }}
    initial="hidden"
    animate={mainControls}
    transition={{duration:0.5, delay: 0.5}}
    >
        <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    {items.map((item, index) => (
        <motion.li
          key={index}
          whileHover="hover" // Apply hover variant on hover
          variants={hoverVariant} // Use the defined hover variant
          style={{ color: '0px 0px 8px rgb(255, 255, 255)' ,textShadow: '0px 0px 8px rgb(255, 255, 255)', margin: '10px 0' ,padding: '5px' }} // Initial text shadow state
        >
          {item}
        </motion.li>
      ))}
    </ul>
    <p class="text-center text-body-secondary">© 2024 TinDog, Inc</p>
  </footer>
</motion.div>
</div>
  )
}

export default Footer