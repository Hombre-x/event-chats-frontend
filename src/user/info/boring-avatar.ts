export const boringAvatarUrl = (
  size: number = 40,
  name: string,
  square: boolean = false,
  variant:
    | "marble"
    | "beam"
    | "pixel"
    | "sunset"
    | "ring"
    | "bauhaus" = "marble",
  colors: Array<String> = [
    "#92A1C6",
    "#146A7C",
    "#F0AB3D",
    "#C271B4",
    "#C20D90",
  ],
): string =>
  `https://source.boringavatars.com/${variant}/${size}/${name}?colors=${colors.join(",")}${square ? "&square" : ""}`
