const automaticScroll = () => {
  const scrollStep = 1;
  const scrollDuration = 5000;
  
  window.addEventListener("startScroll", () => {
    const totalSteps = Math.ceil(scrollDuration / (scrollStep * 10));
    
    setInterval(() => {
      window.scrollBy(0, scrollStep);
    }, scrollDuration / totalSteps);
  });
}

export default automaticScroll