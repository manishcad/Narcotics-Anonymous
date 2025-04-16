import styles from "../styles/About.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.aboutPage}>
        <div className={styles.founderImg}>
            <Image src="https://alchetron.com/cdn/jimmy-kinnon-a7656400-44ac-4bac-96a5-d062c094255-resize-750.jpeg" alt="founder" width={200} height={200} />
            <h1>Founder of Narcotics Anonymous</h1>
            <p>Jimmy Kinnon</p>
        </div>
      <div className={styles.container}>
        <h1 className={styles.title}>About Narcotics Anonymous</h1>
        <p className={styles.description}>
          Narcotics Anonymous is a global, community-based organization with a multilingual and multicultural membership. We offer recovery from the effects of addiction through working a twelve-step program, including regular attendance at group meetings. The group atmosphere provides help from peers and offers an ongoing support network for addicts who wish to pursue and maintain a drug-free lifestyle.
        </p>
        <h2 className={styles.subtitle}>Our Mission</h2>
        <p className={styles.description}>
          Our mission is to provide an environment in which addicts can help one another stop using drugs and find a new way to live. We strive to carry the message of hope and recovery to those who still suffer from addiction.
        </p>
        <h2 className={styles.subtitle}>History</h2>
        <p className={styles.description}>
        Narcotics Anonymous (NA) was founded in 1953 in Los Angeles, California, by Jimmy Kinnon and other recovering addicts. It was created as a support group for people struggling with drug addiction, inspired by the Alcoholics Anonymous (AA) model but tailored for drug users.
        </p>
        <h2 className={styles.subtitle}>Key Historical Points</h2>
        <ul className={styles.list}>
          <li>1953: The first NA meeting was held in Southern California.</li>
          <li>1954: The first NA booklet was published, outlining its philosophy and 12-step program.</li>
          <li>1960s: Growth was slow, with NA struggling to expand due to a lack of organization and public awareness.</li>
          <li>1970s: NA began to gain momentum as more structured literature was developed, including "The Little White Booklet."</li>
          <li>1983: The publication of "Narcotics Anonymous Basic Text" helped standardize NA’s message and contributed to its rapid expansion.</li>
          <li>1990s–Present: NA grew internationally, reaching over 144 countries with thousands of meetings worldwide.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;