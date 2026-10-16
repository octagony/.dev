'use client';

import { Container } from '@components/layout/Container';
import { SectionHeader } from "@components/layout/SectionHeader";
import { Badge } from '@components/ui/badge';
import { animationFadeInUp, stackBlock } from '@lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';

export function Stack() {
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
        <SectionHeader text="Stack"/>
        <motion.p
          variants={animationFadeInUp}
          className="text-md md:text-lg text-muted-foreground leading-relaxed max-w-2xl relative mb-2"
        >
          Take a look at what i use in my development
        </motion.p>
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
          {stackBlock.map((item, index) => (
            <div
              className="grid items-start gap-y-2 border-b border-line border-line py-4 last:border-none md:grid-cols-2 mb-0"
              key={index}
            >
              <div>
                <motion.span
                  variants={animationFadeInUp}
                  className="mr-1.5 font-mono text-muted-foreground select-none"
                >
                  0{index + 1}
                </motion.span>
                <motion.span
                  variants={animationFadeInUp}
                  className="font-mono text-muted-foreground select-none"
                >
                  {item.name}
                </motion.span>
              </div>
              <motion.ul
                variants={animationFadeInUp}
                aria-labelledby={`stack-${item.name}`}
                className="flex flex-wrap gap-1.5 md:gap-4 px-4"
              >
                {item.stack.map((tech, i) => (
                  <li key={i} className="flex">
                    <Badge variant="outline" className="py-3 md:py-4">
                      <Image
                        src={`/icons/${tech.icon}.svg`}
                        alt="img"
                        width={0}
                        height={0}
                        className="rounded-sm w-5 h-5 md:w-6 md:h-6"
                      />
                      <span className="md:text-sm">{tech.title}</span>
                    </Badge>
                  </li>
                ))}
              </motion.ul>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}
