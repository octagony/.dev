import { About } from "@components/sections/About";
import { Hero } from "@components/sections/Hero";
import { Stack } from "@components/sections/Stack";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<Hero />
			<About />
			<Stack />

		</main>
	);
}