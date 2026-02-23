import { Product } from '../models/product.model';

const gallery = (label: string): string[] => [
  `https://picsum.photos/seed/${encodeURIComponent(label + '-1')}/800/500`,
  `https://picsum.photos/seed/${encodeURIComponent(label + '-2')}/800/500`,
  `https://picsum.photos/seed/${encodeURIComponent(label + '-3')}/800/500`,
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 13 128GB Black',
    description:
      'Күнделікті қолдануға ыңғайлы, өнімділігі жоғары смартфон. Камерасы сапалы, интерфейсі жылдам және тұрақты жұмыс істейді.',
    price: 329990,
    rating: 4.9,
    image: gallery('iPhone 13 Black')[0],
    images: gallery('iPhone 13 Black'),
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/',
  },
  {
    id: 2,
    name: 'Apple iPhone 13 128GB White',
    description:
      'Классикалық түстегі iPhone 13 моделі. Экран сапасы мен батарея жұмысы жақсы, күнделікті қолдануға өте ыңғайлы.',
    price: 334990,
    rating: 4.9,
    image: gallery('iPhone 13 White')[0],
    images: gallery('iPhone 13 White'),
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/',
  },
  {
    id: 3,
    name: 'Apple iPhone 13 128GB Blue',
    description:
      'Әдемі түсті және өнімділігі жоғары смартфон. Оқу, байланыс, фото/видео және әлеуметтік желілер үшін қолайлы.',
    price: 333990,
    rating: 4.8,
    image: gallery('iPhone 13 Blue')[0],
    images: gallery('iPhone 13 Blue'),
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
  },
  {
    id: 4,
    name: 'Apple iPhone 13 128GB Green',
    description:
      'Жасыл түсті нұсқа дизайнымен ерекшеленеді. Жылдам жұмыс істеуі және сапалы камерасы бұл модельді танымал етеді.',
    price: 336990,
    rating: 4.9,
    image: gallery('iPhone 13 Green')[0],
    images: gallery('iPhone 13 Green'),
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/',
  },
  {
    id: 5,
    name: 'Apple iPhone 13 256GB White',
    description:
      'Көбірек жады қажет ететіндер үшін 256GB нұсқасы ыңғайлы. Фото, видео және файлдарды ұзақ сақтауға мүмкіндік береді.',
    price: 389990,
    rating: 4.9,
    image: gallery('iPhone 13 256 White')[0],
    images: gallery('iPhone 13 256 White'),
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-256gb-belyi-102298423/',
  },
  {
    id: 6,
    name: 'Apple iPhone 13 256GB Green',
    description:
      '256GB жады және стильді жасыл түсі бар модель. Күнделікті жұмысқа және мультимедиа қолдануға жеткілікті қуат береді.',
    price: 394990,
    rating: 4.9,
    image: gallery('iPhone 13 256 Green')[0],
    images: gallery('iPhone 13 256 Green'),
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-256gb-zelenyi-104078950/',
  },
  {
    id: 7,
    name: 'Apple iPhone 13 Pro 256GB Gray',
    description:
      'Pro сериясы камера мүмкіндіктерімен және дисплей сапасымен ерекшеленеді. Контент жасаушыларға және белсенді қолданушыларға жақсы таңдау.',
    price: 559990,
    rating: 4.8,
    image: gallery('iPhone 13 Pro 256 Gray')[0],
    images: gallery('iPhone 13 Pro 256 Gray'),
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-256gb-dual-sim-seryi-107459560/',
  },
  {
    id: 8,
    name: 'Apple iPhone 13 Pro Max 128GB Silver',
    description:
      'Үлкен экран және қуатты камера жүйесі бар флагмандық модель. Бейне көруге, ойынға және суретке түсіруге өте қолайлы.',
    price: 599990,
    rating: 4.9,
    image: gallery('iPhone 13 Pro Max Silver')[0],
    images: gallery('iPhone 13 Pro Max Silver'),
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-serebristyi-102298893/',
  },
  {
    id: 9,
    name: 'Apple AirPods with Charging Case',
    description:
      'Күнделікті музыка тыңдау және қоңыраулар үшін ыңғайлы сымсыз құлаққап. Apple құрылғыларымен тез және ыңғайлы қосылады.',
    price: 69990,
    rating: 4.7,
    image: gallery('AirPods Charging Case')[0],
    images: gallery('AirPods Charging Case'),
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-with-charging-case-belyi-4804056/',
  },
  {
    id: 10,
    name: 'Apple AirPods Pro 2nd Gen',
    description:
      'Белсенді шуды басу функциясы бар премиум құлаққап. Дыбыс сапасы жоғары және ұзақ қолдануға ыңғайлы.',
    price: 129990,
    rating: 4.9,
    image: gallery('AirPods Pro 2')[0],
    images: gallery('AirPods Pro 2'),
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/',
  },
];