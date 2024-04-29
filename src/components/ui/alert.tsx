"use client";

import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

type Props = {
  type: string;
  message: string[] | string;
  showProps: boolean | undefined;
};

export default function Alert({ type, message, showProps = true }: Props) {
  const [show, setShow] = useState(showProps);
  const ref = useRef(null);
  const timeout = 3000;
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, timeout);
    return () => clearTimeout(timer);
  }, []);
  if (Array.isArray(message)) {
    return (
      <>
        <CSSTransition in={show} timeout={timeout} nodeRef={ref} unmountOnExit>
          <ul className={`flash-message flash-${type}`} ref={ref}>
            {message.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </CSSTransition>
      </>
    );
  }
  return (
    <>
      <CSSTransition in={show} timeout={timeout} ref={ref} unmountOnExit>
        <p ref={ref} className={`flash-message flash-${type}`}>
          {message}
        </p>
      </CSSTransition>
    </>
  );
}
