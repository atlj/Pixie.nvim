#!/usr/bin/env node
import puppeteer from "puppeteer"
import path from "path"
import fs from "fs"
import { copyImg } from 'img-clipboard'

const htmlPath = path.resolve(__dirname, "..", "index.html")

const tempFilePath = path.resolve(__dirname, "..", "tempfile")
const code = fs.readFileSync(tempFilePath).toString()

// Arguments
const mode: "copy" | "save" = process.argv[2] as any
const language = process.argv[3]
let savePath = process.argv[4]

async function main() {
  // Lunch browser for testing
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`file://${htmlPath}`)
  await page.waitForSelector("body > pre")
  const element = await page.$("body > pre")
  const screenshot = await element.screenshot({ encoding: "binary" }) as Buffer

  switch (mode) {
    case "copy":
      copyImg(screenshot)
      break
    case "save":
      const file = fs.openSync(savePath, "w")
      fs.writeSync(file, screenshot)
      break
  }

  process.exit(0)
}

const html =
  `<html>
  <head>
  <link href="prism.css" rel = "stylesheet" />
    </head>
    <pre><code class="language-${language}">${escape(code)}</code></pre>
      <style>
      </style>
      <script src = "prism.js"> </script>
        </html>`

function escape(html: string) {
  return html.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

}

function writeHtml() {
  const file = fs.openSync(htmlPath, "w")
  fs.writeSync(file, html)
}

writeHtml()
main()
