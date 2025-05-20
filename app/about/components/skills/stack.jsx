import { motion } from "framer-motion";

export default function Stack() {
  return (
		<motion.div
			className="flex justify-center items-center flex-col mb-5 "
			initial={{
				opacity: 0,
				x: -200,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				delay: 0.5,

				type: "spring",
			}}>
			<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase ">
				Language & Framework
			</h2>
			<p className="text-gray-500 text-center tracking-widest md:px-5">
				<span className="text-black font-bold">Powershell</span> |{" "}
				<span className="text-black font-bold">Java</span> |{" "}
				<span className="text-black font-bold">Javascript</span> |{" "}
				<span className="text-black medium">C#</span> |{" "}
				<span className="text-black font-medium">HTML&CSS</span> |{" "}
				<span className="text-black font-medium">Python</span> |{" "}
				<span className="text-black font-medium">SQL</span> |{" "}
				<span className="text-black font-medium">Springboot</span> |{" "}
				<span className="text-black font-medium">Microsoft Azure</span> |{" "}
				<span className="text-black font-medium">GraphQL</span>
			</p>
		</motion.div>
  );
}