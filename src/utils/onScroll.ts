const onScroll: Function = () => {
  window.onscroll = () => {
    const header: HTMLElement | null = document.querySelector("#header");
    if (window.pageYOffset > header?.offsetHeight - 50) {
      header?.classList.add("scrolling");
    } else {
      header?.classList.remove("scrolling");
    }
  };
};

export default onScroll;
