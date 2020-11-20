import React from 'react';

const MobileImageResize = () => {
  document.addEventListener('DOMContentLoaded', () => {
    let resizer = new ResizeObserver(handleResize);
    resizer.observe(document.querySelector('.container'));
  });

  const handleResize = (entries) => {
    let div = entries[0].target;
    if (entries[0].contentRect.width < 700) {
      div.classList.add('mobile');
      addPhoto();
    } else {
      div.classList.remove('mobile');
      removePhoto();
    }
  };

  const addPhoto = () => {
    if (!document.querySelector('.two img')) {
      let img = document.createElement('img');
      img.src = `https://images.unsplash.com/photo-1605383194463-9c5af2a53405?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`;
      img.alt = 'Random image';
      document.querySelector('.two p').appendChild(img);
    }
  };

  const removePhoto = () => {
    let img = document.querySelector('.two img');
    img ? img.parentElement.removeChild(img) : '';
  };

  return (
    <div className='container'>
      <section className='one'>
        <p>first box</p>
      </section>
      <section className='two'>
        <p>second box</p>
      </section>
    </div>
  );
};

export default MobileImageResize;
