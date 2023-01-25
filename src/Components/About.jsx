import Myimage from "../photo.jpeg";
import CV from "../cv-alpha-conde.pdf"
const About = () => {
    return (
        
        <div id = "Composant">
            <link rel ="stylesheet" type = "text.css" href ="about.css"/>

            <div>
                <h1 className="suis"> Qui Suis-je?  </h1>
            </div>
            <div>
                <p> Je suis un développeur web passionné, doté d'une solide formation en développement web et d'une expérience professionnelle variée.
                     J'ai une forte capacité d'adaptation, à apprendre rapidement de nouvelles technologies et à travailler en équipe.
                      Mon esprit créatif et mon attitude orientée résolution de problèmes me permettent de gérer efficacement des projets indépendamment. 
                      Je suis en constante évolution en termes de nouvelles technologies et tendances et impatient de mettre mes compétences à contribution pour relever les différents défis et contribuer au succès de votre entreprise
                </p>
                <p>
                    Je suis tres enthousiaste à l'idée de poursuivre mes études en integrant un Master en developpemnt web Full stack à la rentrée prochaine
                    Je suis convaincu que cela me permettra de continuer à developper mes compétences et de devenir un developpeur experimenté et compétent.
                </p>
                <p>
                    En dehors de mes études , je suis également intéressé par les nouvelles technologies et je passe beaucoup de temps à experimenter de nouveaux 
                    frameworks. J'aime egalement participer à des proojets open Source pour continuier à apprendre et à partager mes connaissances avec d'autres developpeurs.
                </p>

            </div>
            <div>

                <img src = {Myimage} alt = "Myimage" style={{width: '20%', height : '40%'}}/>
            </div>
            <div>
                <p> Vous pouvez accéder à mon curriculum vitae en cliquant sur le lien en bas de cette page </p>
                <a href = {CV} target ='_blank'> Mon CV </a>

            </div>
        </div>

    )
}
export default About;
