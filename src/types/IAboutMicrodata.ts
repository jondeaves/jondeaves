export default interface IAboutMicrodata {
  title: string;
  givenName: string;
  familyName: string;

  address: {
    locality: string;
    region: string;
  };

  contact: {
    email: string;
    site: {
      title: string;
      href: string;
    };

    social: {
      github: string;
      linkedin: string;
      twitter: string;
    };
  };
}
