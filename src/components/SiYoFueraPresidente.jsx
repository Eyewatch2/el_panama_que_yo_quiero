import React, { useEffect } from 'react';

const SiYoFueraPresidente = () => {
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
    <>
      <div id='encuesta2' className="surveykiwi" data-src="//demoscopia.net/w/campaign/1771" data-width="100%" data-height="480px"></div>
    </>
  );
}

export default SiYoFueraPresidente;
