"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/JustForToday.module.css";
import { translate } from "../lib/translate";

const JustForToday = () => {
  const [originalContent, setOriginalContent] = useState(null); // Stores English content
  const [translatedContent, setTranslatedContent] = useState(null); // Stores translated content
  const [language, setLanguage] = useState("en"); // Default: English
  const [loading, setLoading] = useState(false); // Loading state for language change

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = (await axios.get("http://localhost:3000/api/justfortoday")).data;
      setOriginalContent(response);
      setTranslatedContent(response);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleLanguageChange = async (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setLoading(true);

    if (selectedLanguage === "en") {
      // Restore original English content
      setTranslatedContent(originalContent);
      setLoading(false);
    } else {
      // Translate content to Odia
      const translated = {
        ...originalContent,
        title: await translate(originalContent.title, selectedLanguage),
        qoute: await translate(originalContent.qoute, selectedLanguage),
        thought: await translate(originalContent.thought, selectedLanguage),
        allContent: await Promise.all(originalContent.allContent.map((text) => translate(text, selectedLanguage))),
      };
      setTranslatedContent(translated);
      setLoading(false);
    }
  };

  if (!translatedContent) return <p>Loading content...</p>;

  return (
    <div className={styles.container}>
      <select value={language} onChange={handleLanguageChange} className={styles.languageSelect}>
        <option value="en">English</option>
        <option value="or">Odia</option>
      </select>

      {loading ? (
        <p className={styles.loadingText}>Translating...</p> // Show loading text while translating
      ) : (
        <>
          <h1 className={styles.title}>Just For Today</h1>
          <p className={styles.date}>{translatedContent.date}</p>
          <h2 className={styles.subtitle}>{translatedContent.title}</h2>
          <blockquote className={styles.quote}>
            {translatedContent.qoute}
            <span className={styles.reference}>{translatedContent.quoteSource}</span>
          </blockquote>

          {translatedContent.allContent.map((item, index) => (
            <p key={index} className={styles.text}>{item}</p>
          ))}

          <p className={styles.emphasis}>
            <i>{translatedContent.thought}</i>
          </p>
          <p className={styles.copyright}>
            Copyright (c) 2007-2025, NA World Services, Inc. All Rights Reserved
          </p>
          <button className={styles.subscribeButton}>Subscribe</button>
        </>
      )}
    </div>
  );
};

export default JustForToday;
