interface ExternalLinkProps {
  href: string;
  label: string | React.ReactNode;
  unstyled?: boolean;
}

export const ExternalLink = ({
  href,
  label,
  unstyled = false,
}: ExternalLinkProps) => (
  <a
    href={href}
    rel="external noopener noreferrer"
    target="_blank"
    className={unstyled ? "unstyled" : ""}
  >
    {label}
    <span className="hidden">&nbsp;(opens in a new tab)</span>
  </a>
);
