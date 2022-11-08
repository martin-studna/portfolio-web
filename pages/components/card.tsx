import Image from "next/image";
import React from "react";
import styles from "../../styles/Card.module.css";

type CardProps = {
    company: string,
    imageSrc: string,
    title: string,
    place: string,
    date: string,
    className: string,
    children: React.ReactNode
}

export default function Card(props: CardProps) {
    
    const renderImage = () => {
        if (typeof props.imageSrc !== "undefined") {
            return <Image className={styles.cardImage} src={props.imageSrc} alt={`${props.company}-logo`} />
        }
        return null
    }

    return (
        <div className={props.className} data-aos="fade-up">
            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    {renderImage()}
                    <div className={styles.cardHeaderMain}>
                        <div className={styles.cardHeaderTitle}>{props.title}</div>
                        <div className={styles.cardHeaderCompany}>{props.company}</div>
                        <div className={styles.cardHeaderPlace}>{props.place}</div>
                    </div>
                    <div className={styles.cardHeaderDate}>{props.date}</div>
                </div>
                <hr className={styles.cardTitle} />
                <div className={styles.cardText}>{props.children}</div>
            </div>
        </div>
    );

}
