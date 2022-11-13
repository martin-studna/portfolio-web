
import styles from "../../styles/Experience.module.css";
import Card from "./card";

export default function Experience() {

    return (
        <div>
            <div className="title3">EXPERIENCE</div>
            <div className="work-cards">
                <Card
                    className="work-card"
                    imageSrc={require("../../assets/atol-logo.jpeg")}
                    company={"ATOL capital"}
                    place={"Prague, The Capital, Czech Republic"}
                    title={"Machine Learning Engineer"}
                    date={"May 2022 - July 2022"}
                >
                    My objective was to develop machine learning models for cryptocurrency price prediction.

                </Card>
                <Card
                    className="work-card"
                    company={"Institute of Physiology, the Czech Academy of Sciences"}
                    place={"Prague, The Capital, Czech Republic"}
                    title={"Computer Vision Research Engineer"}
                    date={"Apr 2021 - Apr 2022"}
                >
                    Work on the master thesis with the Institute of Physiology, the Czech Academy of Sciences. <br /> <br />

                    I develop Computer Vision software that can primarily segment neuron cells from fluorescence microscopy images of mice brain. The other objective is to qualitatively measure neuron cells intensity to determine the activity of neurons. The motivation behind the research lies in observing cognitive functions when stimulating a mouse with a drug.

                </Card>
                <Card
                    className="work-card"
                    imageSrc={require("../../assets/ibm-logo.jpeg")}
                    company={"IBM"}
                    place={"Prague, The Capital, Czech Republic"}
                    title={"Software Developer"}
                    date={"Jul 2019 - Jul 2020"}
                >
                    <ul>
                        <li>- IBM Watson, IBM Discovery, NodeJs, VueJs</li>
                        <li>- Create backend or frontend application primarily for IBM Watson</li> 
                        <li>- Projects:
                        <ul>
                            <li>- Vodafone - Tobi chatbot </li>    
                            <li>- Government of the Czech republic and eRouška: Virtual assistant Anežka - chatbot giving relevant information about covid-19 crisis </li>
                        </ul> 
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
    )
}