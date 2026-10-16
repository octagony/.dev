'use client';

import { Container } from '@components/layout/Container';
import { SectionHeader } from '@components/layout/SectionHeader';
import { animationFadeInUp } from '@lib/utils';
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
        <SectionHeader text="About me" />
        <motion.p
          variants={animationFadeInUp}
          className="text-md md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          My name is Mikhail, and i’m a frontend developer who, over the past three years, has been
          helping projects become faster, more stable, and more enjoyable for users.
        </motion.p>
      </motion.div>
    </Container>
  );
}
