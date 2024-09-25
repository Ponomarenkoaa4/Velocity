// ?TABS
const tabsBtns = document.querySelectorAll("button");
const tabsContent = document.querySelectorAll(".tabs__item");

function hideTabs() {
  tabsContent.forEach((tab) => {
    tab.classList.add("hide");
  });
  tabsBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
}

tabsBtns.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    // const i = Array.from(tabsBtns).indexOf(e.target);
    hideTabs();
    showTabs(i);
  });
});

function showTabs(i) {
  tabsContent[i].classList.remove("hide");
  tabsBtns[i].classList.add("active");
}

hideTabs();
showTabs(0);

// ?LINKS
const links = document.querySelectorAll(".header__nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href");
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop - 70,
      behavior: "smooth",
    });
  });
});
