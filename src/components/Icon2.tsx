import { ComponentProps } from 'react';
import dynamic from 'next/dynamic';

interface IconProps extends ComponentProps<'svg'> {
  name: string
}

export const Icon2 = async ({ name, ...props }: IconProps) => {
  const Svg = dynamic(() => import(`../icons/${name}.svg`))

  return <Svg {...props} />
}

// BUNDLE:
// nodejs.html => one chunk per icon
// client.html => one big chunk with all the icons

// BUILD:
// first load js => 145kB

// START:
// app running => slight flicker when reloading

// IS IT GOOD?
// overall => not ideal