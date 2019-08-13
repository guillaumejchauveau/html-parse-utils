/**
 * @file Contains information extracted from W3C specifications.
 */

const allowedHeadTags = [
  {
    name: 'title',
    opening: true,
    closing: true
  },
  {
    name: 'base',
    opening: true
  },
  {
    name: 'link',
    opening: true
  },
  {
    name: 'style',
    opening: true,
    closing: true
  },
  {
    name: 'meta',
    opening: true
  },
  {
    name: 'script',
    opening: true,
    closing: true
  },
  {
    name: 'noscript',
    opening: true,
    closing: true
  },
  {
    name: 'template',
    opening: true,
    closing: true
  }
]

module.exports = {
  allowedHeadTags,
  beforeHeadEndTags: [
    {
      name: '!doctype',
      opening: true
    },
    {
      name: 'html',
      opening: true
    },
    {
      name: 'head',
      opening: true
    },
    ...allowedHeadTags
  ],
  afterBodyEndTags: [
    {
      name: 'html',
      closing: true
    },
    {
      name: 'body',
      closing: true
    }
  ]
}
