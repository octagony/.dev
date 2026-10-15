'use client';

import { Container } from '@components/layout/Container';
import { animationFadeInUp } from '@lib/utils';
import { motion } from 'motion/react';

export function Projects() {
  return (
    <Container className="pt-4 pb-10 md:pt-8 md:pb-20 border-l border-r border-t">
      <motion.p
        variants={animationFadeInUp}
        className="text-md md:text-lg text-foreground leading-relaxed max-w-2xl relative"
      >
        [Projects]
      </motion.p>
    </Container>
  );
}
