import { HTMLParseUtils } from './metadata'

export function findPosWithoutTags (html: string, tags: HTMLParseUtils.TagMetadata[], fromEnd?: boolean): number

export function findHtmlHeadEnd (html: string): number

export function findHtmlBodyEnd (html: string): number
