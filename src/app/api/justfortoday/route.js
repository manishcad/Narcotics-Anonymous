import axios from "axios";
import * as cheerio from 'cheerio';
import { NextResponse } from "next/server";
export async function GET(request){
    const url=`https://naindia.in/just-for-today-reading/`
    const response=await axios.get(url)
    const $=cheerio.load(response.data)
    const date=$("#jft-date").text().trim()
    const title=$("#jft-title").text().trim()
    const pageNo=$("#jft-page").text().trim()
    const qoute=$("#jft-quote").text().trim()
    const qouteSource=$("#jft-quote-source").text().trim()
    const thought=$("#jft-thought").text().trim()
    const allContent=[]
    const content=$("#jft-content p").each((index,element)=>{
        allContent.push($(element).text().trim())
    })
    
    return NextResponse.json({message:"Ok",date:date,title,pageNo,qoute,qouteSource,allContent,thought})
}