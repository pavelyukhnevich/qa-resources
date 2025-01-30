import { useState } from "react";

const data = [
	{
		brand: "21.co.uk",
		envs: [
			{
				name: "dev",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://example.com",
					},
					{
						type: "app",
						name: "appLink",
						qr: "/qr-example.png",
					},
				],
			},
			{
				name: "prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://example.com",
					},
					{
						type: "app",
						name: "appLink",
						qr: "/qr-example.png",
					},
				],
			},
		],
	},
	{
		brand: "BetUK",
		envs: [
			{
				name: "dev",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://example.com",
					},
					{
						type: "app",
						name: "appLink",
						qr: "/qr-example.png",
					},
				],
			},
			{
				name: "pre-prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://example.com",
					},
					{
						type: "app",
						name: "appLink",
						qr: "/qr-example.png",
					},
				],
			},
			{
				name: "prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://example.com",
					},
					{
						type: "app",
						name: "appLink",
						qr: "/qr-example.png",
					},
				],
			},
		],
	},
];

const LinksList = () => {
	return (
		<div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
			<h2 className="text-2xl font-bold mb-4 text-gray-800">Links</h2>
			<ul className="space-y-4">
				{data.map((brand, brandIndex) => (
					<li key={brandIndex} className="p-4 bg-gray-100 rounded-lg">
						<strong className="text-lg">{brand.brand}</strong>
						<ul className="pl-4 mt-2 space-y-2">
							{brand.envs.map((env, envIndex) => (
								<li
									key={envIndex}
									className="p-3 bg-white rounded-lg shadow"
								>
									<span className="font-semibold">
										{env.name}
									</span>
									<ul className="pl-4 mt-2">
										{env.links.map((link, linkIndex) => (
											<li
												key={linkIndex}
												className="mt-1"
											>
												{link.type === "web" ? (
													<a
														href={link.url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-600 hover:text-blue-800 transition duration-300"
													>
														{link.name}
													</a>
												) : (
													<AppLink
														name={link.name}
														qr={link.qr}
													/>
												)}
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

const AppLink = ({ name, qr }: { name: string; qr?: string }) => {
	const [hover, setHover] = useState(false);

	return (
		<span
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className="relative text-blue-600 hover:text-blue-800 transition duration-300 cursor-pointer"
		>
			{name}
			{hover && (
				<div className="absolute top-6 left-0 bg-white border shadow-lg p-2 rounded-lg w-28">
					<img src={qr} alt="QR Code" className="w-full" />
				</div>
			)}
		</span>
	);
};

export default LinksList;
