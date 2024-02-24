"use client";

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  closeModal: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Modal({ closeModal, ...props }: Props) {
  return (
    <div className="modal" {...props} onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
      {props.children}
      <a href="" onClick={closeModal} className="modal-close">x</a>
      </div>
    </div>
  );
}
