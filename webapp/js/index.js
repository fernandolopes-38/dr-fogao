const mapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5165944144314!2d-34.898505485620504!3d-8.048668282621273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18e59b44c10d%3A0x8e2c68153690803d!2zRHIuRm9nw6Nv!5e0!3m2!1spt-BR!2sbr!4v1611796607452!5m2!1spt-BR!2sbr';
let wa0 = null;
let wa1 = null;

const faviconTag = document.getElementById('faviconTag');
const mobile0 = document.getElementById('mobile0');
const mobile1 = document.getElementById('mobile1');
const isDark = window.matchMedia('(prefers-color-scheme: dark)');
const width = window.innerWidth;
const map = document.getElementById('mapa');

if (width > 720) {
  wa0 = 'https://web.whatsapp.com/send?phone=+5581987673107';
  wa1 = 'https://web.whatsapp.com/send?phone=+5581999933126';
} else {
  wa0 = 'https://wa.me/5581987673107';
  wa1 = 'https://wa.me/5581999933126';
}

mobile0.href = wa0;
mobile1.href = wa1;

map.src = mapUrl;

const changeFavicon = () => {
  if (isDark.matches) {
    faviconTag.href = './img/dark.ico';
  } else {
    faviconTag.href = './img/light.ico';
  }
};

changeFavicon();
