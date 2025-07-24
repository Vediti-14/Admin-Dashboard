import React, { useEffect, useState } from 'react';


function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  const toggleMode = () => {
    setDark(!dark);
  };

  return (
    <li className="nav-item dark-mode-toggle">
      <button onClick={toggleMode} className={`btn btn-sm ${dark ? 'btn-light' : 'btn-dark'}`}>
        {dark ? ' Light' : ' Dark'}
      </button>
    </li>
  );
}

export default DarkMode;
