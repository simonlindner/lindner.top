import { motion } from "framer-motion";

const PlayingAnimation = () => {
	return (
		<div className="relative flex flex-row items-center justify-center w-6 h-8 gap-1 mx-4">
			<motion.span
				className="w-1 h-full bg-gray-500 rounded-full"
				animate={{ scaleY: [0.3, 1, 0.5, 0.75, 0.5] }}
				transition={{ duration: 2.2, repeat: Infinity }}
			/>
			<motion.span
				className="w-1 h-full bg-gray-500 rounded-full"
				animate={{ scaleY: [0.3, 1, 0.5, 0.75, 0.5] }}
				transition={{ duration: 2.2, repeat: Infinity, delay: -2 }}
			/>
			<motion.span
				className="w-1 h-full bg-gray-500 rounded-full"
				animate={{ scaleY: [0.3, 1, 0.5, 0.75, 0.5] }}
				transition={{ duration: 2.2, repeat: Infinity, delay: -3.7 }}
			/>
		</div>
	);
};

export default PlayingAnimation;
