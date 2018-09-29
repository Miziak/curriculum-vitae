const path = require('path');
const puppeteer = require('puppeteer');
const express = require('express');

const app = express();

(async () => {
  app.use(express.static(path.join(__dirname, 'dist')));
  const server = app.listen(8080);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080', {waitUntil: 'networkidle2'});
  await page.pdf({
    path: './cv.pdf',
    format: 'A4',
    preferCSSPageSize: true,
    printBackground: true,
  });

  browser.close();
  server.close();
})();