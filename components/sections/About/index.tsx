'use client';

import { Container } from '@components/layout/Container';
import { animationFadeInUp } from '@lib/utils';
import { Undo } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
    return (
        <Container className="pt-4 pb-4 md:pt-8 md:pb-8 border-l border-r border-t">
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
                className="space-y-4"
            >
                <motion.p
                    variants={animationFadeInUp}
                    className="text-md md:text-lg text-foreground leading-relaxed max-w-2xl relative"
                >
                    [About me]
                    <span className="absolute top-[-20] left-28 font-handwriting text-muted-foreground">
                        <span className="absolute top-1 md:top-1 md:left-2">Shortly</span>
                        <Undo
                            className="absolute top-5 -left-4 md:-left-1.5 rotate-180 scale-x-[-1]"
                            size={18}
                        />
                    </span>
                </motion.p>
                <motion.p
                    variants={animationFadeInUp}
                    className="text-md md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
                >
                    My name is Mikhail, and i’m a frontend developer who, over the past three years,
                    has been helping projects become faster, more stable, and more enjoyable for
                    users.
                </motion.p>
            </motion.div>
        </Container>
    );
}
