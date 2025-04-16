import React from 'react';
import Head from 'next/head';
import "../styles/Home.css"

const Homepage = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <Head>
        <title>Narcotics Anonymous</title>
        <meta name="description" content="Find hope and support at Narcotics Anonymous. Join a meeting today." />
      </Head>
      <div className="container">
        <header className="hero">
          <h1>Welcome to Narcotics Anonymous</h1>
          <p>Find support, hope, and a new way of life.</p>
          <a href="#meetings" className="cta">Find a Meeting</a>
        </header>
        <section className="about">
          <h2>What is Narcotics Anonymous?</h2>
          <p>Narcotics Anonymous is a global, community-based organization with a multilingual and multicultural membership. NA was founded in 1953 and provides a recovery process and peer support network for those struggling with addiction.</p>
        </section>
        <section id="meetings" className="meetings">
          <h2>Find a Meeting</h2>
          <p>Connect with a local group to start your recovery journey.</p>
          <a href="https://www.na.org/meetingsearch/" target="_blank" rel="noopener noreferrer" className="meeting-link">Search for Meetings</a>
        </section>
        <footer className="footer">
          <p>&copy; {currentYear} Narcotics Anonymous. All Rights Reserved.</p>
        </footer>
      </div>
     
    </>
  );
};

export default Homepage;
