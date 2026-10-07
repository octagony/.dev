import Image from "next/image";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav
				className="flex py-2 px-4 bg-background border-b border-slate-300 dark:border-neutral-700 dark:bg-neutral-900 min-h-17 relative z-20"
				aria-label="Main navigation"
			>
				<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 w-full">
					<Image
						loading="eager"
						src="/logo.svg"
						alt="logo"
						width={36}
						height={36}
					/>
					{/*MOBILE MENU*/}
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger>
								<Menu />
							</SheetTrigger>
							<SheetContent className=" p-2 pt-20 md:flex flex-col gap-16 text-center">
								<SheetClose>
									<Link href="/" className="text-5xl">
										Home
									</Link>
								</SheetClose>
								<SheetClose>
									<Link href="/projects" className="text-5xl">
										Projects
									</Link>
								</SheetClose>
								<SheetClose>
									<Link href="/about" className="text-5xl">
										About
									</Link>
								</SheetClose>
								<SheetClose>
									<Link
										href="/contact"
										className="text-5xl text-white bg-blue-400 max-w-max self-center p-2 border rounded-xl"
									>
										Hire me
									</Link>
								</SheetClose>
							</SheetContent>
						</Sheet>
					</div>
					{/*DESKTOP MENU*/}
					<ul className="hidden md:flex gap-8 font-semibold text-md text-slate-900 dark:text-slate-50 lg:flex-row max-lg:p-6">
						<li>
							<a
								href="#"
								className="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
							>
								About
							</a>
						</li>
						<li className="hover:animate-wiggle">
							<a
								href="#"
								className="text-white bg-blue-400 max-w-max self-center p-2 rounded-xl"
							>
								Hire me
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
