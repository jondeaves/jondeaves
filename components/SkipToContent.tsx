import SkipToContentStyles from "./SkipToContent.module.css";

type SkipToContentProps = {
  label?: string;
  target?: string;
};

const SkipToContent = ({ label, target }: SkipToContentProps) => {
  return (
    <a className={SkipToContentStyles.skipToContent} href={target || "#main"}>
      {label || "Skip to content"}
    </a>
  );
};

export default SkipToContent;
