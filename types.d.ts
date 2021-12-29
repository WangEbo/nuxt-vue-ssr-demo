export type BannerItem = {
  url: string;
}

export type GoodItem = {
  name: string,
  url: string;
  alt?: string;
  description: string;
  prcie: number
  sealCount: number,
  checked?: boolean
}

export type UnserInfo = {
  name: string,
  avatorUrl: string,
}