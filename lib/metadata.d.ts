declare namespace metadata {
  interface tagMetadata {
    name: string,
    opening: boolean,
    closing: boolean
  }

  const allowedHeadTags: tagMetadata[]
  const beforeHeadEndTags: tagMetadata[]
  const afterBodyEndTags: tagMetadata[]
}

export = metadata
