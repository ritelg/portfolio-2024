import { env } from "@/libs/env";
import { Portfolio as PortfolioType } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import PortfolioContent from "./portfolio-content";

export default async function Portfolio() {
  const endpoint = `${env.NEXTAUTH_URL}/api/portfolio-category`;
  const { portfolio, category } = await fetch(`${endpoint}/tout`).then((res) =>
    res.json()
  );
  return (
    <section className="portfolio container" id="portfolio">
      <h2>Portfolio</h2>
      <p>
        Explorez notre sélection de projets récents, reflétant notre expertise
        en conception de sites web, création de logos, élaboration de flyers et
        design de cartes de visites.
      </p>
      <PortfolioContent endpoint={endpoint}>
        <div className="portfolio-list tout">
          {portfolio.map((p: PortfolioType) => (
            <Link
              key={p.title}
              href={`/portfolio/${p.slug}`}
              className={
                p.title.indexOf("Flyer")
                  ? "portfolio-item"
                  : "porfolio-flyer portfolio-item"
              }
            >
              <Image
                src={p.image}
                alt={p.title}
                width={p.image_width}
                height={p.image_height}
              />
            </Link>
          ))}
        </div>
      </PortfolioContent>
    </section>
  );
}
