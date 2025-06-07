// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import TestimonialsCarousel from "@/components/testimonials";
// const features = [
// 	{
// 		icon: Calendar,
// 		title: "Create Events",
// 		description: "Easily set up and customize your event types",
// 	},
// 	{
// 		icon: Clock,
// 		title: "Manage Availability",
// 		description: "Define your availability to streamline scheduling",
// 	},
// 	{
// 		icon: LinkIcon,
// 		title: "Custom Links",
// 		description: "Share your personalized scheduling link",
// 	},
// ];

// const howItWorks = [
// 	{ step: "Sign Up", description: "Create your free Schedulrr account" },
// 	{
// 		step: "Set Availability",
// 		description: "Define when you're available for meetings",
// 	},
// 	{
// 		step: "Share Your Link",
// 		description: "Send your scheduling link to clients or colleagues",
// 	},
// 	{
// 		step: "Get Booked",
// 		description: "Receive confirmations for new appointments automatically",
// 	},
// ];

// export default function Home() {
// 	return (
// 		<main className="container mx-auto px-4 py-16">
// 			{/* /hero section */}
// 			<div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
// 				<div className="lg:w-1/2">
// 					<h1 className="text-7xl font-extrabold gradient-title pb-6">
// 						Effortless Meeting Coordination
// 					</h1>
// 					<p className="text-xl text-gray-600 mb-10">
// 						PlanMyMeet takes the stress out of appointments. Simply set your open
// 						slots, share your link, and let guests effortlessly find and book the
// 						perfect time to connect with you.
// 					</p>
// 					<Link href={"/dashboard"}>
// 						<Button size="lg" className="text-lg">
// 							Get Started{" "}
// 							<ArrowRight className="ml-2 h-5 w-5" />
// 						</Button>
// 					</Link>
// 				</div>
// 				<div className="lg:w-1/2 flex justify-center">
// 					<div className="relative w-full max-w-md aspect-square">
// 						<Image
// 							src="/poster-1.png"
// 							alt="Scheduling illustration"
// 							fill
// 							style={{ objectFit: "contain" }}
// 							priority
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 			{/* Key Features Section */}
// 			<div className="mb-24">
// 				<h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
// 					Key Features
// 				</h2>
// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 					{features.map((feature, index) => (
// 						<Card key={index}>
// 							<CardHeader>
// 								<feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
// 								<CardTitle className="text-center text-blue-600">
// 									{feature.title}
// 								</CardTitle>
// 							</CardHeader>
// 							<CardContent>
// 								<p className="text-center text-gray-600">
// 									{feature.description}
// 								</p>
// 							</CardContent>
// 						</Card>
// 					))}
// 				</div>
// 			</div>

// 			{/* Testimonials Section */}
// 			<div className="mb-24">
// 				<h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
// 					What Our Users Say
// 				</h2>
// 				<TestimonialsCarousel />
// 			</div>

// 			{/* How It Works Section */}
// 			<div className="mb-24">
// 				<h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
// 					How It Works
// 				</h2>
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// 					{howItWorks.map((step, index) => (
// 						<div key={index} className="text-center">
// 							<div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
// 								<span className="text-blue-600 font-bold text-xl">
// 									{index + 1}
// 								</span>
// 							</div>
// 							<h3 className="font-semibold text-lg mb-2">{step.step}</h3>
// 							<p className="text-gray-600">{step.description}</p>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			{/* CTA Section */}
// 			<div className="bg-blue-600 text-white rounded-lg p-8 text-center">
// 				<h2 className="text-3xl font-bold mb-4">
// 					Ready to Simplify Your Scheduling?
// 				</h2>
// 				<p className="text-xl mb-6">
// 					Join thousands of professionals who trust Schedulrr for efficient time
// 					management.
// 				</p>
// 				<Link href={"/dashboard"}>
// 					<Button size="lg" variant="secondary" className="text-blue-600">
// 						Start For Free{" "}
// 						<ArrowRight className="ml-2 h-5 w-5" />
// 					</Button>
// 				</Link>
// 			</div>
// 		</main>
// 	);
// }

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TestimonialsCarousel from "@/components/testimonials";

const features = [
	{
		icon: Calendar,
		title: "Create Events Instantly",
		description: "Design meeting types with full flexibility and zero hassle.",
	},
	{
		icon: Clock,
		title: "Smart Availability",
		description: "Set your availability and let PlanMyMeet handle the rest.",
	},
	{
		icon: LinkIcon,
		title: "Personalized Links",
		description: "Share a custom link that matches your scheduling style.",
	},
];

const howItWorks = [
	{ step: "Sign Up", description: "Create your free PlanMyMeet account." },
	{
		step: "Set Availability",
		description: "Customize your availability and rules.",
	},
	{ step: "Share Your Link", description: "Send your booking link to others." },
	{
		step: "Get Booked",
		description: "Meetings get added to your calendar automatically.",
	},
];

export default function Home() {
	return (
		<main className="container mx-auto px-6 py-16 space-y-24">
			{/* Hero Section */}
			<section className="grid lg:grid-cols-2 gap-16 items-center">
				<div>
					<h1 className="text-5xl md:text-6xl font-bold leading-tight text-blue-700 mb-6">
						Schedule Meetings Effortlessly
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						PlanMyMeet eliminates the hassle of scheduling. Choose your time slots, share your link, and let
						people book appointments that suit both of you.
					</p>
					<Link href="/dashboard">
						<Button size="lg" className="text-lg px-6">
							Get Started <ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</Link>
				</div>
				<div className="flex justify-center">
					<div className="relative w-full max-w-sm aspect-square rounded-xl overflow-hidden shadow-lg">
						<Image
							src="/poster-1.png"
							alt="Scheduling"
							fill
							className="object-contain"
							priority
						/>
					</div>
				</div>
			</section>

			{/* Core Features */}
			<section className="bg-gray-50 py-16 rounded-xl">
				<h2 className="text-4xl font-bold text-center text-blue-700 mb-4">Powerful Features</h2>
				<p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
					Everything you need to automate scheduling and enhance your productivity.
				</p>
				<div className="grid md:grid-cols-3 gap-10 px-4 md:px-8">
					{features.map((feature, index) => (
						<Card key={index} className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
							<CardHeader className="text-center">
								<div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
									<feature.icon className="w-8 h-8 text-blue-600" />
								</div>
								<CardTitle className="text-xl text-blue-800 font-semibold">{feature.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 text-center">{feature.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-16 bg-white">
				<h2 className="text-4xl font-bold text-center text-blue-700 mb-4">What Our Users Say</h2>
				<p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
					Hear from professionals who simplified their schedules with PlanMyMeet.
				</p>
				<TestimonialsCarousel />
			</section>

			{/* How It Works */}
			<section className="bg-blue-50 py-16 rounded-xl">
				<h2 className="text-4xl font-bold text-center text-blue-700 mb-4">How It Works</h2>
				<p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
					Just four simple steps to get started with effortless meeting coordination.
				</p>
				<div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-10 px-4 md:px-8 max-w-6xl mx-auto">
					{/* Progress line for desktop */}
					<div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-1 bg-blue-200 z-0" style={{transform: 'translateX(-50%)'}} />
					{howItWorks.map((step, index) => (
						<div
							key={index}
							className={`
								relative z-10 bg-white shadow-lg rounded-2xl flex-1 flex flex-col items-center text-center px-6 py-8
								transition-all duration-300 hover:shadow-2xl
								${index !== howItWorks.length - 1 ? 'mb-8 lg:mb-0' : ''}
							`}
						>
							{/* Step circle with number or checkmark */}
							<div className={`
								flex items-center justify-center w-16 h-16 rounded-full mb-4 border-4
								${index === howItWorks.length - 1
									? 'bg-green-100 border-green-300'
									: 'bg-blue-100 border-blue-300'}
								shadow
							`}>
								{index === howItWorks.length - 1 ? (
									<svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
									</svg>
								) : (
									<span className="text-blue-700 font-bold text-2xl">{index + 1}</span>
								)}
							</div>
							<h3 className="font-semibold text-xl text-blue-800 mb-2">{step.step}</h3>
							<p className="text-gray-600 px-2">{step.description}</p>
							{/* Connector line for mobile */}
							{index !== howItWorks.length - 1 && (
								<div className="block lg:hidden absolute left-1/2 bottom-0 w-1 h-8 bg-blue-200" style={{transform: 'translateX(-50%)'}} />
							)}
						</div>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="bg-blue-600 text-white rounded-xl p-10 text-center">
				<h2 className="text-3xl font-bold mb-4">Take Control of Your Calendar Today</h2>
				<p className="text-lg mb-6">
					Thousands of users trust PlanMyMeet for frictionless scheduling. Try it for free.
				</p>
				<Link href="/dashboard">
					<Button size="lg" variant="secondary" className="text-blue-700 bg-white hover:bg-gray-100">
						Start Free <ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</Link>
			</section>
		</main>
	);
}