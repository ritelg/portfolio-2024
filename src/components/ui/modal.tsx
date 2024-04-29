"use client";

import clsx from "clsx";

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  closeModal: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Modal({ closeModal, className, ...props }: Props) {
  const cs = clsx("modal", className);
  return (
    <div className={cs} {...props} onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
      {props.children}
      <a href="" onClick={closeModal} className="modal-close">x</a>
      </div>
    </div>
  );
}
