import SkipToContentStyles from "./SkipToContent.module.css";

type SkipToContentProps = {
  label: string;
  target: string;
};

const SkipToContent = ({ label, target }: SkipToContentProps) => {
  return (
    <a className={SkipToContentStyles.skipToContent} href={target}>
      {label}
    </a>
  );
};

SkipToContent.defaultProps = {
  label: "Skip to content",
  target: "#main",
};

export default SkipToContent;
