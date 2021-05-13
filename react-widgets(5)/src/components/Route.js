import { useEffect, useState } from 'react';

const Route = ({path, children}) => {
  const [url, setUrl] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setUrl(window.location.pathname);
    }

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  }, []);

  return url === path ? children : null;
}
 
export default Route;