"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link href={url}>{text}</Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite />;
    case "TWITTER":
      return <AiFillTwitterCircle />;
    case "YOUTUBE":
      return <AiFillYoutube />;
    case "DISCORD":
      return <FaDiscord />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  legalLinks,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  legalLinks: Array<FooterLink>;
}) {
  return (
    <footer>
      <div>
        <div>
          <Logo src={logoUrl}>
            {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
          </Logo>
        </div>
        <div>
          <ul>
            {menuLinks.map((link: FooterLink) => (
              <FooterLink key={link.id} {...link} />
            ))}
          </ul>
        </div>
      </div>

      <div>
        <span className="mr-2">
          ©{new Date().getFullYear()} TOUS DROITS RÉSERVÉS | SITE RÉALISÉ PAR
          STACKY AGENCY
        </span>
        <ul className="flex">
          {legalLinks.map((link: FooterLink) => (
            <Link href={link.url} key={link.id}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}
