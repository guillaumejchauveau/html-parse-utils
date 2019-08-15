import { tagMetadata } from './metadata'

export = HTMLParseUtils

declare namespace HTMLParseUtils {
  function findPosWithoutTags (html: string, tags: tagMetadata[], fromEnd?: boolean): number

  function findHtmlHeadEnd (html: string): number

  function findHtmlBodyEnd (html: string): number
}
