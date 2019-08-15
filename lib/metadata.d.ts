export namespace HTMLParseUtils {
  interface TagMetadata {
    name: string,
    opening: boolean,
    closing: boolean
  }
}

export const allowedHeadTags: HTMLParseUtils.TagMetadata[]
export const beforeHeadEndTags: HTMLParseUtils.TagMetadata[]
export const afterBodyEndTags: HTMLParseUtils.TagMetadata[]
