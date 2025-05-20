import { motion } from "framer-motion";

export default function Tools() {
	return (
		<motion.div
			className="flex justify-start items-center flex-col mb-5 "
			initial={{
				opacity: 0,
				x: 200,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				delay: 0.6,

				type: "spring",
			}}>
			<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase">
				Tools
			</h2>
			<p className="text-gray-500 text-center tracking-wider md:px-">
				<span className="text-black font-bold">Visual Studio Code</span> |{" "}
				<span className="text-black font-bold">Kaseya Applications</span> |{" "}
				<span className="text-black font-medium">Git</span> |{" "}
				<span className="text-black font-medium">Github</span> |{" "}
				<span className="text-black font-medium">Postman</span> |{" "}
				<span className="text-black font-bold">Azure Devops</span> |{" "}
				<span className="text-black font-medium">VMWare</span>
			</p>
		</motion.div>
	);
}
