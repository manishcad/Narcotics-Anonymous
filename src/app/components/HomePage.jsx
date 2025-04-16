
import styles from "../styles/Homepage.module.css";

import Link from "next/link";
import JFT from "./clientComponents/JFT";
import Carousel from "./clientComponents/Carousel";
const images = [
    "https://images.unsplash.com/photo-1506104489822-562ca25152fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8NGslMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg",
    "https://wallpapercave.com/wp/wp9054802.jpg"
  ];
const Homepage = () => {
  
  return (
    <div className={styles.homepage}>

      {/*Carosel */}

     <Carousel />

      {/* Hero Section */}
      <header className={styles.hero}>
        <h1 className={styles.title}>What is Narcotics Anonymous</h1>
        <p className={styles.subtitle}>Narcotics Anonymous (NA) is a global, nonprofit organization that provides support for people recovering from drug addiction. It follows a 12-step program similar to Alcoholics Anonymous (AA) and offers free meetings where members share their experiences and support each other in staying drug-free. NA is open to anyone struggling with addiction, regardless of the substance used. The only requirement for membership is a desire to stop using drugs.</p>
        <button className={styles.ctaButton}><Link href="/about">Read More About N/A</Link></button>
      </header>

      {/* Helpline Section */}
      <div className={styles.helplineSection}>
        <h2 className={styles.helplineTitle}>Local Helplines Numbers</h2>
        <div className={styles.helplineContainer}>
          {[
            ["Bangalore Area", "+919880590059"],
            ["Bengal Area", "+919046367424"],
            ["Chandigarh Area", "+919217706222"],
            ["Chennai Area", "+917845725778"],
            ["Darjeeling Area", "+919832078665"],
            ["Delhi Area", "+919818072887"],
            ["Jammu Area", "+919086597717"],
            ["Kalimpong Area", "+919064348893"],
            ["Kolkata Area", "+919836223071"],
            ["Mumbai Area", "+917045379492"],
            ["NA India", "+919776644440"],
            ["Odisha Area", "+919776644440"],
            ["Pune Area", "+919673606686"],
            ["Punjab Area", "+918146225262"],
            ["Sikkim Area", "+919091982819"],
            ["South Mumbai Area", "+919967051119"]
          ].map(([area, number], index) => (
            <div key={index} className={styles.helplineItem}>
              <span>{area}</span>
              <span>{number}</span>
            </div>
          ))}
        </div>

        <JFT></JFT>
      </div>

      {/* Daily Reflection Preview */}
      

      {/* Subscription Section */}
      <section className={styles.subscriptionSection}>
        <h2 className={styles.sectionTitle}>Stay Inspired Daily</h2>
        <p className={styles.description}>Subscribe to receive daily reflections straight to your inbox.</p>
        <input type="email" placeholder="Enter your email" className={styles.emailInput} />
        <button className={styles.subscribeButton}>Subscribe</button>
      </section>
    </div>
  );
};

export default Homepage;
