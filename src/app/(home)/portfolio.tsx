import Link from "next/link";
import PortfolioContent from "./portfolio-content";
import {env} from "@/libs/env";
import { Portfolio as PortfolioType } from "@/utils/type";
import {Portfolio} from "@prisma/client";


export default async function Portfolio() {
  const endpoint = `${env.NEXTAUTH_URL}/api/portfolio-category`
  const {portfolio, category} = await fetch(`${endpoint}/tout`, { cache: 'no-cache' }).then((res) => res.json())
  console.log(category)
  return (
    <section className="portfolio container">
      <h2>Portfolio</h2>
      <p>Explorez notre sélection de projets récents, reflétant notre expertise en conception de sites web, création de logos, élaboration de flyers et design de cartes de visites.</p>
      <PortfolioContent endpoint={endpoint} >
      <div className="portfolio-list">
      {portfolio.map((p: PortfolioType) => (
        <Link 
        key={p.title} 
        href={`/portfolio/${p.slug}`}
        className={p.title.indexOf('Flyer') ? "portfolio-item" : "porfolio-flyer portfolio-item"}
        >
          <img src={p.image} alt={p.title} />
        </Link>
      ))}
      </div>
      </PortfolioContent>
    </section>
  );
}
