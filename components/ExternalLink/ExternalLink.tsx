type ExternalLinkProps = {
  href: string;
  label: string | React.ReactNode;
};

const ExternalLink = ({ href, label }: ExternalLinkProps) => {
  return (
    <a href={href} rel="external noopener noreferrer" target="_blank">
      {label}
      <span className="hidden">&nbsp;(opens in new tab)</span>
    </a>
  );
};

export default ExternalLink;
