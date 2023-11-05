import ResumeLayoutStyles from "./ResumeLayout.module.css";

type ResumeLayoutProps = {
  children: React.ReactNode;
};

const ResumeLayout = ({
  children,
}: ResumeLayoutProps) => {
  return (
    <div className={ResumeLayoutStyles.wrapper}>
      {children}
    </div>
  );
};

ResumeLayout.defaultProps = {
  isHomepage: false,
};

export default ResumeLayout;
