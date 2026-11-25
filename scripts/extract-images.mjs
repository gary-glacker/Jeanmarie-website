// One-off helper: pull the embedded images out of the provided HTML design file.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'

const source = 'C:/Users/Gary Glacker/Downloads/Jean Marie Gatare – Portfolio.html'
const outDir = new URL('../public/images/', import.meta.url)
mkdirSync(outDir, { recursive: true })

const html = readFileSync(source, 'utf8')

function save(name, base64) {
  const buffer = Buffer.from(base64, 'base64')
  writeFileSync(new URL(name, outDir), buffer)
  console.log(`${name}: ${buffer.length} bytes`)
}

// Two images are embedded with the data:image prefix, in this order.
const embedded = [...html.matchAll(/data:image\/webp;base64,([A-Za-z0-9+/=]+)/g)].map((m) => m[1])
save('portrait.webp', embedded[0])
save('kwanda-group-logo.webp', embedded[1])

// The unfounders logo is stored as a bare base64 string in the LOGOS object.
const unfounders = html.match(/"unfounders"\s*:\s*"([A-Za-z0-9+/=]+)"/)
if (unfounders) save('unfounders-logo.webp', unfounders[1])
