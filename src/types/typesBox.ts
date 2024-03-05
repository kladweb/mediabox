import { useTranslation } from "react-i18next";
import { cinemas, playersAll } from "../data/dataIPTV";
import { OutletProps } from "react-router-dom";

export type PropsStep = {
  step: number;
}

export type PropsImg = {
  image: string;
}

export type PropsCinema = {
  cinema: string
}

export type PropsDevice = {
  device: string
}

export type PropsPlayer = {
  player: string
}

export type PropsOperator = {
  operator: string;
}

interface callbackType {
  (myArgument: string): void
}

export type PropsListChannels = {
  operator: string;
  aktiveCard: string;
  changeCard: callbackType;
}

export type PropsLoader = {
  isOpenLoader: boolean;
}

export type PropsService = {
  textInfo: string,
  pageNavigation: string,
  nameService: string,
  descriptionService: string
}

export type PropsCategoriesList = OutletProps & {
  categoriesList: null | object
}

export interface ITranslate {
  t: ReturnType<typeof useTranslation>['t']
}

export interface ITranslateI18n {
  t: ReturnType<typeof useTranslation>['t'],
  i18n: ReturnType<typeof useTranslation>['i18n'],
}

export interface ILinks {
  linkOfficial?: string
  link4PDA?: string,
  linkFast?: string,
}

export interface ILocales {
  en: { title: 'English' },
  ru: { title: 'Русский' }
}

export interface Idevices {
  boxes: string[],
  smarttv: string[]
}

export interface IplayersAll {
  ottnavigator: string,
  ottplayfoss: string,
  ottplaybyalex: string,
  televizo: string,
  ottplayer: string,
  ssiptv: string,
  flexiptv: string,
  riptv: string,
}

export interface Iplayers {
  androidtvbox: string[],
  appletv: string[],
  lgsmarttv: string[],
  samsungsmarttv: string[],
  androidtv: string[],
}

export interface Icinemas {
  hdvideobox: string,
  lampaandroid: string,
  lampasmarttv: string,
  lampabrowser: string
}

export interface Ioperators {
  ilooktv: {
    name: string,
    links: string[],
    linksDirect: string[],
    epg: string
  },
  sharavoz: {
    name: string,
    links: string[],
    linksDirect: string[],
    epg: string,
  },
  viplime: {
    name: string,
    links: string[],
    linksDirect: string[],
    epg: string
  },
  domavip: {
    name: string,
    links: string[],
    linksDirect: string[],
    epg: string
  },
  cbilling: {
    name: string,
    links: string[],
    linksDirect: string[],
    epg: string
  },
  kineskopclub: {
    name: string,
    links: string[],
    linksDirect: string[],
    epg: string
  },
  // satbiling: {
  //   name: string,
  //   links: string[],
  //   epg: string
  // },
  sharatv: {
    name: string,
    links: string[],
    linksDirect: string[],
    epg: string,
    epgold2: string,
    epgOld: string,
    epg1: string,
    epg2: string,
    epg3: string,
    epg1_lite: string,
    epg2_lite: string,
    epg3_lite: string,
  }
}

export type ContextCategoriesType = { [index: string]: any };