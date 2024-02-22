import {ContactFormJs, ContactFormNoJs} from "@/components/contact";

export default function ContactForm() {
  return (
    <section className="contact container" id="contact">
      <div>
        <h2>Me contacter</h2>
        <p>
          Prêt à concrétiser vos visions en ligne et sur support papier ? <br/>
          Partagez vos projets avec moi et travaillons ensemble pour créer une présence distinctive et impactante, grâce à des sites web exceptionnels, des designs graphiques mémorables, des flyers captivants et des cartes de visite qui laissent une impression durable.
        </p>
      </div>
      <ContactFormJs>
        <ContactFormNoJs />
      </ContactFormJs>
    </section>
  )
}
