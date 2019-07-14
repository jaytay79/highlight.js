/*
Language: ReXX
Author: Jim Taylor <jim@racf.guru>
Description: 
*/

function(hljs) {
  var REXX_KEYWORDS = 'IF WHEN DO PARSE ....';
  var REXX_FUNCTIONS = 'ABBREV ADDRESS COMPARE ...';
  hljs.COMMENT('/*','*/')
  return {
    keywords: REXX_KEYWORDS,
    contains: [ ..., hljs.COMMENT, ... ]
    case_insensitive: true
  }
}
