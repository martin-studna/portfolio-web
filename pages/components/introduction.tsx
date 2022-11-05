import Image from 'next/image'
import styles from '../../styles/Introduction.module.css'


export default function Introduction() {

    return (
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.titles}>
            <div className={styles.subtitle}>
              <span className="capitalize">CONTACT ME</span>
              <br />
              martin.studna2@gmail.com
            </div>
            <h1 className={styles.title}>Martin Studna</h1>

          </div>
          <Image className={styles.profileImage} src={require("../../assets/profile.jpeg")} alt="profile-image" />        
        </div>

      </div>
    )

}