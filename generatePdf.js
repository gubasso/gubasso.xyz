import puppeteer from 'puppeteer'
import fs from 'fs'

async function generatePDF() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:5173/resume', { waitUntil: 'networkidle0' })
  await page.evaluate(() => {
    document.querySelector('header').style.display = 'none'
    document.querySelector('footer').style.display = 'none'
    document.querySelector('.download-button').style.display = 'none'
  })
  const customCSS = fs.readFileSync('generatePdf.css', 'utf8')
  await page.addStyleTag({ content: customCSS })
  const pdf = await page.pdf({
    format: 'A4'
  })
  fs.writeFileSync('static/resume.pdf', pdf)
  await browser.close()
}

generatePDF()
