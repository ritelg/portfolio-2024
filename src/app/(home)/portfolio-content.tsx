"use client";

import Modal from "@/components/modules/modal";
import Link from "next/link";
import { Category, Portfolio } from "@/utils/type";
import {useEffect, useState} from "react";

type PortfolioState = {
  category: Category[];
  portfolio: Portfolio[];
}

export default function PortfolioContent({ next_url, children }: { next_url: string, children: React.ReactNode}) {  

  const [state, setState] = useState<PortfolioState>()
  const [slug, setSlug] = useState('tout')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({image: '', title: '', content: '', url: '', slug: ''})
  const [showChildren, setShowChildren] = useState(true)

  useEffect(() => {
    fetch(`${next_url}/api/portfolio-category/${slug}`, { cache: 'no-cache' })
      .then((res) => res.json())
      .then((data) => {
        setShowChildren(false)
        setState(data)
        console.log(data)
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
        <Modal closeModal={closeModal} image={modalContent.image} title={modalContent.title} slug={modalContent.slug} content={modalContent.content} url={modalContent.url} />
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
            window.history.pushState({}, "", `/portfolio/${p.slug}`)
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
