#!/usr/bin/env node
import puppeteer from "puppeteer"

async function main() {
  // Lunch browser for testing
  const browser = await puppeteer.launch({ headless: false })
}

main()
