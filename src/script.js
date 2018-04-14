import './style.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import './vendor/light';
import './vendor/brands';
import './vendor/fontawesome';

aos.init({
  duration: 700
});

if (location.hostname !== 'localhost' && location.protocol !== 'https:') {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

const $btnBuy = document.querySelectorAll('.buy');
const $btnTry = document.querySelectorAll('.try');

$btnBuy.forEach((bt) => {
  bt.addEventListener('click', () => {
    fbq('track', 'InitiateCheckout');
    gtag('event', 'view_item', {
      'event_category': 'GoToAppStore',
      'event_label': 'Pro'
    });
  });
});

$btnTry.forEach((bt) => {
  bt.addEventListener('click', () => {
    fbq('track', 'Lead');
    gtag('event', 'generate_lead', {
      'event_category': 'GoToAppStore',
      'event_label': 'Lite'
    });
  });
});

document.querySelectorAll('.menu .item.mail a').forEach((el) => {
  el.href = 'mailto:support@fenêt.re';
});

const createSource = (src, type) => {
  const source = document.createElement('SOURCE');
  source.src = src;
  source.type = type;
  return source;
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.video-placeholder').forEach((el) => {
    const vid = document.createElement('VIDEO');
    vid.loop = true;
    vid.autoplay = true;
    vid.classList.add(el.getAttribute('data-class'));
    vid.poster = el.getAttribute('data-poster');

    vid.appendChild(createSource(
      el.getAttribute('data-video-1'),
      el.getAttribute('data-video-1-type')
    ));

    vid.appendChild(createSource(
      el.getAttribute('data-video-2'),
      el.getAttribute('data-video-2-type')
    ));

    el.parentElement.appendChild(vid);
    el.parentElement.removeChild(el);
  });
});
