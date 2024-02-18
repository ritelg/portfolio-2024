"use client";


type ModalProps = {
  image: string;
  title: string;
  content: string;
  url: string;
  slug: string;
  closeModal: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Modal({ image, title, slug, content, url, closeModal }: ModalProps) {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
      <img src={image} alt={title} />
      <div>
      <h3>{title}</h3>
      {content}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque commodi dignissimos aspernatur quisquam, ipsum maxime molestiae illo laudantium ullam, corrupti veritatis quam doloribus officiis ducimus quis. Veniam, quidem obcaecati.</p>
      <p>Voluptates explicabo beatae ipsam nostrum dignissimos aliquam officia fuga, natus ullam voluptas aliquid accusantium commodi quos repellendus ratione ducimus sequi nihil eaque adipisci similique? Enim vel dolorum assumenda architecto quidem!</p>
      {url && (
        <a href={url} className="btn">Voir le site</a>
      )}
      </div>
      <a href="" onClick={closeModal} className="modal-close">x</a>
      </div>
    </div>
  );
}
