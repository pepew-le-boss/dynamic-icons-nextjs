import { ComponentProps } from 'react';

interface IconProps extends ComponentProps<'svg'> {
  name: string
}

export const Icon1 = async ({ name, ...props }: IconProps) => {
  const svgDir = require.context("../icons", false, /\.svg$/)
  const Svg = svgDir(`./${name}.svg`).default

  return <Svg {...props} />
}

// BUNDLE:
// nodejs.html => no chunk
// client.html => one big chunk with all the icons

// BUILD:
// first load js => 144kB

// START:
// app running => working well

// IS IT GOOD?
// overall => not ideal