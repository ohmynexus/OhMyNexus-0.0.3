const { DOMImplementation, XMLSerializer } = require('xmldom');
const JsBarcode = require('jsbarcode')
const { JSDOM } = require('jsdom')
const cp = require('child_process')
const https = require('https')

const _svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <!-- Tambahkan elemen-elemen lain di sini -->
</svg>
`;

const barcode = data => {
  const xmlSerializer = new XMLSerializer();
  const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
  const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  JsBarcode(svgNode, data, {
    xmlDocument: document,
  });

  return xmlSerializer.serializeToString(svgNode);
}

const imageSetter = (img, value) => img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', value)
const textSetter = (el, value) => el.textContent = value

let { document: svg } = new JSDOM(_svg).window

const genSVG = async ({
  wid = '',
  pp = 'https://raw.githubusercontent.com/SazumiVicky/MakeMeow-Storage/main/20230527_173959.jpg',
  title = '',
  name = '',
  text = '',
  background = ''
} = {}) => {
  let el = {
    // Menyesuaikan elemen-elemen SVG yang ingin diubah
    pp: ['#_1661899539392 > g:nth-child(3) > image', imageSetter, pp],
    text: ['#_1661899539392 > text.fil1.fnt0', textSetter, text],
    title: ['#_1661899539392 > text.fil2.fnt1', textSetter, title],
    name: ['#_1661899539392 > text.fil2.fnt2', textSetter, name],
    bg: ['#_1661899539392 > g:nth-child(2) > image', imageSetter, background],
  }

  for (let [selector, set, value] of Object.values(el)) {
    set(svg.querySelector(selector), value)
  }

  return svg.documentElement.outerHTML; // Menggunakan outerHTML untuk mengembalikan elemen SVG secara lengkap
}

const toImg = (svg, format = 'png') => new Promise((resolve, reject) => {
  if (!svg) return resolve(Buffer.alloc(0))
  let bufs = []

  let im = cp.spawn('magick', ['convert', 'svg:-', format + ':-'])
  im.on('error', e => reject(e))
  im.stdout.on('data', chunk => bufs.push(chunk))
  im.stdin.write(Buffer.from(svg))
  im.stdin.end()
  im.on('close', code => {
    if (code !== 0) reject(code)
    resolve(Buffer.concat(bufs))
  })
})

const toBase64 = (buffer, mime) => `data:${mime};base64,${buffer.toString('base64')}`

const render = async ({
  wid = '',
  pp = 'https://raw.githubusercontent.com/SazumiVicky/MakeMeow-Storage/main/20230527_173959.jpg',
  name = '',
  title = '',
  text = '',
  background = ''
} = {}, format = 'png') => {
  let svg = await genSVG({
    wid,
    pp,
    name,
    text,
    background,
    title
  })
  return await toImg(svg, format)
}

if (require.main === module) {
  render({
    wid: '1234567890',
    name: 'John Doe',
    text: 'Lorem ipsum\ndot sit color',
    title: 'grup testing',
    pp: 'https://raw.githubusercontent.com/SazumiVicky/MakeMeow-Storage/main/20230527_173959.jpg',
    background: 'https://raw.githubusercontent.com/SazumiVicky/MakeMeow-Storage/main/20230527_173959.jpg'
  }, 'jpg').then(result => {
    process.stdout.write(result)
  })
} else module.exports = render
