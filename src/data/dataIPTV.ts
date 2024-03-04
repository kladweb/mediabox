import { Icinemas, Idevices, Ioperators, Iplayers, IplayersAll } from "../types/typesBox";

export const nameApp: string
  = 'MEDIABOX';

export const devices: Idevices = {
  boxes: ['Android TV Box', 'Apple TV'],
  smarttv: ['LG Smart TV', 'SAMSUNG Smart TV']
  // smarttv: ['LG Smart TV', 'SAMSUNG Smart TV', 'Android TV']
}

export const playersAll: IplayersAll = {
  ottnavigator: 'OTT Navigator',
  ottplayfoss: 'OTT-play FOSS',
  ottplaybyalex: 'Ott-Play by Alex',
  televizo: 'Televizo',
  ottplayer: 'OttPlayer',
  ssiptv: 'SS IPTV',
  flexiptv: 'Flex IPTV',
  riptv: 'rIPTV',
}

export const players: Iplayers = {
  androidtvbox: [
    'Televizo',
    'OTT Navigator',
    'OTT-play FOSS',
    'Ott-Play by Alex',
    'OttPlayer',
  ],
  appletv: [
    // 'rIPTV',
    'Flex IPTV',
    'OttPlayer',
  ],
  lgsmarttv: [
    'OTT-play FOSS',
    'Ott-Play by Alex',
    'SS IPTV',
    'OttPlayer',
  ],
  samsungsmarttv: [
    'OTT-play FOSS',
    'Ott-Play by Alex',
    'SS IPTV',
    'OttPlayer',
  ],
  androidtv: [
    'Televizo',
    'OTT Navigator',
    'OTT-play FOSS',
    'Ott-Play by Alex',
    'OttPlayer',
  ],
};

export const operators: Ioperators = {
  ilooktv: {
    name: 'ILookTv',
    links: [
      'https://vipdrive.net/welcome/signup/54e9515db854ab61',
      'https://tvlider.net/welcome/signup/54e9515db854ab61',
      'https://melord.net/welcome/signup/54e9515db854ab61',
      'https://jinopro.net/welcome/signup/54e9515db854ab61',
      'https://iseetv.net/welcome/signup/54e9515db854ab61',
    ],
    linksDirect: [
      'https://ilook.tv/',
      'https://vipdrive.net/',
      'https://tvlider.net/',
      'https://melord.net/',
      'https://jinopro.net/',
      'https://iseetv.net/',
    ],
    epg: 'http://epg.it999.ru/epg.xml.gz'
  },
  sharavoz: {
    name: 'Sharavoz',
    links: [
      'https://ztempz.xyz/YZoaV4m2wgp-qvc0IYnwHb4TgHBqZaaFgzY8AoVUr2zQJ8fB-w4elw=='
    ],
    linksDirect: [
      'https://ztempz.xyz/'
    ],
    epg: 'http://iptv-content.webhop.net/guide.xml'
  },
  viplime: {
    name: 'VipLime',
    links: [
      'http://viplime.fun/index.php?user=2006'
    ],
    linksDirect: [
      'http://viplime.fun/'
    ],
    epg: 'http://epg.cdntv.online/full.xml.gz'
  },
  domavip: {
    name: 'DOMA.VIP',
    links: [
      'http://doma.vip/index.php?invited=1116'
    ],
    linksDirect: [
      'http://doma.vip/'
    ],
    epg: 'http://epg.cdntv.online/full.xml.gz',
  },
  cbilling: {
    name: 'cbilling',
    links: [
      'https://ott-iptv-connect.com/?pp=23417',
      'https://otttviptv.com/?pp=23417',
      'https://smotrivip.com/?pp=23417',
      'https://russianiptv.com/?pp=23417'
    ],
    linksDirect: [
      'https://ott-iptv-connect.com/',
      'https://otttviptv.com/',
      'https://smotrivip.com/',
      'https://russianiptv.com/'
    ],
    epg: 'http://epg.iptvx.tv/xmltv.xml.gz'
  },
  kineskopclub: {
    name: 'Kineskop.club',
    links: [
      'https://kineskop.club/?p=MTAxMTI0MA'
    ],
    linksDirect: [
      'https://kineskop.club/'
    ],
    epg: 'http://st.kineskop.tv/epg.xml.gz'
  },
  // satbiling: {
  //   name: 'Satbiling',
  //   links: [
  //     'https://satbiling.com/register.php?partner=62513'
  //   ],
  //   epg: 'http://epg.cdntv.online/full.xml.gz'
  // },
  sharatv: {
    name: 'SHARA-TV',
    links: [
      'https://shara-tv.org/r/19149/'
    ],
    linksDirect: [
      'https://shara-tv.org/'
    ],
    epg: 'http://epg.tvfor.pro/epgtv.xml.gz',
    epgold2: 'http://iptv-content.rv77.pw/epg.xml.gz',
    epgOld: 'http://stb.shara-tv.org/epg/epgtv.xml.gz',
    epg1: 'http://iptv-content.rv77.pw/guide.xml',
    epg2: 'http://iptv-content.rv77.pw/epg.xml.gz',
    epg3: 'http://iptv-content.rv77.pw/epg.xml.xz',
    epg1_lite: 'http://iptv-content.rv77.pw/guide-lite.xml',
    epg2_lite: 'http://iptv-content.rv77.pw/epg-lite.xml.gz',
    epg3_lite: 'http://iptv-content.rv77.pw/epg-lite.xml.xz'
  }
}

export const listsChannels = {

}

export const cinemas: Icinemas = {
  hdvideobox: 'HD Videobox',
  lampaandroid: 'Lampa for android',
  lampasmarttv: 'Lampa for Smart TV',
  lampabrowser: 'Lampa for browser'
}