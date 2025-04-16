import { NextResponse } from "next/server";
import puppeteer from 'puppeteer';

export async function POST(req) {
    // Get URL search parameters
    if(req.method !== "POST"){
        return NextResponse.json({message:"only post method is not allowed"})
    }
    await browser.close();
    return NextResponse.json({ message: "ok", data: originalData });
}
