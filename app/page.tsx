import { Container } from "@components/layout/Container";


export default function Home() {
	return (
		<Container className="py-20">
			<h1 className="text-2xl font-semibold tracking-tight text-foreground">
				Welcome
			</h1>
			<p className="mt-4 text-zinc-400 leading-relaxed">
				Test text
			</p>
		</Container>
	);
}