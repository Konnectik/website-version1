import { motion } from "framer-motion";
import { Smartphone, Wifi, Clock, TrendingDown } from "lucide-react";

const steps = [
	{
		icon: Smartphone,
		title: "Download the App",
		description:
			"Get Konnectik on your mobile device and create your account in seconds.",
	},
	{
		icon: Clock,
		title: "Choose Your Time",
		description:
			"Purchase affordable, time-based unlimited Wi-Fi access that fits your needs.",
	},
	{
		icon: Wifi,
		title: "Connect Anywhere",
		description:
			"Access hyperlocal Wi-Fi zones powered by fibre optics, 5G/LTE, and satellite infrastructure.",
	},
	{
		icon: TrendingDown,
		title: "Save Big",
		description:
			"Enjoy seamless connectivity at a fraction of traditional mobile data costs.",
	},
];

export const HowItWorks = () => {
	return (
		<section
			id="how-it-works"
			className="py-12 md:py-16 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary)) 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, hsl(var(--primary)) 2%, transparent 0%)`,
						backgroundSize: "100px 100px",
					}}
				/>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-10"
				>
					<h2 className="text-3xl md:text-4xl font-black mb-2">
						How It{" "}
						<span className="text-primary">Works</span>
					</h2>
					<p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
						Get connected in four simple steps and start saving on your internet
						costs today.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="relative"
						>
							{/* Connector Line */}
							{index < steps.length - 1 && (
								<div className="hidden lg:block absolute top-14 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
							)}

							<div className="bg-card border rounded-2xl p-5 md:p-6 shadow-subtle hover:shadow-strong transition-smooth h-full">
								{/* Step Number */}
								<div className="text-5xl md:text-6xl font-black text-primary/10 absolute top-2 right-2">
									{index + 1}
								</div>

								{/* Icon */}
								<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 relative z-10">
									<step.icon className="w-6 h-6 text-primary" />
								</div>

								{/* Content */}
								<h3 className="text-lg font-bold mb-2">{step.title}</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">
									{step.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Comparison */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mt-12 md:mt-16 max-w-3xl mx-auto"
				>
					<div className="bg-card border-2 rounded-2xl p-6 md:p-8 shadow-strong">
						<h3 className="text-2xl font-black text-center mb-6">
							Cost Comparison
						</h3>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Traditional Mobile Data */}
							<div className="text-center">
								<div className="text-muted-foreground font-semibold mb-2 text-sm">
									Traditional Mobile Data
								</div>
								<div className="text-4xl md:text-5xl font-black text-muted-foreground mb-1">
									15,000-40,000 XAF
								</div>
								<div className="text-xs text-muted-foreground">
									per month
								</div>
								<div className="mt-2 text-xs text-muted-foreground">
									Limited data, high costs
								</div>
							</div>

							{/* Konnectik */}
							<div className="text-center relative">
								<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-bold">
									BEST VALUE
								</div>
								<div className="text-primary font-semibold mb-2 text-sm pt-4">
									Konnectik
								</div>
								<div className="text-4xl md:text-5xl font-black text-primary mb-1">
									2,500 XAF
								</div>
								<div className="text-xs text-muted-foreground">
									per month
								</div>
								<div className="mt-2 text-xs font-semibold text-primary">
									Unlimited data, time limited
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
