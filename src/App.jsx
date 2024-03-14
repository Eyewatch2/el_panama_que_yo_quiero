import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NextSurvey from './components/NextSurvey';
import PrevSurvey from './components/PrevSurvey';
import YoAmoAMiCiudad from './components/YoAmoAMiCiudad';
import SiYoFueraPresidente from './components/SiYoFueraPresidente';
import SiYoFueraDiputado from './components/SiYoFueraDiputado';

function App() {
  const [surveyNumber, setSurveyNumber] = useState(1);

  return (
    <>
      <Header />
      <Hero />
      <YoAmoAMiCiudad />
      <SiYoFueraPresidente />
      <SiYoFueraDiputado />
      <PrevSurvey setSurveyNumber={setSurveyNumber} survey={surveyNumber} />
      <NextSurvey setSurveyNumber={setSurveyNumber} survey={surveyNumber} />
    </>
  );
}

export default App;
