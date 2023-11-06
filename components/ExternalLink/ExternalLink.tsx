type ExternalLinkProps = {
  href: string;
  label: string | React.ReactNode;
  unstyled?: boolean;
};

const ExternalLink = ({ href, label, unstyled }: ExternalLinkProps) => {
  return (
    <a href={href} rel="external noopener noreferrer" target="_blank" className={unstyled ? "unstyled" : ""}>
      {label}
      <span className="hidden">&nbsp;(opens in a new tab)</span>
    </a>
  );
};

ExternalLink.defaultProps = {
  unstyled: false,
};

export default ExternalLink;
