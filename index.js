const puppeteer = require('puppeteer')

async function fetchFines() {
    const url = 'https://гибдд.рф/check/fines#%D0%A0899%D0%95%D0%A3+07+0739787081';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await page.$eval('a.checker', el => el.click());

    const firstResponse = await page.waitForResponse(response => response.url() === 'https://xn--b1afk4ade.xn--90adear.xn--p1ai/proxy/check/fines' && response.status() === 200);
    let json = await firstResponse.json();
    console.log(json);
}

fetchFines();

