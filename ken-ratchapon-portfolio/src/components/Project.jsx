import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Project(props) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition text-black">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
                    <h3 className="text-2xl font-semibold">{props.title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                        {props.description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {props.tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-row mt-4 gap-4 absolute top-0 right-1">
                        {props.code !== '' &&                         
                            <a href={`${props.code}`}>
                                <button className='text-center rounded-lg p-1 bg-white text-black hover:bg-black hover:text-white font-bold text-lg'>Code</button>
                            </a>
                        }
                        {props.visit !== '' &&                         
                            <a href={`${props.visit}`}>
                                <button className='text-center rounded-lg p-1 bg-white text-black hover:bg-black hover:text-white font-bold text-lg'>Visit</button>
                            </a>
                        }
                    </div>
                </div>
                
                <img
                    src={props.imageUrl}
                    alt="Project I worked on"
                    quality={95}
                    className="absolute hidden sm:block top-20 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                                transition 
                                group-hover:scale-[1.04]
                                group-hover:-translate-x-3
                                group-hover:translate-y-3
                                group-hover:-rotate-2"
                />

            </section>
        </motion.div>
    );
}
