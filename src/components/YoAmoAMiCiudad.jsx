import React, { useEffect } from 'react';

const YoAmoAMiCiudad = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = (
      (document.location.protocol === 'https:' ? 'https://' : 'http://') +
      'demoscopia.net/assets/scripts/embedded/script.js'
    );
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div
      id='encuesta1'
      className="surveykiwi fixed inset-0 w-svw h-svh z-30"
      data-src="//demoscopia.net/w/campaign/1772"
      data-width="100%"
      data-height="100svh"
      
    ></div>
  );
}

export default YoAmoAMiCiudad;
