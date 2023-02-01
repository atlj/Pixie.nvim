#!/usr/bin/env node
import puppeteer from "puppeteer"
import path from "path"
import fs from "fs"
import { copyImg } from 'img-clipboard'

const htmlPath = path.resolve(__dirname, "..", "index.html")

// Arguments
const mode: "copy" | "save" = process.argv[2] as any
const code = process.argv[3]
const language = process.argv[4]
let savePath = process.argv[5]

async function main() {
  // Lunch browser for testing
  const browser = await puppeteer.launch({ headless: false })
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
}

const html =
  `<html>
  <head>
  <link href="prism.css" rel = "stylesheet" />
    </head>
    <pre><code class="language-${language}">${code}</code></pre>
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
