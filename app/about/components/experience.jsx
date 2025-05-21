import Hr from "@/components/Hr";
import { motion } from "framer-motion";

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,

						type: "spring",
					}}>
					Profesional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
			<motion.div
				className="flex justify-center items-start flex-col mb-5 "
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
				<section className="grid gap-8 md:gap-12">
					<div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
						{children}
					</div>
				</section>
			</motion.div>
		</div>
	);
}

export default function Experience() {
	return (
		<>
			<Title/>
			<Wrapper>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">April 2025 - Present</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							CYBERDYNE IT GmbH
						</h3>
						<h4 className=" font-light text-md mb-4">
							IT Operations Engineer
						</h4>
						<p className="text-justify">
							I finished my IT studies with an average of 1.4 (3.6 GPA) and started working Fulltime as an IT Operations Engineer.
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Powershell
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Monitoring
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Automations
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Endpoint Management
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">November 2022 - March 2025</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							CYBERDYNE IT GmbH
						</h3>
						<h4 className=" font-light text-md mb-4">
							Dual IT-Study | Monitoring and Automation
						</h4>
						<p className="text-justify">
							After a year in the company I went to the development department and dealt with 
							scripts, Powershell and automations.
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Powershell
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Monitoring
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Automations
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Rest API
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">October 2021 - October 2022</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							CYBERDYNE IT GmbH
						</h3>
						<h4 className=" font-light text-md mb-4">
							Dual IT-Study | Systemintegration and Service
						</h4>
						<p className="text-justify">
							After graduating from high school, I started a dual course of study at the CYBERDYNE IT GmbH in Cologne 
							while looking for new challenges. In the first year I mainly worked there in the area of system integration 
							and service.
						</p>

						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Microsoft Azure
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Systemintegration
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Service
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">June 2019</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							WDR
						</h3>
						<h4 className=" font-light text-md mb-4">
							Internship
						</h4>
						<p className="text-justify">
							In the course of my student internship, I was able to gain initial insights into the work of 
							an IT specialist for system integration in a large company.
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Systemintegration
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
