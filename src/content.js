import { css } from 'emotion'
import './content.css'

const createBannerWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add(
    css`
      position: fixed;
      top: 0;
      width: 100%;
      margin-top: -40px;
      transition: margin-top 0.5s ease;
      z-index: 9999;
    `
  );

  return wrapper;
}

const getNotionApp = () => document.getElementById('notion-app');

const createBanner = () => {
  const banner = document.createElement('div');
  const bannerStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    padding: 5px 8px;
    box-shadow: 0px 3px 5px lightgray;
    background-color: white;
  `
  banner.classList.add(bannerStyle)

  const title = document.createElement('span');
  title.innerHTML = 'Notion Link';
  const link = createNotionLink();

  banner.appendChild(title)
  banner.appendChild(link)

  return banner;
}

const createNotionLink = () => {
  const url = window.location.href.split(':')[1];
  const link = document.createElement('a');
  link.href = 'notion:' + url;
  link.innerText = 'Open in the App';

  return link;
}

const openBanner = () => {
  const notionApp = getNotionApp();
  notionApp.classList.add('banner-opened');
}

const closeBanner = () => {
  const notionApp = getNotionApp();
  notionApp.classList.remove('banner-opened');
}

const init = () => {
  
  const wrapper = createBannerWrapper();
  const banner = createBanner();
  wrapper.appendChild(banner);
  window.document.body.appendChild(wrapper)
  // banner.classList.add(
  //   bannerOpened
  // )
  setTimeout(() => {
    openBanner();
    wrapper.classList.add(
      css`
        margin-top: 0;
      `
    )
  }, 500)
}

window.onload = () => {  
  init();
}