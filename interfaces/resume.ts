interface IAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
}
interface ISocial {
  name: string;
  url: string;
  className: string;
}

interface IEducation {
  school: string;
  degree: string;
  graduated: string;
  description: string;
}

interface IWork {
  company: string;
  title: string;
  years: string;
  description: string;
}

interface ISkill {
  name: string;
  level: string;
}

interface IProject {
  title: string;
  category: string;
  image: string;
  url: string;
}

interface ITestimonial {
  text: string;
  user: string;
}

export interface IResume {
  main: {
    name: string;
    occupation: string;
    description: string;
    image: string;
    bio: string;
    contactmessage: string;
    email: string;
    phone: string;
    address: IAddress;
    website: string;
    resumedownload: string;
    social: ISocial[];
  };
  resume: {
    skillmessage: string;
    education: IEducation[];
    work: IWork[];
    skills: ISkill[];
  };
  portfolio: {
    projects: IProject[];
  };
  testimonials: { testimonials: ITestimonial[] };
}
