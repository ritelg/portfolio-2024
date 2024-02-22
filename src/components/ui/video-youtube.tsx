"use client";

import {Play, PlayCircle} from "lucide-react";
import {useState} from "react";

type Props = {
  id: string;
  title: string;
};
export default function VideoYoutube({ id, title }: Props) {
  const [active, setActive] = useState(false);
  const imgSrc = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className="video-youtube">
      {active ? (
      <div className="video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allowFullScreen
        ></iframe>

      </div>
      ) : (

      <div className="img" onClick={() => setActive(true)} >
        <img src={imgSrc} alt={title} />
        <Play className="play-button" />
      </div>
          )}
    </div>
  );
}
