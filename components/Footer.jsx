"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
	return (
		<div className="flex justify-center items-center flex-col mt-5 overflow-hidden">
			<div className="flex justify-center items-center flex-col mt-5 self-center min-h-[50vh] border-b-2 min-w-[80vw] ">
				<Link href="/#contact">
					<motion.h2
						className="text-xl font-medium mt-3 text-center text-gray-400 whitespace-nowrap leading-none md:tracking-[0.5rem] relative cursor-pointer group"
						initial={{
							opacity: 0,
							x: -100,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.2,
						}}>
						<span className="relative inline-block">
							Want to talk?
							<span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-400 origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
						</span>
					</motion.h2>
					<motion.h1
						className="text-5xl md:text-7xl font-medium mt-3 whitespace-nowrap leading-none relative text-black cursor-pointer group"
						initial={{
							opacity: 0,
							x: 100,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
						}}><span className="relative inline-block">
							Get In Touch{" "}
							<FontAwesomeIcon
								icon={faArrowAltCircleRight}
								className="text-5xl ml-2 "
							/>
							<span className="absolute bottom-0 left-0 w-full h-[3px] bg-black origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
						</span>
					</motion.h1>
				</Link>
			</div>
			<footer className="flex justify-center items-center flex-col my-5 self-start]">
				<p className="text-gray-800 text-sm">
					&copy;{new Date().getFullYear()} -{" "}
					<span className="text-gray-700 text-lg">Simon</span>
				</p>
			</footer>
		</div>
	);
}
