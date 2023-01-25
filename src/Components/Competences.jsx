const Competences = () => { 
    const Competence = ["HTML", "CSS3", "PHP", "JavaScript", "React", "C", "OCAML", "C#", ".NET"];
    const Autres = ["Web Design", "Création de site Internet", "Gestion de Données", "WordPress", "PrestaShop", "Methode Agile (SCRUM) "]
    return (
        <div id = "Composant">
            <div id = 'Competences'>
                <div> 
                    <h4>Au cours des années d'études et des projets réalisés, j'ai pu acquérir une expertise dans plusieurs domaines,
                         technologies et langages de programmation.  </h4> 
                

                </div>
                <div>
                    
                    <ul>
                        {Competence.map(compe =>(
                            <li key = {compe}> {compe}</li>
                        ) )}
                    </ul>
                </div>
                <div>
                        <h4>Autres Compétences </h4>
                    <ul>
                    {Autres.map(skill =>(
                            <li key = {skill}> {skill}</li>
                        ) )}
                    </ul>
                </div>

                <p> </p>
            </div>
        </div>
    )
}
export default Competences;