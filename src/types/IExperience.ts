export default interface IExperience {
  jobTitle: string;
  description: {
    childMarkdownRemark: {
      html: string;
    };
  };
  companyName: string;
  companyUri: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
}
