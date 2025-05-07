// // Interface for product sizes
// export interface ProductSize {
//     id: number;
//     name: string;
//     quantity: string;
//     price: string;
//   }
  
//   // Interface for product reviews
//   export interface ProductReview {
//     id: number;
//     author: string;
//     date: string;
//     rating: number;
//     title: string;
//     content: string;
//   }
  
//   // Interface for the nested "products" object
//   export interface Product {
//     id: number;
//     name: string;
//     subtitle: string;
//     fullTitle: string;
//     description: string;
//     longDescription: string;
//     image: string;
//     color: string;
//     brandName: string;
//     category: string;
//     features: string[];
//     directions: string[];
//     rating: number;
//     reviews: number;
//     badge?: string;
//     sizes: ProductSize[];
//     reviewsList: ProductReview[];
//   }
  
//   // Interface for the outer product object
//   export interface ProductCategory {
//     title: string;
//     description: string;
//     image: string;
//     color: string;
//     brandName: string;
//     category: string;
//     features: string[];
//     products: Product[];
//   }

//   export const productsData: ProductCategory[] = [
//         // Real Plus - Универсальные жидкие моющие средства с кондиционером
//         {
//             title: "Real Plus Универсальный гель для стирки",
//             description: "Жидкое средство для стирки с усиленной формулой для бережного ухода за тканями.",
//             image: "/images/RealPlus_WashGel.png",
//             color: "#264653",
//             brandName: "Real Plus",
//             category: "Универсальный гель для стирки",
//             features: [
//               "Глубокая очистка волокон",
//               "Подходит для цветного и белого белья",
//               "Бережное отношение к ткани"
//             ],
//             products: [{
//               id: 1,
//               name: "Real Plus",
//               subtitle: "White жидкое средство для стирки белых тканей",
//               fullTitle: "Real Plus White - Универсальное жидкое моющее средство с кондиционером 3л",
//               description: "Многофункциональное средство для бережного ухода за тканями с эффектом кондиционирования.",
//               longDescription:
//                 "Real Plus сочетает мощную очищающую способность с эффектом кондиционера, делая ткани мягкими и приятными на ощупь. Подходит для стирки деликатных вещей и ежедневного ухода за одеждой.",
//               image: "/images/RealPlus_SuwukSoda_3l_Ak.png",
//               color: "#3538C8",
//               brandName: "Real Plus",
//               category: "Жидкие средства для стирки",
//               features: [
//                 "Делает ткани мягкими и свежими",
//                 "Удаляет стойкие пятна",
//                 "Подходит для ручной и машинной стирки",
//               ],
//               directions: [
//                 "Добавьте 50 мл на 5 кг белья.",
//                 "Храните в прохладном месте.",
//                 "Не используйте для шерсти и шелка.",
//               ],
//               rating: 4.6,
//               reviews: 145,
//               badge: "Рекомендовано",
//               sizes: [
//                 { id: 1, name: "500мл", quantity: "500 мл", price: "₽299" },
//                 { id: 2, name: "1л", quantity: "1000 мл", price: "₽499" },
//                 { id: 3, name: "2л", quantity: "2000 мл", price: "₽899" },
//               ],
//               reviewsList: [
//                 {
//                   id: 1,
//                   author: "Ольга С.",
//                   date: "12 марта 2025",
//                   rating: 4.8,
//                   title: "Мягкость и чистота",
//                   content: "Белье стало мягким, а запах просто волшебный!",
//                 },
//               ],
//             },{
//               "id": 6,
//               "name": "Real Plus Supreme",
//               "subtitle": "универсальное жидкое средство для стирки с французским ароматом",
//               "fullTitle": "Real Plus Supreme - Жидкое средство для стирки белых тканей с изысканным французским ароматом 3л",
//               "description": "Специальное жидкое средство для стирки белых тканей с изысканным французским ароматом, сохраняющее их яркость.",
//               "longDescription": "Это премиальное жидкое средство разработано для эффективной стирки белых тканей, предотвращая их посерение и сохраняя яркость. Обогащено изысканным французским ароматом, который оставляет белье свежим и приятным на ощупь. Подходит для использования в стиральных машинах при любых температурах.",
//               "image": "/images/RealPlus_SuwukSoda_3l_Supreme.png",
//               "color": "#FFFFFF",
//               "brandName": "Real Plus",
//               "category": "Жидкие средства для стирки",
//               "features": [
//                 "Сохраняет яркость белых тканей",
//                 "Эффективен при любых температурах",
//                 "Подходит для стиральных машин",
//                 "Изысканный французский аромат"
//               ],
//               "directions": [
//                 "Используйте 50 мл на 4 кг белья.",
//                 "Храните в прохладном, сухом месте."
//               ],
//               "rating": 4.5,
//               "reviews": 90,
//               "badge": "Премиум с французским ароматом",
//               "sizes": [
//                 {
//                   "id": 1,
//                   "name": "3л",
//                   "quantity": "3000 мл",
//                   "price": "₽899"
//                 }
//               ],
//               "reviewsList": [
//                 {
//                   "id": 1,
//                   "author": "Ольга М.",
//                   "date": "12 марта 2025",
//                   "rating": 4.6,
//                   "title": "Невероятный аромат!",
//                   "content": "Белые вещи как новые, а аромат просто восхитительный, как из французской парфюмерии!"
//                 }
//               ]
//             },
//             {
//               "id": 777,
//               "name": "Real Plus Color",
//               "subtitle": "Жидкое средство для стирки цветных тканей",
//               "fullTitle": "Real Plus Color - Жидкое средство для стирки цветных тканей 3л",
//               "description": "Специальное жидкое средство для стирки цветных тканей, сохраняющее их яркость и насыщенность.",
//               "longDescription": "Это жидкое средство разработано для эффективной стирки цветных тканей, предотвращая выцветание и сохраняя их насыщенность и яркость. Подходит для использования в стиральных машинах при любых температурах.",
//               "image": "/images/RealPlus_SuwukSoda_3l_Gok.png",
//               "color": "#0000FF", // Blue color based on the packaging
//               "brandName": "Real Plus",
//               "category": "Жидкие средства для стирки",
//               "features": [
//                 "Сохраняет яркость цветных тканей",
//                 "Эффективен при любых температурах",
//                 "Подходит для стиральных машин",
//                 "Предотвращает выцветание"
//               ],
//               "directions": [
//                 "Используйте 50 мл на 4 кг белья.",
//                 "Храните в прохладном, сухом месте."
//               ],
//               "rating": 4.4, // Estimated based on typical product ratings
//               "reviews": 70, // Estimated based on typical review counts
//               "badge": "Для цветных тканей",
//               "sizes": [
//                 {
//                   "id": 1,
//                   "name": "3л",
//                   "quantity": "3000 мл",
//                   "price": "₽799" // Estimated price based on size
//                 }
//               ],
//               "reviewsList": [
//                 {
//                   "id": 1,
//                   "author": "Ирина Г.",
//                   "date": "11 марта 2025",
//                   "rating": 4.5,
//                   "title": "Цвета как новые",
//                   "content": "Мои цветные вещи остались такими же яркими после нескольких стирок!"
//                 }
//               ]
//             },
//             {
//               "id": 8,
//               "name": "Real Plus Color",
//               "subtitle": "Жидкое средство для стирки цветных тканей с нежным ароматом",
//               "fullTitle": "Real Plus Color - Жидкое средство для стирки цветных тканей с нежным ароматом 3л",
//               "description": "Специальное жидкое средство для стирки цветных тканей, сохраняющее их яркость и насыщенность с нежным ароматом.",
//               "longDescription": "Это жидкое средство разработано для эффективной стирки цветных тканей, предотвращая выцветание и сохраняя их насыщенность и яркость. Обогащено нежным ароматом, который оставляет белье свежим. Подходит для использования в стиральных машинах при любых температурах.",
//               "image": "/images/RealPlus_SuwukSoda_3l_Gyzyl.png",
//               "color": "#FF69B4", // Pink color based on the packaging
//               "brandName": "Real Plus",
//               "category": "Жидкие средства для стирки",
//               "features": [
//                 "Сохраняет яркость цветных тканей",
//                 "Эффективен при любых температурах",
//                 "Подходит для стиральных машин",
//                 "Предотвращает выцветание",
//                 "Нежный аромат"
//               ],
//               "directions": [
//                 "Используйте 50 мл на 4 кг белья.",
//                 "Храните в прохладном, сухом месте."
//               ],
//               "rating": 4.5, // Slightly higher rating due to the added fragrance
//               "reviews": 75, // Estimated based on typical review counts
//               "badge": "Для цветных тканей с ароматом",
//               "sizes": [
//                 {
//                   "id": 1,
//                   "name": "3л",
//                   "quantity": "3000 мл",
//                   "price": "₽799" // Estimated price based on size
//                 }
//               ],
//               "reviewsList": [
//                 {
//                   "id": 1,
//                   "author": "Наталья К.",
//                   "date": "13 марта 2025",
//                   "rating": 4.6,
//                   "title": "Приятный запах и яркие цвета",
//                   "content": "Цветные вещи остались яркими, а аромат после стирки просто восхитительный!"
//                 }
//               ]
//             },
      
      
//             //Универсальное моющее средство для стирки + кондиционер
//             {
//               "id": 51,
//               "name": "Real Plus Perfume Collection Lilac",
//               "subtitle": "Универсальное моющее средство для стирки с ароматом сирени",
//               "fullTitle": "Real Plus Perfume Collection Lilac - Универсальное моющее средство для стирки с ароматом сирени 5 кг",
//               "description": "Универсальное моющее средство с ароматом сирени, сочетающее стирку и кондиционирование.",
//               "longDescription": "Это универсальное моющее средство из коллекции Perfume Collection эффективно очищает белье, удаляя пятна и загрязнения, а также действует как кондиционер, делая ткани мягкими и ароматными. С ароматом сирени, который придает белью свежий и цветочный запах. Подходит для машинной и ручной стирки, мягко воздействует на ткани.",
//               "image": "/images/RealPlus_SuwukSoda_5l_Elegance+.png",
//               "color": "#800080", // Purple color based on the packaging
//               "brandName": "Real Plus",
//               "category": "Универсальные жидкие моющие средства с кондиционером",
//               "features": [
//                 "Очищает и кондиционирует",
//                 "Аромат сирени",
//                 "Мягко воздействует на ткани",
//                 "Подходит для машинной и ручной стирки"
//               ],
//               "directions": [
//                 "Используйте 50 мл на 4 кг белья для машинной стирки.",
//                 "Для ручной стирки разведите 30 мл в 5 литрах воды.",
//                 "Храните в прохладном, сухом месте.",
//                 "Держите в недоступном для детей месте."
//               ],
//               "rating": 4.5,
//               "reviews": 82,
//               "badge": "Аромат сирени",
//               "sizes": [
//                 {
//                   "id": 1,
//                   "name": "5 кг",
//                   "quantity": "5000 мл",
//                   "price": "₽999" // Estimated price based on size
//                 }
//               ],
//               "reviewsList": [
//                 {
//                   "id": 1,
//                   "author": "Екатерина В.",
//                   "date": "10 апреля 2025",
//                   "rating": 4.6,
//                   "title": "Приятный аромат сирени!",
//                   "content": "Белье мягкое, а запах сирени держится долго!"
//                 }
//               ]
//             },
//             {
//               "id": 52,
//               "name": "Real Plus Perfume Collection Citrus",
//               "subtitle": "Универсальное моющее средство для стирки с ароматом цитруса",
//               "fullTitle": "Real Plus Perfume Collection Citrus - Универсальное моющее средство для стирки с ароматом цитруса 5 кг",
//               "description": "Универсальное моющее средство с ароматом цитруса, сочетающее стирку и кондиционирование.",
//               "longDescription": "Это универсальное моющее средство из коллекции Perfume Collection эффективно очищает белье, удаляя пятна и загрязнения, и одновременно кондиционирует, оставляя ткани мягкими. С ярким ароматом цитруса, который придает белью свежий и бодрящий запах. Подходит для машинной и ручной стирки, бережно относится к тканям.",
//               "image": "/images/RealPlus_SuwukSoda_5l_Glamour+.png",
//               "color": "#FFFF00", // Yellow color based on the packaging
//               "brandName": "Real Plus",
//               "category": "Универсальные жидкие моющие средства с кондиционером",
//               "features": [
//                 "Очищает и кондиционирует",
//                 "Аромат цитруса",
//                 "Мягко воздействует на ткани",
//                 "Подходит для машинной и ручной стирки"
//               ],
//               "directions": [
//                 "Используйте 50 мл на 4 кг белья для машинной стирки.",
//                 "Для ручной стирки разведите 30 мл в 5 литрах воды.",
//                 "Храните в прохладном, сухом месте.",
//                 "Держите в недоступном для детей месте."
//               ],
//               "rating": 4.4,
//               "reviews": 78,
//               "badge": "Аромат цитруса",
//               "sizes": [
//                 {
//                   "id": 1,
//                   "name": "5 кг",
//                   "quantity": "5000 мл",
//                   "price": "₽999" // Estimated price based on size
//                 }
//               ],
//               "reviewsList": [
//                 {
//                   "id": 1,
//                   "author": "Сергей П.",
//                   "date": "11 апреля 2025",
//                   "rating": 4.5,
//                   "title": "Свежесть цитруса!",
//                   "content": "Отличное средство, запах цитруса бодрит!"
//                 }
//               ]
//             },
//             {
//               "id": 53,
//               "name": "Real Plus Perfume Collection Ocean Breeze",
//               "subtitle": "Универсальное моющее средство для стирки с ароматом океанского бриза",
//               "fullTitle": "Real Plus Perfume Collection Ocean Breeze - Универсальное моющее средство для стирки с ароматом океанского бриза 5 кг",
//               "description": "Универсальное моющее средство с ароматом океанского бриза, сочетающее стирку и кондиционирование.",
//               "longDescription": "Это универсальное моющее средство из коллекции Perfume Collection эффективно очищает и кондиционирует белье, оставляя его мягким и свежим. Аромат океанского бриза дарит белью легкий и освежающий запах, напоминающий морской ветер. Подходит для машинной и ручной стирки, защищает ткани от износа.",
//               "image": "/images/RealPlus_SuwukSoda_5l_Supreme+.png",
//               "color": "#0000FF", // Blue color based on the packaging
//               "brandName": "Real Plus",
//               "category": "Универсальные жидкие моющие средства с кондиционером",
//               "features": [
//                 "Очищает и кондиционирует",
//                 "Аромат океанского бриза",
//                 "Мягко воздействует на ткани",
//                 "Подходит для машинной и ручной стирки"
//               ],
//               "directions": [
//                 "Используйте 50 мл на 4 кг белья для машинной стирки.",
//                 "Для ручной стирки разведите 30 мл в 5 литрах воды.",
//                 "Храните в прохладном, сухом месте.",
//                 "Держите в недоступном для детей месте."
//               ],
//               "rating": 4.6,
//               "reviews": 85,
//               "badge": "Аромат океанского бриза",
//               "sizes": [
//                 {
//                   "id": 1,
//                   "name": "5 кг",
//                   "quantity": "5000 мл",
//                   "price": "₽999" // Estimated price based on size
//                 }
//               ],
//               "reviewsList": [
//                 {
//                   "id": 1,
//                   "author": "Ольга К.",
//                   "date": "12 апреля 2025",
//                   "rating": 4.7,
//                   "title": "Ощущение свежести!",
//                   "content": "Запах океанского бриза невероятно свежий, белье мягкое!"
//                 }
//               ]
//             },
//             {
//               "id": 54,
//               "name": "Real Plus Perfume Collection Berries",
//               "subtitle": "Универсальное моющее средство для стирки с ароматом ягод",
//               "fullTitle": "Real Plus Perfume Collection Berries - Универсальное моющее средство для стирки с ароматом ягод 5 кг",
//               "description": "Универсальное моющее средство с ароматом ягод, сочетающее стирку и кондиционирование.",
//               "longDescription": "Это универсальное моющее средство из коллекции Perfume Collection эффективно очищает белье, удаляя пятна и загрязнения, а также кондиционирует ткани, оставляя их мягкими. Аромат ягод придает белью сладкий и насыщенный запах. Подходит для машинной и ручной стирки, бережно относится к тканям.",
//               "image": "/images/RealPlus_SuwukSoda_5l_Romance+.png",
//               "color": "#FF0000", // Red color based on the packaging
//               "brandName": "Real Plus",
//               "category": "Универсальные жидкие моющие средства с кондиционером",
//               "features": [
//                 "Очищает и кондиционирует",
//                 "Аромат ягод",
//                 "Мягко воздействует на ткани",
//                 "Подходит для машинной и ручной стирки"
//               ],
//               "directions": [
//                 "Используйте 50 мл на 4 кг белья для машинной стирки.",
//                 "Для ручной стирки разведите 30 мл в 5 литрах воды.",
//                 "Храните в прохладном, сухом месте.",
//                 "Держите в недоступном для детей месте."
//               ],
//               "rating": 4.5,
//               "reviews": 80,
//               "badge": "Аромат ягод",
//               "sizes": [
//                 {
//                   "id": 1,
//                   "name": "5 кг",
//                   "quantity": "5000 мл",
//                   "price": "₽999" // Estimated price based on size
//                 }
//               ],
//               "reviewsList": [
//                 {
//                   "id": 1,
//                   "author": "Наталья П.",
//                   "date": "13 апреля 2025",
//                   "rating": 4.6,
//                   "title": "Ягодный аромат!",
//                   "content": "Белье пахнет ягодами, очень мягкое после стирки!"
//                 }
//               ]
//             },
//             {
//               "id": 55,
//               "name": "Real Plus Perfume Collection Lilac",
//               "subtitle": "Универсальное моющее средство для стирки с ароматом сирени",
//               "fullTitle": "Real Plus Perfume Collection Lilac - Универсальное моющее средство для стирки с ароматом сирени 5 кг",
//               "description": "Универсальное моющее средство с ароматом сирени, сочетающее стирку и кондиционирование.",
//               "longDescription": "Это универсальное моющее средство из коллекции Perfume Collection эффективно очищает и кондиционирует белье, оставляя его мягким и ароматным. Аромат сирени придает белью нежный цветочный запах, который сохраняется надолго. Подходит для машинной и ручной стирки, защищает ткани от износа.",
//               "image": "/images/RealPlus_SuwukSoda_5l_Sensitive+.png",
//               "color": "#FF69B4", // Pink color based on the packaging
//               "brandName": "Real Plus",
//               "category": "Универсальные жидкие моющие средства с кондиционером",
//               "features": [
//                 "Очищает и кондиционирует",
//                 "Аромат сирени",
//                 "Мягко воздействует на ткани",
//                 "Подходит для машинной и ручной стирки"
//               ],
//               "directions": [
//                 "Используйте 50 мл на 4 кг белья для машинной стирки.",
//                 "Для ручной стирки разведите 30 мл в 5 литрах воды.",
//                 "Храните в прохладном, сухом месте.",
//                 "Держите в недоступном для детей месте."
//               ],
//               "rating": 4.6,
//               "reviews": 83,
//               "badge": "Аромат сирени",
//               "sizes": [
//                 {
//                   "id": 1,
//                   "name": "5 кг",
//                   "quantity": "5000 мл",
//                   "price": "₽999" // Estimated price based on size
//                 }
//               ],
//               "reviewsList": [
//                 {
//                   "id": 1,
//                   "author": "Ирина М.",
//                   "date": "14 апреля 2025",
//                   "rating": 4.7,
//                   "title": "Нежный запах сирени!",
//                   "content": "Белье мягкое и пахнет цветами, очень довольна!"
//                 }
//               ]
//             }
//           ],
//           },  
//       ];




// Interface for product sizes
export interface ProductSize {
    id: number;
    name: string;
    quantity: string;
    price: string;
  }
  
  // Interface for product reviews
  export interface ProductReview {
    id: number;
    author: string;
    date: string;
    rating: number;
    title: string;
    content: string;
  }
  
  // Interface for the nested "products" object
  export interface Product {
    id: number;
    name: string;
    subtitle: string;
    fullTitle: string;
    description: string;
    longDescription: string;
    image: string;
    color: string;
    brandName: string;
    category: string;
    features: string[];
    directions: string[];
    rating: number;
    reviews: number;
    badge?: string;
    sizes: ProductSize[];
    reviewsList: ProductReview[];
  }
  
  // Interface for the outer product object
  export interface ProductCategory {
    title: string;
    description: string;
    image: string;
    color: string;
    brandName: string;
    category: string;
    features: string[];
    products: Product[];
  }

  export const productsData: ProductCategory[] = [
        // Real Plus - Universal Liquid Detergents with Conditioner
  {
    title: "Real Plus Universal Laundry Gel",
    description: "Liquid detergent with an enhanced formula for gentle fabric care.",
    image: "/images/RealPlus_WashGel.png",
    color: "#264653",
    brandName: "Real Plus",
    category: "Universal Laundry Gel",
    features: [
      "Deep fiber cleaning",
      "Suitable for colored and white laundry",
      "Gentle on fabric"
    ],
    products: [
      {
        id: 1,
        name: "Real Plus",
        subtitle: "White liquid detergent for white fabrics",
        fullTitle: "Real Plus White - Universal Liquid Detergent with Conditioner 3L",
        description: "Multipurpose detergent for gentle fabric care with a conditioning effect.",
        longDescription:
          "Real Plus combines powerful cleaning ability with a conditioner effect, making fabrics soft and pleasant to the touch. Suitable for delicate items and everyday clothing care.",
        image: "/images/RealPlus_SuwukSoda_3l_Ak.png",
        color: "#3538C8",
        brandName: "Real Plus",
        category: "Liquid Detergents",
        features: [
          "Makes fabrics soft and fresh",
          "Removes stubborn stains",
          "Suitable for hand and machine washing"
        ],
        directions: [
          "Add 50 ml for 5 kg of laundry.",
          "Store in a cool place.",
          "Do not use for wool and silk."
        ],
        rating: 4.6,
        reviews: 145,
        badge: "Recommended",
        sizes: [
          { id: 1, name: "500ml", quantity: "500 ml", price: "₽299" },
          { id: 2, name: "1L", quantity: "1000 ml", price: "₽499" },
          { id: 3, name: "2L", quantity: "2000 ml", price: "₽899" }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Olga S.",
            date: "March 12, 2025",
            rating: 4.8,
            title: "Softness and Cleanliness",
            content: "The laundry is soft, and the scent is just magical!"
          }
        ]
      },
      {
        id: 6,
        name: "Real Plus Supreme",
        subtitle: "Universal liquid detergent with French fragrance",
        fullTitle: "Real Plus Supreme - Liquid Detergent for White Fabrics with Exquisite French Fragrance 3L",
        description: "Special liquid detergent for white fabrics with an exquisite French fragrance, preserving their brightness.",
        longDescription:
          "This premium liquid detergent is designed for effective washing of white fabrics, preventing them from turning gray and maintaining their brightness. Enriched with an exquisite French fragrance, it leaves clothes fresh and soft to the touch. Suitable for machine washing at any temperature.",
        image: "/images/RealPlus_SuwukSoda_3l_Supreme.png",
        color: "#FFFFFF",
        brandName: "Real Plus",
        category: "Liquid Detergents",
        features: [
          "Preserves the brightness of white fabrics",
          "Effective at any temperature",
          "Suitable for washing machines",
          "Exquisite French fragrance"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry.",
          "Store in a cool, dry place."
        ],
        rating: 4.5,
        reviews: 90,
        badge: "Premium with French fragrance",
        sizes: [
          { id: 1, name: "3L", quantity: "3000 ml", price: "₽899" }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Olga M.",
            date: "March 12, 2025",
            rating: 4.6,
            title: "Incredible Scent!",
            content: "White clothes look like new, and the fragrance is simply delightful, like French perfume!"
          }
        ]
      },
      {
        id: 777,
        name: "Real Plus Color",
        subtitle: "Liquid detergent for colored fabrics",
        fullTitle: "Real Plus Color - Liquid Detergent for Colored Fabrics 3L",
        description: "Special liquid detergent for colored fabrics, preserving their brightness and intensity.",
        longDescription:
          "This liquid detergent is designed for effective washing of colored fabrics, preventing fading and preserving their intensity and brightness. Suitable for machine washing at any temperature.",
        image: "/images/RealPlus_SuwukSoda_3l_Gok.png",
        color: "#0000FF", // Blue color based on the packaging
        brandName: "Real Plus",
        category: "Liquid Detergents",
        features: [
          "Preserves the brightness of colored fabrics",
          "Effective at any temperature",
          "Suitable for washing machines",
          "Prevents fading"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry.",
          "Store in a cool, dry place."
        ],
        rating: 4.4,
        reviews: 70,
        badge: "For Colored Fabrics",
        sizes: [
          { id: 1, name: "3L", quantity: "3000 ml", price: "₽799" }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Irina G.",
            date: "March 11, 2025",
            rating: 4.5,
            title: "Colors like new",
            content: "My colored clothes stayed as bright as ever after several washes!"
          }
        ]
      },
      {
        id: 8,
        name: "Real Plus Color",
        subtitle: "Liquid detergent for colored fabrics with a delicate fragrance",
        fullTitle: "Real Plus Color - Liquid Detergent for Colored Fabrics with a Delicate Fragrance 3L",
        description: "Special liquid detergent for colored fabrics, preserving their brightness and intensity with a delicate fragrance.",
        longDescription:
          "This liquid detergent is designed for effective washing of colored fabrics, preventing fading and preserving their intensity and brightness. Enriched with a delicate fragrance that leaves clothes fresh. Suitable for machine washing at any temperature.",
        image: "/images/RealPlus_SuwukSoda_3l_Gyzyl.png",
        color: "#FF69B4", // Pink color based on the packaging
        brandName: "Real Plus",
        category: "Liquid Detergents",
        features: [
          "Preserves the brightness of colored fabrics",
          "Effective at any temperature",
          "Suitable for washing machines",
          "Prevents fading",
          "Delicate fragrance"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry.",
          "Store in a cool, dry place."
        ],
        rating: 4.5,
        reviews: 75,
        badge: "For Colored Fabrics with Fragrance",
        sizes: [
          { id: 1, name: "3L", quantity: "3000 ml", price: "₽799" }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Natalia K.",
            date: "March 13, 2025",
            rating: 4.6,
            title: "Pleasant fragrance and bright colors",
            content: "The colored clothes stayed bright, and the scent after washing is simply amazing!"
          }
        ]
      },

      // Universal Laundry Detergent + Conditioner
      {
        id: 51,
        name: "Real Plus Perfume Collection Lilac",
        subtitle: "Universal laundry detergent with a lilac fragrance",
        fullTitle: "Real Plus Perfume Collection Lilac - Universal Laundry Detergent with Lilac Fragrance 5kg",
        description: "Universal detergent with a lilac fragrance, combining washing and conditioning.",
        longDescription:
          "This universal detergent from the Perfume Collection effectively cleans laundry, removing stains and dirt, while also conditioning fabrics, leaving them soft and fragrant. The lilac fragrance gives laundry a fresh, floral scent. Suitable for machine and hand washing, gentle on fabrics.",
        image: "/images/RealPlus_SuwukSoda_5l_Elegance+.png",
        color: "#800080", // Purple color based on the packaging
        brandName: "Real Plus",
        category: "Universal Liquid Detergents with Conditioner",
        features: [
          "Cleans and conditions",
          "Lilac fragrance",
          "Gentle on fabrics",
          "Suitable for machine and hand washing"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry for machine washing.",
          "For hand washing, dilute 30 ml in 5 liters of water.",
          "Store in a cool, dry place.",
          "Keep out of reach of children."
        ],
        rating: 4.5,
        reviews: 82,
        badge: "Lilac fragrance",
        sizes: [
          { id: 1, name: "5kg", quantity: "5000 ml", price: "₽999" }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Ekaterina V.",
            date: "April 10, 2025",
            rating: 4.6,
            title: "Pleasant lilac scent!",
            content: "The laundry is soft, and the lilac scent lasts a long time!"
          }
        ]
      },
      {
        id: 52,
        name: "Real Plus Perfume Collection Citrus",
        subtitle: "Universal laundry detergent with a citrus fragrance",
        fullTitle: "Real Plus Perfume Collection Citrus - Universal Laundry Detergent with Citrus Fragrance 5kg",
        description: "Universal detergent with a citrus fragrance, combining washing and conditioning.",
        longDescription:
          "This universal detergent from the Perfume Collection effectively cleans laundry, removing stains and dirt, while also conditioning fabrics, leaving them soft. The bright citrus fragrance gives laundry a fresh, invigorating scent. Suitable for machine and hand washing, gentle on fabrics.",
        image: "/images/RealPlus_SuwukSoda_5l_Glamour+.png",
        color: "#FFFF00", // Yellow color based on the packaging
        brandName: "Real Plus",
        category: "Universal Liquid Detergents with Conditioner",
        features: [
          "Cleans and conditions",
          "Citrus fragrance",
          "Gentle on fabrics",
          "Suitable for machine and hand washing"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry for machine washing.",
          "For hand washing, dilute 30 ml in 5 liters of water.",
          "Store in a cool, dry place.",
          "Keep out of reach of children."
        ],
        rating: 4.4,
        reviews: 78,
        badge: "Citrus fragrance",
        sizes: [
          { id: 1, name: "5kg", quantity: "5000 ml", price: "₽999" }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Sergey P.",
            date: "April 11, 2025",
            rating: 4.5,
            title: "Citrus freshness!",
            content: "Great product, the citrus scent is refreshing!"
          }
        ]
      },
      {
        id: 53,
        name: "Real Plus Perfume Collection Ocean Breeze",
        subtitle: "Universal laundry detergent with an ocean breeze fragrance",
        fullTitle: "Real Plus Perfume Collection Ocean Breeze - Universal Laundry Detergent with Ocean Breeze Fragrance 5kg",
        description: "Universal detergent with an ocean breeze fragrance, combining washing and conditioning.",
        longDescription:
          "This universal detergent from the Perfume Collection effectively cleans and conditions laundry, leaving it soft and fresh. The ocean breeze fragrance gives laundry a light, refreshing scent reminiscent of sea air. Suitable for machine and hand washing, protects fabrics from wear.",
        image: "/images/RealPlus_SuwukSoda_5l_Supreme+.png",
        color: "#0000FF", // Blue color based on the packaging
        brandName: "Real Plus",
        category: "Universal Liquid Detergents with Conditioner",
        features: [
          "Cleans and conditions",
          "Ocean breeze fragrance",
          "Gentle on fabrics",
          "Suitable for machine and hand washing"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry for machine washing.",
          "For hand washing, dilute 30 ml in 5 liters of water.",
          "Store in a cool, dry place.",
          "Keep out of reach of children."
        ],
        rating: 4.6,
        reviews: 85,
        badge: "Ocean breeze fragrance",
        sizes: [
          { id: 1, name: "5kg", quantity: "5000 ml", price: "₽999" }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Olga K.",
            date: "April 12, 2025",
            rating: 4.7,
            title: "Freshness sensation!",
            content: "The ocean breeze scent is incredibly fresh, and the laundry is soft!"
          }
        ]
      },
      {
        id: 54,
        name: "Real Plus Perfume Collection Berries",
        subtitle: "Universal laundry detergent with a berry fragrance",
        fullTitle: "Real Plus Perfume Collection Berries - Universal Laundry Detergent with Berry Fragrance 5kg",
        description: "Universal detergent with a berry fragrance, combining washing and conditioning.",
        longDescription:
          "This universal detergent from the Perfume Collection effectively cleans laundry, removing stains and dirt, and also conditions fabrics, leaving them soft. The berry fragrance gives laundry a sweet, rich scent. Suitable for machine and hand washing, gentle on fabrics.",
        image: "/images/RealPlus_SuwukSoda_5l_Romance+.png",
        color: "#FF0000", // Red color based on the packaging
        brandName: "Real Plus",
        category: "Universal Liquid Detergents with Conditioner",
        features: [
          "Cleans and conditions",
          "Berry fragrance",
          "Gentle on fabrics",
          "Suitable for machine and hand washing"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry for machine washing.",
          "For hand washing, dilute 30 ml in 5 liters of water.",
          "Store in a cool, dry place.",
          "Keep out of reach of children."
        ],
        rating: 4.5,
        reviews: 80,
        badge: "Berry fragrance",
        sizes: [
          { id: 1, name: "5kg", quantity: "5000 ml", price: "₽999" }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Natalia P.",
            date: "April 13, 2025",
            rating: 4.6,
            title: "Berry fragrance!",
            content: "Laundry smells like berries, very soft after washing!"
          }
        ]
      },
      {
        id: 55,
        name: "Real Plus Perfume Collection Lilac",
        subtitle: "Universal laundry detergent with a lilac fragrance",
        fullTitle: "Real Plus Perfume Collection Lilac - Universal Laundry Detergent with Lilac Fragrance 5kg",
        description: "Universal detergent with a lilac fragrance, combining washing and conditioning.",
        longDescription:
          "This universal detergent from the Perfume Collection effectively cleans and conditions laundry, leaving it soft and fragrant. The lilac fragrance gives laundry a delicate floral scent that lasts a long time. Suitable for machine and hand washing, protects fabrics from wear.",
        image: "/images/RealPlus_SuwukSoda_5l_Sensitive+.png",
        color: "#FF69B4", // Pink color based on the packaging
        brandName: "Real Plus",
        category: "Universal Liquid Detergents with Conditioner",
        features: [
          "Cleans and conditions",
          "Lilac fragrance",
          "Gentle on fabrics",
          "Suitable for machine and hand washing"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry for machine washing.",
          "For hand washing, dilute 30 ml in 5 liters of water.",
          "Store in a cool, dry place.",
          "Keep out of reach of children."
        ],
        rating: 4.6,
        reviews: 83,
        badge: "Lilac fragrance",
        sizes: [
          { id: 1, name: "5kg", quantity: "5000 ml", price: "₽999" }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Irina M.",
            date: "April 14, 2025",
            rating: 4.7,
            title: "Delicate lilac scent!",
            content: "The laundry is soft and smells like flowers, very pleased!"
          }
        ]
      }
    ]
  },// Real Plus - Laundry Powders
  {
    title: "Real Plus Laundry Powders",
    description: "Effective washing agent with an enhanced formula for stain removal.",
    image: "/images/RealPlus_LaundryPowder.png",
    color: "#264653",
    brandName: "Real Plus",
    category: "Laundry Powders",
    features: [
      "Removes even tough stains",
      "Gives laundry a fresh scent",
      "Economical usage"
    ],
    products: [
      {
        id: 4,
        name: "Real Plus",
        subtitle: "Laundry powder for deep cleaning",
        fullTitle: "Real Plus - Laundry Powder for Deep Cleaning 450g",
        description: "Special laundry powder for hand washing with deep cleaning.",
        longDescription:
          "This powder is designed for effective stain removal and fabric protection during hand washing. Suitable for deep cleaning in all conditions.",
        image: "/images/RealPlus_Soda.png",
        color: "#008000", // Green color based on the packaging
        brandName: "Real Plus",
        category: "Laundry Powders",
        features: [
          "Deep cleaning",
          "For hand washing",
          "Effective against stains"
        ],
        directions: [
          "Use according to the instructions on the packaging.",
          "Store in a dry place."
        ],
        rating: 4.0, // Estimated based on typical product ratings
        reviews: 50, // Estimated based on typical review counts
        badge: "For Hand Washing",
        sizes: [
          {
            id: 1,
            name: "450g",
            quantity: "450 grams",
            price: "₽299" // Estimated price based on size
          }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Maria P.",
            date: "March 15, 2025",
            rating: 4.0,
            title: "Cleans well",
            content: "The powder works great for removing stains during hand washing!"
          }
        ]
      },
      {
        id: 5235236,
        name: "Real Plus",
        subtitle: "Laundry powder for deep cleaning",
        fullTitle: "Real Plus - Laundry Powder for Deep Cleaning 3kg",
        description: "Special laundry powder for hand washing with deep cleaning.",
        longDescription:
          "This powder is designed for effective stain removal and fabric protection during hand washing. Suitable for deep cleaning under all conditions, including use in large quantities.",
        image: "/images/RealPlus_Soda_Bedre.png",
        color: "#008000", // Green color based on the packaging
        brandName: "Real Plus",
        category: "Laundry Powders",
        features: [
          "Deep cleaning",
          "For hand washing",
          "Effective against stains",
          "Suitable for large quantities"
        ],
        directions: [
          "Use according to the instructions on the packaging.",
          "Store in a dry place."
        ],
        rating: 4.5,
        reviews: 120,
        badge: "For Hand Washing",
        sizes: [
          {
            id: 1,
            name: "3kg",
            quantity: "3 kg",
            price: "₽899"
          }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Maria P.",
            date: "March 15, 2025",
            rating: 4.0,
            title: "Cleans well",
            content: "The powder works great for removing stains during hand washing!"
          },
          {
            id: 2,
            author: "Alexander K.",
            date: "April 10, 2025",
            rating: 5.0,
            title: "Great powder for large loads",
            content:
              "Perfect for washing large loads of laundry. All stains come out, and fabrics remain intact and clean."
          }
        ]
      },
  
      // Liquid Detergents
      {
        id: 46,
        name: "Real Plus White",
        subtitle: "Liquid detergent for white laundry",
        fullTitle: "Real Plus White - Liquid Detergent for White Laundry 5kg",
        description: "Liquid detergent for washing, designed for white laundry, ensures brightness and cleanliness.",
        longDescription:
          "This liquid detergent is specially designed for white laundry, effectively removing stains and preserving the brightness of fabrics. Suitable for machine and hand washing, enriched with a pleasant fragrance. Includes a 5% product bonus.",
        image: "/images/RealPlus_SuwukSoda_5l_Ak.png",
        color: "#FFFFFF", // White color based on the packaging
        brandName: "Real Plus",
        category: "Liquid Detergents",
        features: [
          "For white laundry",
          "Effective stain removal",
          "Preserves brightness",
          "5% product bonus"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry.",
          "Store in a cool, dry place."
        ],
        rating: 4.5,
        reviews: 82,
        badge: "For White Laundry",
        sizes: [
          {
            id: 1,
            name: "5 kg",
            quantity: "5000 ml",
            price: "₽1299"
          }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Maria V.",
            date: "March 23, 2025",
            rating: 4.6,
            title: "White laundry shines!",
            content: "Excellent stain removal, laundry looks fresh and bright!"
          }
        ]
      },
      {
        id: 45,
        name: "Real Plus Professional",
        subtitle: "Professional liquid detergent for washing",
        fullTitle: "Real Plus Professional - Professional Liquid Detergent for Washing 5kg",
        description: "Professional liquid detergent with an enhanced formula for deep cleaning.",
        longDescription:
          "This professional liquid detergent is designed for commercial use, providing deep cleaning and fabric protection. Suitable for all types of laundry, enriched with a pleasant fragrance. Includes a 5% product bonus.",
        image: "/images/RealPlus_SuwukSoda_5l_Gok.png",
        color: "#008080", // Teal color based on the packaging
        brandName: "Real Plus",
        category: "Liquid Detergents",
        features: [
          "For professional use",
          "Deep cleaning",
          "Fabric protection",
          "5% product bonus"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry.",
          "Store in a cool, dry place."
        ],
        rating: 4.6,
        reviews: 78,
        badge: "Professional",
        sizes: [
          {
            id: 1,
            name: "5 kg",
            quantity: "5000 ml",
            price: "₽1399"
          }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Sergey M.",
            date: "March 22, 2025",
            rating: 4.7,
            title: "Ideal for business!",
            content: "Works great for large laundry volumes, economical!"
          }
        ]
      },
      {
        id: 44,
        name: "Real Plus Supreme",
        subtitle: "Premium class liquid detergent for washing",
        fullTitle: "Real Plus Supreme - Premium Class Liquid Detergent for Washing 5kg",
        description: "Premium liquid detergent with an enhanced formula for stain removal.",
        longDescription:
          "This premium liquid detergent is designed for effective stain removal and fabric preservation. Suitable for all types of laundry, ensures deep cleanliness and a pleasant fragrance. Includes a 5% product bonus.",
        image: "/images/RealPlus_SuwukSoda_5l_Gok.png",
        color: "#1E90FF", // Medium blue color based on the packaging
        brandName: "Real Plus",
        category: "Liquid Detergents",
        features: [
          "Premium class",
          "Effective stain removal",
          "Preserves fabric quality",
          "5% product bonus"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry.",
          "Store in a cool, dry place."
        ],
        rating: 4.7,
        reviews: 85,
        badge: "Premium Class",
        sizes: [
          {
            id: 1,
            name: "5 kg",
            quantity: "5000 ml",
            price: "₽1499"
          }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Andrey K.",
            date: "March 21, 2025",
            rating: 4.8,
            title: "Excellent quality!",
            content: "Stains are easily removed, laundry looks like new!"
          }
        ]
      },
      {
        id: 43,
        name: "Real Plus Supreme",
        subtitle: "Premium class liquid detergent for washing",
        fullTitle: "Real Plus Supreme - Premium Class Liquid Detergent for Washing 5kg",
        description: "Premium liquid detergent with an enhanced formula for stain removal.",
        longDescription:
          "This premium liquid detergent is designed for effective stain removal and fabric preservation. Suitable for all types of laundry, ensures deep cleanliness and a pleasant fragrance. Includes a 5% product bonus.",
        image: "/images/RealPlus_SuwukSoda_5l_Supreme.png",
        color: "#00008B", // Deep blue color based on the packaging
        brandName: "Real Plus",
        category: "Liquid Detergents",
        features: [
          "Premium class",
          "Effective stain removal",
          "Preserves fabric quality",
          "5% product bonus"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry.",
          "Store in a cool, dry place."
        ],
        rating: 4.7,
        reviews: 85,
        badge: "Premium Class",
        sizes: [
          {
            id: 1,
            name: "5 kg",
            quantity: "5000 ml",
            price: "₽1499"
          }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Andrey K.",
            date: "March 21, 2025",
            rating: 4.8,
            title: "Excellent quality!",
            content: "Stains are easily removed, laundry looks like new!"
          }
        ]
      },
      {
        id: 42,
        name: "Real Plus Color",
        subtitle: "Liquid detergent for colored laundry",
        fullTitle: "Real Plus Color - Liquid Detergent for Colored Laundry 5kg",
        description: "Liquid detergent for washing, designed for colored laundry, provides color protection and freshness.",
        longDescription:
          "This liquid detergent is specially designed for colored laundry, offering protection against fading and maintaining color intensity. Suitable for machine and hand washing, enriched with a pleasant floral fragrance. Includes a 5% product bonus.",
        image: "/images/RealPlus_SuwukSoda_5l_Elegance.png",
        color: "#FF69B4", // Pink color based on the packaging
        brandName: "Real Plus",
        category: "Liquid Detergents",
        features: [
          "For colored laundry",
          "Protection against fading",
          "Fresh floral fragrance",
          "5% product bonus"
        ],
        directions: [
          "Use 50 ml for 4 kg of laundry.",
          "Store in a cool, dry place."
        ],
        rating: 4.5,
        reviews: 80,
        badge: "For Colored Laundry",
        sizes: [
          {
            id: 1,
            name: "5 kg",
            quantity: "5000 ml",
            price: "₽1299"
          }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Natalia P.",
            date: "March 20, 2025",
            rating: 4.6,
            title: "Colors stay bright!",
            content: "It keeps the colors vibrant, and the laundry smells fresh!"
          }
        ]
      }
    ]
  },// Real Plus - Air Fresheners
  {
    title: "Real Plus Air Fresheners",
    description: "Fragrant air fresheners for creating a cozy atmosphere at home.",
    image: "/images/RealPlus_AirFreshener.png",
    color: "#E76F51",
    brandName: "Real Plus",
    category: "Air Fresheners",
    features: [
      "Long-lasting freshness",
      "Effectively eliminates unpleasant odors",
      "Wide range of scents"
    ],
    products: [
      {
        id: 60,
        name: "Real Plus Orchid",
        subtitle: "Air freshener with orchid fragrance",
        fullTitle: "Real Plus Orchid - Air Freshener with Orchid Fragrance 500ml",
        description: "An air freshener that fills the room with a delicate orchid fragrance.",
        longDescription:
          "This air freshener in a white bottle with a pink accent creates a pleasant atmosphere with its orchid scent. It effectively eliminates unpleasant odors and provides a long-lasting floral fragrance. Suitable for use in homes and office spaces.",
        image: "/images/RealPlus_sprey_orkide.png",
        color: "#FF69B4", // Pink color based on the orchid label
        brandName: "Real Plus",
        category: "Air Fresheners",
        features: [
          "Orchid fragrance",
          "Eliminates unpleasant odors",
          "Long-lasting effect",
          "Suitable for home and office"
        ],
        directions: [
          "Spray the product into the air from a distance of 20-30 cm.",
          "Use in a well-ventilated area.",
          "Avoid contact with skin and eyes.",
          "Keep out of reach of children."
        ],
        rating: 4.4,
        reviews: 65,
        badge: "Orchid Fragrance",
        sizes: [
          {
            id: 1,
            name: "500ml",
            quantity: "500 ml",
            price: "₽299" // Estimated price based on size
          }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Marina L.",
            date: "April 19, 2025",
            rating: 4.5,
            title: "Delicate fragrance!",
            content: "The orchid scent fills the room with a pleasant aroma!"
          }
        ]
      },
      {
        id: 61,
        name: "Real Plus Lavender",
        subtitle: "Air freshener with lavender fragrance",
        fullTitle: "Real Plus Lavender - Air Freshener with Lavender Fragrance 500ml",
        description: "An air freshener that creates a calming atmosphere with lavender fragrance.",
        longDescription:
          "This air freshener in a white bottle with a purple accent fills the room with a soothing lavender scent. It effectively neutralizes odors and provides long-lasting freshness, ideal for the bedroom or living room.",
        image: "/images/RealPlus_sprey_lavanta.png",
        color: "#800080", // Purple color based on the lavender label
        brandName: "Real Plus",
        category: "Air Fresheners",
        features: [
          "Lavender fragrance",
          "Soothing effect",
          "Odor neutralization",
          "Long-lasting effect"
        ],
        directions: [
          "Spray the product into the air from a distance of 20-30 cm.",
          "Use in a well-ventilated area.",
          "Avoid contact with skin and eyes.",
          "Keep out of reach of children."
        ],
        rating: 4.6,
        reviews: 78,
        badge: "Lavender Fragrance",
        sizes: [
          {
            id: 1,
            name: "500ml",
            quantity: "500 ml",
            price: "₽299" // Estimated price based on size
          }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Elena S.",
            date: "April 20, 2025",
            rating: 4.7,
            title: "Soothing scent!",
            content: "Lavender makes the room cozy and fresh!"
          }
        ]
      },
      {
        id: 62,
        name: "Real Plus Jasmine",
        subtitle: "Air freshener with jasmine fragrance",
        fullTitle: "Real Plus Jasmine - Air Freshener with Jasmine Fragrance 500ml",
        description: "An air freshener that fills the space with a bright jasmine fragrance.",
        longDescription:
          "This air freshener in a white bottle with a green accent creates a lively atmosphere with its jasmine fragrance. It effectively eliminates odors and provides a fresh floral scent for a long time. Suitable for kitchens or bathrooms.",
        image: "/images/RealPlus_sprey_jasmine.png",
        color: "#9ACD32", // Green color based on the jasmine label
        brandName: "Real Plus",
        category: "Air Fresheners",
        features: [
          "Jasmine fragrance",
          "Bright and fresh scent",
          "Eliminates odors",
          "Long-lasting effect"
        ],
        directions: [
          "Spray the product into the air from a distance of 20-30 cm.",
          "Use in a well-ventilated area.",
          "Avoid contact with skin and eyes.",
          "Keep out of reach of children."
        ],
        rating: 4.5,
        reviews: 72,
        badge: "Jasmine Fragrance",
        sizes: [
          {
            id: 1,
            name: "500ml",
            quantity: "500 ml",
            price: "₽299" // Estimated price based on size
          }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Alexey G.",
            date: "April 21, 2025",
            rating: 4.6,
            title: "Fresh jasmine!",
            content: "The scent is bright, the kitchen feels more aromatic!"
          }
        ]
      },
      {
        id: 63,
        name: "Real Plus Lily",
        subtitle: "Air freshener with lily fragrance",
        fullTitle: "Real Plus Lily - Air Freshener with Lily Fragrance 500ml",
        description: "An air freshener that fills the room with an elegant lily fragrance.",
        longDescription:
          "This air freshener in a white bottle with a pink accent creates an elegant atmosphere with its lily fragrance. It effectively neutralizes odors and provides long-lasting freshness, ideal for the bedroom or living room.",
        image: "/images/RealPlus_sprey_lilyum.png",
        color: "#FFB6C1", // Pink color based on the lily label
        brandName: "Real Plus",
        category: "Air Fresheners",
        features: [
          "Lily fragrance",
          "Elegant and fresh scent",
          "Odor neutralization",
          "Long-lasting effect"
        ],
        directions: [
          "Spray the product into the air from a distance of 20-30 cm.",
          "Use in a well-ventilated area.",
          "Avoid contact with skin and eyes.",
          "Keep out of reach of children."
        ],
        rating: 4.6,
        reviews: 80,
        badge: "Lily Fragrance",
        sizes: [
          {
            id: 1,
            name: "500ml",
            quantity: "500 ml",
            price: "₽299" // Estimated price based on size
          }
        ],
        reviewsList: [
          {
            id: 1,
            author: "Tatiana R.",
            date: "April 22, 2025",
            rating: 4.7,
            title: "Elegant fragrance!",
            content: "Lily makes the house aromatic and cozy!"
          }
        ]
      }
    ]
  },
  
// Real Plus - Liquid Soap
{
  title: "Real Plus Liquid Soap",
  description: "Soft liquid soap with moisturizing components for hand care.",
  image: "/images/RealPlus_LiquidSoap.png",
  color: "#F4A261",
  brandName: "Real Plus",
  category: "Liquid Soap",
  features: [
    "Cleanses and moisturizes skin",
    "Pleasant fragrance",
    "Suitable for daily use"
  ],
  products: [
    {
      id: 67,
      name: "Real Plus Pearl",
      subtitle: "Liquid soap with pearl fragrance",
      fullTitle: "Real Plus Pearl - Liquid Soap with Pearl Fragrance 1000ml",
      description: "Liquid soap with a gentle pearl fragrance for soft cleansing.",
      longDescription:
        "This liquid soap in a transparent 1000ml bottle with a white dispenser ensures soft skin cleansing thanks to its creamy formula. The pearl fragrance gives a sense of luxury and freshness, while the moisturizing components take care of your hands, preventing dryness.",
      image: "/images/RealPlus_sabyn_zhemcuzh.png",
      color: "#F5F5F5", // Light gray color based on the pearl theme
      brandName: "Real Plus",
      category: "Liquid Soap",
      features: [
        "Pearl fragrance",
        "Gentle cleansing",
        "Moisturizing formula",
        "Suitable for daily use"
      ],
      directions: [
        "Apply a small amount of soap to wet hands.",
        "Lather and rinse thoroughly with water.",
        "Store in a cool place.",
        "Keep out of reach of children."
      ],
      rating: 4.4,
      reviews: 70,
      badge: "Pearl Fragrance",
      sizes: [
        {
          id: 1,
          name: "1000ml",
          quantity: "1000 ml",
          price: "₽399" // Estimated price based on size
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Anna P.",
          date: "April 25, 2025",
          rating: 4.5,
          title: "Delicate fragrance!",
          content: "The soap is soft, and the pearl scent is very pleasant!"
        }
      ]
    },
    {
      id: 68,
      name: "Real Plus Mango and Lime",
      subtitle: "Liquid soap with mango and lime fragrance",
      fullTitle: "Real Plus Mango and Lime - Liquid Soap with Mango and Lime Fragrance 1000ml",
      description: "Liquid soap with a refreshing mango and lime fragrance for fresh cleansing.",
      longDescription:
        "This liquid soap in a transparent 1000ml bottle with an orange tint effectively cleanses the skin, leaving a feeling of freshness. The mango and lime fragrance is invigorating and uplifting, while the moisturizing components prevent skin dryness.",
      image: "/images/RealPlus_sabyn_mangolaym.png",
      color: "#FFA500", // Orange color based on the liquid
      brandName: "Real Plus",
      category: "Liquid Soap",
      features: [
        "Mango and lime fragrance",
        "Refreshing effect",
        "Moisturizing formula",
        "Suitable for daily use"
      ],
      directions: [
        "Apply a small amount of soap to wet hands.",
        "Lather and rinse thoroughly with water.",
        "Store in a cool place.",
        "Keep out of reach of children."
      ],
      rating: 4.5,
      reviews: 75,
      badge: "Mango and Lime Fragrance",
      sizes: [
        {
          id: 1,
          name: "1000ml",
          quantity: "1000 ml",
          price: "₽399" // Estimated price based on size
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Sergey V.",
          date: "April 26, 2025",
          rating: 4.6,
          title: "Tropical freshness!",
          content: "The mango and lime scent is very refreshing!"
        }
      ]
    },
    {
      id: 69,
      name: "Real Plus Aloe Vera",
      subtitle: "Liquid soap with aloe vera extract",
      fullTitle: "Real Plus Aloe Vera - Liquid Soap with Aloe Vera Extract 1000ml",
      description: "Liquid soap with aloe vera extract for soft skin care.",
      longDescription:
        "This liquid soap in a transparent 1000ml bottle with a green tint gently cleanses the skin, providing hydration thanks to the aloe vera extract. The product soothes the skin, prevents dryness, and is suitable for sensitive skin.",
      image: "/images/RealPlus_sabyn_aloe.png",
      color: "#00FF00", // Green color based on the liquid
      brandName: "Real Plus",
      category: "Liquid Soap",
      features: [
        "Aloe vera extract",
        "Soothing effect",
        "Moisturizing formula",
        "Suitable for sensitive skin"
      ],
      directions: [
        "Apply a small amount of soap to wet hands.",
        "Lather and rinse thoroughly with water.",
        "Store in a cool place.",
        "Keep out of reach of children."
      ],
      rating: 4.6,
      reviews: 80,
      badge: "With Aloe Vera",
      sizes: [
        {
          id: 1,
          name: "1000ml",
          quantity: "1000 ml",
          price: "₽399" // Estimated price based on size
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Ekaterina M.",
          date: "April 27, 2025",
          rating: 4.7,
          title: "Softness for the skin!",
          content: "Aloe vera soothes the skin, very satisfied!"
        }
      ]
    },
    {
      id: 70,
      name: "Real Plus Mixed Cherries",
      subtitle: "Liquid soap with mixed cherry fragrance",
      fullTitle: "Real Plus Mixed Cherries - Liquid Soap with Mixed Cherry Fragrance 1000ml",
      description: "Liquid soap with a bright mixed cherry fragrance for fresh cleansing.",
      longDescription:
        "This liquid soap in a transparent 1000ml bottle with a pink tint effectively cleanses the skin, leaving a sweet fragrance of mixed cherries. The moisturizing formula prevents dryness, leaving the skin soft and fresh.",
      image: "/images/RealPlus_sabyn_cereshnya.png",
      color: "#FF69B4", // Pink color based on the liquid
      brandName: "Real Plus",
      category: "Liquid Soap",
      features: [
        "Mixed cherry fragrance",
        "Sweet and fresh scent",
        "Moisturizing formula",
        "Suitable for daily use"
      ],
      directions: [
        "Apply a small amount of soap to wet hands.",
        "Lather and rinse thoroughly with water.",
        "Store in a cool place.",
        "Keep out of reach of children."
      ],
      rating: 4.5,
      reviews: 72,
      badge: "Cherry Fragrance",
      sizes: [
        {
          id: 1,
          name: "1000ml",
          quantity: "1000 ml",
          price: "₽399" // Estimated price based on size
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Natalia K.",
          date: "April 28, 2025",
          rating: 4.6,
          title: "Sweet fragrance!",
          content: "The cherry scent is very pleasant, and the skin is soft!"
        }
      ]
    },
    {
      id: 71,
      name: "Real Plus Juicy Guava",
      subtitle: "Liquid soap with juicy guava fragrance",
      fullTitle: "Real Plus Juicy Guava - Liquid Soap with Juicy Guava Fragrance 1000ml",
      description: "Liquid soap with exotic juicy guava fragrance for fresh cleansing.",
      longDescription:
        "This liquid soap in a transparent 1000ml bottle with a red tint effectively cleanses the skin, leaving an exotic juicy guava fragrance. The moisturizing formula prevents dryness, leaving the skin soft and tropical fresh.",
      image: "/images/RealPlus_sabyn_guawa.png",
      color: "#FF0000", // Red color based on the liquid
      brandName: "Real Plus",
      category: "Liquid Soap",
      features: [
        "Juicy guava fragrance",
        "Exotic and fresh scent",
        "Moisturizing formula",
        "Suitable for daily use"
      ],
      directions: [
        "Apply a small amount of soap to wet hands.",
        "Lather and rinse thoroughly with water.",
        "Store in a cool place.",
        "Keep out of reach of children."
      ],
      rating: 4.5,
      reviews: 74,
      badge: "Guava Fragrance",
      sizes: [
        {
          id: 1,
          name: "1000ml",
          quantity: "1000 ml",
          price: "₽399" // Estimated price based on size
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Irina P.",
          date: "April 29, 2025",
          rating: 4.6,
          title: "Tropical fragrance!",
          content: "The guava smells amazing, and the skin is soft!"
        }
      ]
    },
    {
      id: 72,
      name: "Real Plus Blueberry Yogurt",
      subtitle: "Liquid soap with blueberry yogurt fragrance",
      fullTitle: "Real Plus Blueberry Yogurt - Liquid Soap with Blueberry Yogurt Fragrance 1000ml",
      description: "Liquid soap with a creamy blueberry yogurt fragrance for soft cleansing.",
      longDescription:
        "This liquid soap in a transparent 1000ml bottle with a purple tint gently cleanses the skin, leaving a creamy blueberry yogurt fragrance. The moisturizing formula prevents dryness, leaving the skin soft and berry fresh.",
      image: "/images/RealPlus_sabyn_cernicnyyogurt.png",
      color: "#800080", // Purple color based on the liquid
      brandName: "Real Plus",
      category: "Liquid Soap",
      features: [
        "Blueberry yogurt fragrance",
        "Creamy and berry scent",
        "Moisturizing formula",
        "Suitable for daily use"
      ],
      directions: [
        "Apply a small amount of soap to wet hands.",
        "Lather and rinse thoroughly with water.",
        "Store in a cool place.",
        "Keep out of reach of children."
      ],
      rating: 4.6,
      reviews: 78,
      badge: "Blueberry Yogurt Fragrance",
      sizes: [
        {
          id: 1,
          name: "1000ml",
          quantity: "1000 ml",
          price: "₽399" // Estimated price based on size
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Maria S.",
          date: "April 30, 2025",
          rating: 4.7,
          title: "Delicious fragrance!",
          content: "The blueberry yogurt scent is absolutely delightful!"
        }
      ]
    }
  ]
},// Real Plus - Universal Laundry Gel
{
  title: "Real Plus Universal Laundry Gel",
  description: "Liquid detergent with an enhanced formula for gentle fabric care.",
  image: "/images/RealPlus_WashGel.png",
  color: "#264653",
  brandName: "Real Plus",
  category: "Universal Laundry Gel",
  features: [
    "Deep fiber cleaning",
    "Suitable for colored and white laundry",
    "Gentle on fabric"
  ],
  products: []
},

// Real Plus - Universal Laundry Gels
{
  title: "Real Plus Universal Laundry Gels",
  description: "Real Plus laundry gels with unique fragrances from the Perfume Collection will not only ensure your laundry is clean but also leave it with a long-lasting pleasant scent.",
  image: "/images/category_pictures/RealPlus_SuwukSoda_1l.png", // Example image
  color: "#E01C3E",
  brandName: "Real Plus",
  category: "Universal Laundry Gels",
  features: [
    "Suitable for washing all types of fabrics",
    "Long-lasting and pleasant fragrances",
    "Economical usage"
  ],
  products: [
    {
      id: 1138206,
      name: "Real Plus Coco Perfume Aroma",
      subtitle: "Laundry gel with coconut fragrance",
      fullTitle: "Real Plus Coco Perfume Aroma - Laundry Gel 1 kg",
      description: "Laundry gel with an exotic coconut fragrance for freshness and cleanliness of your laundry.",
      longDescription:
        "Real Plus Coco Perfume Aroma is a universal laundry gel that gives your laundry an exotic coconut fragrance. The convenient 1 kg package and precise dosing ensure effective washing and a wonderful scent.",
      image: "/images/RealPlus_CocoPerfumeAroma.png",
      color: "#F0518B",
      brandName: "Real Plus",
      category: "Universal Laundry Gels",
      features: [
        "Coconut fragrance",
        "Suitable for all types of fabrics",
        "Economical usage"
      ],
      directions: [
        "Add the required amount of gel to the washing machine.",
        "For hand washing, add the gel to water and mix until foam forms.",
        "Store in a dry place, away from direct sunlight."
      ],
      rating: 4.6,
      reviews: 45,
      badge: "Coconut Fragrance",
      sizes: [
        {
          id: 1,
          name: "1 kg",
          quantity: "1 kg",
          price: "₽199"
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Anna K.",
          date: "April 9, 2025",
          rating: 4.7,
          title: "Amazing fragrance",
          content: "The laundry smells like coconut, so fresh and pleasant!"
        }
      ]
    },
    {
      id: 1732807,
      name: "Real Plus Chance Perfume Aroma",
      subtitle: "Laundry gel with Chance fragrance",
      fullTitle: "Real Plus Chance Perfume Aroma - Laundry Gel 1 kg",
      description: "Laundry gel with a refined Chance fragrance for freshness and long-lasting scent on your laundry.",
      longDescription:
        "Real Plus Chance Perfume Aroma is a laundry gel with an elegant Chance fragrance. It is suitable for all types of fabrics, ensuring your laundry is not only clean but also leaves a delicate, lasting fragrance.",
      image: "/images/RealPlus_ChancePerfumeAroma.png",
      color: "#1ABEB7",
      brandName: "Real Plus",
      category: "Universal Laundry Gels",
      features: [
        "Chance fragrance",
        "Suitable for all types of fabrics",
        "Long-lasting fragrance"
      ],
      directions: [
        "Add the gel to the washing machine for washing.",
        "For hand washing, add the required amount to the water.",
        "Store in a dry place, away from sunlight."
      ],
      rating: 4.5,
      reviews: 38,
      badge: "Chance Fragrance",
      sizes: [
        {
          id: 1,
          name: "1 kg",
          quantity: "1 kg",
          price: "₽199"
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Irina L.",
          date: "April 6, 2025",
          rating: 4.6,
          title: "Love this scent",
          content: "The gel leaves a long-lasting fragrance, and the laundry smells fresh for days."
        }
      ]
    },
    {
      id: 19658308,
      name: "Real Plus Blue Perfume Aroma",
      subtitle: "Laundry gel with Blue fragrance",
      fullTitle: "Real Plus Blue Perfume Aroma - Laundry Gel 1 kg",
      description: "Laundry gel with Blue fragrance for the freshness and cleanliness of your laundry.",
      longDescription:
        "Real Plus Blue Perfume Aroma is a universal laundry gel with a delicate Blue fragrance. It is perfect for all types of fabrics, leaving your laundry clean with a long-lasting fresh scent.",
      image: "/images/RealPlus_BluePerfumeAroma.png",
      color: "#4C90B6",
      brandName: "Real Plus",
      category: "Universal Laundry Gels",
      features: [
        "Blue fragrance",
        "Suitable for all types of fabrics",
        "Economical usage"
      ],
      directions: [
        "Use in the washing machine as per the instructions.",
        "For hand washing, dissolve the required amount in water.",
        "Store in a dry place, away from sunlight."
      ],
      rating: 4.7,
      reviews: 50,
      badge: "Blue Fragrance",
      sizes: [
        {
          id: 1,
          name: "1 kg",
          quantity: "1 kg",
          price: "₽199"
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Victoria P.",
          date: "April 4, 2025",
          rating: 4.7,
          title: "Long-lasting freshness",
          content: "I love this gel, the scent lasts for days and the laundry feels soft."
        }
      ]
    }
  ]
},

// Vim - Universal Cleaning Products
{
  title: "Vim Universal Cleaning Products",
  description: "A multifunctional product for effectively removing dirt from all types of surfaces.",
  image: "/images/Vim_AllPurposeCleaner.png",
  color: "#E63946",
  brandName: "Vim",
  category: "Universal Cleaning Products",
  features: [
    "Suitable for all types of surfaces",
    "Effectively removes grease and dirt",
    "Leaves a pleasant fragrance"
  ],
  products: [
    {
      "id": 47,
      "name": "Wim Protection from Plaque",
      "subtitle": "Universal cleaning product for plaque protection",
      "fullTitle": "Wim Protection from Plaque - Universal cleaning product for plaque protection 500 ml",
      "description": "An effective product for plaque protection and bacteria removal on hard surfaces.",
      "longDescription": "This universal cleaning product in a yellow bottle (500 ml) is designed for plaque protection on hard surfaces like sinks, toilets, and tiles. The formula provides up to 24 hours of protection and removes bacteria up to 4 times faster, leaving surfaces clean and shiny. Suitable for daily cleaning.",
      "image": "/images/Wim_Domestos_ProtectionFromPlaque.png",
      "color": "#FFFF00",
      "brandName": "Wim",
      "category": "Universal Cleaning Products",
      "features": [
        "Plaque protection",
        "Removes bacteria 4 times faster",
        "Protection for up to 24 hours",
        "Suitable for hard surfaces"
      ],
      "directions": [
        "Apply the product to the surface.",
        "Leave for 5 minutes, then wipe with a damp cloth.",
        "For tough stains, leave for 10 minutes.",
        "Keep out of reach of children."
      ],
      "rating": 4.5,
      "reviews": 80,
      "badge": "Plaque Protection",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽299"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Ivan P.",
          "date": "April 6, 2025",
          "rating": 4.6,
          "title": "Plaque is gone!",
          "content": "Effectively removes plaque, surfaces shine!"
        }
      ]
    },
    {
      "id": 48,
      "name": "Wim Maximum Protection",
      "subtitle": "Universal cleaning product for maximum protection",
      "fullTitle": "Wim Maximum Protection - Universal cleaning product for maximum protection 500 ml",
      "description": "Powerful product for maximum bacteria protection on hard surfaces.",
      "longDescription": "This universal cleaner in a white bottle (500 ml) provides maximum bacteria protection, keeping surfaces clean for up to 24 hours. The formula removes bacteria up to 4 times faster and is suitable for toilets, sinks, and tiles, ensuring hygienic cleanliness in your home.",
      "image": "/images/Wim_Domestos_MaximumProtection.png",
      "color": "#FFFFFF",
      "brandName": "Wim",
      "category": "Universal Cleaning Products",
      "features": [
        "Maximum bacteria protection",
        "Removes bacteria 4 times faster",
        "Protection for up to 24 hours",
        "Suitable for hard surfaces"
      ],
      "directions": [
        "Apply the product to the surface.",
        "Leave for 5 minutes, then wipe with a damp cloth.",
        "For tough stains, leave for 10 minutes.",
        "Keep out of reach of children."
      ],
      "rating": 4.6,
      "reviews": 85,
      "badge": "Maximum Protection",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽299"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Maria K.",
          "date": "April 7, 2025",
          "rating": 4.7,
          "title": "Reliable protection!",
          "content": "Surfaces stay clean for a long time, great product!"
        }
      ]
    },
    {
      "id": 49,
      "name": "Wim Ultra Shine",
      "subtitle": "Universal cleaning product for ultra shine",
      "fullTitle": "Wim Ultra Shine - Universal cleaning product for ultra shine 500 ml",
      "description": "Product for achieving ultra shine on hard surfaces with bacteria protection.",
      "longDescription": "This universal cleaner in a blue bottle (500 ml) provides ultra shine for hard surfaces such as sinks, toilets, and tiles. The formula removes bacteria up to 4 times faster and offers protection for up to 24 hours, leaving surfaces shining and clean.",
      "image": "/images/Wim_Domestos_UltraShine.png",
      "color": "#0000FF",
      "brandName": "Wim",
      "category": "Universal Cleaning Products",
      "features": [
        "Ultra shine for surfaces",
        "Removes bacteria 4 times faster",
        "Protection for up to 24 hours",
        "Suitable for hard surfaces"
      ],
      "directions": [
        "Apply the product to the surface.",
        "Leave for 5 minutes, then wipe with a damp cloth.",
        "For tough stains, leave for 10 minutes.",
        "Keep out of reach of children."
      ],
      "rating": 4.4,
      "reviews": 75,
      "badge": "Ultra Shine",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽299"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Alexey S.",
          "date": "April 8, 2025",
          "rating": 4.5,
          "title": "Shining everywhere!",
          "content": "Surfaces shine like new!"
        }
      ]
    },
    {
      "id": 50,
      "name": "Wim Disinfection and Cleaning",
      "subtitle": "Universal cleaning product for disinfection and cleaning",
      "fullTitle": "Wim Disinfection and Cleaning - Universal cleaning product for disinfection and cleaning 500 ml",
      "description": "Product for disinfection and cleaning hard surfaces with up to 24 hours protection.",
      "longDescription": "This universal cleaner in a green bottle (500 ml) is designed for disinfection and cleaning hard surfaces such as toilets, sinks, and tiles. The formula removes bacteria up to 4 times faster and provides protection for up to 24 hours, maintaining hygiene in your home.",
      "image": "/images/Wim_Domestos_DisinfectionAndCleaning.png",
      "color": "#008000",
      "brandName": "Wim",
      "category": "Universal Cleaning Products",
      "features": [
        "Disinfection for hard surfaces",
        "Removes bacteria 4 times faster",
        "Protection for up to 24 hours",
        "Suitable for daily cleaning"
      ],
      "directions": [
        "Apply the product to the surface.",
        "Leave for 5 minutes, then wipe with a damp cloth.",
        "For tough stains, leave for 10 minutes.",
        "Keep out of reach of children."
      ],
      "rating": 4.5,
      "reviews": 78,
      "badge": "Disinfection and Cleaning",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽299"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Elena M.",
          "date": "April 9, 2025",
          "rating": 4.6,
          "title": "Top-notch disinfection!",
          "content": "Clean and safe, great product!"
        }
      ]
    }
  ]
},

// Wim - Dishwashing Liquids
{
  "title": "Wim Dishwashing Liquids",
  "description": "Effective dishwashing liquid that quickly removes grease and food residues while being gentle on the skin.",
  "image": "/images/Wim_DishwashingLiquid.png",
  "color": "#1D4E89",
  "brandName": "Wim",
  "category": "Dishwashing Liquids",
  "features": [
    "Powerful grease and dirt removal",
    "Hypoallergenic formula, gentle on the skin",
    "Rinses easily, leaves no residue"
  ],
  "products": [
    {
      "id": 13,
      "name": "New Wim",
      "subtitle": "Dishwashing Liquid with Pomegranate Scent",
      "fullTitle": "New Wim - Dishwashing Liquid with Pomegranate Scent 500 ml",
      "description": "Effective dishwashing liquid with pomegranate scent, removes grease and dirt.",
      "longDescription": "This dishwashing liquid effectively removes grease and dirt, leaving the dishes clean and shiny. Enriched with the scent of pomegranate, which gives a pleasant fragrance. Suitable for daily use, gently affects the skin.",
      "image": "/images/Wim_Nar+.png",
      "color": "#FF0000", 
      "brandName": "Wim",
      "category": "Dishwashing Liquids",
      "features": [
        "Effectively removes grease",
        "Pleasant pomegranate fragrance",
        "Gently affects the skin",
        "Leaves dishes shiny"
      ],
      "directions": [
        "Apply a small amount of the product on a sponge.",
        "Wash the dishes and rinse thoroughly with water.",
        "Keep out of reach of children."
      ],
      "rating": 4.5,
      "reviews": 85,
      "badge": "Pomegranate Fragrance",
      "sizes": [
        {
          "id": 1,
          "name": "1L",
          "quantity": "1000 ml",
          "price": "₽299"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Tatiana R.",
          "date": "March 18, 2025",
          "rating": 4.6,
          "title": "Excellent at Removing Grease!",
          "content": "The liquid foams well, removes grease easily, and the pomegranate scent is very pleasant!"
        }
      ]
    },
    {
      "id": 14,
      "name": "Wim Pomegranate",
      "subtitle": "Dishwashing Liquid with Enhanced Formula and Pomegranate Scent",
      "fullTitle": "Wim Pomegranate - Dishwashing Liquid with Enhanced Formula and Pomegranate Scent 500 ml",
      "description": "Enhanced dishwashing liquid with pomegranate scent, effectively removes grease and dirt.",
      "longDescription": "This premium dishwashing liquid with 5+ Ultra Plus enhanced formula effectively removes grease and tough dirt, leaving dishes clean and shiny. Enriched with pomegranate scent, which gives a pleasant fragrance. Suitable for daily use, gently affects the skin.",
      "image": "/images/Wim_Nar.png",
      "color": "#FF0000",
      "brandName": "Wim",
      "category": "Dishwashing Liquids",
      "features": [
        "Enhanced 5+ formula",
        "Effectively removes grease",
        "Pleasant pomegranate fragrance",
        "Gently affects the skin",
        "Leaves dishes shiny"
      ],
      "directions": [
        "Apply a small amount of the product on a sponge.",
        "Wash the dishes and rinse thoroughly with water.",
        "Keep out of reach of children."
      ],
      "rating": 4.6,
      "reviews": 90,
      "badge": "5+ Enhanced Formula",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽349"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Olga S.",
          "date": "March 18, 2025",
          "rating": 4.7,
          "title": "Best Product!",
          "content": "Handles even the toughest grease, and the pomegranate scent adds a cozy touch to the kitchen!"
        }
      ]
    },
    {
      "id": 1328425,
      "name": "Wim Lemon",
      "subtitle": "Dishwashing Liquid with Lemon Scent",
      "fullTitle": "Wim Lemon - Dishwashing Liquid with Lemon Scent 500 ml",
      "description": "Effective dishwashing liquid with lemon scent, removes grease and dirt.",
      "longDescription": "This dishwashing liquid effectively removes grease and dirt, leaving the dishes clean and shiny. Enriched with fresh lemon scent, which adds lightness and freshness to the kitchen. Suitable for daily use, gently affects the skin.",
      "image": "/images/Wim_Limon.png",
      "color": "#FFFF00",
      "brandName": "Wim",
      "category": "Dishwashing Liquids",
      "features": [
        "Effectively removes grease",
        "Fresh lemon fragrance",
        "Gently affects the skin",
        "Leaves dishes shiny"
      ],
      "directions": [
        "Apply a small amount of the product on a sponge.",
        "Wash the dishes and rinse thoroughly with water.",
        "Keep out of reach of children."
      ],
      "rating": 4.5,
      "reviews": 80,
      "badge": "Lemon Fragrance",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽299"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Irina K.",
          "date": "March 17, 2025",
          "rating": 4.6,
          "title": "Fresh Lemon Scent!",
          "content": "Handles grease very well, and the lemon scent makes the kitchen feel fresh!"
        }
      ]
    },
    {
      "id": 16,
      "name": "Wim Apple",
      "subtitle": "Dishwashing Liquid with Apple Scent",
      "fullTitle": "Wim Apple - Dishwashing Liquid with Apple Scent 500 ml",
      "description": "Effective dishwashing liquid with apple scent, removes grease and dirt.",
      "longDescription": "This dishwashing liquid effectively removes grease and dirt, leaving the dishes clean and shiny. Enriched with sweet apple scent, which adds a cozy and pleasant fragrance to the kitchen. Suitable for daily use, gently affects the skin.",
      "image": "/images/Wim_Alma.png",
      "color": "#00FF00",
      "brandName": "Wim",
      "category": "Dishwashing Liquids",
      "features": [
        "Effectively removes grease",
        "Sweet apple fragrance",
        "Gently affects the skin",
        "Leaves dishes shiny"
      ],
      "directions": [
        "Apply a small amount of the product on a sponge.",
        "Wash the dishes and rinse thoroughly with water.",
        "Keep out of reach of children."
      ],
      "rating": 4.4,
      "reviews": 75,
      "badge": "Apple Fragrance",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽299"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Elena M.",
          "date": "March 16, 2025",
          "rating": 4.5,
          "title": "Pleasant Apple Scent!",
          "content": "Cleans the dishes well, and the apple scent creates a cozy atmosphere in the kitchen!"
        }
      ]
    },

    // Wim - Dishwashing Liquids 1L
    {
      "id": 172148,
      "name": "Wim Pomegranate",
      "subtitle": "Dishwashing Liquid with Enhanced Formula and Pomegranate Scent",
      "fullTitle": "Wim Pomegranate - Dishwashing Liquid with Enhanced Formula and Pomegranate Scent 1000 ml",
      "description": "Enhanced dishwashing liquid with pomegranate scent, effectively removes grease and dirt.",
      "longDescription": "Premium dishwashing liquid with 5+ Ultra Plus formula, handles grease and tough stains. Pleasant pomegranate fragrance. Suitable for daily use, does not dry out the skin.",
      "image": "/images/Wim_Nar_1L.png",
      "color": "#FF0000",
      "brandName": "Wim",
      "category": "Dishwashing Liquids",
      "features": [
        "Enhanced 5+ formula",
        "Effectively removes grease",
        "Pleasant pomegranate fragrance",
        "Gently affects the skin",
        "Leaves dishes shiny"
      ],
      "directions": [
        "Apply a small amount of the product on a sponge.",
        "Wash the dishes and rinse thoroughly with water.",
        "Keep out of reach of children."
      ],
      "rating": 4.7,
      "reviews": 110,
      "badge": "5+ Enhanced Formula",
      "sizes": [
        {
          "id": 2,
          "name": "1L",
          "quantity": "1000 ml",
          "price": "₽449"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Anna L.",
          "date": "March 20, 2025",
          "rating": 4.8,
          "title": "Excellent Quality!",
          "content": "Large volume, lasts a long time. Handles grease quickly, and the scent is amazing!"
        },
        {
          "id": 2,
          "author": "Marina V.",
          "date": "March 21, 2025",
          "rating": 4.6,
          "title": "Effective Product",
          "content": "I love the formula – it doesn't dry out my hands and foams well. Convenient 1L size."
        }
      ]
    },
    {
      "id": 181241,
      "name": "Wim Lemon",
      "subtitle": "Dishwashing Liquid with Lemon Scent",
      "fullTitle": "Wim Lemon - Dishwashing Liquid with Lemon Scent 1000 ml",
      "description": "Effective dishwashing liquid with lemon scent, removes grease and adds freshness.",
      "longDescription": "Dishwashing liquid with a rich lemon scent. Quickly removes grease without leaving streaks. Suitable for daily use.",
      "image": "/images/Wim_Limon_1L.png",
      "color": "#FFFF00",
      "brandName": "Wim",
      "category": "Dishwashing Liquids",
      "features": [
        "Effectively removes grease",
        "Fresh lemon fragrance",
        "Gently affects the skin",
        "Leaves dishes shiny"
      ],
      "directions": [
        "Apply a small amount of the product on a sponge.",
        "Wash the dishes thoroughly and rinse with water.",
        "Keep out of reach of children."
      ],
      "rating": 4.6,
      "reviews": 95,
      "badge": "Lemon Fragrance",
      "sizes": [
        {
          "id": 2,
          "name": "1L",
          "quantity": "1000 ml",
          "price": "₽399"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Svetlana N.",
          "date": "March 19, 2025",
          "rating": 4.7,
          "title": "Very Economical",
          "content": "Lasts a month! The lemon scent refreshes the kitchen. Great product."
        },
        {
          "id": 2,
          "author": "Ekaterina P.",
          "date": "March 20, 2025",
          "rating": 4.5,
          "title": "Freshness and Cleanliness",
          "content": "Cleans great, the scent is not overpowering. The volume is great — a good purchase."
        }
      ]
    },
    {
      "id": 2129,
      "name": "Wim Apple",
      "subtitle": "Dishwashing Liquid with Apple Scent",
      "fullTitle": "Wim Apple - Dishwashing Liquid with Apple Scent 1000 ml",
      "description": "Effective dishwashing liquid with apple scent, gives cleanliness and comfort.",
      "longDescription": "Dishwashing liquid with a delicate apple scent. Effectively removes dirt, leaving the dishes clean. Gentle on the hands, foams well.",
      "image": "/images/Wim_Alma_1L.png",
      "color": "#00FF00",
      "brandName": "Wim",
      "category": "Dishwashing Liquids",
      "features": [
        "Effectively removes grease",
        "Sweet apple fragrance",
        "Gently affects the skin",
        "Leaves dishes shiny"
      ],
      "directions": [
        "Apply a small amount of the product on a sponge.",
        "Wash the dishes and rinse thoroughly with water.",
        "Keep out of reach of children."
      ],
      "rating": 4.5,
      "reviews": 88,
      "badge": "Apple Fragrance",
      "sizes": [
        {
          "id": 2,
          "name": "1L",
          "quantity": "1000 ml",
          "price": "₽399"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Darya Z.",
          "date": "March 18, 2025",
          "rating": 4.6,
          "title": "Super Apple Scent",
          "content": "It smells very nice, cleans excellently. Lasts a long time."
        },
        {
          "id": 2,
          "author": "Nina K.",
          "date": "March 19, 2025",
          "rating": 4.4,
          "title": "Great Volume",
          "content": "The quality is great, the scent is delicious. Convenient 1L bottle."
        }
      ]
    }
  ]
},

// Wim - Household Cleaning Sprays
{
  "title": "Vim Household Cleaning Sprays",
  "description": "Ready-to-use sprays for quick and easy surface cleaning.",
  "image": "/images/Vim_CleaningSpray.png",
  "color": "#1D3557",
  "brandName": "Vim",
  "category": "Household Cleaning Sprays",
  "features": [
    "Quickly removes stains and grease",
    "Does not leave streaks",
    "Has an antibacterial effect"
  ],
  "products": [
    {
      "id": 56,
      "name": "Wim Maximum Purity",
      "subtitle": "Universal Fabric Cleaner",
      "fullTitle": "Wim Maximum Purity - Universal Fabric Cleaner 500 ml",
      "description": "Effective fabric and upholstery cleaner with bacteria protection.",
      "longDescription": "This universal cleaner in a 500 ml brown bottle is designed for cleaning fabrics and upholstery, such as sofas and chairs. The formula provides bacteria protection, removes stains and dirt, while preserving fabric texture. Suitable for household use.",
      "image": "/images/Wim_sprey_antistains.png",
      "color": "#8B4513",
      "brandName": "Wim",
      "category": "Household Cleaning Sprays",
      "features": [
        "Cleans fabrics and upholstery",
        "Bacteria protection",
        "Removes stains and dirt",
        "Safe for household use"
      ],
      "directions": [
        "Test the product on an inconspicuous area of fabric.",
        "Spray onto the soiled surface from a distance of 15-20 cm.",
        "Leave for 1-2 minutes, then wipe with a soft cloth.",
        "Keep out of reach of children."
      ],
      "rating": 4.4,
      "reviews": 70,
      "badge": "For Fabrics",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽349"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Anastasia S.",
          "date": "April 15, 2025",
          "rating": 4.5,
          "title": "Sofa Like New!",
          "content": "Great at removing stains from upholstery!"
        }
      ]
    },
    {
      "id": 57,
      "name": "Wim Ultra Clean",
      "subtitle": "Universal Cleaner Against Dirt and Bacteria",
      "fullTitle": "Wim Ultra Clean - Universal Cleaner Against Dirt and Bacteria 500 ml",
      "description": "Powerful cleaner for removing dirt and bacteria from hard surfaces.",
      "longDescription": "This universal cleaner in a 500 ml black bottle is designed for deep cleaning hard surfaces, such as kitchen countertops and plumbing. The formula ensures powerful removal of dirt and bacteria, leaving surfaces clean and shiny. Perfect for daily cleaning.",
      "image": "/images/Wim_sprey_antifat.png",
      "color": "#000000",
      "brandName": "Wim",
      "category": "Household Cleaning Sprays",
      "features": [
        "Removes dirt and bacteria",
        "Deep cleaning",
        "Shine for hard surfaces",
        "Suitable for daily cleaning"
      ],
      "directions": [
        "Spray the product onto the surface.",
        "Leave for 5 minutes, then wipe with a damp cloth.",
        "For stubborn dirt, repeat the process.",
        "Keep out of reach of children."
      ],
      "rating": 4.6,
      "reviews": 85,
      "badge": "Against Dirt and Bacteria",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽349"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Dmitry K.",
          "date": "April 16, 2025",
          "rating": 4.7,
          "title": "Top Cleanliness!",
          "content": "Removes dirt quickly, pleasant scent!"
        }
      ]
    },
    {
      "id": 58,
      "name": "Wim Perfect Finish Oven & Grill",
      "subtitle": "Universal Cleaner for Ovens and Grills",
      "fullTitle": "Wim Perfect Finish Oven & Grill - Universal Cleaner for Ovens and Grills 500 ml",
      "description": "Grease remover for ovens and grills with 100% effectiveness.",
      "longDescription": "This universal cleaner in a 500 ml green bottle is specially designed for cleaning ovens and grills. The formula ensures 100% removal of tough grease, leaving surfaces clean and shiny. Suitable for intensive cleaning of kitchen equipment.",
      "image": "/images/Wim_sprey_ovenandgrill.png",
      "color": "#008000",
      "brandName": "Wim",
      "category": "Household Cleaning Sprays",
      "features": [
        "100% grease removal",
        "Suitable for ovens and grills",
        "Intensive cleaning",
        "Shine for kitchen surfaces"
      ],
      "directions": [
        "Spray the product onto a cold surface.",
        "Leave for 10-15 minutes, then wipe with a sponge.",
        "For stubborn dirt, repeat the process.",
        "Keep out of reach of children."
      ],
      "rating": 4.7,
      "reviews": 90,
      "badge": "Grease Removal",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽399"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Olga P.",
          "date": "April 17, 2025",
          "rating": 4.8,
          "title": "The Oven Shines!",
          "content": "Removes grease easily, very effective!"
        }
      ]
    },
    {
      "id": 59,
      "name": "Wim Perfect Finish Antiscale",
      "subtitle": "Universal Cleaner for Faucets and Mixers",
      "fullTitle": "Wim Perfect Finish Antiscale - Universal Cleaner for Faucets and Mixers 500 ml",
      "description": "Removes scale and lime deposits from faucets and mixers.",
      "longDescription": "This universal cleaner in a 500 ml blue bottle is designed to remove scale and lime deposits from faucets, mixers, and other metal surfaces. The formula ensures shine and prevents re-deposit formation, perfect for bathrooms.",
      "image": "/images/Wim_sprey_antiplaque.png",
      "color": "#0000FF",
      "brandName": "Wim",
      "category": "Household Cleaning Sprays",
      "features": [
        "Removes scale and lime deposits",
        "Shine for faucets and mixers",
        "Prevents re-scaling",
        "Suitable for bathrooms"
      ],
      "directions": [
        "Spray the product onto the surface.",
        "Leave for 5 minutes, then wipe with a soft cloth.",
        "For stubborn scale, repeat the process.",
        "Keep out of reach of children."
      ],
      "rating": 4.5,
      "reviews": 75,
      "badge": "Antiscale",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽349"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Igor M.",
          "date": "April 18, 2025",
          "rating": 4.6,
          "title": "Faucets Like New!",
          "content": "Scale comes off easily, great shine!"
        }
      ]
    },

    // New Product
    {
      "id": 64,
      "name": "New Wim Antigrease",
      "subtitle": "Grease Remover Cleaning Spray",
      "fullTitle": "New Wim Antigrease - Grease Remover Cleaning Spray 500 ml",
      "description": "Effective cleaning spray for removing grease from kitchen surfaces and stoves.",
      "longDescription": "This spray in a 500 ml black bottle is perfect for cleaning stoves, kitchen surfaces, and other greasy areas. It removes dirt, cleans effectively, and leaves surfaces streak-free. Ideal for use in kitchens and bathrooms.",
      "image": "/images/Wim_antifat_new.png",
      "color": "#1C1C1C",
      "brandName": "Wim",
      "category": "Household Cleaning Sprays",
      "features": [
        "Effectively removes grease",
        "Suitable for stoves and kitchen surfaces",
        "Streak-free",
        "500 ml"
      ],
      "directions": [
        "Spray the product onto the soiled surface.",
        "Leave for a few seconds to act.",
        "Wipe the surface with a clean cloth or sponge.",
        "Use in well-ventilated areas."
      ],
      "rating": 4.5,
      "reviews": 120,
      "badge": "New",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽199"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Marina K.",
          "date": "March 5, 2025",
          "rating": 4.8,
          "title": "Great Product!",
          "content": "Removes grease from the stove easily! Very satisfied."
        }
      ]
    },
    {
      "id": 65,
      "name": "New Wim Antiscale",
      "subtitle": "Cleaning Spray for Baths and Sinks",
      "fullTitle": "New Wim Antiscale - Cleaning Spray for Baths and Sinks 500 ml",
      "description": "Cleaning spray for removing scale and lime deposits from baths and sinks.",
      "longDescription": "This white spray in a 500 ml bottle effectively removes lime scale and dirt from baths, sinks, and other plumbing fixtures. Chlorine-free and safe for use in bathrooms. Leaves surfaces clean and streak-free.",
      "image": "/images/Wim_antiplaque_new.png",
      "color": "#F2F2F2",
      "brandName": "Wim",
      "category": "Household Cleaning Sprays",
      "features": [
        "Removes lime scale",
        "Chlorine-free",
        "Suitable for baths and sinks",
        "500 ml"
      ],
      "directions": [
        "Spray the product onto the soiled surface.",
        "Leave for a few minutes for more effective action.",
        "Wipe the surface with a clean sponge or cloth.",
        "Use in well-ventilated areas."
      ],
      "rating": 4.7,
      "reviews": 95,
      "badge": "Chlorine-Free",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽219"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Irina L.",
          "date": "February 14, 2025",
          "rating": 5.0,
          "title": "Very Satisfied!",
          "content": "Perfectly removes scale from the sink and bath, no chlorine smell."
        }
      ]
    },
    {
      "id": 66,
      "name": "New Wim Antistains",
      "subtitle": "Cleaning Spray for Fabrics and Furniture",
      "fullTitle": "New Wim Antistains - Cleaning Spray for Fabrics and Furniture 500 ml",
      "description": "Cleaning spray for removing stains from fabrics and furniture.",
      "longDescription": "This red spray in a 500 ml bottle effectively removes stains from furniture, carpets, and fabrics. It is perfect for tackling tough stains, leaving fabrics clean and fresh. Chlorine-free and safe for use on various materials.",
      "image": "/images/Wim_antistains_new.png",
      "color": "#D32F2F",
      "brandName": "Wim",
      "category": "Household Cleaning Sprays",
      "features": [
        "Removes tough stains",
        "Suitable for fabrics and furniture",
        "Chlorine-free",
        "500 ml"
      ],
      "directions": [
        "Spray the product onto the stain.",
        "Leave for a few minutes to act.",
        "Wipe the fabric or furniture with a clean cloth.",
        "Use in well-ventilated areas."
      ],
      "rating": 4.6,
      "reviews": 110,
      "badge": "For Fabrics and Furniture",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽239"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Olga V.",
          "date": "March 22, 2025",
          "rating": 4.7,
          "title": "Great for Furniture!",
          "content": "Very good at removing stains from fabric and leaves no marks."
        }
      ]
    }
  ]
},

// Yumşa Plus - Fabric Softeners
{
  "title": "Yumşa Plus Universal Liquid Detergent with Softener",
  "description": "Gentle detergent with a softener for delicate fabrics.",
  "image": "/images/Yumsa_Liquid.png",
  "color": "#1138b7",
  "brandName": "Yumşa Plus",
  "category": "Universal Liquid Detergents with Softener",
  "features": [
    "Gentle effect on fabrics",
    "Maintains garment shape",
    "Refreshing fragrance"
  ],
  "products": [
    {
      "id": 17,
      "name": "Yumsa Plus Lilyum",
      "subtitle": "Fabric Softener with Lily Fragrance",
      "fullTitle": "Yumsa Plus Lilyum - Fabric Softener with Lily Fragrance 60 Washes",
      "description": "Fabric softener with a delicate lily fragrance that softens fabrics and makes ironing easier.",
      "longDescription": "This fabric softener is designed to soften fabrics, make ironing easier, and impart a long-lasting lily fragrance. It is suitable for use in washing machines, ensuring softness and freshness of laundry after each wash.",
      "image": "/images/YumsaPlus_Lilyum.png",
      "color": "#0000FF",
      "brandName": "Yumsa Plus",
      "category": "Fabric Softeners and Rinses",
      "features": [
        "Delicate lily fragrance",
        "Softens fabrics",
        "Eases ironing",
        "Long-lasting freshness"
      ],
      "directions": [
        "Add 50 ml to the fabric softener compartment of the washing machine.",
        "Use for every 4-5 kg of laundry.",
        "Store in a cool, dry place."
      ],
      "rating": 4.4,
      "reviews": 70,
      "badge": "Lily Fragrance",
      "sizes": [
        {
          "id": 1,
          "name": "60 Washes",
          "quantity": "1000 ml",
          "price": "₽499"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Alina B.",
          "date": "March 18, 2025",
          "rating": 4.5,
          "title": "Very Soft Laundry!",
          "content": "The lily fragrance lasts long, and the laundry is incredibly soft!"
        }
      ]
    },
    {
      "id": 18,
      "name": "Yumsa Plus Orchid",
      "subtitle": "Fabric Softener with Orchid Fragrance",
      "fullTitle": "Yumsa Plus Orchid - Fabric Softener with Orchid Fragrance 60 Washes",
      "description": "Fabric softener with a refined orchid fragrance that softens fabrics and makes ironing easier.",
      "longDescription": "This fabric softener is designed to soften fabrics, make ironing easier, and impart a refined orchid fragrance. It is suitable for use in washing machines, ensuring softness and freshness of laundry after each wash.",
      "image": "/images/YumsaPlus_Orkide.png",
      "color": "#0000FF",
      "brandName": "Yumsa Plus",
      "category": "Fabric Softeners and Rinses",
      "features": [
        "Refined orchid fragrance",
        "Softens fabrics",
        "Eases ironing",
        "Long-lasting freshness"
      ],
      "directions": [
        "Add 50 ml to the fabric softener compartment of the washing machine.",
        "Use for every 4-5 kg of laundry.",
        "Store in a cool, dry place."
      ],
      "rating": 4.3,
      "reviews": 65,
      "badge": "Orchid Fragrance",
      "sizes": [
        {
          "id": 1,
          "name": "60 Washes",
          "quantity": "1000 ml",
          "price": "₽499"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Maria P.",
          "date": "March 17, 2025",
          "rating": 4.4,
          "title": "Exquisite Fragrance!",
          "content": "The orchid adds sophistication to the laundry, and it is very soft after washing!"
        }
      ]
    },
    {
      "id": 19,
      "name": "Yumsa Plus Rose",
      "subtitle": "Fabric Softener with Rose Fragrance",
      "fullTitle": "Yumsa Plus Rose - Fabric Softener with Rose Fragrance 60 Washes",
      "description": "Fabric softener with a gentle rose fragrance that softens fabrics and makes ironing easier.",
      "longDescription": "This fabric softener is designed to soften fabrics, make ironing easier, and impart a gentle rose fragrance. It is suitable for use in washing machines, ensuring softness and freshness of laundry after each wash.",
      "image": "/images/YumsaPlus_Roza.png",
      "color": "#0000FF",
      "brandName": "Yumsa Plus",
      "category": "Fabric Softeners and Rinses",
      "features": [
        "Gentle rose fragrance",
        "Softens fabrics",
        "Eases ironing",
        "Long-lasting freshness"
      ],
      "directions": [
        "Add 50 ml to the fabric softener compartment of the washing machine.",
        "Use for every 4-5 kg of laundry.",
        "Store in a cool, dry place."
      ],
      "rating": 4.5,
      "reviews": 72,
      "badge": "Rose Fragrance",
      "sizes": [
        {
          "id": 1,
          "name": "60 Washes",
          "quantity": "1000 ml",
          "price": "₽499"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Elena K.",
          "date": "March 16, 2025",
          "rating": 4.6,
          "title": "Wonderful Rose Fragrance!",
          "content": "The laundry smells of roses, and it is so soft and easy to iron!"
        }
      ]
    },
    {
      "id": 20,
      "name": "Yumsa Plus Family (Glamour)",
      "subtitle": "Fabric Softener with Glamorous Fragrance for the Whole Family",
      "fullTitle": "Yumsa Plus Family (Glamour) - Fabric Softener with Glamorous Fragrance for the Whole Family 60 Washes",
      "description": "Fabric softener with a luxurious glamorous fragrance that softens fabrics and is suitable for the whole family.",
      "longDescription": "This fabric softener is designed to soften fabrics, make ironing easier, and impart a luxurious glamorous fragrance, ideal for the whole family. It is suitable for use in washing machines, ensuring softness and freshness of laundry after each wash.",
      "image": "/images/YumsaPlus_Lilyum.png",
      "color": "#0000FF",
      "brandName": "Yumsa Plus",
      "category": "Fabric Softeners and Rinses",
      "features": [
        "Luxurious glamorous fragrance",
        "Softens fabrics",
        "Eases ironing",
        "Suitable for the whole family",
        "Long-lasting freshness"
      ],
      "directions": [
        "Add 50 ml to the fabric softener compartment of the washing machine.",
        "Use for every 4-5 kg of laundry.",
        "Store in a cool, dry place."
      ],
      "rating": 4.6,
      "reviews": 78,
      "badge": "Glamour for Family",
      "sizes": [
        {
          "id": 1,
          "name": "60 Washes",
          "quantity": "1000 ml",
          "price": "₽499"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Natalia G.",
          "date": "March 15, 2025",
          "rating": 4.7,
          "title": "Perfect for the Family!",
          "content": "The glamorous fragrance is loved by everyone, and the laundry is soft and easy to iron!"
        }
      ]
    },
    // Extra Softeners
    {
      "id": 21,
      "name": "Yumsa Plus Lilyum Extra Softener",
      "subtitle": "Fabric Softener with Lily Fragrance and Enhanced Softening",
      "fullTitle": "Yumsa Plus Lilyum Extra Softener - Fabric Softener with Lily Fragrance and Enhanced Softening 120 Washes",
      "description": "Fabric softener with a delicate lily fragrance, providing enhanced softening and easing ironing.",
      "longDescription": "This fabric softener with Extra Softener formula is designed for deep softening, easing ironing, and imparting a long-lasting lily fragrance. It is suitable for use in washing machines, ensuring exceptional softness and freshness of laundry after each wash.",
      "image": "/images/YumsaPlus_Lilyum+.png",
      "color": "#00CED1",
      "brandName": "Yumsa Plus",
      "category": "Universal Liquid Detergents with Softener",
      "features": [
        "Delicate lily fragrance",
        "Enhanced softening",
        "Eases ironing",
        "Long-lasting freshness"
      ],
      "directions": [
        "Add 50 ml to the fabric softener compartment of the washing machine.",
        "Use for every 4-5 kg of laundry.",
        "Store in a cool, dry place."
      ],
      "rating": 4.5,
      "reviews": 75,
      "badge": "Enhanced Softening",
      "sizes": [
        {
          "id": 1,
          "name": "120 Washes",
          "quantity": "2000 ml",
          "price": "₽699"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Oksana L.",
          "date": "March 18, 2025",
          "rating": 4.6,
          "title": "Incredible Softness!",
          "content": "The laundry became very soft, and the lily fragrance lasts a long time after washing!"
        }
      ]
    },
    {
      "id": 22,
      "name": "Yumsa Plus Orchid Extra Softener",
      "subtitle": "Fabric Softener with Orchid Fragrance and Enhanced Softening",
      "fullTitle": "Yumsa Plus Orchid Extra Softener - Fabric Softener with Orchid Fragrance and Enhanced Softening 120 Washes",
      "description": "Fabric softener with a refined orchid fragrance, providing enhanced softening and easing ironing.",
      "longDescription": "This fabric softener with Extra Softener formula is designed for deep softening, easing ironing, and imparting a refined orchid fragrance. It is suitable for use in washing machines, ensuring exceptional softness and freshness of laundry after each wash.",
      "image": "/images/YumsaPlus_Orkide+.png",
      "color": "#00CED1",
      "brandName": "Yumsa Plus",
      "category": "Universal Liquid Detergents with Softener",
      "features": [
        "Refined orchid fragrance",
        "Enhanced softening",
        "Eases ironing",
        "Long-lasting freshness"
      ],
      "directions": [
        "Add 50 ml to the fabric softener compartment of the washing machine.",
        "Use for every 4-5 kg of laundry.",
        "Store in a cool, dry place."
      ],
      "rating": 4.4,
      "reviews": 70,
      "badge": "Enhanced Softening",
      "sizes": [
        {
          "id": 1,
          "name": "120 Washes",
          "quantity": "2000 ml",
          "price": "₽699"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Svetlana N.",
          "date": "March 17, 2025",
          "rating": 4.5,
          "title": "Exquisite Fragrance!",
          "content": "The orchid gives the laundry a refined touch, and the softening is superb!"
        }
      ]
    },
    {
      "id": 23,
      "name": "Yumsa Plus Rose Extra Softener",
      "subtitle": "Fabric Softener with Rose Fragrance and Enhanced Softening",
      "fullTitle": "Yumsa Plus Rose Extra Softener - Fabric Softener with Rose Fragrance and Enhanced Softening 120 Washes",
      "description": "Fabric softener with a gentle rose fragrance, providing enhanced softening and easing ironing.",
      "longDescription": "This fabric softener with Extra Softener formula is designed for deep softening, easing ironing, and imparting a gentle rose fragrance. It is suitable for use in washing machines, ensuring exceptional softness and freshness of laundry after each wash.",
      "image": "/images/YumsaPlus_Roza+.png",
      "color": "#00CED1",
      "brandName": "Yumsa Plus",
      "category": "Universal Liquid Detergents with Softener",
      "features": [
        "Gentle rose fragrance",
        "Enhanced softening",
        "Eases ironing",
        "Long-lasting freshness"
      ],
      "directions": [
        "Add 50 ml to the fabric softener compartment of the washing machine.",
        "Use for every 4-5 kg of laundry.",
        "Store in a cool, dry place."
      ],
      "rating": 4.5,
      "reviews": 73,
      "badge": "Enhanced Softening",
      "sizes": [
        {
          "id": 1,
          "name": "120 Washes",
          "quantity": "2000 ml",
          "price": "₽699"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Anna V.",
          "date": "March 16, 2025",
          "rating": 4.6,
          "title": "Wonderful Rose Fragrance!",
          "content": "The laundry is softer than ever, and the rose scent lasts a long time!"
        }
      ]
    },
    {
      "id": 24,
      "name": "Yumsa Plus Family (Glamour) Extra Softener",
      "subtitle": "Fabric Softener with Glamorous Fragrance and Enhanced Softening for the Whole Family",
      "fullTitle": "Yumsa Plus Family (Glamour) Extra Softener - Fabric Softener with Glamorous Fragrance and Enhanced Softening for the Whole Family 120 Washes",
      "description": "Fabric softener with a luxurious glamorous fragrance, providing enhanced softening and suitable for the whole family.",
      "longDescription": "This fabric softener with Extra Softener formula is designed for deep softening, easing ironing, and imparting a luxurious glamorous fragrance, ideal for the whole family. It is suitable for use in washing machines, ensuring exceptional softness and freshness of laundry after each wash.",
      "image": "/images/YumsaPlus_Masgalam+.png",
      "color": "#00CED1",
      "brandName": "Yumsa Plus",
      "category": "Universal Liquid Detergents with Softener",
      "features": [
        "Luxurious glamorous fragrance",
        "Enhanced softening",
        "Eases ironing",
        "Suitable for the whole family",
        "Long-lasting freshness"
      ],
      "directions": [
        "Add 50 ml to the fabric softener compartment of the washing machine.",
        "Use for every 4-5 kg of laundry.",
        "Store in a cool, dry place."
      ],
      "rating": 4.6,
      "reviews": 80,
      "badge": "Enhanced Softening for Family",
      "sizes": [
        {
          "id": 1,
          "name": "120 Washes",
          "quantity": "2000 ml",
          "price": "₽699"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Tamara D.",
          "date": "March 15, 2025",
          "rating": 4.7,
          "title": "Perfect for Everyone!",
          "content": "The glamorous fragrance is loved by the whole family, and the laundry is soft and fresh!"
        }
      ]
    }
  ]
},


// Yumşa Plus - Fabric Freshening Sprays
{
  "title": "Yumşa Plus Fabric Freshening Sprays",
  "description": "A product for refreshing clothes and home textiles.",
  "image": "/images/YumsaPlus_FabricFreshener.png",
  "color": "#8D99AE",
  "brandName": "Yumşa Plus",
  "category": "Fabric Freshening Sprays",
  "features": [
    "Removes unpleasant odors",
    "Makes fabric soft and fragrant",
    "Suitable for all fabric types"
  ],
  "products": [
    {
      "id": 9,
      "name": "Yumsa Plus Spray Rosa",
      "subtitle": "Fabric Freshener Spray with Rose Fragrance",
      "fullTitle": "Yumsa Plus Spray Rosa - Fabric Freshener Spray with Rose Fragrance",
      "description": "Fabric freshener spray with a delicate rose fragrance, suitable for clothes and soft surfaces.",
      "longDescription": "This fabric freshener spray is designed to refresh clothes and soft surfaces with a pleasant rose fragrance. It is easy to apply, does not leave stains, and is suitable for use between washes. Contains softening components to protect fabrics.",
      "image": "/images/YumsaPlus_sprey_rosa.png",
      "color": "#FF0000",
      "brandName": "Yumsa Plus",
      "category": "Fabric Freshening Sprays",
      "features": [
        "Delicate rose fragrance",
        "Refreshes clothes and fabrics",
        "Does not leave stains",
        "Softens fabrics"
      ],
      "directions": [
        "Spray from a distance of 15-20 cm from the fabric.",
        "Store in a cool, dry place out of reach of children."
      ],
      "rating": 4.3,
      "reviews": 60,
      "badge": "Rose Fragrance",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽399"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Svetlana V.",
          "date": "March 14, 2025",
          "rating": 4.4,
          "title": "Wonderful Fragrance!",
          "content": "The spray leaves a wonderful rose scent on clothes, and the fabric becomes softer!"
        }
      ]
    },
    {
      "id": 10,
      "name": "Yumsa Plus Spray Glamour",
      "subtitle": "Fabric Freshener Spray with Glamorous Fragrance",
      "fullTitle": "Yumsa Plus Spray Glamour - Fabric Freshener Spray with Glamorous Fragrance",
      "description": "Fabric freshener spray with a luxurious glamorous fragrance, suitable for clothes and soft surfaces.",
      "longDescription": "This fabric freshener spray is designed to refresh clothes and soft surfaces with an elegant glamorous fragrance. It is easy to apply, does not leave stains, and is suitable for use between washes. Contains softening components to protect fabrics.",
      "image": "/images/YumsaPlus_sprey_glamour.png",
      "color": "#FF0000",
      "brandName": "Yumsa Plus",
      "category": "Fabric Freshening Sprays",
      "features": [
        "Luxurious glamorous fragrance",
        "Refreshes clothes and fabrics",
        "Does not leave stains",
        "Softens fabrics"
      ],
      "directions": [
        "Spray from a distance of 15-20 cm from the fabric.",
        "Store in a cool, dry place out of reach of children."
      ],
      "rating": 4.4,
      "reviews": 65,
      "badge": "Glamorous Fragrance",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽399"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Ekaterina D.",
          "date": "March 15, 2025",
          "rating": 4.5,
          "title": "Feel of Luxury!",
          "content": "The fragrance makes clothes incredibly elegant, and the fabric stays soft!"
        }
      ]
    },
    {
      "id": 11,
      "name": "Yumsa Plus Spray Orchid",
      "subtitle": "Fabric Freshener Spray with Orchid Fragrance",
      "fullTitle": "Yumsa Plus Spray Orchid - Fabric Freshener Spray with Orchid Fragrance",
      "description": "Fabric freshener spray with a refined orchid fragrance, suitable for clothes and soft surfaces.",
      "longDescription": "This fabric freshener spray is designed to refresh clothes and soft surfaces with a delicate orchid fragrance. It is easy to apply, does not leave stains, and is suitable for use between washes. Contains softening components to protect fabrics.",
      "image": "/images/YumsaPlus_sprey_orkide.png",
      "color": "#FF0000",
      "brandName": "Yumsa Plus",
      "category": "Fabric Freshening Sprays",
      "features": [
        "Refined orchid fragrance",
        "Refreshes clothes and fabrics",
        "Does not leave stains",
        "Softens fabrics"
      ],
      "directions": [
        "Spray from a distance of 15-20 cm from the fabric.",
        "Store in a cool, dry place out of reach of children."
      ],
      "rating": 4.3,
      "reviews": 60,
      "badge": "Orchid Fragrance",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽399"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Marina P.",
          "date": "March 16, 2025",
          "rating": 4.4,
          "title": "Delicate and Refined!",
          "content": "The orchid fragrance adds sophistication to the clothes, and the fabric feels soft!"
        }
      ]
    },
    {
      "id": 12,
      "name": "Yumsa Plus Spray Lily",
      "subtitle": "Fabric Freshener Spray with Lily Fragrance",
      "fullTitle": "Yumsa Plus Spray Lily - Fabric Freshener Spray with Lily Fragrance",
      "description": "Fabric freshener spray with a gentle lily fragrance, suitable for clothes and soft surfaces.",
      "longDescription": "This fabric freshener spray is designed to refresh clothes and soft surfaces with a delicate lily fragrance. It is easy to apply, does not leave stains, and is suitable for use between washes. Contains softening components to protect fabrics.",
      "image": "/images/YumsaPlus_sprey_lilyum.png",
      "color": "#FF0000",
      "brandName": "Yumsa Plus",
      "category": "Fabric Freshening Sprays",
      "features": [
        "Delicate lily fragrance",
        "Refreshes clothes and fabrics",
        "Does not leave stains",
        "Softens fabrics"
      ],
      "directions": [
        "Spray from a distance of 15-20 cm from the fabric.",
        "Store in a cool, dry place out of reach of children."
      ],
      "rating": 4.4,
      "reviews": 62,
      "badge": "Lily Fragrance",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽399"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Anna T.",
          "date": "March 17, 2025",
          "rating": 4.5,
          "title": "Wonderful Floral Scent!",
          "content": "The lily fragrance makes the clothes fresh and soft, very happy with the result!"
        }
      ]
    }
  ]
},

// Yumşa Plus - Home and Fabric Fresheners
{
  "title": "Yumşa Plus Home and Fabric Fresheners",
  "description": "Yumşa Plus fresheners create a pleasant atmosphere in the home and add freshness to your laundry. The convenient spray format makes it easy to freshen up a room or fabric.",
  "image": "/images/category_pictures/YumsaPlus_sprey2.png",
  "color": "#FCD900",
  "brandName": "Yumsa Plus",
  "category": "Home and Fabric Fresheners",
  "features": [
    "Suitable for home and textiles",
    "Refreshes the air and neutralizes odors",
    "Long-lasting fragrances"
  ],
  "products": [
    {
      "id": 1465501,
      "name": "Yumsa Plus Glamour",
      "subtitle": "Freshener with Glamorous Floral Fragrance",
      "fullTitle": "Yumsa Plus Glamour - Home and Fabric Freshener 500 ml",
      "description": "Floral fragrance with hints of spring freshness for your home and textiles.",
      "longDescription": "Yumsa Plus Glamour is a refreshing air freshener with a vibrant and glamorous floral fragrance, perfect for use both at home and on laundry. The 500 ml packaging with a convenient spray nozzle leaves a gentle, long-lasting scent of spring.",
      "image": "/images/YumsaPlus_spray_glamour.png",
      "color": "#FCD900",
      "brandName": "Yumsa Plus",
      "category": "Home and Fabric Fresheners",
      "features": [
        "Glamorous floral fragrance",
        "Refreshes air and fabric",
        "Easy to use with the spray nozzle"
      ],
      "directions": [
        "Spray from a distance of 30 cm from the fabric or in the air.",
        "Avoid contact with skin and sensitive surfaces.",
        "Do not use on silk or delicate fabrics.",
        "Store in a cool place, out of reach of children."
      ],
      "rating": 4.7,
      "reviews": 65,
      "badge": "Glamorous Fragrance",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽259"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Olga S.",
          "date": "April 8, 2025",
          "rating": 4.8,
          "title": "Spring Fragrance",
          "content": "A very pleasant, gentle fragrance! I use it for laundry and in the bedroom."
        }
      ]
    },
    {
      "id": 125302,
      "name": "Yumsa Plus Lavanda",
      "subtitle": "Freshener with Relaxing Lavender Fragrance",
      "fullTitle": "Yumsa Plus Lavanda - Home and Fabric Freshener 500 ml",
      "description": "Soothing lavender fragrance for creating coziness and relaxation.",
      "longDescription": "Yumsa Plus Lavanda will create a cozy and peaceful atmosphere in your home with its natural lavender fragrance. This 500 ml freshener is perfect for the bedroom, bathroom, and textiles.",
      "image": "/images/YumsaPlus_spray_lavanta.png",
      "color": "#A569BD",
      "brandName": "Yumsa Plus",
      "category": "Home and Fabric Fresheners",
      "features": [
        "Natural lavender fragrance",
        "Soothing effect",
        "Refreshes air and fabric"
      ],
      "directions": [
        "Spray on fabric or in the air.",
        "Avoid contact with eyes.",
        "Store in a place out of reach of children."
      ],
      "rating": 4.9,
      "reviews": 78,
      "badge": "Lavender",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽259"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Svetlana R.",
          "date": "April 5, 2025",
          "rating": 4.9,
          "title": "Relaxing Effect",
          "content": "The lavender scent is simply magical, it helps me relax before bed."
        }
      ]
    },
    {
      "id": 10253,
      "name": "Yumsa Plus Lilyum",
      "subtitle": "Freshener with Lily Fragrance",
      "fullTitle": "Yumsa Plus Lilyum - Home and Fabric Freshener 500 ml",
      "description": "Rich lily fragrance for the freshness of your home and laundry.",
      "longDescription": "Yumsa Plus Lilyum air freshener fills the room with a rich and elegant lily fragrance. The 500 ml bottle is perfect for bed linen, curtains, soft furniture, and air.",
      "image": "/images/YumsaPlus_spray_lilyum.png",
      "color": "#E67BA1",
      "brandName": "Yumsa Plus",
      "category": "Home and Fabric Fresheners",
      "features": [
        "Floral lily fragrance",
        "Pleasant freshness for a long time",
        "Suitable for textiles and air"
      ],
      "directions": [
        "Spray evenly from a distance of 30 cm.",
        "Do not apply to silk or sensitive fabrics.",
        "Avoid spraying on polished surfaces."
      ],
      "rating": 4.8,
      "reviews": 72,
      "badge": "Lily",
      "sizes": [
        {
          "id": 1,
          "name": "500 ml",
          "quantity": "500 ml",
          "price": "₽259"
        }
      ],
      "reviewsList": [
        {
          "id": 1,
          "author": "Natalia I.",
          "date": "April 9, 2025",
          "rating": 4.8,
          "title": "Favorite Fragrance!",
          "content": "I use it every day, lily is my favorite. The fragrance is long-lasting and gentle."
        }
      ]
    }
  ]
},

// Awen - Dishwashing Liquids
{
  title: "Awen Dishwashing Liquids",
  description: "Effective dishwashing liquid that quickly removes grease and food residues.",
  image: "/images/Awen_DishwashingLiquid.png",
  color: "#F77F00",
  brandName: "Awen",
  category: "Dishwashing Liquids",
  features: [
    "Quickly removes grease and food residues",
    "Gentle on hands",
    "Generous foam and easy rinsing"
  ],
  products: [
    {
      id: 26,
      name: "Awen Apple",
      subtitle: "Dishwashing liquid with apple fragrance",
      fullTitle: "Awen Apple - Dishwashing Liquid with Apple Fragrance 5 kg",
      description: "Effective dishwashing liquid with fresh apple fragrance, removes grease and dirt.",
      longDescription:
        "This dishwashing liquid effectively removes grease and dirt, leaving dishes clean and shiny. Enriched with a fresh apple fragrance, it adds a pleasant scent to your kitchen. Suitable for daily use, it is gentle on your hands.",
      image: "/images/Awen_alma.png",
      color: "#00FF00", // Green color based on the packaging
      brandName: "Awen",
      category: "Dishwashing Liquids",
      features: [
        "Effectively removes grease",
        "Fresh apple fragrance",
        "Gentle on hands",
        "Leaves dishes shiny"
      ],
      directions: [
        "Apply a small amount to a sponge.",
        "Wash dishes and rinse thoroughly with water.",
        "Keep out of reach of children."
      ],
      rating: 4.4, // Estimated based on typical product ratings
      reviews: 70, // Estimated based on typical review counts
      badge: "Apple Fragrance",
      sizes: [
        {
          id: 1,
          name: "5 kg",
          quantity: "5000 ml", // Estimated volume for 5 kg
          price: "₽799" // Estimated price based on size
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Elena P.",
          date: "March 18, 2025",
          rating: 4.5,
          title: "Pleasant apple scent!",
          content: "Works well with grease, and the apple fragrance refreshes the kitchen!"
        }
      ]
    },
    {
      id: 27,
      name: "Awen Lemon-Lime",
      subtitle: "Dishwashing liquid with lemon-lime fragrance",
      fullTitle: "Awen Lemon-Lime - Dishwashing Liquid with Lemon-Lime Fragrance 5 kg",
      description: "Effective dishwashing liquid with a refreshing lemon-lime fragrance, removes grease and dirt.",
      longDescription:
        "This dishwashing liquid effectively removes grease and dirt, leaving dishes clean and shiny. Enriched with a refreshing lemon-lime fragrance, it adds a light and fresh feeling to your kitchen. Suitable for daily use, it is gentle on your hands.",
      image: "/images/Awen_limon.png",
      color: "#FFFF00", // Yellow color based on the packaging
      brandName: "Awen",
      category: "Dishwashing Liquids",
      features: [
        "Effectively removes grease",
        "Refreshing lemon-lime fragrance",
        "Gentle on hands",
        "Leaves dishes shiny"
      ],
      directions: [
        "Apply a small amount to a sponge.",
        "Wash dishes and rinse thoroughly with water.",
        "Keep out of reach of children."
      ],
      rating: 4.5, // Estimated based on typical product ratings
      reviews: 72, // Estimated based on typical review counts
      badge: "Lemon-Lime Fragrance",
      sizes: [
        {
          id: 1,
          name: "5 kg",
          quantity: "5000 ml", // Estimated volume for 5 kg
          price: "₽799" // Estimated price based on size
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Olga K.",
          date: "March 17, 2025",
          rating: 4.6,
          title: "Fresh citrus fragrance!",
          content: "Great at removing grease, and the lemon-lime scent brightens the kitchen!"
        }
      ]
    },
    {
      id: 28,
      name: "Awen Pomegranate",
      subtitle: "Dishwashing liquid with pomegranate fragrance",
      fullTitle: "Awen Pomegranate - Dishwashing Liquid with Pomegranate Fragrance 5 kg",
      description: "Effective dishwashing liquid with pomegranate fragrance, removes grease and dirt.",
      longDescription:
        "This dishwashing liquid effectively removes grease and dirt, leaving dishes clean and shiny. Enriched with pomegranate fragrance, it adds a pleasant and rich scent to your kitchen. Suitable for daily use, it is gentle on your hands.",
      image: "/images/Awen_nar.png",
      color: "#FF4500", // Red-orange color based on the packaging
      brandName: "Awen",
      category: "Dishwashing Liquids",
      features: [
        "Effectively removes grease",
        "Pleasant pomegranate fragrance",
        "Gentle on hands",
        "Leaves dishes shiny"
      ],
      directions: [
        "Apply a small amount to a sponge.",
        "Wash dishes and rinse thoroughly with water.",
        "Keep out of reach of children."
      ],
      rating: 4.6, // Estimated based on typical product ratings
      reviews: 75, // Estimated based on typical review counts
      badge: "Pomegranate Fragrance",
      sizes: [
        {
          id: 1,
          name: "5 kg",
          quantity: "5000 ml", // Estimated volume for 5 kg
          price: "₽799" // Estimated price based on size
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Irina M.",
          date: "March 16, 2025",
          rating: 4.7,
          title: "Rich fragrance!",
          content: "It works perfectly with grease, and the pomegranate scent adds comfort!"
        }
      ]
    }
  ]
},

// Glass Plus - Glass and Surface Cleaners
{
  title: "Glass Plus Glass and Surface Cleaners",
  description: "Cleaning agent for glass, mirrors, and glossy surfaces without streaks.",
  image: "/images/GlassPlus_Cleaner.png",
  color: "#00A8E8",
  brandName: "Glass Plus",
  category: "Glass and Surface Cleaners",
  features: [
    "Removes dirt and fingerprints",
    "No streaks left",
    "Anti-static effect"
  ],
  products: [
    {
      id: 25,
      name: "Glass Plus",
      subtitle: "Spray for cleaning glass and surfaces",
      fullTitle: "Glass Plus - Spray for cleaning glass and surfaces 500 ml",
      description: "Effective spray for cleaning glass, mirrors, and other surfaces with a new formula.",
      longDescription:
        "This spray is designed to quickly and effectively remove dirt, stains, and streaks from glass, mirrors, and smooth surfaces. The new formula with 3% enhanced power ensures crystal-clear cleanliness and shine without streaks. Suitable for daily use at home.",
      image: "/images/category_pictures/GlassPlus.png",
      color: "#00B7EB", // Blue color based on the packaging
      brandName: "Glass Plus",
      category: "Glass and Surface Cleaners",
      features: [
        "Effectively removes stains and streaks",
        "New formula with 3% enhancement",
        "Suitable for glass and mirrors",
        "Leaves surfaces shining"
      ],
      directions: [
        "Spray the product onto the surface from a distance of 15-20 cm.",
        "Wipe with a dry or damp cloth until the dirt is completely removed.",
        "Keep out of reach of children."
      ],
      rating: 4.4, // Estimated based on typical product ratings
      reviews: 68, // Estimated based on typical review counts
      badge: "New Formula",
      sizes: [
        {
          id: 1,
          name: "500 ml",
          quantity: "500 ml",
          price: "₽349" // Estimated price based on size
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Victoria S.",
          date: "March 18, 2025",
          rating: 4.5,
          title: "Glass like new!",
          content: "Works great with streaks, glass shines, and the smell is pleasant!"
        }
      ]
    }
  ]
},

// Ajayyp and Altyn Ay Paper
{
  title: "Ajayyp and Altyn Ay Paper",
  description: "Ajayyp and Altyn Ay paper is a high-quality product that ensures comfort and softness during use. Made in Turkmenistan, following all environmental standards.",
  image: "/images/Bumaga_ajayyp.png",
  color: "#FFFFFF",
  brandName: "Ajayyp and Altyn Ay",
  category: "Paper",
  features: [
    "Soft and durable",
    "Suitable for bathroom use",
    "Eco-friendly product"
  ],
  products: [
    {
      id: 1043244,
      name: "Ajayyp Paper",
      subtitle: "Eco-friendly toilet paper of the highest quality",
      fullTitle: "Ajayyp Paper - 20 meters",
      description: "Soft and durable paper with a floral design, perfect for comfortable use.",
      longDescription:
        "Ajayyp is high-quality paper 20 meters long. It has high strength and softness, ensuring comfort during use. The convenient packaging and stylish floral design add elegance.",
      image: "/images/Ajayyp_ToiletPaper.png",
      color: "#F4B400",
      brandName: "Ajayyp",
      category: "Paper",
      features: [
        "Soft and pleasant to the touch",
        "Floral design packaging",
        "Durable and strong"
      ],
      directions: [
        "Store in a dry and cool place."
      ],
      rating: 4.6,
      reviews: 34,
      badge: "Floral Design",
      sizes: [
        {
          id: 1,
          name: "20 meters",
          quantity: "20 meters",
          price: "₽129"
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Elena I.",
          date: "April 7, 2025",
          rating: 4.7,
          title: "Great quality!",
          content: "Soft and durable paper, perfect for daily use."
        }
      ]
    },
    {
      id: 1025235,
      name: "Altyn Ay Paper",
      subtitle: "Eco-friendly toilet paper",
      fullTitle: "Altyn Ay Paper - 17 meters",
      description: "Eco-friendly paper with a minimalist design, ensuring comfort and cleanliness.",
      longDescription:
        "Altyn Ay is eco-friendly paper 17 meters long. It is perfect for use in the bathroom due to its softness and strength. Convenient packaging with a minimalist design.",
      image: "/images/AltynAy_ToiletPaper.png",
      color: "#D1E2E4",
      brandName: "Altyn Ay",
      category: "Paper",
      features: [
        "Eco-friendly paper",
        "Strong and soft material",
        "Minimalist design"
      ],
      directions: [
        "Use as needed in the bathroom.",
        "Store in a dry place."
      ],
      rating: 4.8,
      reviews: 58,
      badge: "Eco-friendly",
      sizes: [
        {
          id: 1,
          name: "17 meters",
          quantity: "17 meters",
          price: "₽149"
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Maxim P.",
          date: "April 6, 2025",
          rating: 4.8,
          title: "Eco-friendly and high quality",
          content: "Very satisfied with the purchase, the paper is soft and environmentally safe!"
        }
      ]
    }
  ]
},

// Lagis - Laundry Powder
{
  title: "Lagis Laundry Powder for Hand Wash",
  description: "Lagis laundry powder with a long-lasting fragrance and effective formula for hand washing. Provides freshness and gentle cleaning of fabrics.",
  image: "/images/Lagis.png",
  color: "#8ECDED",
  brandName: "Lagis",
  category: "Laundry Powders",
  features: [
    "Suitable for hand washing",
    "Pleasant and lasting fragrance",
    "Easily dissolves and rinses"
  ],
  products: [
    {
      id: 213209,
      name: "Lagis Everlasting Scent",
      subtitle: "Laundry powder for hand wash",
      fullTitle: "Lagis Everlasting Scent - Laundry Powder for Hand Wash 450g",
      description: "Laundry powder for hand washing with a rich fragrance and light formula for stain removal.",
      longDescription:
        "Lagis Everlasting Scent is a laundry powder for hand washing that effectively removes stains and gives laundry a fresh and lasting fragrance. The powder formula is gentle and safe for hands. The 450g packaging is perfect for daily use.",
      image: "/images/Lagis.png",
      color: "#00B2E3",
      brandName: "Lagis",
      category: "Laundry Powders",
      features: [
        "Long-lasting floral fragrance",
        "Gentle formula for hand washing",
        "Convenient packaging"
      ],
      directions: [
        "Dissolve the powder in warm water.",
        "Soak laundry for 10-15 minutes.",
        "Wash and thoroughly rinse with water.",
        "Store in a dry place, away from moisture."
      ],
      rating: 4.9,
      reviews: 22,
      badge: "For Hand Wash",
      sizes: [
        {
          id: 1,
          name: "450g",
          quantity: "450g",
          price: "₽89"
        }
      ],
      reviewsList: [
        {
          id: 1,
          author: "Gulnara T.",
          date: "April 8, 2025",
          rating: 4.8,
          title: "Fresh fragrance and cleanliness",
          content: "Very happy, easily removes stains and smells nice. I use it only for hand washing."
        }
      ]
    }
  ]
}


  
      ];