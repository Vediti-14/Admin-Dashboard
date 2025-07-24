
import "./backToTop.css"
import React, { useState, useEffect } from 'react';

function BackToTop() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  const backToTop = () =>{
    window.scroll(0,0);
  };

  return (
    <a
      onClick={backToTop}
      className={`back-to-top d-flex align-items-center justify-content-center ${
        scroll > 100 ? 'active' : ''
      }`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}

export default BackToTop;

//WARNING in [eslint]
//src\components\BackToTop.jsx
 // Line 25:5:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid      

