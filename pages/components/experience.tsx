
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
                    imageSrc={require("../../assets/simplio-logo.jpeg")}
                    company={"SIMPLIO TECH s.r.o"}
                    place={"Prague, The Capital, Czech Republic"}
                    title={".NET Developer"}
                    date={"Oct 2021 - Apr 2022"}
                >
                    Technology stack: .NET, Azure, Cosmos Db, Redis, SQL, Sendgrid
                    <br />
                    <br />
                    My objective was to develop a system that can aggregate functionalities of multiple crypto exchanges, for instance, Coinbase, Binance or Bittrex. The system consists of REST API that provides Simplio mobile app communication with exchanges that present information about current exchange rates or available swap routes. The second part of the software is cron, a program that creates scheduled tasks that update data in the database about crypto assets.
                    <br />
                    <br />
                    The communication between parts of the software is implemented with NServiceBus message broker. NServiceBus is also used for Saga pattern to implement distributed transactional system.


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
                        <li>- Projects:</li>
                        <ul>
                            <li>- Vodafone - Tobi chatbot </li>    
                            <li>- Government of the Czech republic and eRouška: Virtual assistant Anežka - chatbot giving relevant information about covid-19 crisis </li>
                        </ul> 
                    </ul>
                    
                    
                </Card>
                <Card
                    className="work-card"
                    imageSrc={require("../../assets/qest-logo.jpeg")}
                    company={"Qest automation"}
                    place={"Prague, The Capital, Czech Republic"}
                    title={".NET Developer"}
                    date={"Jul 2018 - Apr 2019"}
                >
                    <ul>
                        <li>- .NET Core, C#, ASP.NET, Docker, MongoDb</li> 
                        <li>- Develop server-side application for home automation project</li> 
                        <li>- Create API for communication between web, mobile apps and IoT devices</li>
                    </ul>


                </Card>
            </div>
        </div>
    )
}