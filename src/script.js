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

const $more = document.querySelector('#and-more');
const $btnBuy = document.querySelectorAll('.buy');
const $btnTry = document.querySelectorAll('.try');

$more.querySelectorAll('strong').forEach((el) => {
  el.addEventListener('click', () => {
    const collapsed = $more.classList.contains('collapsed');

    if (collapsed) {
      $more.classList.remove('collapsed');
    } else {
      $more.classList.add('collapsed');
    }
  });
});

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

document.querySelector('.menu .item.mail a').href = 'mailto:support@fenêt.re';
