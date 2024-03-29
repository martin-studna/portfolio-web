
import styles from "../../styles/Experience.module.css";
import Card from "./card";

export default function Experience() {

    return (
        <div>
            <div className="title3">EXPERIENCE</div>
            <div className="work-cards">
            <Card
                    className="work-card"
                    imageSrc={require("../../assets/quantasoft-logo.jpeg")}
                    company={"Quantasoft"}
                    place={"Prague, The Capital, Czech Republic"}
                    title={"Deep Learning Engineer"}
                    date={"November 2022 - Present"}
                >
                As a deep learning engineer, I am currently working on the development of smart AI tools for a camera surveillance system. My responsibilities include designing and implementing models for action recognition, pose estimation, person identification, and person tracking. I am utilizing various tools such as Python, TensorFlow, and PyTorch to develop these models, as well as writing inference engines using TensorRT and C++ to optimize performance. I am also working closely with a team of engineers to ensure the successful deployment of these AI tools in a production environment.

                </Card>
                <Card
                    className="work-card"
                    imageSrc={require("../../assets/atol-logo.jpeg")}
                    company={"ATOL capital"}
                    place={"Prague, The Capital, Czech Republic"}
                    title={"Machine Learning Engineer"}
                    date={"May 2022 - July 2022"}
                >
                As a Machine Learning Engineer at ATOL Capital, I was responsible for the implementation and design of ML models for predicting crypto currency prices and other statistics. I utilized the Black Scholes Model to analyze historical and implied volatility, providing insight into the direction of the crypto market. I worked closely with the team to develop and implement these models, leveraging my expertise in machine learning techniques and statistical analysis to drive business decisions and achieve key objectives.

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
                    In my role as a Software Engineer at IBM, I was responsible for designing and implementing chatbot solutions for clients using my skills in Vue.js for the frontend and node.js for integration with IBM Watson API. I had the opportunity to work on projects such as the Vodafone Tobi chatbot and Anežka, a virtual assistant providing relevant information about covid-19 and the state of emergency in Czechia. These projects allowed me to gain valuable experience in chatbot development and solidify my skills in Vue.js and node.js.
                </Card>
            </div>
        </div>
    )
}