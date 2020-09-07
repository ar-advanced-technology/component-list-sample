const hljs = require('highlight.js');
const md = require('markdown-it')();
const unescapeAll = require('markdown-it/lib/common/utils').unescapeAll;

const escapeQuote = str => {
  return str.replace(/'/g, `%27`).replace(/"/g, `%22`);
}

/**
 * @see https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js
 */
md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
  const token = tokens[idx];
  const info = token.info ? unescapeAll(token.info).trim() : '';

  const [langName, ...sandboxOption] = info.split(/\s+/g);

  if (sandboxOption.length > 0 && sandboxOption[0] === 'sandbox') {
    const content = token.content.trim();
    const [_, h, bp] = sandboxOption;
    const codeProp = ` escaped-code='${escapeQuote(content)}'`;
    const langProp = ` lang="${langName}"`;
    const heightProp = ` :height="${h.split('=')[1]}"`;
    const bpProp = bp ? ` :breakpoints="[${bp.split('=')[1]}]"` : '';
    return `<sandbox${codeProp}${langProp}${heightProp}${bpProp}></sandbox>\n`;
  }

  const langClass = langName || 'plaintext';
  const highlighted = hljs.highlight(langClass, token.content).value;

  return `<pre><code class="hljs ${langClass}">${highlighted}</code></pre>\n`;
};

export default md;
