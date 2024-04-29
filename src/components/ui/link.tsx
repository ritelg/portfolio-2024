import clsx from 'clsx';
import { default as BaseLink, LinkProps } from 'next/link';
import {usePathname} from 'next/navigation';

interface props extends React.AnchorHTMLAttributes<HTMLAnchorElement>, LinkProps {
  href: string;
  children?: React.ReactNode;
}
export default function Link({href, children, ...props}: props) {
  const path = usePathname()
  const cs = clsx(props.className, {active: path === href})
  return <BaseLink className={cs} href={href} {...props}>{children}</BaseLink>
}
