import Nav from "@/components/layout/includes/nav";
import {env} from "@/libs/env";

export default async function Header () {
  const {skills} = await fetch(`${env.NEXTAUTH_URL}/api/skills`, { cache: 'no-cache' }).then((res) => res.json())
  console.log(skills)

  return (
      <header className="header">
      <Nav />
      <div className="banner">
        <h1>
          Hello, <br/>Je suis Gaëtan Ritel<br/>
          <span>Création de sites internets</span>
        </h1>
        <p>
          Transformez votre vision en réalité avec des designs web époustouflants, des flyers percutants et des logos qui marquent les esprits. 
          Découvrez comment nous donnons vie à vos idées dès aujourd’hui !
        </p>
        <ul>
          Graphismes : 
          {skills["Graphisme"].map((skill) => <li>{skill}, </li>)}
        </ul>
        <ul>
        Front-end :
        {skills["Frontend"].map((skill) => <li>{skill}, </li>)}
        </ul>
        <ul>
        Back-end :
        {skills["Backend"].map((skill) => <li>{skill}, </li>)}
        </ul>
        <ul>
        Autres :
        {skills["Autres"].map((skill) => <li>{skill}, </li>)}
        </ul>
        <div className="btn-group">
          <a href="" className="btn">Télécharger mon CV</a>
          <a href="/#contact" className="btn">Me contacter</a>
        </div>
      </div>
    </header>
  )
}
