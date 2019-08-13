import test from 'ava'
import htmlUtils from './index'

const htmlFixture1 =
  `<!DOCTYPE html>

<html>
  <head>
    <title>Title</title>
    <meta charset="utf8">
  </head>
  <body>
    <h1>Title</h1>
    <input type="button" value="button">
  </body>
</html>`

const htmlFixture2 =
  `<!DOCTYPE html>

<title>Title</title>
<meta charset="utf8">
<h1>Title</h1>
<input type="button" value="button">`

test('HTML head search', t => {
  t.is(htmlUtils.findHtmlHeadEnd(htmlFixture1), 86)
  t.is(htmlUtils.findHtmlHeadEnd(htmlFixture2), 60)
})
test('HTML body search', t => {
  t.is(htmlUtils.findHtmlBodyEnd(htmlFixture1), 162)
  t.is(htmlUtils.findHtmlBodyEnd(htmlFixture2), 111)
})
