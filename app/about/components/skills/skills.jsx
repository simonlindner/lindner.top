import { motion } from "framer-motion";
import Stack from "./stack";
import Tools from "./tools";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-4 p-10 grid grid-cols-1 mt-10">
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
				{children}
			</motion.div>
		</div>
	);
}

export default function Skills() {
	return (
		<>
			<Wrapper>
				<section className="grid gap-8 md:gap-12">
					<div className="text-center space-y-2">
						<h2 className="text-3xl font-bold mt-3 text-black">
							Skills and Expertise
						</h2>
						<p className="text-muted-foreground max-w-[800px] mx-auto">
							Explore some skills I&apos;m proficient in to
							deliver high-quality solutions.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
						<div className="flex flex-col items-center gap-2">
							<SpringBootIcon className="w-12 h-12" />
							<div className="font-medium">Spring Boot</div>
						</div>
						<div className="flex flex-col items-center gap-2">
							<PowershellIcon className="w-12 h-12" />
							<div className="font-medium">Scripting</div>
						</div>
						<div className="flex flex-col items-center gap-2">
							<WebhookIcon className="w-12 h-12" />
							<div className="font-medium">REST API</div>
						</div>
						<div className="flex flex-col items-center gap-2">
							<ActivityIcon className="w-12 h-12" />
							<div className="font-medium">Monitoring & Automations</div>
						</div>
						<div className="flex flex-col items-center gap-2">
							<MobileIcon className="w-12 h-12" />
							<div className="font-medium">
								Endpoint Management
							</div>
						</div>
					</div>
				</section>
			</Wrapper>
			<div className=" mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
				<Stack />
				<Tools />
			</div>
		</>
	);
}

function ActivityIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
		</svg>
	);
}
function SpringBootIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="#000000"
			stroke="Black"
			strokeWidth="0"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292.274-2.539-.476-5.763-1.752-9.596" />
		</svg>
);
}
function PowershellIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 32 32"
			fill="#000000"
			stroke="Black"
			strokeWidth="0"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M16.012 21.897c-0.004-0-0.009-0-0.014-0-0.637 0-1.153 0.516-1.153 1.154s0.516 1.154 1.153 1.154c0.005 0 0.010-0 0.015-0h5.539c0.003 0 0.007 0 0.011 0 0.637 0 1.153-0.516 1.153-1.153s-0.516-1.153-1.153-1.153c-0.004 0-0.008 0-0.011 0h0.001zM19.506 16.4c0.134-0.198 0.214-0.442 0.214-0.704 0-0.327-0.124-0.625-0.327-0.85l0.001 0.001-6.99-7.438c-0.239-0.227-0.562-0.367-0.918-0.367-0.736 0-1.333 0.597-1.333 1.333 0 0.326 0.117 0.625 0.311 0.856l-0.002-0.002 5.826 6.198v0.137l-9.272 6.716c-0.299 0.246-0.489 0.617-0.489 1.032 0 0.736 0.597 1.333 1.333 1.333 0.268 0 0.517-0.079 0.726-0.215l-0.005 0.003 10.283-7.385c0.265-0.163 0.482-0.382 0.638-0.641l0.005-0.009zM29.972 4.721c0.012-0.001 0.026-0.001 0.041-0.001 0.55 0 0.995 0.446 0.995 0.995 0 0.107-0.017 0.21-0.048 0.306l0.002-0.007-4.572 19.972c-0.187 0.724-0.817 1.256-1.577 1.293l-0.004 0h-22.781c-0.012 0.001-0.026 0.001-0.041 0.001-0.55 0-0.995-0.446-0.995-0.995 0-0.107 0.017-0.21 0.048-0.306l-0.002 0.007 4.572-19.972c0.187-0.724 0.817-1.256 1.577-1.293l0.004-0z" />
		</svg>
);
}
function WebhookIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
			<path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
			<path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
		</svg>
	);
}
function MobileIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
			<line x1="12" x2="12" y1="18" y2="18" />
		</svg>
	);
}
