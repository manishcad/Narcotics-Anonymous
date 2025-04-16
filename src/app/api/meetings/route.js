import { NextResponse } from "next/server";
import puppeteer from 'puppeteer';

export async function GET(req) {
    // Get URL search parameters
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city") || "mumbai"; // Default to "mumbai" if no city is provided

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://naindia.in/na-meetings-in-india/', { waitUntil: 'networkidle2' });

    // Click on "All Cities" dropdown
    await page.waitForSelector('#select2-filter-dropdown-cities-container', { visible: true });
    await page.click('#select2-filter-dropdown-cities-container'); 
    await page.type("#select2-filter-dropdown-cities-container", city, { delay: 100 });

    await page.waitForSelector('#select2-filter-dropdown-cities-results', { visible: true });

    // Extract city data
    var cityList = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#select2-filter-dropdown-cities-results li')).map((li, index) => {
            if (index === 1) {
                const name = li.innerText.trim();
                return [li.id, name];
            }
        }).filter(item => item !== undefined);
    });

    if (cityList.length === 0) {
        return NextResponse.json({ message: "City not found", data: [] }, { status: 404 });
    }

    await page.waitForSelector(`#${cityList[0][0]}`, { visible: true });
    await page.click(`#${cityList[0][0]}`);

    const elements = await page.$$(`.bmlt-data-row`);

    // Extract IDs
    const attributeValues = await page.evaluate((cityName) => {
        return Array.from(document.querySelectorAll('.bmlt-data-row'))
            .map(el => {
                if (el.getAttribute('data-cities').trim() === cityName.toLowerCase().replace(/\s+/g, "-")) {
                    return el.getAttribute('id');
                }
                return null;
            }).filter(item => item !== null);
    }, cityList[0][1]);

    const uniqueList = [...new Set(attributeValues)]; // Remove duplicates
    const originalData = [];

    for (let id of uniqueList) { 
        const elementHandle = await page.$("#" + id); 
        
        if (elementHandle) {
            const tdTexts = await page.evaluate(el => {
                return Array.from(el.querySelectorAll('td')).map(td => 
                    td.innerText.trim().replace(/\s+/g, ' ') // Clean spaces
                );
            }, elementHandle);

            if (tdTexts.length >= 2) { 
                originalData.push({
                    time: tdTexts[0],
                    groupName: tdTexts[1]
                });
            }
        }
    }

    await browser.close();
    return NextResponse.json({ message: "ok", data: originalData });
}
