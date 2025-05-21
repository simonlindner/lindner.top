import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Simon | Portofolio",

    description:
		"My name is Simon, I'm a it operations engineer. I'm currently working at the Cyberdyne IT GmbH.",

    author: "Simon Lindner",
    siteUrl: "https://www.lindner.top",
    applicationName: "Simon",

    keywords: [
		"simon",
		"simon lindner",
		"simon lindner portofolio",
		"lindner"
	],

    openGraph: {
		type: "website",
		url: "https:/lindner.top",
		title: "Simon | Portofolio",
		site_name: "Simon | Portofolio",
		description: "My name is Simon, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Simon Portofolio",
			},
		],
		site_name: "Simon | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
