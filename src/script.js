import './style.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import './vendor/light';
import './vendor/brands';
import './vendor/fontawesome';

aos.init({
  duration: 750
});

if (location.hostname !== 'localhost' && location.protocol !== 'https:') {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

const $more = document.querySelector('#and-more');
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

document.querySelector('.menu .item.mail a').href = 'mailto:support@fenêt.re';
