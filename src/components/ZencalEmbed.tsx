// ZencalEmbed.tsx
"use client";
import { colors } from "@/styles/colors";

export enum SLUGS {
  WSPARCIE_1 = "wsparcie-1",
  WSPARCIE_2 = "wsparcie-2",
  WSPARCIE_3 = "wsparcie-3",
  KONSULTACJA = "konsultacja",
  // add more if needed
}

interface ZencalEmbedProps {
  slug: string; // currently selected slug
  owner?: string;
  primaryColor?: string;
  secondaryColor?: string;
  avatar?: string;
  lang?: string;
  ampm?: string;
}

const ZencalEmbed = ({
  slug,
  owner = "elcare",
  primaryColor = colors.elcarePurple[500],
  secondaryColor = colors.elcareCream[300],
  avatar = "https://meetendly.fra1.digitaloceanspaces.com/profile-images/wyNb361GSQ301eZ0L6830tmvYkz0Wr527b3ac7-5e85-412b-befb-287c538c7570.jpg",
  lang = "pl",
  ampm = "0",
}: ZencalEmbedProps) => {
  return (
    <div className="relative">
      {Object.values(SLUGS).map((s) => (
        <div
          key={s}
          data-type="u"
          data-owner={owner}
          data-slug={s}
          data-primary={primaryColor}
          data-secondary={secondaryColor}
          data-avatar={avatar}
          data-lang={lang}
          data-ampm={ampm}
          className={`zencal-embed ${s === slug ? "block" : "hidden"}`}
        />
      ))}
    </div>
  );
};

export default ZencalEmbed;
