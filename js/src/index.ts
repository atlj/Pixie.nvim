#!/usr/bin/env node
import puppeteer from "puppeteer"
import path from "path"
import fs from "fs"
import { copyImg } from 'img-clipboard'
import { createHTML } from "./createHTML"

const htmlPath = path.resolve(__dirname, "..", "index.html")
const tempFilePath = path.resolve(__dirname, "..", "tempfile")
const code = fs.readFileSync(tempFilePath).toString()

// Arguments
const mode: "copy" | "save" = process.argv[2] as any
const language = process.argv[3]
let savePath = process.argv[4]
const html = createHTML(code, language)

function writeHtml() {
  const file = fs.openSync(htmlPath, "w")
  fs.writeSync(file, html)
}

async function main() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`file://${htmlPath}`)
  await page.waitForSelector("#container")
  const element = await page.$("#container")
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

writeHtml()
main()
