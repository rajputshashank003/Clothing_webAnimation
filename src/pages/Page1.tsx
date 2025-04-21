import { useEffect } from "react";
import { images } from "../utils/data"
import { motion, useAnimate } from "motion/react"
import { formula, odd } from "./helper";
import AppBar from "../components/AppBar";

const Page1 = () => {
    const [scope , animate ] = useAnimate();

    useEffect(() => {
        handleAnimation();
    }, []);

    const handleAnimation = async () => {
        animate (".appbar", 
            {
                y : 0
            },
            {
                duration : 3,
                ease: "backOut"
            }
        )
        await animate(".images" , 
            {
                y : 150
            },
            {
                duration : 3,
                ease: "backOut"
            }
        )
        const image_animations = [0,1,2,3,4].map((ind) => {
            return animate(".image" + ind, 
                {
                    x : formula(ind) ,
                    y : 150 + ( ind % 2 == 0 ? 20 : -20 )
                },
                {
                    duration : 2,
                    ease : "circIn"
                }
            )
        })
        image_animations
        animate(".line-1",
            {
                y : 0
            },
            {
                duration : 2,
                ease : "circIn"
            }
        )
        animate(".line-2",
            {
                y : 0
            },
            {
                duration : 2,
                ease : "circIn"
            }
        )
        animate(".poff",
            {
                y : 0,
                opacity : 1,
                scale : 1
            },
            {
                duration : 2,
                ease : "circIn"
            }
        )
        const image_animation = [0,1,2,3,4].map((ind) => {
            return animate(".image" + ind, 
                {
                    rotate : [0 , odd(ind) , 0]
                },
                {
                    duration : 3,
                    ease : "linear",
                    repeat : Infinity
                }
            )
        })
        image_animation
    }

    return (
        <div
            ref={scope}
            className="h-[200vh] overflow-hidden flex font-sans justify-center items-center w-[100%] relative bg-gradient-to-b from-slate-50 to-violet-200"
        >
            <AppBar scope={scope} />
            <motion.div
                className="absolute overflow-hidden top-[10%] left-1/2 
                    -translate-x-1/2 -translate-y-[30%]"
            >
                <motion.div
                    initial={{
                        y : 200 
                    }} 
                    className="line-1 text-[3rem] max-md:text-[2.5rem] duration-300
                        bg-gradient-to-b from-gray-900 via-gray-700 to-gray-200 bg-clip-text text-transparent
                        leading-12 mt-10 text-center"
                >
                    The Untimate
                </motion.div>
                <motion.div 
                    initial={{
                        y : 200 
                    }} 
                    className="line-2 leading-18
                        bg-gradient-to-b from-gray-900 via-gray-700 to-gray-200 bg-clip-text text-transparent
                        text-[5rem] max-md:text-[3.2rem] duration-300 font-semibold"
                >
                    COLLECTIONS
                </motion.div>
            </motion.div>
            <div
                className="absolute p-8 max-md:h-10 h-60 max-md:top-[20%] top-[16%] overflow-hidden text-[1rem] left-[10%] -rotate-[20deg] flex justify-center items-center "
            >
                <motion.div
                    initial={{
                        y : 150,
                        opacity  : 0,
                        scale : 0
                    }}
                    className="px-10 max-md:px-2 poff rounded-3xl h-10 w-fit bg-violet-300/80 backdrop-blur-3xl text-white flex justify-center items-center shadow-[0px_0px_5px] shadow-violet-700"
                >
                    UpTo 20% off
                </motion.div>
            </div>
            <div
                className="absolute max-md:h-10 p-8 h-60 max-md:top-[20%] top-[16%] overflow-hidden text-[1rem] right-[10%] rotate-[20deg] flex justify-center items-center "
            >
                <motion.div
                    initial={{
                        y : 150,
                        opacity  : 0,
                        scale : 0
                    }}
                    className="px-10 max-md:px-2 poff rounded-3xl h-10 w-fit bg-amber-300/70 backdrop-blue-[2rem] text-white flex justify-center items-center shadow-[0px_0px_5px] shadow-amber-700"
                >
                    Quality product
                </motion.div>
            </div>
            {
                images.map((link, ind) => (
                    <motion.img 
                        initial={{y : 500}}
                        key={ind}
                        src={link}
                        style={{
                            rotate : (ind % 2 == 0 ? "-" : "") + Math.floor(Math.random() * 10) + "deg",
                        }}
                        className={"image" + ind + " images object-fit duration-300 rounded-xl -translate-x-1/2 -translate-y-[20%] h-60 w-40 absolute top-[20%] left-1/2 shadow-[0px_0px_5px] shadow-gray-700"}
                    />
                ))
            }
            <div className="absolute bottom-[30%] h-[50vh] flex flex-col justify-center items-center gap-10">
                <motion.div
                    initial={{
                        y : 200,
                        opacity : 0
                    }}
                    whileInView={{
                        y : 100,
                        opacity : 1
                    }}
                    transition={{
                        duration : 1,
                        ease : "circOut"
                    }}
                    className="overflow-hidden text-center opacity-0 relative detail_para"
                >
                    We do not divide our collections to seasons we create
                    <br />
                    New models every week and we are in a few items
                </motion.div>
                <motion.button
                    initial={{
                        y : 200,
                        opacity : 0
                    }}
                    whileInView={{
                        y : 100,
                        opacity : 1
                    }}
                    transition={{
                        duration : 1,
                        ease : "circOut"
                    }}
                    whileTap={{
                        scale : 0.8,
                    }}
                    className="overflow-hidden cursor-pointer hover:bg-zinc-800 duration-200 relative h-10 w-40 rounded-xl bg-black text-white font-sans explore_button"
                >
                    Explore More
                </motion.button>
            </div>
        </div>
    )
}

export default Page1