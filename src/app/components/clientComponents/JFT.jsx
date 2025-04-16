"use client"
import React from 'react'
import styles from "../../styles/Homepage.module.css";
import Link from 'next/link';
import axios from 'axios';
import { useEffect,useState } from 'react';
const JFT = () => {
    const [qoute,setQoute]=useState("")
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        const fetchData=async()=>{
            const response=await axios.get("http://localhost:3000/api/justfortoday")
            
            const {qoute}=response.data
            setQoute(qoute)
            setLoading(false)
        }
        fetchData()
        
    },[])
  return (
    <section className={styles.reflectionSection}>
        <h2 className={styles.sectionTitle}>Just For Today</h2>
        {loading ? (<p>Loading</p>):(
            <p className={styles.reflectionPreview}>
            {qoute}
          </p>
        )}
        
        <button className={styles.readMoreButton}><Link href="/justfortoday">Read More</Link></button>
      </section>
  )
}

export default JFT