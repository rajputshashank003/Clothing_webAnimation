import { useEffect } from "react";
import { images } from "../utils/data"
import { motion, useAnimate } from "motion/react"

const Page1 = () => {
    const [scope , animate ] = useAnimate();

    const formula = (ind : number) : number => {
        switch ( ind) {
            case 0 : 
                return 300;
            case 1 : 
                return 150;
            case 2 : 
                return 0;
            case 3 : 
                return -150;
            case 4 : 
                return -300;
            default : 
                return 0;
        }
    }

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
    }

    return (
        <div
            ref={scope}
            className="min-h-screen flex font-sans justify-center items-center w-screen overflow-x-hidden relative bg-gradient-to-b from-slate-50 to-violet-200"
        >
            <motion.div
                initial={{y : -500}} 
                className="appbar absolute top-10 left-10 text-xl right-10 ">
                <div className="fashion absolute left-10 hover:scale-[1.1] cursor-pointer duration-200 font-bold max-md:left-2 text-black">Fashion</div>
                <div className="absolute gap-20 left-1/2   -translate-x-1/2 flex flex-row">
                    {
                        ["Home", "About us" , "Product" , "Contact"].map((val , ind) => (
                            <div key={ind} className="relative hover:scale-[1.1] cursor-pointer duration-200 max-md:hidden duration-200 text-black">
                                {val}
                            </div>
                        ))
                    }
                </div>
                <div className="absolute right-10 hover:scale-[1.1] cursor-pointer duration-200  max-md:right-2">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                </div>
            </motion.div>
            <motion.div
                className="absolute overflow-hidden top-[20%] left-1/2 
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
                className="absolute max-md:h-10 h-60 max-md:top-[40%] overflow-hidden text-[1rem] left-[10%] -rotate-[20deg] flex justify-center items-center "
            >
                <motion.div
                    initial={{
                        y : 150,
                        opacity  : 0,
                        scale : 0
                    }}
                    className="px-10 max-md:px-2 poff rounded-3xl h-10 w-fit bg-violet-300/50 backdrop-blur-3xl text-white flex justify-center items-center"
                >
                    UpTo 20% off
                </motion.div>
            </div>
            <div
                className="absolute max-md:h-10 h-60 max-md:top-[40%] overflow-hidden text-[1rem] right-[10%] rotate-[20deg] flex justify-center items-center "
            >
                <motion.div
                    initial={{
                        y : 150,
                        opacity  : 0,
                        scale : 0
                    }}
                    className="px-10 max-md:px-2 poff rounded-3xl h-10 w-fit bg-amber-300/70 backdrop-blue-[2rem] text-white flex justify-center items-center"
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
                        className={"image" + ind + " images object-fit rounded-xl -translate-x-1/2 -translate-y-1/2 h-60 w-40 absolute top-1/2 left-1/2 shadow-[0px_0px_5px] shadow-gray-700"}
                    />
                ))
            }
            <div className="relative -bottom-[50vh] h-[100vh] flex flex-col justify-center items-center gap-10">
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