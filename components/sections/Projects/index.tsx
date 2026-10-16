'use client';

import { Container } from '@components/layout/Container';
import { Button } from "@components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
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
      <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
            <CardTitle>Design systems meetup</CardTitle>
            <CardDescription>
              A practical talk on component APIs, accessibility, and shipping
              faster.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">View Event</Button>
          </CardFooter>
        </Card>
    </Container>
  );
}
