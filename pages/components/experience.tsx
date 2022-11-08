
import styles from "../../styles/Experience.module.css";
import Card from "./card";

export default function Experience() {

    return (
        <div>
            <div className="title3">EXPERIENCE</div>
            <div className="work-cards">
                <Card
                    className="work-card"
                    imageSrc={require("../../assets/ibm-logo.jpeg")}
                    company={"IBM"}
                    place={"Prague, The Capital, Czech Republic"}
                    title={"Software Developer"}
                    date={"1.7.2019 - present"}
                >
                    - IBM Watson, IBM Discovery, NodeJs, VueJs <br />
                    - Create backend or frontend application primarily for IBM Watson <br />
                    - Projects: <br />
                    - Vodafone: Tobi chatbot <br />
                    - Storaenso chatbot <br />
                    - Government of the Czech republic and eRouška: Virtual assistant Anežka - chatbot giving relevant information about covid-19 crisis 
                </Card>
            </div>
        </div>
    )
}