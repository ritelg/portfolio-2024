// typescript no check this file
// @ts-nocheck

type Props = {
  id: string;
};
export default function SvgIcon ({ id }: Props) {
  const sprite_path = '/sprite.svg'; // Chemin vers votre fichier sprite
  return (
    <svg className="icon">
      <use xlinkHref={`${sprite_path}#${id}`} />
    </svg>
  );
}

