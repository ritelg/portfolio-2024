"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LinkButton, Modal } from "@/components/ui";

import { getPortfolioByCategory } from "@/actions/portfolio";
import { Category, Portfolio } from "@/utils/type";
import clsx from "clsx";

type PortfolioState = {
  category: Category[];
  portfolio: Portfolio[];
};

export default function PortfolioContent({
  endpoint,
  children,
}: {
  endpoint: string;
  children: React.ReactNode;
}) {
  const [state, setState] = useState<PortfolioState>();
  const [slug, setSlug] = useState("tout");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: "",
    title: "",
    content: "",
    url: "",
    slug: "",
    smallcontent: "",
    image_width: 0,
    image_height: 0,
  });
  const [showChildren, setShowChildren] = useState(true);

  useEffect(() => {
    getPortfolioByCategory(slug)
      .then((data) => {
        setShowChildren(false);
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug, endpoint]);

  function closeModal(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    event.stopPropagation();
    setShowModal(false);
    window.history.pushState({}, "", "/");
  }

  if (showChildren) {
    return <>{children}</>;
  }
  return (
    <>
      {showModal && (
        <Modal closeModal={closeModal} className="portfolio-modal">
          <Image
            src={modalContent.image}
            alt={modalContent.title}
            layout="responsive"
            width={modalContent.image_width}
            height={modalContent.image_height}
          />
          <div>
            <h3>{modalContent.title}</h3>
            <p>{modalContent.smallcontent}</p>
            <div className="link-buttons">
              {modalContent.content.length > 0 && (
                <LinkButton href={`/portfolio/${modalContent.slug}`}>
                  Voir le projet
                </LinkButton>
              )}
              {modalContent.url && (
                <LinkButton href={modalContent.url}>Voir le site</LinkButton>
              )}
            </div>
          </div>
        </Modal>
      )}
      <ul className="portfolio-menu">
        {state?.category.map((c) => (
          <li
            className={c.slug == slug ? "active" : ""}
            onClick={() => setSlug(c.slug)}
            key={c.slug}
          >
            {c.title}
          </li>
        ))}
      </ul>
      <div className={clsx("portfolio-list", slug)}>
        {state?.portfolio.map((p) => (
          <Link
            href={`/portfolio/${p.slug}`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              window.history.pushState({}, "", event.currentTarget.href);
              setShowModal(true);
              setModalContent(p);
            }}
            key={p.title}
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
              layout="responsive"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
