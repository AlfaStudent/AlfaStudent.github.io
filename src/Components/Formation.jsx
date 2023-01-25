import Result from "../Result.pdf"
import Univ_Rouen from "../Rouen.jpeg"
import SDV from "../SDV.jpeg"
const Formation = () => { 
    return (
        <div id = "Composant">
            <div id = 'Formation'>
                <h1> FORMATION </h1>
                <div> 
                    <h3> Bachelor 3 Développement Web  - Full Stack</h3>
                    <h4> Ecole Sup de vinci </h4> <img src= {SDV} alt = "SDV" style = {{width : '7%', height : '7%'}}/>
                    <p> depuis Septembre de 2022 </p>
                    <p> Initiation à quelques Frameworks : React, Angular, VueJs, .Net, Synfony. </p>
                    <a href = {Result}  target = "_blank" >Resultat du Test d'admission </a>
                </div>
                <div> 
                    <h2> Licence 3 Informatique </h2>
                    <h4> Université de Rouen</h4> <img src= {Univ_Rouen} alt = "Univ_Rouen" style = {{width : '7%', height : '7%'}}/>
                    <p> Septembre 2021 - Juin 2022 </p>
                    <p> Programation Orientée Objet, Reseau , Compilation, Systeme d'exploitation </p>
                </div>
                <div>
                    <h2> Licence 2 Informatique     </h2>
                    <h4> Université de Rouen </h4>  <img src= {Univ_Rouen} alt = "Univ_Rouen" style = {{width : '7%', height : '7%'}}/>
                    <p> Septembre 2019 - Juin 2021 </p>
                    <p> Algorithmique 2, Python, Langage C.</p>
                </div>
            </div>

        </div>
    )
}
export default Formation


