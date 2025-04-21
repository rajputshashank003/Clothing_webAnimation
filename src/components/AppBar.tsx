import { motion } from "motion/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AppBar = ({scope} : {scope : any}) => {
    const appbar = useRef(null);

    useGSAP(() => {
        gsap.to(appbar.current, {
            position : 'fixed',
            top : 20,
            left : window.innerWidth < 600 ? 30 : 150,
            right : window.innerWidth < 600 ? 30 : 150,
            boxShadow: "0px 4px 10px rgb(38, 198, 218)",
            scrollTrigger : {
                trigger : scope.current,
                scroller : scope.current,
                start : "top -1%",
                end : "top -20%",
                scrub : 2,
            },
            onStart : () => { console.log("started")}
        })
    })

    return (
        <motion.div
            ref={appbar}
            initial={{y : -500}}
            style={{
                position : "absolute",
                top : "5%"
            }}
            className="appbar flex justify-center items-center z-[999] backdrop-blur-[10px] rounded-xl duration-300 h-8 left-[10%] text-xl right-[10%] "
        >
            <div className="fashion absolute left-10 hover:scale-[1.1] cursor-pointer duration-200 font-bold max-md:left-2 text-black">Fashion</div>
            <div className="absolute gap-4 left-1/2 -translate-x-1/2 flex flex-row">
                {
                    ["Home", "AboutUs" , "Product" , "Contact"].map((val , ind) => (
                        <div 
                            key={ind} 
                            style={{textDecoration : ind == 0 ? "underline" : ""}} 
                            className="relative hover:scale-[1.1] text-[1rem] cursor-pointer duration-200 max-md:hidden text-black"
                        >
                            {val}
                        </div>
                    ))
                }
            </div>
            <div className="absolute right-10 hover:scale-[1.1] cursor-pointer duration-200  max-md:right-2">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
            </div>
        </motion.div>
    )
}

export default AppBar