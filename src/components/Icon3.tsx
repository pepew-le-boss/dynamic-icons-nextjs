import { ComponentProps } from 'react';

interface IconProps extends ComponentProps<'svg'> {
  name: string
}

export const Icon3 = async ({ name, ...props }: IconProps) => {
  const Svg = (await import(`../icons/${name}.svg`)).default

  return <Svg {...props} />
}

// BUNDLE:
// nodejs.html => one chunk per icon
// client.html => one big chunk with all the icons

// BUILD:
// first load js => 144kB

// START:
// app running => working well

// IS IT GOOD?
// overall => not ideal
