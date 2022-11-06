import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/About.module.css'

export default function About() {

  return (
    <div>
      <h1 className={styles.description}><span style={{color: "#D72323"}}>AI</span> Engineer turning ideas into innovations</h1>
      <div className={styles.subDescription}>
        <span style={{fontWeight: "bold"}}>Machine Learning, Computer Vision and Natural Language Processing</span>,
        4 years of professional experience in Software Engineering,
        <br/>
        The MSc. in Artificial Intelligence, Charles University in Prague, 
      Faculty of Mathematics and Physics
      </div>
        <div className="capitalize">FOLLOW ME</div>
        <div className={styles.links}>
          <Link href="https://twitter.com/MartinStudna" passHref legacyBehavior>
            <a target="_blank">
              <Image src={require("../../assets/twitter-logo.svg")} alt="twitter-logo"></Image>
            </a>
          </Link>
          <Link href="https://linkedin.com/in/martin-studna" passHref legacyBehavior>
            <a target="_blank">
              <Image src={require("../../assets/linkedin-logo.svg")} alt="linkedin-logo" style={{ marginBottom: "0.4rem" }}></Image>
            </a>
          </Link>
          <Link href="https://medium.com/@martinstudna" passHref legacyBehavior>
            <a target="_blank">
              <Image src={require("../../assets/medium-logo.svg")} alt="medium-logo" style={{height: "38px", width: "38px"}}></Image>
            </a>
          </Link>
          <Link href="https://github.com/martin-studna" passHref legacyBehavior>
            <a target="_blank">
              <Image src={require("../../assets/github-logo.svg")} alt="github-logo" style={{height: "38px", width: "38px"}}></Image>
            </a>
          </Link>
          <div style={{flexGrow: 1}}/>
          <Link href="http://localhost:3000/CV.pdf" passHref legacyBehavior >
              <a target="_blank" style={{display: 'flex', flexDirection: 'row', alignItems: "center"}}>
                <div className="capitalize" style={{}}>RESUME</div>
                <Image src={require("../../assets/cv-material-logo.svg")} style={{marginLeft: "0.5rem"}} alt="cv-logo" ></Image>
              </a>
          </Link>
        </div>


      
    </div>
  )
}