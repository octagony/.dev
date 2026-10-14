import { cn } from "@lib/utils";
import { IContainerComponentProps } from "@components/layout/Container/IContainer.interface";

export function Container({ children, className, ...props }: IContainerComponentProps) {
	return (
		<section
			className={cn(
				"mx-auto w-full max-w-2xl md:max-w-3xl px-4 sm:px-6 lg:px-8",
				className
			)}
			{...props}
		>
			{children}
		</section>
	);
}