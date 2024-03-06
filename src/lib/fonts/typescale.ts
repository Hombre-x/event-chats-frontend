const perfectFourth = 4.0 / 3.0

type TypescaleEm = string

export const perfectFourthTypescale = (level: number): TypescaleEm =>
  `${Math.pow(perfectFourth, level)}em`
