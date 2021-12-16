import React, { useEffect, useState } from "react";
import { IResume } from "../interfaces/resume";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Resume from "../Components/Resume";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";
import Portfolio from "../Components/Portfolio";

const App = () => {
  const [resumeData, setResumeData] = useState<IResume>(null);

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  if (resumeData === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
