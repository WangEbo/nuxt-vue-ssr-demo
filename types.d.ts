export type BannerItem = {
  url: string;
}

export type GoodItem = {
  id: string,
  name: string,
  url: string;
  alt?: string;
  description: string;
  prcie: number
  sealCount: number,
  checked?: boolean,  //是否已选择
}

export type UnserInfo = {
  name: string,
  avatorUrl: string,
}

export type StoreItem = {
  address: string,  //地址
  name: string, //仓库名
  id: string,
}

export type CommentItem = {
  nicoName: string, //昵称
  content: string,
  rate: number,  //评分
  avator: string, //头像
  cTime: string, //评价时间
  imgs?: string[],//评价图片
}