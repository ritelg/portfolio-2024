"use client";

import {useEffect, useState} from "react";
import Link from "next/link";

import {
  Modal,
  LinkButton
} from "@/components/ui";

import { Category, Portfolio } from "@/utils/type";

type PortfolioState = {
  category: Category[];
  portfolio: Portfolio[];
}

export default function PortfolioContent({ endpoint, children }: { endpoint: string, children: React.ReactNode}) {  

  const [state, setState] = useState<PortfolioState>()
  const [slug, setSlug] = useState('tout')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({image: '', title: '', content: '', url: '', slug: ''})
  const [showChildren, setShowChildren] = useState(true)

  useEffect(() => {
    fetch(`${endpoint}/${slug}`, { cache: 'no-cache' })
      .then((res) => res.json())
      .then((data) => {
        setShowChildren(false)
        setState(data)
      })
  }, [slug])

  function closeModal(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    event.stopPropagation()
    setShowModal(false)
    window.history.pushState({}, "", "/")
  }

  if (showChildren) {
    return <>{children}</>
  }
  return (
    <>
      {showModal && (
        <Modal closeModal={closeModal}>
          <img src={modalContent.image} alt={modalContent.title} />
          <div>
          <h3>{modalContent.title}</h3>
          {modalContent.content}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque commodi dignissimos aspernatur quisquam, ipsum maxime molestiae illo laudantium ullam, corrupti veritatis quam doloribus officiis ducimus quis. Veniam, quidem obcaecati.</p>
          <p>Voluptates explicabo beatae ipsam nostrum dignissimos aliquam officia fuga, natus ullam voluptas aliquid accusantium commodi quos repellendus ratione ducimus sequi nihil eaque adipisci similique? Enim vel dolorum assumenda architecto quidem!</p>
          {modalContent.url && (
            <LinkButton href={modalContent.url}>Voir le site</LinkButton>
          )}
          </div>
        </Modal>
      )}
      <ul className="portfolio-menu">
      {state?.category.map(c => (
        <li 
        className={c.slug == slug ? "active": ""} 
        onClick={() => setSlug(c.slug)} 
        key={c.slug}
        >{c.title}</li>
      ))} 
      </ul>
      <div className="portfolio-list">
      {state?.portfolio.map(p => (
        <Link 
          href={`/portfolio/${p.slug}`}
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            window.history.pushState({}, "", event.currentTarget.href)
            setShowModal(true)
            setModalContent(p)
          }} 
          key={p.title} 
          className={p.title.indexOf('Flyer') ? "portfolio-item" : "porfolio-flyer portfolio-item"}
        >
          <img src={p.image} alt={p.title} />
        </Link>
      ))}
      </div>
    </>
  );
}
