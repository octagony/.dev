import { cn } from "@lib/utils";
import { IContainerComponentProps } from "@components/layout/Container/IContainerComponentProps.ts";

export function Container({ children, className, ...props }: IContainerComponentProps) {
	return (
		<div
			className={cn(
				"mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}