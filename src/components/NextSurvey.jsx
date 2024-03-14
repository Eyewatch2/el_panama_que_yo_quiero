import React from 'react';
import { FaAngleDown } from "react-icons/fa";

const NextSurvey = () => {
    const handleNavigation = () => {
        // Obtener el hash actual de la URL (parte después de #)
        const currentHash = window.location.hash;
        if (!currentHash || currentHash === "#") window.location.hash = "#encuesta1";

        // Extraer el número de la encuesta actual del hash
        // Asumimos que el hash sigue el formato #encuesta<number>
        const match = currentHash.match(/#encuesta(\d+)/);
        if (match && match[1]) {
            // Convertir el número de la encuesta a un entero y sumarle 1
            const currentSurveyNumber = parseInt(match[1], 10);
            const nextSurveyNumber = currentSurveyNumber + 1;
            if(nextSurveyNumber > 3) return window.location.hash = "#";

            // Navegar a la próxima encuesta
            window.location.hash = `#encuesta${nextSurveyNumber}`;
        }
    };

    return (
        <>
            <a onClick={handleNavigation} className='cursor-pointer hover:bg-primary-800 transition-all ease-in-out md:flex gap-2 items-center hidden fixed bottom-5 text-sm right-10 z-40 font-semibold text-white rounded-full px-5 py-2.5 bg-primary-500/50 backdrop-blur-lg'>Siguiente Encuesta <FaAngleDown /></a>
            <a onClick={handleNavigation} className='cursor-pointer block md:hidden fixed bottom-5 text-sm right-10 z-40 font-semibold text-white rounded-full px-5 py-2.5 bg-primary-500/50 backdrop-blur-lg'><FaAngleDown /></a>
        </>
    );
};

export default NextSurvey;
