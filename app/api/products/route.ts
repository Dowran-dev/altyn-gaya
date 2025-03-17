// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

// interface ProductSize {
//   id: number;
//   name: string;
//   quantity: string;
//   price: string;
// }

// interface ProductReview {
//   id: number;
//   author: string;
//   date: string;
//   rating: number;
//   title: string;
//   content: string;
// }

// interface Product {
//   id: number;
//   name: string;
//   subtitle: string;
//   fullTitle: string;
//   description: string;
//   longDescription: string;
//   features: string[];
//   directions: string[];
//   rating: number;
//   reviews: number;
//   imageSrc: string;
//   badge: string;
//   sizes: ProductSize[];
//   reviewsList: ProductReview[];
// }


// Interface for product sizes (unchanged)
interface ProductSize {
  id: number;
  name: string;
  quantity: string;
  price: string;
}

// Interface for product reviews (unchanged)
interface ProductReview {
  id: number;
  author: string;
  date: string;
  rating: number;
  title: string;
  content: string;
}

// Interface for the nested "details" object (replaces the old Product interface)
interface ProductDetails {
  id: number;
  name: string;
  subtitle: string;
  fullTitle: string;
  description: string;
  longDescription: string;
  image: string; // Matches "image" in the nested details object
  color: string; // Matches "color" in the nested details object
  brandName: string; // Matches "brandName" in the nested details object
  category: string; // Matches "category" in the nested details object
  features: string[];
  directions: string[];
  rating: number;
  reviews: number;
  badge: string;
  sizes: ProductSize[];
  reviewsList: ProductReview[];
}

// Interface for the outer product object
interface Product {
  title: string;
  description: string;
  image: string;
  color: string;
  brandName: string;
  category: string;
  features: string[];
  details: ProductDetails; // Nested details object
}

const productsData: Product[] = [
    // Real Plus - Универсальные жидкие моющие средства с кондиционером
    {
      title: "Real Plus Универсальное жидкое моющее средство с кондиционером",
      description: "Многофункциональное средство для бережного ухода за тканями с эффектом кондиционирования.",
      image: "/images/RealPlus_Liquid.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Универсальные жидкие моющие средства с кондиционером",
      features: [
        "Делает ткани мягкими и свежими",
        "Удаляет стойкие пятна",
        "Подходит для ручной и машинной стирки",
      ],
      details: {
        id: 1,
        name: "Real Plus",
        subtitle: "Универсальное моющее средство с кондиционером",
        fullTitle: "Real Plus - Универсальное жидкое моющее средство с кондиционером 1л",
        description: "Многофункциональное средство для бережного ухода за тканями с эффектом кондиционирования.",
        longDescription:
          "Real Plus сочетает мощную очищающую способность с эффектом кондиционера, делая ткани мягкими и приятными на ощупь. Подходит для стирки деликатных вещей и ежедневного ухода за одеждой.",
        image: "/images/RealPlus_Liquid.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Универсальные жидкие моющие средства с кондиционером",
        features: [
          "Делает ткани мягкими и свежими",
          "Удаляет стойкие пятна",
          "Подходит для ручной и машинной стирки",
        ],
        directions: [
          "Добавьте 50 мл на 5 кг белья.",
          "Храните в прохладном месте.",
          "Не используйте для шерсти и шелка.",
        ],
        rating: 4.6,
        reviews: 145,
        badge: "Рекомендовано",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽299" },
          { id: 2, name: "1л", quantity: "1000 мл", price: "₽499" },
          { id: 3, name: "2л", quantity: "2000 мл", price: "₽899" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Ольга С.",
            date: "12 марта 2025",
            rating: 4.8,
            title: "Мягкость и чистота",
            content: "Белье стало мягким, а запах просто волшебный!",
          },
        ],
      },
    },
    {
      title: "Real Plus Жидкость с ароматом лаванды",
      description: "Жидкое средство с кондиционером и ароматом лаванды.",
      image: "/images/RealPlus_Liquid_Lavender.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Универсальные жидкие моющие средства с кондиционером",
      features: [
        "Долговременный аромат",
        "Мягкость тканей",
        "Эффективная очистка",
      ],
      details: {
        id: 2,
        name: "Real Plus",
        subtitle: "Жидкость с ароматом лаванды",
        fullTitle: "Real Plus - Жидкость с ароматом лаванды 1л",
        description: "Жидкое средство с кондиционером и ароматом лаванды.",
        longDescription:
          "Средство с нежным ароматом лаванды обеспечивает глубокую очистку и оставляет белье мягким и свежим на долгое время.",
        image: "/images/RealPlus_Liquid_Lavender.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Универсальные жидкие моющие средства с кондиционером",
        features: [
          "Долговременный аромат",
          "Мягкость тканей",
          "Эффективная очистка",
        ],
        directions: [
          "Используйте 50 мл на 5 кг белья.",
          "Храните в прохладном месте.",
        ],
        rating: 4.7,
        reviews: 120,
        badge: "Новинка",
        sizes: [
          { id: 1, name: "1л", quantity: "1000 мл", price: "₽499" },
          { id: 2, name: "2л", quantity: "2000 мл", price: "₽899" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Анна К.",
            date: "10 марта 2025",
            rating: 4.9,
            title: "Приятный аромат",
            content: "Лаванда пахнет натурально, белье мягкое!",
          },
        ],
      },
    },
    {
      title: "Real Plus Жидкость для спортивной одежды",
      description: "Специальное средство для стирки спортивной одежды.",
      image: "/images/RealPlus_Liquid_Sport.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Универсальные жидкие моющие средства с кондиционером",
      features: [
        "Удаление запаха пота",
        "Сохранение эластичности",
        "Мягкий уход",
      ],
      details: {
        id: 3,
        name: "Real Plus",
        subtitle: "Жидкость для спортивной одежды",
        fullTitle: "Real Plus - Жидкость для спортивной одежды 1л",
        description: "Специальное средство для стирки спортивной одежды.",
        longDescription:
          "Разработано для удаления запахов и пятен с синтетических тканей, сохраняя их эластичность и форму.",
        image: "/images/RealPlus_Liquid_Sport.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Универсальные жидкие моющие средства с кондиционером",
        features: [
          "Удаление запаха пота",
          "Сохранение эластичности",
          "Мягкий уход",
        ],
        directions: [
          "Добавьте 40 мл на 4 кг белья.",
          "Храните в прохладном месте.",
        ],
        rating: 4.8,
        reviews: 95,
        badge: "Специальный уход",
        sizes: [
          { id: 1, name: "1л", quantity: "1000 мл", price: "₽549" },
          { id: 2, name: "2л", quantity: "2000 мл", price: "₽949" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Игорь П.",
            date: "8 марта 2025",
            rating: 4.7,
            title: "Идеально для спорта",
            content: "Запах пота исчез, форма одежды сохранена!",
          },
        ],
      },
    },
  
    // Real Plus - Стиральные порошки
    {
      title: "Real Plus Стиральный порошок",
      description: "Специальный стиральный порошок для сохранения цвета и структуры ткани.",
      image: "/images/RealPlus_Detergent.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Стиральные порошки",
      features: [
        "Защита цвета тканей",
        "Эффективен при любых температурах",
        "Подходит для всех типов стиральных машин",
      ],
      details: {
        id: 4,
        name: "Real Plus",
        subtitle: "Стиральный порошок для яркости цветов",
        fullTitle: "Real Plus - Стиральный порошок для яркости цветов 1кг",
        description: "Специальный стиральный порошок для сохранения цвета и структуры ткани.",
        longDescription:
          "Этот порошок разработан для сохранения яркости цветов и защиты ткани от износа. Подходит для всех типов стиральных машин и температур.",
        image: "/images/RealPlus_Detergent.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Стиральные порошки",
        features: [
          "Защита цвета тканей",
          "Эффективен при любых температурах",
          "Подходит для всех типов стиральных машин",
        ],
        directions: [
          "Используйте 80 г на 4 кг белья.",
          "Храните в сухом месте.",
        ],
        rating: 4.5,
        reviews: 130,
        badge: "Эко-продукт",
        sizes: [
          { id: 1, name: "500г", quantity: "500 грамм", price: "₽349" },
          { id: 2, name: "1кг", quantity: "1000 грамм", price: "₽599" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Анна К.",
            date: "8 марта 2025",
            rating: 4.5,
            title: "Цвета как новые",
            content: "Одежда выглядит ярко даже после многих стирок!",
          },
        ],
      },
    },
    {
      title: "Real Plus Порошок для белого",
      description: "Порошок для ослепительной белизны белья.",
      image: "/images/RealPlus_Detergent_White.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Стиральные порошки",
      features: [
        "Отбеливающий эффект",
        "Удаление серости",
        "Защита ткани",
      ],
      details: {
        id: 5,
        name: "Real Plus",
        subtitle: "Порошок для белого белья",
        fullTitle: "Real Plus - Порошок для белого белья 1кг",
        description: "Порошок для ослепительной белизны белья.",
        longDescription:
          "Формула с отбеливающими компонентами возвращает белизну и удаляет серый налет с белых тканей.",
        image: "/images/RealPlus_Detergent_White.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Стиральные порошки",
        features: [
          "Отбеливающий эффект",
          "Удаление серости",
          "Защита ткани",
        ],
        directions: [
          "Используйте 100 г на 5 кг белья.",
          "Храните в сухом месте.",
        ],
        rating: 4.6,
        reviews: 110,
        badge: "Для белизны",
        sizes: [
          { id: 1, name: "1кг", quantity: "1000 грамм", price: "₽649" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Мария Л.",
            date: "6 марта 2025",
            rating: 4.7,
            title: "Белоснежное белье",
            content: "Белое стало как новое!",
          },
        ],
      },
    },
    {
      title: "Real Plus Порошок универсальный",
      description: "Универсальный порошок для всех типов белья.",
      image: "/images/RealPlus_Detergent_Universal.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Стиральные порошки",
      features: [
        "Эффективная очистка",
        "Универсальное применение",
        "Экономичная упаковка",
      ],
      details: {
        id: 6,
        name: "Real Plus",
        subtitle: "Универсальный порошок",
        fullTitle: "Real Plus - Универсальный порошок 1кг",
        description: "Универсальный порошок для всех типов белья.",
        longDescription:
          "Подходит для белого и цветного белья, обеспечивая глубокую очистку и защиту тканей.",
        image: "/images/RealPlus_Detergent_Universal.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Стиральные порошки",
        features: [
          "Эффективная очистка",
          "Универсальное применение",
          "Экономичная упаковка",
        ],
        directions: [
          "Используйте 80 г на 4 кг белья.",
          "Храните в сухом месте.",
        ],
        rating: 4.5,
        reviews: 100,
        badge: "Универсальный",
        sizes: [
          { id: 1, name: "1кг", quantity: "1000 грамм", price: "₽599" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Елена М.",
            date: "5 марта 2025",
            rating: 4.6,
            title: "Хороший универсал",
            content: "Отстирывает все типы тканей отлично!",
          },
        ],
      },
    },
  
    // Real Plus - Освежители воздуха
    {
      title: "Real Plus Освежитель воздуха",
      description: "Долговременная свежесть и приятный аромат в вашем доме.",
      image: "/images/RealPlus_AirFreshener.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Освежители воздуха",
      features: [
        "Нейтрализует неприятные запахи",
        "Долговременный эффект",
        "Разнообразие ароматов",
      ],
      details: {
        id: 7,
        name: "Real Plus",
        subtitle: "Освежитель воздуха с ароматом цитруса",
        fullTitle: "Real Plus - Освежитель воздуха с ароматом цитруса 300мл",
        description: "Долговременная свежесть и приятный аромат в вашем доме.",
        longDescription:
          "Освежитель воздуха Real Plus наполняет помещение ярким ароматом цитруса, нейтрализуя неприятные запахи и создавая атмосферу уюта.",
        image: "/images/RealPlus_AirFreshener.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Освежители воздуха",
        features: [
          "Нейтрализует неприятные запахи",
          "Долговременный эффект",
          "Разнообразие ароматов",
        ],
        directions: [
          "Распыляйте в воздух, избегая попадания на ткани.",
          "Храните вдали от огня.",
        ],
        rating: 4.8,
        reviews: 200,
        badge: "Бестселлер",
        sizes: [
          { id: 1, name: "300мл", quantity: "300 мл", price: "₽299" },
          { id: 2, name: "500мл", quantity: "500 мл", price: "₽449" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Мария Л.",
            date: "15 марта 2025",
            rating: 5,
            title: "Свежо и приятно",
            content: "Аромат держится долго, дом пахнет чистотой!",
          },
        ],
      },
    },
    {
      title: "Real Plus Освежитель с ароматом океана",
      description: "Свежий морской аромат для вашего дома.",
      image: "/images/RealPlus_AirFreshener_Ocean.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Освежители воздуха",
      features: [
        "Морская свежесть",
        "Долговременный эффект",
        "Нейтрализация запахов",
      ],
      details: {
        id: 8,
        name: "Real Plus",
        subtitle: "Освежитель с ароматом океана",
        fullTitle: "Real Plus - Освежитель с ароматом океана 300мл",
        description: "Свежий морской аромат для вашего дома.",
        longDescription:
          "Приносит в дом ощущение морской свежести, эффективно устраняя неприятные запахи.",
        image: "/images/RealPlus_AirFreshener_Ocean.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Освежители воздуха",
        features: [
          "Морская свежесть",
          "Долговременный эффект",
          "Нейтрализация запахов",
        ],
        directions: [
          "Распыляйте в воздух.",
          "Храните вдали от огня.",
        ],
        rating: 4.7,
        reviews: 150,
        badge: "Новинка",
        sizes: [
          { id: 1, name: "300мл", quantity: "300 мл", price: "₽299" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Татьяна Р.",
            date: "14 марта 2025",
            rating: 4.8,
            title: "Морская свежесть",
            content: "Ощущение моря в квартире!",
          },
        ],
      },
    },
    {
      title: "Real Plus Освежитель с ароматом леса",
      description: "Природный аромат леса для уюта.",
      image: "/images/RealPlus_AirFreshener_Forest.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Освежители воздуха",
      features: [
        "Естественный аромат",
        "Освежает воздух",
        "Долговременное действие",
      ],
      details: {
        id: 9,
        name: "Real Plus",
        subtitle: "Освежитель с ароматом леса",
        fullTitle: "Real Plus - Освежитель с ароматом леса 300мл",
        description: "Природный аромат леса для уюта.",
        longDescription:
          "Создает атмосферу лесной прогулки, нейтрализуя запахи и освежая воздух.",
        image: "/images/RealPlus_AirFreshener_Forest.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Освежители воздуха",
        features: [
          "Естественный аромат",
          "Освежает воздух",
          "Долговременное действие",
        ],
        directions: [
          "Распыляйте в воздух.",
          "Храните вдали от огня.",
        ],
        rating: 4.6,
        reviews: 140,
        badge: "Эко-продукт",
        sizes: [
          { id: 1, name: "300мл", quantity: "300 мл", price: "₽299" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Светлана В.",
            date: "13 марта 2025",
            rating: 4.7,
            title: "Лесной уют",
            content: "Приятный натуральный запах!",
          },
        ],
      },
    },
  
    // Real Plus - Жидкое мыло
    {
      title: "Real Plus Жидкое мыло",
      description: "Увлажняющее жидкое мыло с мягким очищающим эффектом.",
      image: "/images/RealPlus_Soap.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Жидкое мыло",
      features: [
        "Гипоаллергенный состав",
        "Не сушит кожу",
        "Приятный аромат",
      ],
      details: {
        id: 10,
        name: "Real Plus",
        subtitle: "Увлажняющее жидкое мыло",
        fullTitle: "Real Plus - Увлажняющее жидкое мыло 500мл",
        description: "Увлажняющее жидкое мыло с мягким очищающим эффектом.",
        longDescription:
          "Real Plus Жидкое мыло бережно очищает кожу, сохраняя её увлажненной благодаря натуральным компонентам.",
        image: "/images/RealPlus_Soap.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Жидкое мыло",
        features: [
          "Гипоаллергенный состав",
          "Не сушит кожу",
          "Приятный аромат",
        ],
        directions: [
          "Нанесите на влажные руки, вспеньте, смойте.",
          "Храните в прохладном месте.",
        ],
        rating: 4.7,
        reviews: 175,
        badge: "Эко-продукт",
        sizes: [
          { id: 1, name: "300мл", quantity: "300 мл", price: "₽199" },
          { id: 2, name: "500мл", quantity: "500 мл", price: "₽299" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Татьяна Р.",
            date: "10 марта 2025",
            rating: 4.8,
            title: "Мягкое и приятное",
            content: "Кожа после мытья не пересыхает, запах нежный.",
          },
        ],
      },
    },
    {
      title: "Real Plus Мыло с алоэ вера",
      description: "Жидкое мыло с экстрактом алоэ для увлажнения.",
      image: "/images/RealPlus_Soap_Aloe.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Жидкое мыло",
      features: [
        "Увлажнение кожи",
        "Мягкая пена",
        "Натуральные компоненты",
      ],
      details: {
        id: 11,
        name: "Real Plus",
        subtitle: "Мыло с алоэ вера",
        fullTitle: "Real Plus - Мыло с алоэ вера 500мл",
        description: "Жидкое мыло с экстрактом алоэ для увлажнения.",
        longDescription:
          "С экстрактом алоэ вера, это мыло увлажняет и успокаивает кожу, обеспечивая мягкое очищение.",
        image: "/images/RealPlus_Soap_Aloe.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Жидкое мыло",
        features: [
          "Увлажнение кожи",
          "Мягкая пена",
          "Натуральные компоненты",
        ],
        directions: [
          "Нанесите на влажные руки, вспеньте, смойте.",
          "Храните в прохладном месте.",
        ],
        rating: 4.8,
        reviews: 160,
        badge: "Натуральный",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽299" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Екатерина Д.",
            date: "9 марта 2025",
            rating: 4.9,
            title: "Увлажняет кожу",
            content: "Очень мягкое, кожа гладкая!",
          },
        ],
      },
    },
    {
      title: "Real Plus Антибактериальное мыло",
      description: "Жидкое мыло с антибактериальным эффектом.",
      image: "/images/RealPlus_Soap_AntiBacterial.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Жидкое мыло",
      features: [
        "Антибактериальная защита",
        "Мягкое очищение",
        "Приятный аромат",
      ],
      details: {
        id: 12,
        name: "Real Plus",
        subtitle: "Антибактериальное мыло",
        fullTitle: "Real Plus - Антибактериальное мыло 500мл",
        description: "Жидкое мыло с антибактериальным эффектом.",
        longDescription:
          "Обеспечивает антибактериальную защиту, мягко очищает и оставляет приятный аромат на коже.",
        image: "/images/RealPlus_Soap_AntiBacterial.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Жидкое мыло",
        features: [
          "Антибактериальная защита",
          "Мягкое очищение",
          "Приятный аромат",
        ],
        directions: [
          "Нанесите на влажные руки, вспеньте, смойте.",
          "Храните в прохладном месте.",
        ],
        rating: 4.7,
        reviews: 145,
        badge: "Защита",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽349" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Наталья П.",
            date: "8 марта 2025",
            rating: 4.8,
            title: "Чистота и защита",
            content: "Хорошо очищает и защищает руки!",
          },
        ],
      },
    },
  
    // Real Plus - Универсальный гель для стирки
    {
      title: "Real Plus Универсальный гель для стирки",
      description: "Эффективный гель для стирки, придающий белью свежесть и мягкость.",
      image: "/images/RealPlus_Gel.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Универсальный гель для стирки",
      features: [
        "Глубокая очистка тканей",
        "Экономичный расход",
        "Подходит для всех типов тканей",
      ],
      details: {
        id: 13,
        name: "Real Plus",
        subtitle: "Универсальный гель для стирки",
        fullTitle: "Real Plus - Универсальный гель для стирки 1л",
        description: "Эффективный гель для стирки, придающий белью свежесть и мягкость.",
        longDescription:
          "Real Plus Гель для стирки подходит для всех типов тканей, обеспечивая глубокую очистку и долговременную свежесть.",
        image: "/images/RealPlus_Gel.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Универсальный гель для стирки",
        features: [
          "Глубокая очистка тканей",
          "Экономичный расход",
          "Подходит для всех типов тканей",
        ],
        directions: [
          "Добавьте 40 мл на 4 кг белья.",
          "Храните в прохладном месте.",
        ],
        rating: 4.6,
        reviews: 160,
        badge: "Рекомендовано",
        sizes: [
          { id: 1, name: "1л", quantity: "1000 мл", price: "₽499" },
          { id: 2, name: "2л", quantity: "2000 мл", price: "₽899" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Светлана В.",
            date: "7 марта 2025",
            rating: 4.7,
            title: "Отличный гель",
            content: "Экономичный и хорошо отстирывает!",
          },
        ],
      },
    },
    {
      title: "Real Plus Гель для цветного белья",
      description: "Гель для сохранения яркости цветных тканей.",
      image: "/images/RealPlus_Gel_Color.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Универсальный гель для стирки",
      features: [
        "Защита цвета",
        "Эффективная очистка",
        "Мягкость тканей",
      ],
      details: {
        id: 14,
        name: "Real Plus",
        subtitle: "Гель для цветного белья",
        fullTitle: "Real Plus - Гель для цветного белья 1л",
        description: "Гель для сохранения яркости цветных тканей.",
        longDescription:
          "Специальная формула защищает цвета от выцветания, обеспечивая чистоту и мягкость.",
        image: "/images/RealPlus_Gel_Color.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Универсальный гель для стирки",
        features: [
          "Защита цвета",
          "Эффективная очистка",
          "Мягкость тканей",
        ],
        directions: [
          "Добавьте 40 мл на 4 кг белья.",
          "Храните в прохладном месте.",
        ],
        rating: 4.7,
        reviews: 135,
        badge: "Для яркости",
        sizes: [
          { id: 1, name: "1л", quantity: "1000 мл", price: "₽499" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Ирина Т.",
            date: "6 марта 2025",
            rating: 4.8,
            title: "Яркие цвета",
            content: "Цвета остались как новые после стирки!",
          },
        ],
      },
    },
    {
      title: "Real Plus Гель для белого белья",
      description: "Гель для ослепительной белизны белья.",
      image: "/images/RealPlus_Gel_White.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Универсальный гель для стирки",
      features: [
        "Отбеливающий эффект",
        "Удаление пятен",
        "Свежесть белья",
      ],
      details: {
        id: 15,
        name: "Real Plus",
        subtitle: "Гель для белого белья",
        fullTitle: "Real Plus - Гель для белого белья 1л",
        description: "Гель для ослепительной белизны белья.",
        longDescription:
          "Эффективно удаляет пятна и возвращает белизну тканям, сохраняя их свежесть.",
        image: "/images/RealPlus_Gel_White.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Универсальный гель для стирки",
        features: [
          "Отбеливающий эффект",
          "Удаление пятен",
          "Свежесть белья",
        ],
        directions: [
          "Добавьте 40 мл на 4 кг белья.",
          "Храните в прохладном месте.",
        ],
        rating: 4.6,
        reviews: 125,
        badge: "Для белизны",
        sizes: [
          { id: 1, name: "1л", quantity: "1000 мл", price: "₽499" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Ольга С.",
            date: "5 марта 2025",
            rating: 4.7,
            title: "Белое сияет",
            content: "Белое белье стало ярче!",
          },
        ],
      },
    },
  
    // Vim - Универсальные чистящие средства
    {
      title: "Vim Универсальное чистящее средство",
      description: "Эффективное средство для борьбы с загрязнениями на любых поверхностях.",
      image: "/images/Vim_Cleaner.png",
      color: "#03a31e",
      brandName: "Vim",
      category: "Универсальные чистящие средства",
      features: [
        "Быстрое удаление грязи",
        "Безопасный состав",
        "Не оставляет разводов",
      ],
      details: {
        id: 16,
        name: "Vim",
        subtitle: "Универсальное чистящее средство",
        fullTitle: "Vim - Универсальное чистящее средство 500мл",
        description: "Эффективное средство для борьбы с загрязнениями на любых поверхностях.",
        longDescription:
          "Vim Универсальное чистящее средство справляется с жиром, грязью и пятнами на кухне, в ванной и других поверхностях.",
        image: "/images/Vim_Cleaner.png",
        color: "#03a31e",
        brandName: "Vim",
        category: "Универсальные чистящие средства",
        features: [
          "Быстрое удаление грязи",
          "Безопасный состав",
          "Не оставляет разводов",
        ],
        directions: [
          "Нанесите на поверхность, протрите губкой, смойте.",
          "Храните вдали от детей.",
        ],
        rating: 4.8,
        reviews: 210,
        badge: "Бестселлер",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽349" },
          { id: 2, name: "1л", quantity: "1000 мл", price: "₽599" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Дмитрий К.",
            date: "14 марта 2025",
            rating: 5,
            title: "Чистота без усилий",
            content: "Жир на плите исчез моментально!",
          },
        ],
      },
    },
    {
      title: "Vim Средство для кухни",
      description: "Специальное средство для кухонных поверхностей.",
      image: "/images/Vim_Cleaner_Kitchen.png",
      color: "#03a31e",
      brandName: "Vim",
      category: "Универсальные чистящие средства",
      features: [
        "Удаление жира",
        "Блеск поверхностей",
        "Приятный аромат",
      ],
      details: {
        id: 17,
        name: "Vim",
        subtitle: "Средство для кухни",
        fullTitle: "Vim - Средство для кухни 500мл",
        description: "Специальное средство для кухонных поверхностей.",
        longDescription:
          "Эффективно удаляет жир и загрязнения с кухонных поверхностей, оставляя блеск и свежий аромат.",
        image: "/images/Vim_Cleaner_Kitchen.png",
        color: "#03a31e",
        brandName: "Vim",
        category: "Универсальные чистящие средства",
        features: [
          "Удаление жира",
          "Блеск поверхностей",
          "Приятный аромат",
        ],
        directions: [
          "Нанесите на поверхность, протрите, смойте.",
          "Храните вдали от детей.",
        ],
        rating: 4.7,
        reviews: 180,
        badge: "Для кухни",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽349" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Елена М.",
            date: "13 марта 2025",
            rating: 4.8,
            title: "Чистая кухня",
            content: "Плита блестит, запах приятный!",
          },
        ],
      },
    },
    {
      title: "Vim Средство для ванной",
      description: "Средство для удаления известкового налета.",
      image: "/images/Vim_Cleaner_Bathroom.png",
      color: "#03a31e",
      brandName: "Vim",
      category: "Универсальные чистящие средства",
      features: [
        "Удаление налета",
        "Блеск сантехники",
        "Антибактериальный эффект",
      ],
      details: {
        id: 18,
        name: "Vim",
        subtitle: "Средство для ванной",
        fullTitle: "Vim - Средство для ванной 500мл",
        description: "Средство для удаления известкового налета.",
        longDescription:
          "Удаляет известковый налет и загрязнения в ванной, оставляя сантехнику блестящей.",
        image: "/images/Vim_Cleaner_Bathroom.png",
        color: "#03a31e",
        brandName: "Vim",
        category: "Универсальные чистящие средства",
        features: [
          "Удаление налета",
          "Блеск сантехники",
          "Антибактериальный эффект",
        ],
        directions: [
          "Нанесите на поверхность, протрите, смойте.",
          "Храните вдали от детей.",
        ],
        rating: 4.8,
        reviews: 170,
        badge: "Для ванной",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽349" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Наталья П.",
            date: "12 марта 2025",
            rating: 4.9,
            title: "Сияющая ванна",
            content: "Налет исчез, сантехника блестит!",
          },
        ],
      },
    },
  
    // Vim - Бытовые чистящие спреи
    {
      title: "Vim Бытовой чистящий спрей",
      description: "Спрей для моментального очищения поверхностей от загрязнений.",
      image: "/images/Vim_Spray.png",
      color: "#03a31e",
      brandName: "Vim",
      category: "Бытовые чистящие спреи",
      features: [
        "Подходит для кухни и ванной",
        "Антибактериальный эффект",
        "Быстрое испарение без следов",
      ],
      details: {
        id: 19,
        name: "Vim",
        subtitle: "Бытовой чистящий спрей",
        fullTitle: "Vim - Бытовой чистящий спрей 400мл",
        description: "Спрей для моментального очищения поверхностей от загрязнений.",
        longDescription:
          "Vim Спрей быстро удаляет грязь и бактерии, оставляя поверхности чистыми и блестящими.",
        image: "/images/Vim_Spray.png",
        color: "#03a31e",
        brandName: "Vim",
        category: "Бытовые чистящие спреи",
        features: [
          "Подходит для кухни и ванной",
          "Антибактериальный эффект",
          "Быстрое испарение без следов",
        ],
        directions: [
          "Распылите на поверхность, протрите тряпкой.",
          "Храните в прохладном месте.",
        ],
        rating: 4.7,
        reviews: 185,
        badge: "Популярный выбор",
        sizes: [
          { id: 1, name: "400мл", quantity: "400 мл", price: "₽399" },
          { id: 2, name: "750мл", quantity: "750 мл", price: "₽649" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Алексей Н.",
            date: "13 марта 2025",
            rating: 4.8,
            title: "Удобно и эффективно",
            content: "Спрей отлично справляется с пятнами на столе!",
          },
        ],
      },
    },
    {
      title: "Vim Спрей для стекол",
      description: "Спрей для чистки стекол без разводов.",
      image: "/images/Vim_Spray_Glass.png",
      color: "#03a31e",
      brandName: "Vim",
      category: "Бытовые чистящие спреи",
      features: [
        "Чистота без разводов",
        "Быстрое действие",
        "Приятный аромат",
      ],
      details: {
        id: 20,
        name: "Vim",
        subtitle: "Спрей для стекол",
        fullTitle: "Vim - Спрей для стекол 400мл",
        description: "Спрей для чистки стекол без разводов.",
        longDescription:
          "Обеспечивает идеальную чистоту стекол и зеркал, быстро испаряется без следов.",
        image: "/images/Vim_Spray_Glass.png",
        color: "#03a31e",
        brandName: "Vim",
        category: "Бытовые чистящие спреи",
        features: [
          "Чистота без разводов",
          "Быстрое действие",
          "Приятный аромат",
        ],
        directions: [
          "Распылите на стекло, протрите тряпкой.",
          "Храните в прохладном месте.",
        ],
        rating: 4.8,
        reviews: 165,
        badge: "Для стекол",
        sizes: [
          { id: 1, name: "400мл", quantity: "400 мл", price: "₽399" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Юлия М.",
            date: "12 марта 2025",
            rating: 4.9,
            title: "Сияющие стекла",
            content: "Нет разводов, стекла блестят!",
          },
        ],
      },
    },
    {
      title: "Vim Спрей анти-жир",
      description: "Спрей для удаления жира с кухонных поверхностей.",
      image: "/images/Vim_Spray_AntiGrease.png",
      color: "#03a31e",
      brandName: "Vim",
      category: "Бытовые чистящие спреи",
      features: [
        "Мощное удаление жира",
        "Блеск поверхностей",
        "Экономичный расход",
      ],
      details: {
        id: 21,
        name: "Vim",
        subtitle: "Спрей анти-жир",
        fullTitle: "Vim - Спрей анти-жир 400мл",
        description: "Спрей для удаления жира с кухонных поверхностей.",
        longDescription:
          "Мгновенно удаляет жир и пригоревшие пятна, оставляя кухонные поверхности чистыми.",
        image: "/images/Vim_Spray_AntiGrease.png",
        color: "#03a31e",
        brandName: "Vim",
        category: "Бытовые чистящие спреи",
        features: [
          "Мощное удаление жира",
          "Блеск поверхностей",
          "Экономичный расход",
        ],
        directions: [
          "Распылите на поверхность, протрите тряпкой.",
          "Храните в прохладном месте.",
        ],
        rating: 4.7,
        reviews: 155,
        badge: "Анти-жир",
        sizes: [
          { id: 1, name: "400мл", quantity: "400 мл", price: "₽399" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Павел С.",
            date: "11 марта 2025",
            rating: 4.8,
            title: "Жир исчезает",
            content: "Отлично убирает жир с плиты!",
          },
        ],
      },
    },
  
    // Yumşa Plus - Универсальные жидкие моющие средства с кондиционером
    {
      title: "Yumşa Plus Универсальное жидкое моющее средство с кондиционером",
      description: "Мягкое моющее средство с кондиционером для деликатных тканей.",
      image: "/images/Yumsa_Liquid.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: "Универсальные жидкие моющие средства с кондиционером",
      features: [
        "Мягкий эффект на ткани",
        "Сохранение формы одежды",
        "Освежающий аромат",
      ],
      details: {
        id: 22,
        name: "Yumşa Plus",
        subtitle: "Жидкое моющее средство с кондиционером",
        fullTitle: "Yumşa Plus - Универсальное жидкое моющее средство с кондиционером 1л",
        description: "Мягкое моющее средство с кондиционером для деликатных тканей.",
        longDescription:
          "Yumşa Plus обеспечивает мягкий уход за тканями, сохраняя их форму и добавляя приятный аромат.",
        image: "/images/Yumsa_Liquid.png",
        color: "#1138b7",
        brandName: "Yumşa Plus",
        category: "Универсальные жидкие моющие средства с кондиционером",
        features: [
          "Мягкий эффект на ткани",
          "Сохранение формы одежды",
          "Освежающий аромат",
        ],
        directions: [
          "Добавьте 50 мл на 5 кг белья.",
          "Храните в прохладном месте.",
        ],
        rating: 4.6,
        reviews: 150,
        badge: "Эко-продукт",
        sizes: [
          { id: 1, name: "1л", quantity: "1000 мл", price: "₽499" },
          { id: 2, name: "2л", quantity: "2000 мл", price: "₽899" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Наталья П.",
            date: "9 марта 2025",
            rating: 4.7,
            title: "Деликатный уход",
            content: "Одежда мягкая и пахнет свежестью!",
          },
        ],
      },
    },
    {
      title: "Yumşa Plus Жидкость с ароматом розы",
      description: "Жидкое средство с кондиционером и ароматом розы.",
      image: "/images/Yumsa_Liquid_Rose.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: "Универсальные жидкие моющие средства с кондиционером",
      features: [
        "Цветочный аромат",
        "Мягкость тканей",
        "Эффективная очистка",
      ],
      details: {
        id: 23,
        name: "Yumşa Plus",
        subtitle: "Жидкость с ароматом розы",
        fullTitle: "Yumşa Plus - Жидкость с ароматом розы 1л",
        description: "Жидкое средство с кондиционером и ароматом розы.",
        longDescription:
          "Придает тканям мягкость и нежный цветочный аромат розы, эффективно очищая.",
        image: "/images/Yumsa_Liquid_Rose.png",
        color: "#1138b7",
        brandName: "Yumşa Plus",
        category: "Универсальные жидкие моющие средства с кондиционером",
        features: [
          "Цветочный аромат",
          "Мягкость тканей",
          "Эффективная очистка",
        ],
        directions: [
          "Добавьте 50 мл на 5 кг белья.",
          "Храните в прохладном месте.",
        ],
        rating: 4.7,
        reviews: 140,
        badge: "Ароматный",
        sizes: [
          { id: 1, name: "1л", quantity: "1000 мл", price: "₽499" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Екатерина Д.",
            date: "8 марта 2025",
            rating: 4.8,
            title: "Нежный аромат",
            content: "Роза пахнет великолепно, ткани мягкие!",
          },
        ],
      },
    },
    {
      title: "Yumşa Plus Жидкость для шерсти",
      description: "Средство для стирки шерстяных изделий.",
      image: "/images/Yumsa_Liquid_Wool.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: "Универсальные жидкие моющие средства с кондиционером",
      features: [
        "Бережный уход",
        "Сохранение структуры",
        "Мягкость",
      ],
      details: {
        id: 24,
        name: "Yumşa Plus",
        subtitle: "Жидкость для шерсти",
        fullTitle: "Yumşa Plus - Жидкость для шерсти 1л",
        description: "Средство для стирки шерстяных изделий.",
        longDescription:
          "Специально для шерсти и деликатных тканей, сохраняет структуру и мягкость.",
        image: "/images/Yumsa_Liquid_Wool.png",
        color: "#1138b7",
        brandName: "Yumşa Plus",
        category: "Универсальные жидкие моющие средства с кондиционером",
        features: [
          "Бережный уход",
          "Сохранение структуры",
          "Мягкость",
        ],
        directions: [
          "Добавьте 40 мл на 4 кг белья.",
          "Храните в прохладном месте.",
        ],
        rating: 4.8,
        reviews: 130,
        badge: "Для шерсти",
        sizes: [
          { id: 1, name: "1л", quantity: "1000 мл", price: "₽549" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Ирина Т.",
            date: "7 марта 2025",
            rating: 4.9,
            title: "Шерсть как новая",
            content: "Свитера мягкие и не растянулись!",
          },
        ],
      },
    },
  
    // Yumşa Plus - Спреи-освежители для тканей
    {
      title: "Yumşa Plus Спрей-освежитель для тканей",
      description: "Освежает и удаляет запахи с одежды и текстиля.",
      image: "/images/Yumsa_FabricSpray.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: "Спреи-освежители для тканей",
      features: [
        "Быстрое действие",
        "Не оставляет следов",
        "Гипоаллергенный состав",
      ],
      details: {
        id: 25,
        name: "Yumşa Plus",
        subtitle: "Спрей-освежитель для тканей",
        fullTitle: "Yumşa Plus - Спрей-освежитель для тканей 300мл",
        description: "Освежает и удаляет запахи с одежды и текстиля.",
        longDescription:
          "Yumşa Plus Спрей мгновенно освежает ткани, удаляя неприятные запахи и добавляя легкий аромат.",
        image: "/images/Yumsa_FabricSpray.png",
        color: "#1138b7",
        brandName: "Yumşa Plus",
        category: "Спреи-освежители для тканей",
        features: [
          "Быстрое действие",
          "Не оставляет следов",
          "Гипоаллергенный состав",
        ],
        directions: [
          "Распылите с расстояния 20 см.",
          "Храните вдали от огня.",
        ],
        rating: 4.8,
        reviews: 190,
        badge: "Бестселлер",
        sizes: [
          { id: 1, name: "300мл", quantity: "300 мл", price: "₽349" },
          { id: 2, name: "500мл", quantity: "500 мл", price: "₽549" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Екатерина Д.",
            date: "11 марта 2025",
            rating: 5,
            title: "Свежесть моментально",
            content: "Спасает одежду от запаха после ресторана!",
          },
        ],
      },
    },
    {
      title: "Yumşa Plus Спрей с ароматом лаванды",
      description: "Освежитель для тканей с ароматом лаванды.",
      image: "/images/Yumsa_FabricSpray_Lavender.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: "Спреи-освежители для тканей",
      features: [
        "Успокаивающий аромат",
        "Удаление запахов",
        "Долговременный эффект",
      ],
      details: {
        id: 26,
        name: "Yumşa Plus",
        subtitle: "Спрей с ароматом лаванды",
        fullTitle: "Yumşa Plus - Спрей с ароматом лаванды 300мл",
        description: "Освежитель для тканей с ароматом лаванды.",
        longDescription:
          "Придает тканям успокаивающий аромат лаванды, эффективно устраняя запахи.",
        image: "/images/Yumsa_FabricSpray_Lavender.png",
        color: "#1138b7",
        brandName: "Yumşa Plus",
        category: "Спреи-освежители для тканей",
        features: [
          "Успокаивающий аромат",
          "Удаление запахов",
          "Долговременный эффект",
        ],
        directions: [
          "Распылите с расстояния 20 см.",
          "Храните вдали от огня.",
        ],
        rating: 4.7,
        reviews: 175,
        badge: "Ароматный",
        sizes: [
          { id: 1, name: "300мл", quantity: "300 мл", price: "₽349" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Татьяна Р.",
            date: "10 марта 2025",
            rating: 4.8,
            title: "Лаванда супер",
            content: "Запах успокаивает, ткани свежие!",
          },
        ],
      },
    },
    {
      title: "Yumşa Plus Спрей антибактериальный",
      description: "Антибактериальный спрей для тканей.",
      image: "/images/Yumsa_FabricSpray_AntiBacterial.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: "Спреи-освежители для тканей",
      features: [
        "Антибактериальная защита",
        "Освежение тканей",
        "Безопасный состав",
      ],
      details: {
        id: 27,
        name: "Yumşa Plus",
        subtitle: "Спрей антибактериальный",
        fullTitle: "Yumşa Plus - Спрей антибактериальный 300мл",
        description: "Антибактериальный спрей для тканей.",
        longDescription:
          "Обеспечивает антибактериальную защиту тканей, удаляя запахи и бактерии.",
        image: "/images/Yumsa_FabricSpray_AntiBacterial.png",
        color: "#1138b7",
        brandName: "Yumşa Plus",
        category: "Спреи-освежители для тканей",
        features: [
          "Антибактериальная защита",
          "Освежение тканей",
          "Безопасный состав",
        ],
        directions: [
          "Распылите с расстояния 20 см.",
          "Храните вдали от огня.",
        ],
        rating: 4.8,
        reviews: 160,
        badge: "Защита",
        sizes: [
          { id: 1, name: "300мл", quantity: "300 мл", price: "₽399" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Светлана В.",
            date: "9 марта 2025",
            rating: 4.9,
            title: "Чистота и защита",
            content: "Отлично для дивана и штор!",
          },
        ],
      },
    },
  
    // Yumşa Plus - Кондиционеры для белья
    {
      title: "Yumşa Plus Кондиционер для белья",
      description: "Придает белью мягкость и приятный аромат.",
      image: "/images/Yumsa_Softener.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: "Кондиционеры для белья",
      features: [
        "Антистатический эффект",
        "Долговременная свежесть",
        "Экономичный расход",
      ],
      details: {
        id: 28,
        name: "Yumşa Plus",
        subtitle: "Кондиционер для белья",
        fullTitle: "Yumşa Plus - Кондиционер для белья 1л",
        description: "Придает белью мягкость и приятный аромат.",
        longDescription:
          "Yumşa Plus Кондиционер делает белье мягким, облегчает глажку и оставляет долговременный аромат.",
        image: "/images/Yumsa_Softener.png",
        color: "#1138b7",
        brandName: "Yumşa Plus",
        category: "Кондиционеры для белья",
        features: [
          "Антистатический эффект",
          "Долговременная свежесть",
          "Экономичный расход",
        ],
        directions: [
          "Добавьте 30 мл в отсек для кондиционера.",
          "Храните в прохладном месте.",
        ],
        rating: 4.7,
        reviews: 170,
        badge: "Рекомендовано",
        sizes: [
          { id: 1, name: "1л", quantity: "1000 мл", price: "₽399" },
          { id: 2, name: "2л", quantity: "2000 мл", price: "₽699" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Ирина Т.",
            date: "6 марта 2025",
            rating: 4.8,
            title: "Мягкое белье",
            content: "Белье стало мягким, а запах держится долго!",
          },
        ],
      },
    },
    {
      title: "Yumşa Plus Кондиционер с ароматом орхидеи",
      description: "Кондиционер с цветочным ароматом орхидеи.",
      image: "/images/Yumsa_Softener_Orchid.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: "Кондиционеры для белья",
      features: [
        "Цветочный аромат",
        "Мягкость тканей",
        "Антистатический эффект",
      ],
      details: {
        id: 29,
        name: "Yumşa Plus",
        subtitle: "Кондиционер с ароматом орхидеи",
        fullTitle: "Yumşa Plus - Кондиционер с ароматом орхидеи 1л",
        description: "Кондиционер с цветочным ароматом орхидеи.",
        longDescription:
          "Придает белью мягкость и изысканный аромат орхидеи, облегчает глажку.",
        image: "/images/Yumsa_Softener_Orchid.png",
        color: "#1138b7",
        brandName: "Yumşa Plus",
        category: "Кондиционеры для белья",
        features: [
          "Цветочный аромат",
          "Мягкость тканей",
          "Антистатический эффект",
        ],
        directions: [
          "Добавьте 30 мл в отсек для кондиционера.",
          "Храните в прохладном месте.",
        ],
        rating: 4.8,
        reviews: 155,
        badge: "Ароматный",
        sizes: [
          { id: 1, name: "1л", quantity: "1000 мл", price: "₽399" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Ольга С.",
            date: "5 марта 2025",
            rating: 4.9,
            title: "Изысканный запах",
            content: "Орхидея пахнет роскошно!",
          },
        ],
      },
    },
    {
      title: "Yumşa Plus Кондиционер для детского белья",
      description: "Гипоаллергенный кондиционер для детской одежды.",
      image: "/images/Yumsa_Softener_Baby.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: "Кондиционеры для белья",
      features: [
        "Безопасен для кожи",
        "Мягкий уход",
        "Нейтральный аромат",
      ],
      details: {
        id: 30,
        name: "Yumşa Plus",
        subtitle: "Кондиционер для детского белья",
        fullTitle: "Yumşa Plus - Кондиционер для детского белья 1л",
        description: "Гипоаллергенный кондиционер для детской одежды.",
        longDescription:
          "Безопасен для чувствительной кожи, делает детское белье мягким и комфортным.",
        image: "/images/Yumsa_Softener_Baby.png",
        color: "#1138b7",
        brandName: "Yumşa Plus",
        category: "Кондиционеры для белья",
        features: [
          "Безопасен для кожи",
          "Мягкий уход",
          "Нейтральный аромат",
        ],
        directions: [
          "Добавьте 30 мл в отсек для кондиционера.",
          "Храните в прохладном месте.",
        ],
        rating: 4.9,
        reviews: 145,
        badge: "Для детей",
        sizes: [
          { id: 1, name: "1л", quantity: "1000 мл", price: "₽449" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Анна К.",
            date: "4 марта 2025",
            rating: 5,
            title: "Идеально для малышей",
            content: "Мягкое и безопасное для детской кожи!",
          },
        ],
      },
    },
  
    // Awen - Жидкости для мытья посуды
    {
      title: "Awen Жидкость для мытья посуды",
      description: "Эффективное средство для удаления жира и загрязнений.",
      image: "/images/Awen_Dishwashing.png",
      color: "#ff3e1c",
      brandName: "Awen",
      category: "Жидкости для мытья посуды",
      features: [
        "Обильная пена",
        "Мягкое воздействие на кожу рук",
        "Удаление жира даже в холодной воде",
      ],
      details: {
        id: 31,
        name: "Awen",
        subtitle: "Жидкость для мытья посуды",
        fullTitle: "Awen - Жидкость для мытья посуды 500мл",
        description: "Эффективное средство для удаления жира и загрязнений.",
        longDescription:
          "Awen Жидкость для посуды легко справляется с жиром и остатками пищи, оставляя посуду чистой и блестящей.",
        image: "/images/Awen_Dishwashing.png",
        color: "#ff3e1c",
        brandName: "Awen",
        category: "Жидкости для мытья посуды",
        features: [
          "Обильная пена",
          "Мягкое воздействие на кожу рук",
          "Удаление жира даже в холодной воде",
        ],
        directions: [
          "Добавьте 5 мл на 1 л воды.",
          "Храните вдали от детей.",
        ],
        rating: 4.8,
        reviews: 220,
        badge: "Бестселлер",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽299" },
          { id: 2, name: "1л", quantity: "1000 мл", price: "₽499" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Юлия М.",
            date: "12 марта 2025",
            rating: 5,
            title: "Отличное средство",
            content: "Жир исчезает моментально, руки не сушит!",
          },
        ],
      },
    },
    {
      title: "Awen Жидкость с ароматом лимона",
      description: "Средство для посуды с ароматом лимона.",
      image: "/images/Awen_Dishwashing_Lemon.png",
      color: "#ff3e1c",
      brandName: "Awen",
      category: "Жидкости для мытья посуды",
      features: [
        "Свежий аромат",
        "Удаление жира",
        "Мягкость для рук",
      ],
      details: {
        id: 32,
        name: "Awen",
        subtitle: "Жидкость с ароматом лимона",
        fullTitle: "Awen - Жидкость с ароматом лимона 500мл",
        description: "Средство для посуды с ароматом лимона.",
        longDescription:
          "Эффективно удаляет жир, оставляя посуду чистой с приятным лимонным ароматом.",
        image: "/images/Awen_Dishwashing_Lemon.png",
        color: "#ff3e1c",
        brandName: "Awen",
        category: "Жидкости для мытья посуды",
        features: [
          "Свежий аромат",
          "Удаление жира",
          "Мягкость для рук",
        ],
        directions: [
          "Добавьте 5 мл на 1 л воды.",
          "Храните вдали от детей.",
        ],
        rating: 4.7,
        reviews: 200,
        badge: "Ароматный",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽299" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Елена М.",
            date: "11 марта 2025",
            rating: 4.8,
            title: "Лимонный свежак",
            content: "Посуда чистая, аромат бодрит!",
          },
        ],
      },
    },
    {
      title: "Awen Жидкость антибактериальная",
      description: "Антибактериальное средство для мытья посуды.",
      image: "/images/Awen_Dishwashing_AntiBacterial.png",
      color: "#ff3e1c",
      brandName: "Awen",
      category: "Жидкости для мытья посуды",
      features: [
        "Антибактериальный эффект",
        "Эффективная очистка",
        "Приятный аромат",
      ],
      details: {
        id: 33,
        name: "Awen",
        subtitle: "Жидкость антибактериальная",
        fullTitle: "Awen - Жидкость антибактериальная 500мл",
        description: "Антибактериальное средство для мытья посуды.",
        longDescription:
          "Удаляет жир и бактерии, обеспечивая гигиеническую чистоту посуды.",
        image: "/images/Awen_Dishwashing_AntiBacterial.png",
        color: "#ff3e1c",
        brandName: "Awen",
        category: "Жидкости для мытья посуды",
        features: [
          "Антибактериальный эффект",
          "Эффективная очистка",
          "Приятный аромат",
        ],
        directions: [
          "Добавьте 5 мл на 1 л воды.",
          "Храните вдали от детей.",
        ],
        rating: 4.8,
        reviews: 185,
        badge: "Защита",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽349" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Татьяна Р.",
            date: "10 марта 2025",
            rating: 4.9,
            title: "Чисто и безопасно",
            content: "Посуда чистая, бактерии уничтожены!",
          },
        ],
      },
    },
  
    // Glass Plus - Средства для очистки стекол и поверхностей
    {
      title: "Glass Plus Средство для очистки стекол и поверхностей",
      description: "Средство для сияющей чистоты стекол без разводов.",
      image: "/images/GlassPlus_Cleaner.png",
      color: "#e80c00",
      brandName: "Glass Plus",
      category: "Средства для очистки стекол и поверхностей",
      features: [
        "Быстрое испарение",
        "Удаление пыли и грязи",
        "Не оставляет разводов",
      ],
      details: {
        id: 34,
        name: "Glass Plus",
        subtitle: "Средство для очистки стекол",
        fullTitle: "Glass Plus - Средство для очистки стекол и поверхностей 500мл",
        description: "Средство для сияющей чистоты стекол без разводов.",
        longDescription:
          "Glass Plus обеспечивает идеальную чистоту стекол и поверхностей, удаляя пыль и грязь без усилий.",
        image: "/images/GlassPlus_Cleaner.png",
        color: "#e80c00",
        brandName: "Glass Plus",
        category: "Средства для очистки стекол и поверхностей",
        features: [
          "Быстрое испарение",
          "Удаление пыли и грязи",
          "Не оставляет разводов",
        ],
        directions: [
          "Распылите на поверхность, протрите сухой тряпкой.",
          "Храните в прохладном месте.",
        ],
        rating: 4.7,
        reviews: 195,
        badge: "Популярный выбор",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽399" },
          { id: 2, name: "750мл", quantity: "750 мл", price: "₽599" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Павел С.",
            date: "10 марта 2025",
            rating: 4.8,
            title: "Сияющие окна",
            content: "Стекла блестят, никаких разводов!",
          },
        ],
      },
    },
    {
      title: "Glass Plus Средство для зеркал",
      description: "Средство для чистки зеркал без разводов.",
      image: "/images/GlassPlus_Cleaner_Mirror.png",
      color: "#e80c00",
      brandName: "Glass Plus",
      category: "Средства для очистки стекол и поверхностей",
      features: [
        "Идеальная чистота",
        "Быстрое испарение",
        "Удаление пятен",
      ],
      details: {
        id: 35,
        name: "Glass Plus",
        subtitle: "Средство для зеркал",
        fullTitle: "Glass Plus - Средство для зеркал 500мл",
        description: "Средство для чистки зеркал без разводов.",
        longDescription:
          "Специально разработано для зеркал, обеспечивает кристальную чистоту и блеск без разводов и пятен.",
        image: "/images/GlassPlus_Cleaner_Mirror.png",
        color: "#e80c00",
        brandName: "Glass Plus",
        category: "Средства для очистки стекол и поверхностей",
        features: [
          "Идеальная чистота",
          "Быстрое испарение",
          "Удаление пятен",
        ],
        directions: [
          "Распылите на зеркало, протрите мягкой тряпкой.",
          "Храните в прохладном месте.",
        ],
        rating: 4.8,
        reviews: 180,
        badge: "Для зеркал",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽399" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Екатерина Д.",
            date: "9 марта 2025",
            rating: 4.9,
            title: "Зеркала сияют",
            content: "Чистота без разводов, очень удобно!",
          },
        ],
      },
    },
    {
      title: "Glass Plus Средство для столешниц",
      description: "Средство для чистки стеклянных столешниц.",
      image: "/images/GlassPlus_Cleaner_Countertop.png",
      color: "#e80c00",
      brandName: "Glass Plus",
      category: "Средства для очистки стекол и поверхностей",
      features: [
        "Блеск поверхностей",
        "Удаление загрязнений",
        "Безопасный состав",
      ],
      details: {
        id: 36,
        name: "Glass Plus",
        subtitle: "Средство для столешниц",
        fullTitle: "Glass Plus - Средство для столешниц 500мл",
        description: "Средство для чистки стеклянных столешниц.",
        longDescription:
          "Эффективно очищает стеклянные столешницы, удаляя загрязнения и придавая им блеск, безопасно для ежедневного использования.",
        image: "/images/GlassPlus_Cleaner_Countertop.png",
        color: "#e80c00",
        brandName: "Glass Plus",
        category: "Средства для очистки стекол и поверхностей",
        features: [
          "Блеск поверхностей",
          "Удаление загрязнений",
          "Безопасный состав",
        ],
        directions: [
          "Распылите на поверхность, протрите сухой тряпкой.",
          "Храните в прохладном месте.",
        ],
        rating: 4.7,
        reviews: 165,
        badge: "Для столешниц",
        sizes: [
          { id: 1, name: "500мл", quantity: "500 мл", price: "₽399" },
        ],
        reviewsList: [
          {
            id: 1,
            author: "Анна К.",
            date: "8 марта 2025",
            rating: 4.8,
            title: "Столешница блестит",
            content: "Легко убирает пятна, поверхность как новая!",
          },
        ],
      },
    },
];

export async function GET() {
  return NextResponse.json(productsData);
}



// {
  //   id: 1,
  //   name: 'Real Plus',
  //   subtitle: 'Чистое и аутентичное масло гхи',
  //   fullTitle: 'Real Plus - Чистое и аутентичное масло гхи 500г',
  //   description: 'Продукт премиум-класса для готовки и улучшения вкуса.',
  //   longDescription: 'Изготовленное по традиционным методам, Real Plus - это премиальное масло гхи с богатым ореховым вкусом и отличными кулинарными характеристиками. Идеально для жарки на высокой температуре, оно придает особый вкус любимым блюдам и прекрасно подходит как для повседневной готовки, так и для особых случаев.',
  //   features: [
  //     'Изготовлено из 100% коровьего молока',
  //     'Традиционный процесс медленного варки',
  //     'Богатый ореховый вкус, который улучшает блюда',
  //     'Высокая температура курения для жарки и обжаривания',
  //     'Долгий срок хранения с натуральными консервантами'
  //   ],
  //   directions: [
  //     'Хранить в прохладном, сухом месте вдали от прямых солнечных лучей.',
  //     'Использовать чистую, сухую ложку, чтобы избежать загрязнения.',
  //     'Идеально подходит для жарки, обжаривания и выпечки.',
  //     'Можно использовать как намазку или добавлять в рецепты для усиления вкуса.'
  //   ],
  //   rating: 4.8,
  //   reviews: 254,
  //   imageSrc: '/images/RealPlus_SuwukSoda_5l_Ak.png',
  //   badge: 'Бестселлер',
  //   sizes: [
  //     { id: 1, name: '250г', quantity: '250 грамм', price: '₽699' },
  //     { id: 2, name: '500г', quantity: '500 грамм', price: '₽1299' },
  //     { id: 3, name: '1кг', quantity: '1000 грамм', price: '₽2399' }
  //   ],
  //   reviewsList: [
  //     {
  //       id: 1,
  //       author: 'Аиша К.',
  //       date: '10 февраля 2025',
  //       rating: 5,
  //       title: 'Изумительный вкус и качество!',
  //       content: 'Real Ghee преобразил мою готовку. Его богатый ореховый вкус придает аутентичный вкус каждому блюду.'
  //     },
  //     {
  //       id: 2,
  //       author: 'Рахул С.',
  //       date: '25 января 2025',
  //       rating: 4.5,
  //       title: 'Отличное качество, но цена высокая',
  //       content: 'Качество безупречное, а вкус придает уникальность моим рецептам. Единственный минус - высокая цена, но оно определенно стоит этих денег.'
  //     },
  //     {
  //       id: 3,
  //       author: 'Мира П.',
  //       date: '5 января 2025',
  //       rating: 4.8,
  //       title: 'Идеально для жарки на высокой температуре',
  //       content: 'Я люблю использовать Real Ghee для жарки и обжаривания. Оно прекрасно выдерживает высокие температуры и придает блюдам уникальный аромат.'
  //     }
  //   ]
  // },
  // {
  //   id: 2,
  //   name: 'Real Plus White',
  //   subtitle: 'Жидкое моющее средство для белых тканей',
  //   fullTitle: 'Real Plus White - Жидкое моющее средство для белых тканей 3л',
  //   description: 'Эффективное моющее средство для стирки белых тканей с защитой от потемнения и с приятным ароматом.',
  //   longDescription: 'Real Plus White - это универсальное жидкое моющее средство, предназначенное для бережной стирки белых тканей. Подходит для машинной и ручной стирки, предотвращает потемнение тканей, не оставляет полос и придает одежде приятный свежий аромат.',
  //   features: [
  //     'Подходит для машинной и ручной стирки',
  //     'Эффективно удаляет пятна',
  //     'Сохраняет белизну ткани',
  //     'Не оставляет полос на одежде',
  //     'Придает одежде естественную свежесть'
  //   ],
  //   directions: [
  //     'Перед использованием хорошо встряхнуть бутылку.',
  //     'Добавьте 50 мл средства в стиральную машину на 5 кг белья.',
  //     'Для сильно загрязненных тканей увеличьте дозу до 75 мл.',
  //     'Подходит для стирки при температуре от 30°C до 60°C.',
  //     'Хранить в сухом, прохладном месте, вдали от прямых солнечных лучей.'
  //   ],
  //   rating: 4.7,
  //   reviews: 312,
  //   imageSrc: '/images/RealPlus_SuwukSoda_3l_Ak.png',
  //   badge: 'Бестселлер',
  //   sizes: [
  //     { id: 1, name: '1.5L', quantity: '1.5 литра', price: '₽299' },
  //     { id: 2, name: '3L', quantity: '3 литра', price: '₽499' },
  //     { id: 3, name: '5L', quantity: '5 литров', price: '₽749' }
  //   ],
  //   reviewsList: [
  //     {
  //       id: 1,
  //       author: 'Анна П.',
  //       date: '12 марта 2025',
  //       rating: 5,
  //       title: 'Отличный продукт!',
  //       content: 'Мне очень нравится аромат после стирки! Белые вещи остаются белыми без серого оттенка.'
  //     },
  //     {
  //       id: 2,
  //       author: 'Максим К.',
  //       date: '28 февраля 2025',
  //       rating: 4.5,
  //       title: 'Хорошее качество за свою цену',
  //       content: 'Хорошо отстирывает, даже удаляет сложные пятна. Жаль, что аромат не держится долго.'
  //     },
  //     {
  //       id: 3,
  //       author: 'Екатерина С.',
  //       date: '15 февраля 2025',
  //       rating: 4.8,
  //       title: 'Рекомендую!',
  //       content: 'Я использую это средство уже несколько месяцев. Аромат приятный, а белизна ткани сохраняется.'
  //     }
  //   ]
  // },
  // {
  //   id: 3,
  //   name: 'Real Plus Eco',
  //   subtitle: 'Эко-моющее средство для стирки всех типов тканей',
  //   fullTitle: 'Real Plus Eco - Эко-моющее средство для стирки всех типов тканей 2л',
  //   description: 'Эко-дружественное средство для стирки одежды, которое эффективно справляется с загрязнениями, но при этом заботится о природе.',
  //   longDescription: 'Real Plus Eco - это экологически чистое средство для стирки, которое идеально подходит для всех типов тканей. Оно не содержит агрессивных химических веществ, но при этом эффективно удаляет грязь и пятна, оставляя одежду мягкой и свежей. Это средство безопасно для кожи и не загрязняет природу.',
  //   features: [
  //     'Содержит природные компоненты',
  //     'Безопасно для кожи и окружающей среды',
  //     'Эффективно удаляет загрязнения и пятна',
  //     'Подходит для стирки всех типов тканей',
  //     'Не содержит агрессивных химических веществ'
  //   ],
  //   directions: [
  //     'Использовать согласно инструкции на упаковке.',
  //     'Подходит для стирки при температуре от 30°C до 60°C.',
  //     'Можно использовать для стирки в машинках и вручную.',
  //     'Хранить в сухом, прохладном месте, вдали от прямых солнечных лучей.'
  //   ],
  //   rating: 4.6,
  //   reviews: 129,
  //   imageSrc: '/images/RealPlus_SuwukSoda_5l_Elegance.png',
  //   badge: 'Эко-стиль',
  //   sizes: [
  //     { id: 1, name: '1L', quantity: '1 литр', price: '₽199' },
  //     { id: 2, name: '2L', quantity: '2 литра', price: '₽379' }
  //   ],
  //   reviewsList: [
  //     {
  //       id: 1,
  //       author: 'Ирина В.',
  //       date: '5 марта 2025',
  //       rating: 5,
  //       title: 'Отличное эко-средство',
  //       content: 'Очень нравится, что средство натуральное и не содержит химикатов. Качество стирки отличное, не раздражает кожу.'
  //     },
  //     {
  //       id: 2,
  //       author: 'Дмитрий Т.',
  //       date: '22 февраля 2025',
  //       rating: 4.5,
  //       title: 'Натурально и эффективно',
  //       content: 'Хорошо отстирывает, но цена могла бы быть чуть ниже.'
  //     }
  //   ]
  // },
  // {
  //   id: 4,
  //   name: 'Real Plus Fresh',
  //   subtitle: 'Моющее средство для стирки с приятным ароматом свежести',
  //   fullTitle: 'Real Plus Fresh - Моющее средство для стирки с ароматом свежести 2.5л',
  //   description: 'Моющее средство с долгоиграющим ароматом свежести для стирки одежды.',
  //   longDescription: 'Real Plus Fresh - это жидкое моющее средство с уникальным ароматом свежести, которое обеспечит чистоту и долгосрочную защиту от загрязнений. Оно оставляет легкий и ненавязчивый аромат на одежде и идеально подходит для регулярной стирки одежды для всей семьи.',
  //   features: [
  //     'Аромат свежести, который длится до 7 дней',
  //     'Подходит для всех типов тканей',
  //     'Не оставляет разводов',
  //     'Эффективно удаляет даже стойкие пятна',
  //     'Обеспечивает мягкость ткани'
  //   ],
  //   directions: [
  //     'Добавьте в стиральную машину согласно указаниям на упаковке.',
  //     'Используется для всех типов тканей.',
  //     'Можно использовать для стирки при температуре от 30°C до 60°C.',
  //     'Подходит для ручной и машинной стирки.'
  //   ],
  //   rating: 4.8,
  //   reviews: 255,
  //   imageSrc: '/images/RealPlus_SuwukSoda_5l_Sensitive+.png',
  //   badge: 'Популярный',
  //   sizes: [
  //     { id: 1, name: '1.5L', quantity: '1.5 литра', price: '₽349' },
  //     { id: 2, name: '2.5L', quantity: '2.5 литра', price: '₽499' },
  //     { id: 3, name: '5L', quantity: '5 литров', price: '₽799' }
  //   ],
  //   reviewsList: [
  //     {
  //       id: 1,
  //       author: 'Светлана М.',
  //       date: '3 марта 2025',
  //       rating: 5,
  //       title: 'Свежесть на долго',
  //       content: 'Средство оставляет одежду не только чистой, но и с невероятным ароматом свежести, который сохраняется долго.'
  //     },
  //     {
  //       id: 2,
  //       author: 'Валерий А.',
  //       date: '20 февраля 2025',
  //       rating: 4.7,
  //       title: 'Невероятно хорошо отстирывает',
  //       content: 'Очень доволен результатом, чистота на высоте, а запах свежести остается даже после сушки.'
  //     }
  //   ]
  // },