import recommandation from "../Recommandations.pdf";
import Tditex from "../3ditex.png"
import Incomm from "../Incomm.jpeg"
import BK from "../BK.jpeg"
const Experiences = () => { 
    return (
        <div id = "Composant">
            <div id = 'Experiences'>
                <div>
                    <h1> EXPERIENCES </h1>
                </div>
                <div>
                    <h3> Developpeur python </h3>
                    <p> 3DITEX - depuis decembre 2022</p> <img src= {Tditex} alt = "3ditex" style = {{width : '7%', height : '7%'}}/>
                    <p> contrat d'apprentissage - canéjan</p>
                    <p> Mes différentes missions consistent à développer des logiciels pour différentes machines, permettant ainsi la conception et la réalisation de tubes et de composites,
                         ainsi que des interfaces graphiques pour une communication efficace avec ces machines.
                    </p>
                    <p> Utilisation des  bibliotheques PyQt5/QT/Pyluos</p>
                </div>
                <div> 
                    <h3> Developpeur Web </h3>
                    <p> Incomm - Septembre 2022 - décembre 2022 </p> <img src= {Incomm} alt = "Incomm" style = {{width : '7%', height : '7%'}}/>
                    <p> contrat d'apprentissage - bordeaux - France  </p>
                    <p> Au sein de l'entreprise Incomm, j'étais en charge de la conception, de l'utilisation et de la configuration de plugins et modules,
                         ainsi que de la mise en ligne de sites web. J'ai également assuré des tâches liées au transfert de noms de domaine, à la maintenance et à la modification des sites web, 
                         notamment les sites e-commerce et les sites vitrines, en utilisant les systèmes de gestion de contenu WordPress et Prestashop. </p>
                </div>
                <div>
                    <h3> Projet Universitaire </h3>
                    <p> Université de Rouen - Janvier 2020 - Avril 2020 </p>
                    <p> Conception de site internet de vente en ligne (E-Commerce ) , création de base de données 
                        inscription et connexion des clients sur le site et utilisation de session pour chaque client
                    </p>
                    <p> Outils Utilisés : HTML, CSS, PHP, JavaScript </p>
                </div>
                <div> 
                    <h3> Agent de restauration rapide </h3>
                    <p> Burger King Petit Quevilly - Mai 2019 - Septembre 2022 </p> <img src= {BK} alt = "BK" style = {{width : '7%', height : '7%'}}/>
                    <p>Prise et préparation de Commandes , service à table , Plonge </p> 
                    <p> <a href = {recommandation} target = "_blank"> Lettre de recommandation </a></p>

                </div>
            </div>
        </div>
    )
}
export default Experiences;