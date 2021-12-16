import React, { useEffect, useState } from "react";
import { IResume } from "../interfaces/resume";

import About from "../Components/About";
import Resume from "../Components/Resume";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";
import Portfolio from "../Components/Portfolio";
import Layout from "../Components/Layout";

const App = () => {
  const [resumeData, setResumeData] = useState<IResume>(null);

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  //TODO: styled and animated loading
  if (resumeData === null) {
    return <div>Loading...</div>;
  }

  return (
    <Layout userData={resumeData.main}>
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
    </Layout>
  );
};

export default App;
