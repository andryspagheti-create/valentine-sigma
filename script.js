// script.js - controls heart click and staggered image slide-ins
(function(){
  const heart = document.getElementById('heart');
  const leftImgs = Array.from(document.querySelectorAll('.slide-left'));
  const rightImgs = Array.from(document.querySelectorAll('.slide-right'));
  let clicked = false;

  function onClickHeart(){
    if (clicked) return;
    clicked = true;

    // move heart to top
    heart.classList.add('moved');

    // stagger left images (0.25s between each)
    leftImgs.forEach((img, i) => {
      // set a tiny delay to ensure CSS transition applies
      setTimeout(() => {
        img.classList.add('in');
      }, i * 250);
    });

    // stagger right images (0.25s between each)
    rightImgs.forEach((img, i) => {
      setTimeout(() => {
        img.classList.add('in');
      }, i * 250);
    });

    // allow scrolling after animations finish
    // total delay: max stagger (0.5s for 3 images) + animation time (0.6s) + buffer
    const totalDelay = (Math.max(leftImgs.length, rightImgs.length) - 1) * 250 + 600 + 300;
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      // move focus to content for accessibility
      const msg = document.getElementById('message');
      if (msg) msg.focus();
    }, totalDelay);
  }

  heart.addEventListener('click', onClickHeart);
  heart.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') onClickHeart();
  });
})();
