import { env } from "@/libs/env";

import { Nav } from "@/components/common";
import { LinkButton } from "@/components/ui";
import clsx from "clsx";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default async function Header({ children, className }: Props) {
  const { skills } = await fetch(`${env.NEXTAUTH_URL}/api/skills`, {
    cache: "no-cache",
  }).then((res) => res.json());
  const cs = clsx("header", className);
  return (
    <header className={cs}>
      <Nav />
      <div className="banner">
        {children ? (
          children
        ) : (
          <>
            <h1>
              Hello, <br />
              Je suis Gaëtan Ritel
              <br />
              <span>
                Création de sites internets
                <br />
                Flyers, Cartes de visites
              </span>
            </h1>
            <p>
              Transformez votre vision en réalité avec des designs web
              époustouflants, des flyers percutants et des logos qui marquent
              les esprits. Découvrez comment nous donnons vie à vos idées dès
              aujourd’hui !
            </p>

            <ul>
              Graphismes :
              {skills["Graphisme"]?.map((skill: string) => (
                <li key={skill}>{skill}, </li>
              ))}
            </ul>

            <ul>
              Front-end :
              {skills["Frontend"]?.map((skill: string) => (
                <li key={skill}>{skill}, </li>
              ))}
            </ul>
            <ul>
              Back-end :
              {skills["Backend"].map((skill: string) => (
                <li key={skill}>{skill}, </li>
              ))}
            </ul>
            <ul>
              Autres :
              {skills["Autres"].map((skill: string) => (
                <li key={skill}>{skill}, </li>
              ))}
            </ul>
            <ul className="socials">
              <li>
                <a href="https://www.facebook.com/Rg.Creations.Site.internet.Graphismes">
                  <img src="/icons/icon-facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/ritelg31">
                  <img src="/icons/icon-behance.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/ritelg">
                  <img src="/icons/icon-github.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.codeur.com/-ritelg">
                  <img src="/icons/icon-codeur.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.malt.fr/profile/gaetanritel">
                  <img src="/icons/icon-malt.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="https://comeup.com/fr/@gaetanritel">
                  <img src="/icons/icon-comeup.svg" alt="" />
                </a>
              </li>
            </ul>
            <div className="btn-group">
              <LinkButton>Télécharger mon CV</LinkButton>
              <LinkButton href="/#contact">Me contacter</LinkButton>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

// <li><a href="https://fr.linkedin.com/in/gaetan-ritel-4a210bbb"><img src="/icons/icon-linkedin.svg" alt=""/></a></li>
