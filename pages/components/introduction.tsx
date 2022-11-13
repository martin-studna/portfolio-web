import Image from 'next/image'
import styles from '../../styles/Introduction.module.css'


export default function Introduction() {

    const scroll = () => {
      const aboutSection = document.getElementById("about")
      const headerOffset = 150
      const elementPosition = aboutSection?.getBoundingClientRect().top
      const offsetPosition = elementPosition! + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }

    return (
      <div className={styles.container}>
        <div>
          <div className={styles.items}>
            <div className={styles.titles}>
              <div className={styles.subtitle}>
                <span className="capitalize">CONTACT ME</span>
                <br />
                hello@martin-studna.com
                <br />
                +420 775 058 619
              </div>
              <h1 className={styles.title}>Martin Studna</h1>

            </div>
            <Image className={styles.profileImage} src={require("../../assets/profile.jpeg")} alt="profile-image" priority={true} />        
          </div>

        </div>
        <button className={styles.scrollDownButton} onClick={() => scroll()} aria-label="scroll-down">
          <div className={styles.buttonArrow}></div>
        </button>
      </div>
    )

}