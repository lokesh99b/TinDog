import { FaUser, FaLockOpen, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './LoginSignUp.css'
import { useEffect, useState  } from "react";
import { motion } from 'framer-motion'
import NavigationBar from "./NavigationBar";



const LoginSignUp = () => {

  useEffect(() => {
    document.body.classList.add('login-signup-body');
    
    return () => {
      document.body.classList.remove('login-signup-body');
    };
  }, []);

  const [action, setAction] = useState("Login");

  return (
   <>
   <NavigationBar />
    <motion.div className="logincontainer"
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 550,
      damping: 150
    }}>
      <div className="loginheader">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <FaUser className="icon" />
          <input type="text" className="text" placeholder="Username"/>
        </div>}
        <div className="input">
          <MdEmail className="icon"/>
          <input type="email" placeholder="email"/>
        </div>
        <div className="input">
          <FaLockOpen className="icon"/>
          <input type="Password" placeholder="Password"/>
        </div>
        {action==="Login"?<div></div>:<div className="input">
          <FaLock className="icon" />
          <input type="Password"  placeholder="Confirm Password"/>
        </div>}
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">
        Forgot Password?<span> Click Here!</span>
      </div>}
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </motion.div>
  </>
  )
}

export default LoginSignUp