import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

import { transformerNotationDiff } from "@shikijs/transformers";
import { h } from "hastscript";

const transformerCreateCodeBlockHeader = () => ({
  name: "transformer-create-code-block-header",
  pre(node) {
    const preHeaderDiv = h("div", {
      class: "pre-header",
    });

    node.children.unshift(preHeaderDiv);
  },
});

const transformerMeta = () => ({
  name: "transformer-meta",
  pre() {
    // This method means that we will modifiy the <pre> element that will be generated
    const metaRaw = this.options.meta?.__raw;
    let meta = {};
    if (metaRaw) {
      const parts = metaRaw.split(/\s+/);
      for (const part of parts) {
        const [key, value] = part.split("=");
        if (key && value) {
          meta[key] = value;
        }
      }
    }
    this.meta = meta;
  },
});

const transformerAddTitleToCodeBlocksHeaders = () => ({
  name: "transformer-add-title-to-code-blocks-headers",
  pre(node) {
    if (this.meta.title) {
      const preHeaderDiv = node.children[0];

      const titleDiv = h(
        "div",
        {
          class: "pre-title",
        },
        this.meta.title
      );

      preHeaderDiv.children.push(titleDiv);
    }
  },
});

const transformerCopyButton = () => ({
  name: "transformer-color-lines",
  pre(node) {
    if (this.meta.copy) {
      const preHeaderDiv = node.children[0];

      const copyCodeButton = h(
        "div",
        {
          class: "wrapper-copy-code",
        },
        h(
          "button",
          {
            class: "copy-code",
            "data-code": this.source,
            onclick: `
                navigator.clipboard.writeText(this.dataset.code);
                this.textContent = 'Copied!';
                setTimeout(() => this.textContent = 'Copy', 1000)
            `,
          },
          "Copy"
        )
      );

      preHeaderDiv.children.push(copyCodeButton);
    }
  },
});

// https://astro.build/config
export default defineConfig({
  site: "https://ljubinkovicdj93.github.io/",
  integrations: [tailwind(), sitemap(), prefetch({ throttle: 3 })],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      transformers: [ 
        transformerMeta(), 
        transformerCreateCodeBlockHeader(), 
        transformerAddTitleToCodeBlocksHeaders(), 
        transformerCopyButton(), 
        transformerNotationDiff(), 
      ],
      wrap: false,
    },
  },
});
