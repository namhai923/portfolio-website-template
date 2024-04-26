"use client"

import { MotionStyle, Variants, motion } from "framer-motion"
import { ReactNode } from "react"

export const slideInLeftAnimationVariant: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
}

export const zoomInandOutAnimationVariant: Variants = {
  initial: {
    scale: 0.9,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
}

export const slideInRightAnimationVariant: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
}

export const fadeInAnimationVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
}

export const slideInTopLeftVariant: Variants = {
  initial: {
    x: 50,
    y: 50,
    opacity: 0,
  },
  animate: (index: number) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
}

export const slideInTopRightVariant: Variants = {
  initial: {
    x: -50,
    y: 50,
    opacity: 0,
  },
  animate: (index: number) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
}

export const slideInTopVariant: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
}

export function InView({
  children,
  variant,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode
  variant?: Variants
  delay?: number
  className?: string
  style?: MotionStyle
}) {
  return (
    <motion.div
      variants={variant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={delay}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
