import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { config } from "./const";

const LinksList = () => {
	return (
		<div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
			<h2 className="text-2xl font-bold mb-4 text-gray-800">
				Brands urls
			</h2>
			<ul className="space-y-4">
				{config.map((brand, brandIndex) => (
					<li key={brandIndex} className="p-4 bg-gray-100 rounded-lg">
						<span className="text-lg text-gray-800 font-bold">
							{brand.brand}
						</span>
						<ul className="pl-4 mt-2 space-y-2">
							{brand.envs.map((env, envIndex) => (
								<>
									<li
										key={envIndex}
										className="p-3 bg-white rounded-lg shadow"
									>
										<span className="font-semibold text-gray-800 p-3">
											{env.name}
										</span>
										<div className="pl-4 mt-2 flex justify-between items-center space-x-6">
											{env.links.map(
												(link, linkIndex) => (
													<li key={linkIndex}>
														{link.type === "web" ? (
															<a
																href={link.url}
																target="_black"
																className="text-cyan-400 hover:text-cyan-300 transition duration-300 flex items-center space-x-2"
															>
																Web link
																<FaExternalLinkAlt className="text-sm" />
															</a>
														) : (
															<AppLink
																qr={link.qr}
															/>
														)}
													</li>
												)
											)}
										</div>
									</li>
									{env.extraLinks && (
										<div className="flex flex-row justify-around">
											{env.extraLinks.map(
												(exstraLink, index) => {
													return (
														<li
															key={index}
															className="p-3 m-1 bg-white rounded-lg shadow w-1/2"
														>
															<a
																href={
																	exstraLink.url
																}
																target="_black"
																className="text-cyan-400 hover:text-cyan-300 transition duration-300 space-x-2"
															>
																{
																	exstraLink.name
																}
															</a>
														</li>
													);
												}
											)}
										</div>
									)}
								</>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

const AppLink = ({ qr }: { qr?: string }) => {
	const [hover, setHover] = useState(false);

	return (
		<span
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className="relative text-blue-600 hover:text-blue-800 transition duration-300 cursor-pointer flex flex-row"
		>
			<span>QR code</span>
			{hover && (
				<div className="absolute top-0 left-17 bg-white border shadow-lg p-2 rounded-lg w-28">
					<img src={qr} alt="QR Code" className="w-full" />
				</div>
			)}
		</span>
	);
};

export default LinksList;
