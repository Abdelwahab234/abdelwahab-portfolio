"use client";
import "./p.css";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function PJS() {
	const [selectedProject, setSelectedProject] = useState<{ title: string, description: string, images: string[] } | null>(null);

	useEffect(() => {
		if (selectedProject) {
			document.body.style.overflow = "hidden";
		} else {
			// using empty string allows css to control it when no modal is open
			document.body.style.overflow = ""; 
		}
		
		return () => {
			document.body.style.overflow = "";
		};
	}, [selectedProject]);

	return (
		<>
			<section className="pjs">
				<div className="wrapper">
					<h1>Projects</h1>
					<div className="cols">
						<div data-aos="fade-up" className="col" onTouchStart={(e) => {
							e.currentTarget.classList.toggle('hover');

						}}>
							<div className="container">
								<div className="front" style={{ backgroundImage: " url(https://iili.io/qJDTVLb.jpg)" }}>
									<div className="inner">
										<p>E-Book Library</p>
										<span>Management System</span>
									</div>
								</div>
								<div className="back">
									<div className="inner" style={{ display: "flex", flexDirection: "column" }}>
										<div className="back-btns">
											<a href="https://github.com/Abdelwahab234/EBOOK-project-"><button>VISIT </button></a>
											<button onClick={() => setSelectedProject({ title: "E-Book Library", description: "A user-friendly system for efficiently managing books, authors, and publishers, built with Java Swing and powered by SQL Server.", images: ["https://iili.io/qJDTVLb.jpg"] })}>SHOW DETAILS</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div data-aos="fade-up" className="col" onTouchStart={(e) => {
							e.currentTarget.classList.toggle('hover');

						}}>
							<div className="container">
								<div className="front" style={{
									backgroundImage: "url(https://iili.io/qJDzcG4.png)"




								}}>
									<div className="inner">
										<p>StoreMain</p>
										<span>Smart Inventory Management</span>
									</div>
								</div>
								<div className="back">
									<div className="inner">
										<div className="back-btns">
											<a href="https://github.com/Abdelwahab234/StoreMain"><button>VISIT </button></a>
											<button onClick={() => setSelectedProject({ title: "StoreMain", description: "A product management system for small businesses and individual sellers, enabling managers to register, log in, and manage products through an intuitive interface.", images: ["https://iili.io/qJDzcG4.png"] })}>SHOW DETAILS</button>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div data-aos="fade-up" className="col" onTouchStart={(e) => {
							e.currentTarget.classList.toggle('hover');

						}}>
							<div className="container">
								<div className="front" style={{ backgroundImage: "url(https://iili.io/qJDO1ff.png)" }}>
									<div className="inner">
										<p>The Store</p>
										<span>Simple React Store</span>
									</div>
								</div>
								<div className="back">
									<div className="inner">
										<div className="back-btns">
											<a href="https://abdelwahab234.github.io/store/"><button>VISIT </button></a>
											<button onClick={() => setSelectedProject({ title: "The Store", description: "It all started with a simple idea: to create a place where every product tells a story, and every customer feels at home. Welcome to MyStore", images: ["https://iili.io/qJDO1ff.png"] })}>SHOW DETAILS</button>
										</div>
									</div>
								</div>
							</div>
						</div>



						<div data-aos="fade-up" className="col" onTouchStart={(e) => {
							e.currentTarget.classList.toggle('hover');

						}}>
							<div className="container">
								<div className="front" style={{ backgroundImage: "url(https://iili.io/CFW9c7V.png)" }}>
									<div className="inner">
										<p>Captin Mohammed</p>
										<span>fitness and nutrition website that helps clients Gym coaching</span>
									</div>
								</div>
								<div className="back">
									<div className="inner">
										<div className="back-btns">
											<a href="https://captin-mohammed.vercel.app/"><button>VISIT </button></a>
											<button onClick={() => setSelectedProject({ title: "Captin Mohammed", description: "A professional fitness and nutrition website that helps clients achieve their health goals through personalized meal plans, effective workout programs, and continuous coaching.", images: ["https://iili.io/CFW93ss.png", "https://iili.io/CFW9f1f.png", "https://iili.io/CFW9KqG.png", "https://iili.io/CFW92Xn.png", "https://iili.io/CFW9n72.png", "https://iili.io/CFW9Cdl.png", "https://iili.io/CFW9oeS.png", "https://iili.io/CFW9TXe.png", "https://iili.io/CFW9c7V.png"] })}>SHOW DETAILS</button>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div data-aos="fade-up" className="col" onTouchStart={(e) => {
							e.currentTarget.classList.toggle('hover');

						}}>
							<div className="container">
								<div className="front" style={{ backgroundImage: " url(https://iili.io/qJDvbdx.png)" }}>
									<div className="inner">
										<p>Coffee Landing</p>
										<span>modern landing page</span>
									</div>
								</div>
								<div className="back">
									<div className="inner">
										<div className="back-btns">
											<a href="https://abdelwahab234.github.io/Coffee-Landing/"><button>VISIT </button></a>
											<button onClick={() => setSelectedProject({ title: "Coffee Landing", description: "Page A sleek and modern landing page design for a coffee shop offering Cold Brew and other beverages", images: ["https://iili.io/qJDvbdx.png"] })}>SHOW DETAILS</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div data-aos="fade-up" className="col" onTouchStart={(e) => {
							e.currentTarget.classList.toggle('hover');

						}}>
							<div className="container">
								<div className="front" style={{ backgroundImage: "url(https://iili.io/qJb1vMN.png)" }}>
									<div className="inner">
										<p> CocaCola Landing Page</p>
										<span> design highlights the bold aesthetic of CocaCola Zero</span>
									</div>
								</div>
								<div className="back">
									<div className="inner">
										<div className="back-btns">
											<a href="https://abdelwahab234.github.io/CocaCola-Landing-Page-/"><button>VISIT </button></a>
											<button onClick={() => setSelectedProject({ title: "CocaCola Landing Page", description: "Responsive landing page showcasing CocaCola Zero in Egypt. Clean, bold typography and engaging color palette.", images: ["https://iili.io/CFlTJkv.jpg"] })}>SHOW DETAILS</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* new  */}
						<div data-aos="fade-up" className="col" onTouchStart={(e) => {
							e.currentTarget.classList.toggle('hover');

						}}>
							<div className="container">
								<div className="front" style={{ backgroundImage: "url(https://iili.io/CFlTJkv.jpg)" }}>
									<div className="inner">
										<p> The Golden Hotel (full reservation system) </p>
										<span>  </span>
									</div>
								</div>
								<div className="back">
									<div className="inner">
										<div className="back-btns">
											<a href="https://abdelwahab234.github.io/CocaCola-Landing-Page-/"><button>VISIT </button></a>
											<button onClick={() => setSelectedProject({ title: "Hotel (full reservation system)", description: "# Hotel Management & Online Booking Platform\n\nThis project involves the design and development of a complete hotel management and online booking platform that allows guests to browse available rooms, make reservations, upload required documents, and complete payments securely online.\n\nThe platform will support both Arabic and English languages with seamless language switching and will provide a modern, responsive, and user-friendly experience across desktop, tablet, and mobile devices.\n\n## Guest Features\n\n* Elegant and luxury-inspired homepage reflecting the hotel's brand identity.\n* Detailed room listings with images, descriptions, pricing, and amenities.\n* Interactive booking system with real-time date selection and availability management.\n* Automatic calculation of additional charges based on the number of guests.\n* Mandatory passport upload during the booking process for verification purposes.\n* Acceptance of hotel terms and conditions before reservation confirmation.\n* Secure online payment integration supporting Visa and Mastercard transactions.\n* User dashboard for managing reservations, viewing booking history, and tracking booking status.\n\n## Administration Panel\n\nThe administration dashboard will provide complete control over hotel operations, including:\n\n* Create, edit, and manage rooms and room details.\n* Upload and update room images and amenities.\n* Manage room pricing and extra guest fees.\n* Review, approve, cancel, and manage reservations.\n* Manage users and system permissions.\n* Create and assign brokers/partners to specific rooms.\n* Automatically generate unique access codes for partners.\n\n## Partner/Broker Portal\n\nPartners will have restricted access to:\n\n* Register assigned rooms using unique access codes generated by the administrator.\n* View statistics related only to their assigned rooms.\n* Monitor confirmed reservations and booking performance.\n* Access a dedicated read-only dashboard.\n\n## Security Staff Portal\n\nA dedicated portal will be available for security personnel with limited permissions, allowing them to:\n\n* View confirmed reservations.\n* Access essential guest information for verification purposes.\n* Facilitate faster and more secure guest check-in procedures.\n\n## Technical Stack\n\nThe platform will be built using modern technologies, including:\n\n* Node.js\n* NestJS\n* TypeScript\n* GraphQL\n* PostgreSQL\n* Socket.IO / WebSockets\n* Tailwind CSS\n* Pug Template Engine\n\n## Security & Performance\n\n* Secure authentication and role-based access control.\n* Encrypted storage and transmission of sensitive data.\n* Secure payment processing through trusted payment gateways.\n* Optimized backend architecture for high performance and scalability.\n* Real-time updates where required through WebSocket technology.\n\n## Additional Features\n\n* Fully responsive design for all screen sizes.\n* Social media links integrated within the website footer.\n* Source code delivery and ownership transfer upon project completion according to the agreed terms.\n* Clean, maintainable, and scalable code architecture following modern development standards.\n.", images: ["https://iili.io/CFlTJkv.jpg", "https://iili.io/CFlT92a.jpg", "https://iili.io/CFlImEF.jpg", "https://iili.io/CFlTdpR.jpg", "https://iili.io/CFlTFhN.jpg", "https://iili.io/CFlTqBt.jpg", "https://iili.io/CFlTBEX.jpg", "https://iili.io/CFlTC4n.jpg", "https://iili.io/CFlTxYG.jpg", "https://iili.io/CFlTzvf.jpg", "https://iili.io/CFlTuTl.jpg", "https://iili.io/CFlTRQS.jpg", "https://iili.io/CFlTYG9.jpg", "https://iili.io/CFlTl3u.jpg"] })}>SHOW DETAILS</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* new  */}


						<div data-aos="fade-up" className="col" onTouchStart={(e) => {
							e.currentTarget.classList.toggle('hover');

						}}>
							<div className="container">
								<div className="front" style={{ backgroundImage: "url(https://iili.io/qJbjUy7.png)" }}>
									<div className="inner">
										<p>C-P-M-System</p>
										<span>CRUD Product Management System</span>
									</div>
								</div>
								<div className="back">
									<div className="inner">
										<div className="back-btns">
											<a href="https://abdelwahab234.github.io/CRUD-Product-Management-System/"><button>VISIT </button></a>
											<button onClick={() => setSelectedProject({ title: "C-P-M-System", description: "Simple Product Management System (CRUD) with smart search, easy edits, and dark-themed UI", images: ["https://iili.io/qJbjUy7.png"] })}>SHOW DETAILS</button>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div data-aos="fade-up" className="col" onTouchStart={(e) => {
							e.currentTarget.classList.toggle('hover');

						}}>
							<div className="container">
								<div className="front" style={{ backgroundImage: "url(https://iili.io/qJbSH5x.png)" }}>
									<div className="inner">
										<p>NTO-company</p>
										<span>modern and responsive design</span>
									</div>
								</div>
								<div className="back">
									<div className="inner">
										<div className="back-btns">
											<a href="https://abdelwahab234.github.io/naruto-company-design-/"><button>VISIT </button></a>
											<button onClick={() => setSelectedProject({ title: "NTO-company", description: "modern and responsive design", images: ["https://iili.io/qJbSH5x.png"] })}>SHOW DETAILS</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div data-aos="fade-up" className="col" onTouchStart={(e) => {
							e.currentTarget.classList.toggle('hover');

						}}>
							<div className="container">
								<div className="front" style={{ backgroundImage: "url(https://iili.io/qJbiDS1.png)" }}>
									<div className="inner">
										<p>The Flash Fan Website</p>
										<span>simple fan website dedicated to The Flash DC</span>
									</div>
								</div>
								<div className="back">
									<div className="inner">
										<div className="back-btns">
											<a href="https://abdelwahab234.github.io/The-Flash-Fan-Site/"><button>VISIT </button></a>
											<button onClick={() => setSelectedProject({ title: "The Flash Fan Website", description: "This project is a simple fan website dedicated to The Flash (Barry Allen) from DC Comics. It serves as a basic template for a superhero-themed website that you can expand upon.", images: ["https://iili.io/qJbiDS1.png"] })}>SHOW DETAILS</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{selectedProject && typeof document !== "undefined" && createPortal(
				<div className="project-modal" onClick={() => setSelectedProject(null)}>
					<div className="modal-tilt-wrapper"
						onClick={(e) => e.stopPropagation()}
						onMouseMove={(e) => {
							const rect = e.currentTarget.getBoundingClientRect();
							const x = e.clientX - rect.left;
							const y = e.clientY - rect.top;

							// Update cursor glow
							e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
							e.currentTarget.style.setProperty('--mouse-y', `${y}px`);

							// Calculate 3D tilt
							const centerX = rect.width / 2;
							const centerY = rect.height / 2;
							const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg tilt
							const rotateY = ((x - centerX) / centerX) * 8;  // Max 8 deg tilt

							e.currentTarget.style.setProperty('--rotate-x', `${rotateX}deg`);
							e.currentTarget.style.setProperty('--rotate-y', `${rotateY}deg`);
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.setProperty('--rotate-x', `0deg`);
							e.currentTarget.style.setProperty('--rotate-y', `0deg`);
						}}
					>
						<div className="modal-content">
							<button className="close-btn" onClick={() => setSelectedProject(null)}>X</button>
							<h2 className="modal-title">{selectedProject.title}</h2>
							<div className="modal-body">
								<div className="modal-text-section">
									<p className="modal-desc">{selectedProject.description}</p>
								</div>
								<div className="modal-image-section">
									<div className="modal-images">
										{selectedProject.images.map((img, i) => (
											<div className="img-wrapper" key={i}>
												<img src={img} alt={`${selectedProject.title} screenshot ${i + 1}`} />
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>,
				document.body
			)}
		</>
	)
} 