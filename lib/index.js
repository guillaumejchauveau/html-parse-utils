const metadata = require('./metadata')

const tagNameIdentifiers = {
  start: ['<'],
  end: [' ', '>'],
  reverseReadStart: ['>'],
  reverseReadEnd: ['<']
}

/**
 * Looks for a position in a string of HTML where an unspecified tag is
 * found.
 *
 * @param {string} html The string on which the search is made.
 * @param {object[]} tags The whitelist of tags.
 * @param {boolean} fromEnd Determines if the search starts at the file's top or
 * bottom.
 *
 * @returns {number} The position in the string before an unspecified tag
 * appears.
 */
function findPosWithoutTags (html, tags, fromEnd = false) {
  /**
   * Current position in the string.
   * @type {number}
   */
  let pos = fromEnd ? (html.length - 1) : 0
  /**
   * Used in operations that depends on the read direction.
   */
  const inc = fromEnd ? -1 : 1

  /**
   * Characters matching the beginning of a tag's name.
   * @see tagNameIdentifiers
   */
  const tagNameStart =
    fromEnd ? tagNameIdentifiers.reverseReadStart : tagNameIdentifiers.start
  /**
   * Characters matching the end of a tag's name.
   * @see tagNameIdentifiers
   */
  const tagNameEnd =
    fromEnd ? tagNameIdentifiers.reverseReadEnd : tagNameIdentifiers.end

  /**
   * Defines if the loop is reading a tag's name.
   * @type {Boolean}
   */
  let readingTagName = false
  /**
   * The tag's name currently being processed, otherwise an empty string.
   * @type {String}
   */
  let currentTagName = ''

  for (pos; pos >= 0 && pos < html.length; pos += inc) {
    // Cursor is on a tag's name.
    if (!readingTagName && tagNameStart.includes(html[pos])) {
      readingTagName = true
      continue
    }

    // Tag's name is complete.
    if (readingTagName && tagNameEnd.includes(html[pos])) {
      readingTagName = false
      // Determines if the tag is in the whitelist.
      const tagIsAllowed = tags.some(tag => {
        if (tag.opening && tag.name === currentTagName) {
          return true
        }

        if (tag.closing && ('/' + tag.name) === currentTagName) {
          return true
        }
      })

      if (tagIsAllowed) {
        // Tag is ignored.
        currentTagName = ''
        openingTag = false
      } else {
        // The position before the tag is returned.
        return pos - (currentTagName.length + (fromEnd ? 2 : 1)) * inc
      }
    }

    // Reading tag's name.
    if (readingTagName) {
      const htmlChar = html[pos].toLowerCase()
      // Adds the new character at the beginning depending on the read
      // direction.
      currentTagName =
        fromEnd ? (htmlChar + currentTagName) : (currentTagName + htmlChar)
    }
  }
}

/**
 * Finds the position in the string of head tag's end.
 *
 * @param {string} html The string on which the search is made.
 *
 * @returns {number} The position of the head tag's end in the string.
 */
function findHtmlHeadEnd (html) {
  return findPosWithoutTags(html, metadata.beforeHeadEndTags)
}

/**
 * Finds the position in the string of body tag's end.
 *
 * @param {string} html The string on which the search is made.
 *
 * @returns {number} The position of the body tag's end in the string.
 */
function findHtmlBodyEnd (html) {
  return findPosWithoutTags(html, metadata.afterBodyEndTags, true)
}

module.exports = {
  findPosWithoutTags,
  findHtmlHeadEnd,
  findHtmlBodyEnd
}
