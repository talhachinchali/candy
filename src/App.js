import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import song from "./1.wav";
import { ReactComponent as YourSvgComponent } from './Lily-Pad-Blob.svg';
import { ReactComponent as YourSvgCircle } from './Circle-Overlap-1.svg';
import {  motion,useInView } from "framer-motion";
import Spline from '@splinetool/react-spline';
import {useEffect} from "react";




import React, { useRef } from "react";

export default function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const aboutRef=useRef(null);
  const isInView = useInView(aboutRef, { once: true });
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }


  const about = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  const contact = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  }
  
  
  const audio=useRef(null);
  const mouse=()=>{
    if(audio.current){
      audio.current.volume = 0.04;
    audio.current.play();
    }
  }
  
  
  return (
    <div className=" bg-green-100 -z-20 overflow-hidden" style={{height:"2560px",scrollBehavior:"smooth"}}>
      <section id="home">
    <div className="flex justify-center items-center bg-green-100 min-h-screen h-auto -z-20">
     
   <Nav />



      <div className="absolute left-6 top-40 z-20 translate-x-10 ">
        <div className="flex items-center justify-center rounded-full bg-green-400 w-96 h-96 shadow-2xl z-10  translate-x-2 hidden sm:block" style={{boxShadow:"4px 4px 16px black"}}>
        <div className="flex items-center justify-center rounded-full bg-white  shadow-2xl relative right-4" style={{boxShadow:"4px 4px 16px black",width:"350px",height:"350px"}}>
          <div className="flex items-center justify-center rounded-full bg-orange-400 w-80 h-80 shadow-2xl relative right-4 hover:w-70 hover:h-70" style={{boxShadow:"6px 6px 16px black"}}>
            <div className="flex items-center  justify-center rounded-full bg-white w-60 h-60 shadow-2xl ring-offset-4 ring-offset-white relative right-10 hover:bg-yellow-500 transition-colors duration-500 ease-in hover:scale-125 transition-transform duration-500 ease-in-out " id="number" style={{boxShadow:"10px 10px 16px black"}} onMouseEnter={mouse}>
            <Link to="/you">
  <h1 className="text-blue-500 hover:text-white cursor-pointer text-6xl font-semibold font-fasthand" style={{ textShadow: "4px 4px 5px black" }}>
    Candy
  </h1>
</Link>
<audio ref={audio} src={song}  />

            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="h-3/5 w-6 bg-black absolute bottom-11 rounded-md z-10 hidden sm:block" style={{left:"100px"}}></div>
      <h1 style={{ whiteSpace: 'pre-line' }}>
 <motion.h1 initial="hidden"
    animate="visible"
    variants={item} className="relative font-bold z-10">The{'\n'}</motion.h1> 
 <div >
  <motion.h1 initial="hidden"
    animate="visible"
    variants={item}
    transition={{delay:0.3}}  className="relative font-extrabold text-6xl z-10" style={{textShadow:"2px 2px 6px black",'@media (max-width: 668px)': {
      top:"80%",left:"0%"
    },}}>INDIAN{'\n'}</motion.h1></div>
 <motion.h1 initial="hidden"
    animate="visible"
    variants={item}
    transition={{delay:0.5}}
    className="relative font-semibold z-10">Candy</motion.h1> 
</h1>
<div className="absolute inset-0 w-screen flex justify-center items-center  ">
  
    <YourSvgComponent className="absolute left-96 z-5 " style={{ width: "150%", height: "150%", left: "-1100px", bottom: "-400px", transform: "rotate(-90deg)", filter: "drop-shadow(-8px -0px 4px rgba(0, 0, 1, 0.6))" }} fill="#ffa550" />
    <YourSvgCircle className="absolute z-10 w-96 h-96" />
 
</div>


<motion.div
      className="w-5 h-5 absolute top-3/5 bg-black top-72 sm:top-96 sm:left-1/2" style={{left:"50%"}}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
      //<!--width:"1260px",height:"1260px",left:"400px"-->
    /><div className=" absolute z-10   scene  overflow-hidden" style={{}}>
      <Spline className="overflow-hidden" scene="https://prod.spline.design/v5mPO5STrl5Uow5q/scene.splinecode" />
  
  
  
     </div>
  
    </div>
    </section>
    <section id='about'>
    <div ref={aboutRef} id="about" >
    <motion.h1 initial="hidden"  animate={isInView ? "visible" : "hidden"} variants={about} transition={{delay:0.5}} className="relative  sm:top-96 font-Fontspring text-2xl font-bold top-72" style={{left:"5%",fontSize:"4.2vh"
     }}><ins>About</ins></motion.h1>
    <p className="relative top-10 font-chela text-slate-500 p-12 sm:p-40" style={{left:"6%",top:"250px", fontSize:"2.2vh",transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
     }}>"Welcome to Indian Candy, a delightful journey into the vibrant and diverse world of Indian candies. Our website celebrates the rich cultural heritage and culinary traditions of India, offering a wide range of mouthwatering candies that capture the essence of this incredible land.

     Indulge your taste buds in a kaleidoscope of flavors as you explore the exquisite assortment of Indian candies. From the sweet and creamy textures of traditional milk-based treats like Barfi and Gulab Jamun, to the tangy and spicy delights of Aam Papad and Imli Candy, each bite promises a burst of authentic Indian flavors.
     
     Discover the artistry and craftsmanship that goes into making these confectionery masterpieces. With recipes passed down through generations, our candies are crafted with love and attention to detail, using only the finest ingredients and time-honored techniques.
     
     Indian Candy takes you on a gastronomic adventure across India, showcasing regional specialties from North to South and East to West. From the aromatic delicacies of Rajasthan to the coconut-infused sweets of Kerala, each candy tells a unique story and reflects the diverse cultural tapestry of India.
     
     Whether you're a connoisseur of Indian cuisine or a curious food lover looking to expand your horizons, Indian Candy offers a delectable assortment that will transport your taste buds to the streets and bazaars of India. Join us on this delightful journey and experience the magic of Indian candies."</p>
    </div>
    </section>
    
    <section id="contact">
      <motion.div initial="hidden"  animate={isInView ? "visible" : "hidden"} variants={contact} transition={{delay:0.5,duration:0.9}} className="w-96 h-96 bg-white relative rounded-3xl shadow-2xl  top-52 left-3 sm:left-80 sm:top-52" style={{width:"80%",height:"740px"}}>
        <h1 className="font-Fontspring relative top-4 left-4 " style={{fontSize:"4.2vh"}}><ins>CONTACT</ins></h1>
        <div className="w-20 p-1 sm:p-20   h-20 absolute rounded-lg bg-pink-300  border-black top-40 sm:top-60" style={{width:"60%",left:"30%",height:"60%",border:"2px dotted black"}}>
          <label className="font-Fontspring ">What's your name:</label><br/>
          <input  type="text" className=" relative z-10 border-b-2 border-black rounded-lg"
        style={{
        
          borderBottom: '1px solid black',
          color:"white",
          fontWeight:"bold",
          textShadow:"2px 0px 4px white",
          background:"transparent",
          width:"50%"
        }}
      /><br/><br/><br/><br/><br/>

<label className="font-Fontspring">Your email:</label><br/>
          <input  type="text" className=" relative z-10 border-b-2 border-black rounded-lg"
        style={{
        
          borderBottom: '1px solid black',
          color:"white",
          fontWeight:"bold",
          textShadow:"2px 0px 4px white",
          background:"transparent",
          width:"50%"
        }}
      />
      <br/><br/><br/>
      <br/><br/>
      <label className="font-Fontspring">What can we help you with?:</label><br/>
          <input  type="text" className=" relative z-10 border-b-2 border-black rounded-lg"
        style={{
        
          borderBottom: '1px solid black',
          color:"white",
          fontWeight:"bold",
          textShadow:"2px 0px 4px white",
          background:"transparent",
          width:"50%"
        }}
      />
     
        </div>
<p className="font-fasthand relative top-8 sm:top-16 left-10 sm:left-20 text-2xl sm:text-8xl" style={{}}>We're here to help <br />you level up</p>
<p className="font-chela relative top-36 left-20 text-slate-500 hidden sm:block">We are just one click away to <br /> help you take your brand or<br /> product from great to incredible.Fill in the form to <br />share more details about<br /> your project.or your <br /> favourite gum flavour.Either<br />way.we'd love to talk.</p>
      </motion.div>
    </section>
    
    </div>
    
  );
}
