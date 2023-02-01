#!/usr/bin/env node
import puppeteer from "puppeteer"
import path from "path"
import fs from "fs"
const { copyImg, ErrorCodes, isWayland } = require('img-clipboard');

const htmlPath = path.resolve(__dirname, "..", "index.html")

const code = process.argv[2]

const language = process.argv[3]


async function main() {
  // Lunch browser for testing
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(`file://${htmlPath}`)
  await page.waitForSelector("body > pre")
  const element = await page.$("body > pre")
  const screenshot = await element.screenshot({ encoding: "binary" })
  copyImg(screenshot)
}

const html =
  `<html>
  <head>
  <link href="prism.css" rel = "stylesheet" />
    </head>
    <pre><code class="language-${language}" >${code}</code></pre>
      <style>
      </style>
      <script src = "prism.js"> </script>
        </html>`

function writeHtml() {
  const file = fs.openSync("./index.html", "w")
  fs.writeSync(file, html)
}

writeHtml()
main()
