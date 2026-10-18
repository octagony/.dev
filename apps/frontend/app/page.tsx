import { About } from '@components/sections/About';
import { Contact } from '@components/sections/Contact';
import { Hero } from '@components/sections/Hero';
import { Projects } from "@components/sections/Projects";
import { Stack } from '@components/sections/Stack';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
}
