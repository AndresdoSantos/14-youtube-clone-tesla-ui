import clsx from 'clsx'
import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react'

import { useModel } from '../hooks/useModel'

type Props = HTMLAttributes<HTMLDivElement> & {
  modelName: string
  overlayNode: ReactNode
}

export function ModelSection({
  modelName,
  overlayNode,
  children,
  className,
  ...props
}: Props) {
  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef })
    }
  }, [modelName, overlayNode, registerModel])

  return (
    <div
      ref={sectionRef}
      className={clsx('h-screen snap-start', className)}
      {...props}
    >
      {children}
    </div>
  )
}
