<template>
  <div class="sandbox">
    <div v-if="breakpoints.length > 0" class="sandbox-header">
      <button
        class="sandbox-button"
        :class="{ 'is-active': width === `100%` }"
        @click="width = `100%`"
      >100%</button>
      <button
        v-for="p in breakpoints"
        :key="p"
        class="sandbox-button"
        :class="{ 'is-active': width === `${p}px` }"
        @click="width = `${p}px`"
      >{{ p }}px</button>
    </div>
    <div
      class="sandbox-embed"
      :class="{ 'is-loaded': embedLoad }"
      :style="{ width, height: `${height}px` }"
      ref="embed"
    >
      <iframe v-if="embedLoad" ref="frame" src="sandbox.html" frameborder="0"></iframe>
      <svg v-else width="1.75em" height="1.75em" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
      </svg>
    </div>
    <div v-if="tooLong" class="sandbox-code" :class="{ open: codeOpen }">
      <div v-if="!codeOpen" class="sandbox-code-overlay" @click="codeOpen = true">
        <svg viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
        </svg>
        <span>Show code</span>
      </div>
      <button v-else class="sandbox-code-close" @click="codeOpen = false">close</button>
      <pre><code class="hljs" :class="lang" v-html="highlighted" /></pre>
    </div>
    <div v-else class="sandbox-code open">
      <pre><code class="hljs" :class="lang" v-html="highlighted" /></pre>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js';
import { html as beautify, js as beautifyJs } from 'js-beautify';

export default {
  props: {
    escapedCode: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    breakpoints: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  data() {
    return {
      width: '100%',
      observer: null,
      embedLoad: false,
      codeOpen: false
    }
  },

  computed: {
    code() {
      return this.unescapeQuote;
    },

    unescapeQuote() {
      return this.escapedCode.replace(/%27/g, `'`).replace(/%22/g, `"`);
    },

    beautyCode() {
      if (this.lang === 'html') {
        return beautify(this.code, { inline: ['span'], indent_size: 2 });
      }

      if (this.lang === 'javascript' || this.lang === 'js') {
        return beautifyJs(this.code, { indent_size: 2 });
      }

      return this.code;
    },

    highlighted() {
      return hljs.highlightAuto(this.beautyCode, [this.lang]).value;
    },

    tooLong() {
      return this.beautyCode.split('\n').length > 10;
    },
  },

  mounted() {
    this.observe();
  },

  methods: {
    initEmbed() {
      const appendCode = documentObj => {
        const target = documentObj.querySelector('#target');

        const observer = new MutationObserver(mutations => {
          mutations.forEach(mutation => {
            documentObj.dispatchEvent(new Event('DOMContentLoaded'));
            observer.disconnect();
          });
        });

        observer.observe(target, { childList: true, subtree: true });

        target.innerHTML = this.code;
      };

      this.$refs.frame.contentWindow.onload = e => {
        const script = document.createElement('script');
        script.setAttribute('src', 'js/app.js');
        script.onload = () => appendCode(e.target);
        e.target.body.appendChild(script);
      };
    },

    observe() {
      const callback = entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.5) {
            this.embedLoad = true;
            this.observer.unobserve(this.$refs.embed);
          }
        });
      };

      const option = { threshold: [0.5] };

      this.observer = new IntersectionObserver(callback, option);

      this.observer.observe(this.$refs.embed);
    },
  },

  watch: {
    embedLoad(val) {
      if (val) {
        this.$nextTick(() => this.initEmbed());
      }
    }
  }
}
</script>
