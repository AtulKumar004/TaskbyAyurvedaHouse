import React, { useEffect, useState } from 'react'
import pic1 from "./pic1.jpg"
import pic2 from "./pic2.jpg"
import pic3 from "./pic3.jpg"
import "./Task.css"

export default function Task() {
  const [state, setState] = useState(0);

useEffect(()=>{
  let divs = document.querySelectorAll(".div");
  // console.log(divs);
  divs.forEach((div,i)=>{
    div.addEventListener("mouseenter", (e)=> {
      let  btn = document.querySelectorAll(".btn")[i];
      btn.classList.add("active");
      btn.classList.remove("inactive")
      setState(Number(e.target.getAttribute('id')))
      console.log(state, Number(e.target.getAttribute('id')))

    })
  })
  divs.forEach((div, i) => {
    div.addEventListener("mouseleave", () => {
      let btn = document.querySelectorAll(".btn")[i];
      btn.classList.add("inactive");
      btn.classList.remove("active")
    })
  })
},[])
  return (

    <>
      <div className="comp w-full h-full  flex flex-col items-center justify-center mt-16"> {/* Main div */}
          <div className="tagline text-4xl flex w-4/5 h-full mb-2 ">
            <h1>Runner's Workout</h1>
          </div>
        <div className=" h-96 w-4/5   mt-2 ">{/* cont div */}
          {/* <h1 className='text-4xl '>Runner's Workout</h1> */}

          <div className=' flex   h-full '>
            
            
            <div className={state === 1 ? "div w-1/2     " : "div w-1/3 "} id={1}>
             
              <span className={state === 1 ? "btn-1 left-16" : "btn-1 left-5"}>STRENGTH</span>             
              <button className="btn inactive text-white pt-2  ">
                <i class="fa-solid fa-circle-chevron-right text-2xl"></i>
              </button>
              <img className="h-full pic w-full rounded-tl-3xl rounded-bl-3xl" src={pic3} alt="" />
            </div>


            <div className={state === 2 ? "div w-1/2 " : "div w-1/3 "} id={2}>
              <span className={state === 2 ? "btn-1 left-16" : "btn-1 left-5"}>MOBILITY</span> 
              <button className="btn inactive text-white pt-2  ">
                
                <i class="fa-solid fa-circle-chevron-right text-2xl"></i>
              </button>
              <img className='h-full w-full pic ' src={pic1} alt="" />
            </div>
            
            
            <div className={state === 3 ? "div w-1/2 transition ease-out   duration-300" : "div w-1/3 transition ease-out    duration-300"} id={3}>
              <span className={state === 3 ? "btn-1 left-16" : "btn-1 left-5"}>DRILL</span> 
              <button className="btn inactive text-white pt-2  ">

                <i class="fa-solid fa-circle-chevron-right text-2xl"></i>
              </button>
              <img className="h-full pic w-full rounded-tr-3xl rounded-br-3xl " src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
