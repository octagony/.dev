'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from 'cn';
import { Container } from '@components/layout/Container';
import { animationFadeInUp } from '@lib/utils';
import Image from 'next/image';

export function Hero() {
    return (
        <Container className="pt-20 pb-8 md:pt-32 md:pb-8 border-l border-r">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.12,
                            delayChildren: 0.1,
                        },
                    },
                }}
                className="space-y-8"
            >
                <motion.div variants={animationFadeInUp} className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-sm font-medium text-muted-foreground tracking-wide">
                        Available for new projects
                    </span>
                </motion.div>

                <motion.h1
                    variants={animationFadeInUp}
                    className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]"
                >
                    From idea to production
                    <br className="hidden md:block" />
                    <div className="text-muted-foreground">
                        let’s go through this journey together
                    </div>
                </motion.h1>

                <motion.p
                    variants={animationFadeInUp}
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                >
                    I help projects launch quickly, scale thoughtfully, and stay polished—in code,
                    design, and ethics.
                </motion.p>

                <motion.div variants={animationFadeInUp} className="flex flex-wrap gap-4 pt-2">
                    <Link
                        href="#projects"
                        className={cn(
                            'group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98]',
                        )}
                    >
                        Contact Me
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>

                    <Link
                        href="#contact"
                        className={cn(
                            'inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-muted/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted hover:border-border/80 hover:scale-[1.02] active:scale-[0.98]',
                        )}
                    >
                        View Projects
                    </Link>
                </motion.div>
            </motion.div>
        </Container>
    );
}
