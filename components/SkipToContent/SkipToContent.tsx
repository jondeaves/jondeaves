import SkipToContentStyles from "./SkipToContent.module.css";

interface SkipToContentProps {
  label?: string;
  target?: string;
}

export const SkipToContent = ({
  label = "Skip to content",
  target = "#main",
}: SkipToContentProps) => (
  <a className={SkipToContentStyles.skipToContent} href={target}>
    {label}
  </a>
);
