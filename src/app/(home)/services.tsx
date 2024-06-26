import SvgIcon from "@/components/ui/svg-icon";

export default function Services() {
  return (
    <section className="services container" id="services">
      <h2>Services</h2>
      <p>
      Découvrez mes services sur mesure pour une présence en ligne qui vous démarque. Des sites web accrocheurs aux logos mémorables et aux flyers percutants, je donne vie à votre vision.
      </p>
      <ul>
        <li>
  <SvgIcon id="responsive" width="50px" height="50px" />
          <h3>Sites internet</h3>
          <p>
          Des sites web sur mesure pour une présence en ligne remarquable.<br />
          Sites vitrines, Wordpress, E-commerce
          </p>
        </li>
        <li>
  <SvgIcon id="pen" width="50px" height="50px" />
          <h3>Graphisme</h3>
          <p>
          Des créations graphiques qui captivent et connectent. Du flyer à la carte de visite jusqu’à votre présence sur les réseaux sociaux, laissez votre image parler pour vous.
          </p>
        </li>
      </ul>
    </section>
  );
}
