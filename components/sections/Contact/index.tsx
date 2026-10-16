"use client";

import { motion } from "motion/react";
import { Container } from "@components/layout/Container";
import { cn } from "cn";
import { ArrowUpRight, Mail } from "lucide-react";
import { DOT_COLOR, fadeUp, socialLinks } from "@lib/utils";
import { SectionHeader } from "@components/layout/SectionHeader";
import { DotGridSpotlight } from "@components/ui/dot-grid-spotlight";
import { useTheme } from "next-themes";
import { Icon } from "@components/ui/Icon";

export function Contact() {
	const { resolvedTheme } = useTheme();
	  const theme = resolvedTheme === "dark" ? "dark" : "light";

	return (
		<Container className="pt-4 pb-4 md:pt-8 md:pb-8 border-l border-r border-t relative" id="contact">
			<div className="absolute inset-0 dark:opacity-40">
				<DotGridSpotlight dotColor={DOT_COLOR[theme]?.default}
        activeDotColor={DOT_COLOR[theme]?.active} />
			</div>

			<SectionHeader text="Let's Connect" />

			<motion.p
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				variants={fadeUp}
				className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12"
			>
				I'm always interested in new opportunities, collaborations, and interesting projects.
				Whether you have a question or just want to say hi, feel free to reach out
			</motion.p>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{socialLinks.map((link, index) => (
					<motion.a
						key={link.name}
						href={link.href}
						target={link.name !== "Email" ? "_blank" : undefined}
						rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={fadeUp}
						transition={{ delay: index * 0.1 }}
						className={cn(
							"group relative flex items-center gap-4 p-6 rounded-xl",
							"border border-border bg-muted/30",
							"transition-all duration-300",
							"hover:bg-muted/60 hover:border-border/80 hover:scale-[1.02]",
							"active:scale-[0.98]"
						)}
					>
						<div className="shrink-0">
							<Icon as={link.icon!}/>
						</div>

						<div className="flex-1 min-w-0">
							<h3 className="text-base font-semibold text-foreground mb-1">
								{link.name}
							</h3>
							<p className="text-sm text-muted-foreground truncate">
								{link.description}
							</p>
						</div>

						<ArrowUpRight
							className="h-4 w-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</motion.a>
				))}
			</div>
		</Container>
	);
}