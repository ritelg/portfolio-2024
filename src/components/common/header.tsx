import {env} from "@/libs/env";

import { Nav } from "@/components/common";
import { LinkButton, } from "@/components/ui";


export default async function Header () {
  const {skills} = await fetch(`${env.NEXTAUTH_URL}/api/skills`, { cache: 'no-cache' }).then((res) => res.json())
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
          {skills["Graphisme"]?.map((skill: string) => <li key={skill}>{skill}, </li>)}
        </ul>

        <ul>
        Front-end :
        {skills["Frontend"]?.map((skill: string) => <li key={skill}>{skill}, </li>)}
        </ul>
        <ul>
        Back-end :
        {skills["Backend"].map((skill: string) => <li key={skill}>{skill}, </li>)}
        </ul>
        <ul>
        Autres :
        {skills["Autres"].map((skill: string) => <li key={skill}>{skill}, </li>)}
        </ul>
        <div className="btn-group">
          <LinkButton>Télécharger mon CV</LinkButton>
          <LinkButton href="/#contact">Me contacter</LinkButton>
        </div>
      </div>
    </header>
  )
}
