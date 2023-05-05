import { HTMLAttributes, useCallback, useLayoutEffect, useState } from 'react'
import { useTransform, motion } from 'framer-motion'

import { CarModel } from '../contexts/Models.context'

import { useWrapperScroll } from '../hooks/useWrapperScroll'

type Props = HTMLAttributes<HTMLDivElement> & {
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

export function ModelOverlay({ model, children }: Props) {
  const { scrollY } = useWrapperScroll()

  const getSectionDimensions = useCallback(() => {
    return {
      offsetHeight: model.sectionRef.current?.offsetHeight,
      offsetTop: model.sectionRef.current?.offsetTop,
    } as SectionDimensions
  }, [model.sectionRef])

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions(),
  )

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
    }

    window.addEventListener('resize', onResize)

    return () => window.addEventListener('resize', onResize)
  }, [getSectionDimensions])

  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight,
  )

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0],
  )

  const pointerEvents = useTransform(opacity, (value) =>
    value > 0 ? 'auto' : 'none',
  )

  return (
    <motion.div
      className="flex flex-col items-center sticky top-0 h-screen -mt-[100vh]"
      style={{ opacity, pointerEvents }}
    >
      {children}
    </motion.div>
  )
}
