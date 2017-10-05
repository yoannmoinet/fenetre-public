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
