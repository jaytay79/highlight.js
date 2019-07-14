/*
Language: ReXX
Author: Jim Taylor <jim@racf.guru>
Description: 
*/

function(hljs) {
  return {
    keywords: 'foo bar',
    contains: [ ..., hljs.NUMBER_MODE, ... ]
  }
}
