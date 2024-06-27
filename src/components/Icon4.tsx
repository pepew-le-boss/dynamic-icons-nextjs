"use client"

import { ComponentProps, ComponentType, useEffect, useState } from 'react'

interface IconProps extends ComponentProps<'svg'> {
  name: string
}

export const Icon4 = ({ name, ...props }: IconProps) => {
  const [Svg, setSvg] = useState<ComponentType<ComponentProps<'svg'>> | null>(null)

  useEffect(() => {
    const importIcon = async () => {
        const currentSvg = (await import(`../icons/${name}.svg`)).default
        setSvg(() => currentSvg)
    }
    importIcon()
  }, [name])

  if (!Svg) return null

  return <Svg {...props} />
}

// BUNDLE:
// nodejs.html => one chunk per icon
// client.html => one chunk per icon

// BUILD:
// first load js => 88.9kB

// START:
// app running => icon takes time to appear because loaded client side

// IS IT GOOD?
// overall => not ideal