// 导航数据。因内容不多，固采用 json方式。如果内容很多，可以考虑和文章一样的调用方法
import type { Tools } from './types'

export const toolsdata: Tools[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://cn.office-converter.com/Online-Converter/OnlineConvert32.png',
        title: 'Office Converter',
        desc: '文件格式转换',
        link: 'https://cn.office-converter.com/png-to-ico',
        linktxt: 'fococlipping.com',
      },
      {
        icon: 'https://picsum.photos/assets/images/favicon/favicon-32x32.png',
        title: 'Lorem Picsum',
        desc: '随机图片生成',
        link: 'https://picsum.photos/',
        linktxt: 'picsum.photos',
      },
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I Use',
        desc: '随机图片生成',
        link: 'https://caniuse.com/',
        linktxt: 'caniuse.com',
      },
      {
        icon: 'https://tinypng.com/images/favicon.ico',
        title: 'Tinypng',
        desc: '图片压缩',
        link: 'https://tinypng.com/',
        linktxt: 'tinypng.com',
      }
    ],
  },
  // {
  //   title: '开发',
  //   items: [
      
  //   ],
  // },
  // {
  //   title: '大厂AI',
  //   items: [
      
  //   ],
  // },
]
