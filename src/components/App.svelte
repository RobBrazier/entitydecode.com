<div>
  <section class="section">
    <div class="container">
      <h2 class="title has-text-centered"><strong>Entity</strong>Decode</h2>
      <About />
      <div id="options" class="row has-text-centered">
        <label class="column">
          <input type="checkbox" bind:checked={htmlEntity} />
          HTML Entity Encode/Decode
        </label>
        <label class="column" title="Currently only Decoding is supported as Encoding causes too many problems">
          <input type="checkbox" bind:checked={urlEncoding} />
          URL Encoding Decode (?)
        </label>
      </div>
      <Field on:data-change={decode} id="encode" bind:data={encoded} label="Encoded" placeholder="e.g. &amp;raquo;" />
      <Field on:data-change={encode} id="decode" bind:data={decoded} label="Decoded" placeholder="e.g. &raquo;" />
    </div>
  </section>
  <Footer/>
</div>

<style global lang="scss">
  @import 'milligram/src/Color';

  $color-primary: #3273dc;

  @import 'milligram/src/Base';
  @import 'milligram/src/Typography';
  @import 'milligram/src/Grid';
  @import 'milligram/src/Button';
  @import 'milligram/src/Form';
  @import 'milligram/src/Divider';
  @import 'milligram/src/Utility';

  body {
    padding-top: 2rem;
  }

  .has-text-centered {
    text-align: center;
  }
  .has-text-right {
    text-align: right;
  }

  .has-text-left {
    text-align: left;
  }
  
  a {
    color: $color-primary;
    text-decoration: none;
  }
</style>

<script>
import he from 'he'

import About from './About.svelte'
import Field from './Field.svelte'
import Footer from './Footer.svelte'

export let encoded = '';
export let decoded = '';
export let htmlEntity = true;
export let urlEncoding = true;

function encode(event) {
  let data = event.detail;
  if (htmlEntity) {
    try {
      data = he.encode(data);
    } catch (e) {
      // do nothing
    }
  }
  encoded = data;
}

function decode(event) {
  let data = event.detail;
  if (htmlEntity) {
    try {
      data = he.decode(data)
    } catch (e) {
      // do nothing
    }
  }
  if (urlEncoding) {
    try {
      data = decodeURIComponent(data)
    } catch (e) {
      // do nothing
    }
  }
  decoded = data;
}

// export function encode(data) {
  
//   return data;
// }

// export default {
//   components: {
//     About,
//     Field,
//     Footer
//   },
//   data() {
//     return {
//       encoded: '',
//       decoded: '',
//       htmlEntity: true,
//       urlEncoding: true
//     }
//   },
//   methods: {
//     encode(data) {
//       if (this.get('htmlEntity')) {
//         try {
//           data = he.encode(data)
//         } catch (e) {
//           // do nothing
//         }
//       }
//       // if (this.get('urlEncoding')) {
//       //   try {
//       //     data = encodeURIComponent(data)
//       //   } catch (e) {
//       //     // do nothing
//       //   }
//       // }
//       return data
//     },
//     decode(data) {
//       if (this.get('htmlEntity')) {
//         try {
//           data = he.decode(data)
//         } catch (e) {
//           // do nothing
//         }
//       }
//       if (this.get('urlEncoding')) {
//         try {
//           data = decodeURIComponent(data)
//         } catch (e) {
//           // do nothing
//         }
//       }
//       return data
//     }
//   },
//   oncreate() {
//     this.observe('encoded', data => {
//       this.set({
//         decoded: this.decode(data)
//       })
//     })
//     this.observe('decoded', data => {
//       this.set({
//         encoded: this.encode(data)
//       })
//     })
//   }
// }
</script>
