// import Image from "next/image"
// import { Input } from "@/app/components/ui/input"
// import { Button } from "@/app/components/ui/button"
// import { Search } from "lucide-react"
// import Link from "next/link"

// export default function Page() {
//   return (
//     <div className="min-h-screen flex flex-col">

// <main 
//   className="min-h-[360px] relative overflow-hidden bg-cover bg-center bg-no-repeat"
//   style={{
//     backgroundImage: "url('https://images.ctfassets.net/ajjw8wywicb3/4iwxvPLjl0WUjZPK4vcR5J/14703e617994a45cbbee84394e535d45/Tide_GQ_module1_20250102_min1400px.jpg?fm=webp')",
//     backgroundPosition: "center right", // Ensures the image is centered
//     backgroundSize: "cover" // Scales the image to cover the container fully
//   }}
// >
//   <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
//     {/* Text Section */}
//     <div className="max-w-lg text-center md:text-left">
//       <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-6 md:mb-8" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//         Enter for a chance to win tickets to Marvel Studios' Captain America: Brave New World.
//       </h1>
      
//       <button className="bg-[#1E22AA] hover:bg-[#2a2eb8] text-white px-6 py-3 text-lg md:text-xl rounded-full font-semibold mb-4">
//         LEARN MORE
//       </button>
      
//       <p className="text-sm text-white italic leading-relaxed">
//         NO PURCHASE NECESSARY. 48 contig US/DC, 18+.<br />
//         Ends 11:59 pm ET on 1/24/25. Rules:<br />
//         <a href="https://tide.com/collateralstainscreening" className="underline">tide.com/collateralstainscreening</a>
//       </p>
//     </div>
//   </div>
// </main>


//       {/* Product Showcase Section */}
//       <section className="min-h-[760px] bg-[#1E22AA] text-white py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.ctfassets.net/ajjw8wywicb3/5HnHphjBUsELBo56qcrxFx/4c3171c5e0ecc897cd8746ae31b8491f/Tide_Power_Pods_module2_20240304_min1200px.png?fm=webp')", backgroundPosition: "center left", // Ensures the image is centered
//     backgroundSize: "50% 100%" }}>
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="relative">
//             </div>
//             <div className="space-y-6">
//               <h2 className="text-2xl">Tide</h2>
//               <h3 className="text-6xl font-bold leading-tight">
//                 POWER
//                 <br />
//                 PODS<sup>®</sup>
//               </h3>
//               <p className="text-xl">
//                 Life is messier. Washing machines are bigger.
//                 <br />
//                 Bigger PODS<sup>®</sup> means a better clean in every load.
//                 <br />
//                 Now there's a Tide Power PODS<sup>®</sup> product for any mess.
//               </p>
//               <Button className="bg-[#fb4b06] rounded-full hover:bg-[#f06937] text-white px-8 py-6 text-xl">Shop Collection</Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Carousel Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#fb4b06] mb-12 text-left" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//             See what we've been working on lately
//           </h2>

//           <div className="relative">

//             <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#fb4b06] text-white rounded-full p-2 -ml-5 hidden md:block hover:bg-[#f06937]">
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M15 18l-6-6 6-6" />
//               </svg>
//             </button>


//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-16">

//               <div className="bg-gray-50 rounded-lg overflow-hidden max-w-80">
//                 <div className="relative">
//                   <Image
//                     src="https://images.ctfassets.net/ajjw8wywicb3/9s5PKguheUPXd8qnrqIx4/ded69bca9b230a76db0d078810c5fa72/Tide_GQ_card_322x210_20250103_.jpg?fm=webp"
//                     alt="Tide Oxi Boost with Captain America"
//                     width={400}
//                     height={300}
//                     className="w-full h-52 object-cover bg-[#E85D24]"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-[#1E22AA] text-xl font-bold mb-6">OUR MOST POWERFUL CLEAN IN ANY UNIVERSE.</h3>
//                   <Button className="bg-[#1E22AA] rounded-full hover:bg-[#2a2eb8] text-white">Learn More</Button>
//                 </div>
//               </div>


//               <div className="bg-gray-50 rounded-lg overflow-hidden max-w-80">
//                 <div className="relative">
//                   <Image
//                     src="https://images.ctfassets.net/ajjw8wywicb3/3BES1bGSGkJdUzuZNQJpmU/28972d5b4d08c8bd83e6600154b15455/Tide_Article_card_bags_legal_LP_20240403_322x210.jpg?fm=webp"
//                     alt="Tide Bag Safety Instructions"
//                     width={400}
//                     height={300}
//                     className="w-full h-52 object-cover bg-[#E85D24]"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-[#1E22AA] text-xl font-bold mb-6">
//                     Tide Bag Packaging Replacement and Recall Program
//                   </h3>
//                   <Button className="bg-[#1E22AA] rounded-full hover:bg-[#2a2eb8] text-white">Learn More</Button>
//                 </div>
//               </div>


//               <div className="bg-gray-50 rounded-lg overflow-hidden max-w-80">
//                 <div className="relative">
//                   <Image
//                     src="https://images.ctfassets.net/ajjw8wywicb3/5OW2gFGhYXtJryUW1T8Ulf/f253e63d271b38e175734c5ffc4f34f8/Tide_BlackWidow_LP_20240308_322x210_blue.png?fm=webp"
//                     alt="Tide evo"
//                     width={400}
//                     height={300}
//                     className="w-full h-52 object-cover bg-[#1E22AA]"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-[#1E22AA] text-xl font-bold mb-6">
//                     Meet Tide evo. Detergent entirely made of clean.
//                   </h3>
//                   <Button className="bg-[#1E22AA] rounded-full hover:bg-[#2a2eb8] text-white">Learn More</Button>
//                 </div>
//               </div>
//             </div>


//             <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#fb4b06] text-white rounded-full p-2 -mr-5 hidden md:block hover:bg-[#f06937]">
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M9 18l6-6-6-6" />
//               </svg>
//             </button>


//             <div className="flex justify-center gap-2 mt-8">
//               <button className="w-3 h-3 rounded-full bg-[#fb4b06]" />
//               <button className="w-3 h-3 rounded-full bg-gray-300" />
//               <button className="w-3 h-3 rounded-full bg-gray-300" />
//               <button className="w-3 h-3 rounded-full bg-gray-300" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Finder Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-12">
//             <span className="text-3xl md:text-4xl font-semibold text-[#fb4b06] mb-12 text-left">Find the right </span>
//             <span className="text-3xl md:text-4xl font-bold text-[#fb4b06] mb-12 text-left" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Tide product for you</span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gray-50 rounded-lg p-8">
//               <h3 className="text-[#1E22AA] text-3xl font-bold mb-2" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Browse by type</h3>
//               <p className="text-[#1E22AA] font-normal mb-8">Pacs, Liquid, Powder and more.</p>
//               <div className="relative h-64">
//                 <Image
//                   src="https://images.ctfassets.net/ajjw8wywicb3/76HXrYbUMxrKsvt7on8nJx/0c5616a3f99fb8f7ba029ec32675c7d4/Tide_HP_Product_by_type_20240328.png?fm=webp"
//                   alt="Different types of Tide products"
//                   width={600}
//                   height={400}
//                   className="object-contain w-full h-full hover:scale-105 transition duration-300"
//                 />
//               </div>
//             </div>

//             <div className="bg-gray-50 rounded-lg p-8">
//               <h3 className="text-[#1E22AA] text-3xl font-bold mb-2" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Browse by need</h3>
//               <p className="text-[#1E22AA] font-normal mb-8">Stain removal, Deep Cleaning, Bright Colors and more..</p>
//               <div className="relative h-64">
//                 <Image
//                   src="https://images.ctfassets.net/ajjw8wywicb3/5GlqLWyt9mcOCveyiBpsVU/5df8726e568acd0fbd8f4965e19c57fc/browse_by_need.png?fm=webp"
//                   alt="T-shirts showing different cleaning needs"
//                   width={600}
//                   height={400}
//                   className="object-contain w-full h-full hover:scale-105 transition duration-300"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stain Removal Guide Section */}
//       <section className="bg-[#1E22AA] text-white py-16 bg-no-repeat bg-" style={{ backgroundImage: 'url(https://images.ctfassets.net/ajjw8wywicb3/jrwLVFSOxSUBsy0zpk2vk/b060c46ea3aed4795b097a43932dd8a7/how_to_remove_stains.png?fm=webp)', backgroundPosition: "center right", // Ensures the image is centered
//     backgroundSize: "30% 100%" }}>
//         <div className="container mx-auto px-16">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="space-y-8">
//               <h2 className="text-2xl md:text-4xl font-bold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Stain removal guide</h2>

//               <div className="flex flex-wrap items-center gap-4 text-2xl md:text-3xl">
//                 <span>I have a</span>
//                 <div className="relative inline-block">
//                   <select
//                     className="appearance-none bg-transparent border-b-2 border-white px-2 py-1 pr-8 text-white focus:outline-none cursor-pointer"
//                     defaultValue="mayonnaise"
//                   >
//                     <option value="ink" className="text-gray-900">
//                       ink
//                     </option>
//                     <option value="ketchup" className="text-gray-900">
//                       ketchup
//                     </option>
//                     <option value="makeup" className="text-gray-900">
//                       makeup
//                     </option>
//                     <option value="marker" className="text-gray-900">
//                       marker
//                     </option>
//                     <option value="mayonnaise" className="text-gray-900">
//                       mayonnaise
//                     </option>
//                     <option value="mildew" className="text-gray-900">
//                       mildew
//                     </option>
//                     <option value="motor-oil" className="text-gray-900">
//                       motor oil
//                     </option>
//                     <option value="mouthwash" className="text-gray-900">
//                       mouthwash
//                     </option>
//                     <option value="mud" className="text-gray-900">
//                       mud
//                     </option>
//                   </select>
//                   <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
//                     <div className="flex flex-col">
//                       <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                         <path d="M7 14l5-5 5 5z" />
//                       </svg>
//                       <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                         <path d="M7 10l5 5 5-5z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <span>stain</span>
//               </div>

//               <Button className="bg-[#fb4b06] hover:bg-[#f06937] rounded-full text-white  font-semibold px-10 py-2 text-xl mt-8">Learn More</Button>

//               <p className="text-white-300 underline text-sm font-semibold hover:text-white cursor-pointer transition-colors">
//                 Can't find the right stain?
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How to do Laundry Section */}
//       <section className="min-h-[550px] bg-white py-16 bg-no-repeat"
//         style={{
//           backgroundImage: "url('https://images.ctfassets.net/ajjw8wywicb3/4IfuhdyZ40I2tDctxsPlVi/2939823ea98f743841a5a004f76cbf7a/Tide_how_to_do_laundry_min1200_20220915.png?fm=webp')",
//           backgroundPosition: "center right", // Ensures the image is centered
//           backgroundSize: "50% 90%" // Scales the image to cover the container fully
//         }}
//       >
//         <div className="container mx-auto px-16">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6">
//               <h2 className="space-y-2">
//                 <span className="text-[#fb4b06] text-4xl md:text-5xl font-light block">How to do</span>
//                 <span className="text-[#fb4b06] text-5xl md:text-6xl font-bold block" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>laundry</span>
//               </h2>

//               <p className="text-[#1E22AA] text-md md:text-lg font-semibold leading-relaxed max-w-md py-6" style={{ fontFamily: '"Mirai Bold", sans-serif' }}>
//                 Whether you're a beginner or a seasoned pro, start here for some of our expert laundry tips and tricks.
//               </p>

//               <Button className="bg-[#1E22AA] hover:bg-[#2a2eb8] rounded-full text-white px-8 py-6 text-xl">Learn More</Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Learn More Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#fb4b06] mb-12" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Learn more</h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Loads of Hope Card */}
//             <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//               <div className="relative h-[300px]">
//                 <Image
//                   src="https://images.ctfassets.net/ajjw8wywicb3/1eeKGDOfWebH9aNAZSbgYB/9b12eb5fa879c9c38b7f0ec0143a61ec/Tide_LoH-hero_570x310_v2.jpg?fm=webp"
//                   alt="Loads of Hope community program"
//                   width={600}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8">
//                 <h3 className="text-[#fb4b06] text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Loads of Hope</h3>
//                 <p className="text-[#1E22AA] text-md font-light mb-6">
//                   Life after disasters — hurricanes, floods, tornadoes, wildfires — can feel like a nightmare. Families
//                   are...
//                 </p>
//                 <Button className="bg-[#fb4b06] hover:bg-[#f06937] text-xl md:text-lg text-white font-bold px-8 py-6 rounded-full">Read More</Button>
//               </div>
//             </div>

//             {/* Safety Card */}
//             <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//               <div className="relative h-[300px]">
//                 <Image
//                   src="https://images.ctfassets.net/ajjw8wywicb3/2MxM3jrQjnd6UsCiU1UyGP/4987a7d546233eacbebb1df90de26af9/Tide_Safety_preview_570x310.jpg?fm=webp"
//                   alt="Tide Safety Initiative"
//                   width={600}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8">
//                 <h3 className="text-[#fb4b06] text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                   At Tide Safety Comes First, and It Never Stops
//                 </h3>
//                 <p className="text-[#1E22AA] text-md font-light mb-6">
//                   Keeping loved ones safe is a joint effort. We've been working closely with Safe Kids...
//                 </p>
//                 <Button className="bg-[#fb4b06] hover:bg-[#f06937] text-xl md:text-lg text-white font-bold px-8 py-6 rounded-full">Read More</Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


//second one
// import Image from "next/image"
// import { Button } from "@/app/components/ui/button"
// import Link from "next/link"

// export default function Page() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Hero Section */}
//       <main 
//         className="min-h-[360px] relative overflow-hidden bg-cover bg-black bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/api/placeholder/1400/800')",
//           backgroundPosition: "center right",
//           backgroundSize: "cover"
//         }}
//       >
//         <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Text Section */}
//           <div className="max-w-lg text-center md:text-left">
//             <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-6 md:mb-8" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//               Чистота и комфорт – наша миссия!
//             </h1>
            
//             <p className="text-white text-lg mb-6">
//               С 2008 года <strong>Altyn Gaya</strong> производит высококачественную туалетную бумагу, бумажные салфетки и моющие средства, которые делают каждый дом уютнее и безопаснее.
//             </p>
            
//             <ul className="text-white mb-6 text-left">
//               <li className="mb-2">✓ Экологичные материалы</li>
//               <li className="mb-2">✓ Современные технологии производства</li>
//               <li className="mb-2">✓ Надёжность и оперативность поставок</li>
//             </ul>
            
//             <button className="bg-[#fb4b06] hover:bg-[#f06937] text-white px-6 py-3 text-lg md:text-xl rounded-full font-semibold mb-4">
//               ЗАКАЗАТЬ ПРОДУКЦИЮ
//             </button>
//           </div>
//         </div>
//       </main>

//       {/* About Company Section */}
//       <section className="min-h-[760px] bg-[#1E22AA] text-white py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/api/placeholder/1200/800')", backgroundPosition: "center left", backgroundSize: "50% 100%" }}>
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="relative">
//               {/* This div is intentionally left empty for the background image */}
//             </div>
//             <div className="space-y-6">
//               <h2 className="text-2xl">Altyn Gaya</h2>
//               <h3 className="text-5xl font-bold leading-tight">
//                 О КОМПАНИИ
//               </h3>
//               <p className="text-xl">
//                 Лидер в производстве бумажной продукции и бытовой химии с 2008 года. Мы создаём продукты, способные удовлетворить самые высокие стандарты качества.
//               </p>
//               <div className="space-y-4 py-4">
//                 <p><strong>Наша история:</strong> Более 16 лет успешной работы на рынке</p>
//                 <p><strong>Наши ценности:</strong> Качество, инновации и экологичность</p>
//                 <p><strong>Наш подход:</strong> Современные технологии и строгий контроль качества</p>
//               </div>
//               <Button className="bg-[#fb4b06] rounded-full hover:bg-[#f06937] text-white px-8 py-6 text-xl">Узнать больше</Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#fb4b06] mb-12 text-left" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//             Наша продукция
//           </h2>

//           <div className="relative">
//             <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#fb4b06] text-white rounded-full p-2 -ml-5 hidden md:block hover:bg-[#f06937]">
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M15 18l-6-6 6-6" />
//               </svg>
//             </button>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-16">
//               <div className="bg-gray-50 rounded-lg overflow-hidden max-w-80">
//                 <div className="relative">
//                   <Image
//                     src="/api/placeholder/400/300"
//                     alt="Туалетная бумага"
//                     width={400}
//                     height={300}
//                     className="w-full h-52 object-cover bg-[#E85D24]"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-[#1E22AA] text-xl font-bold mb-6">Туалетная бумага: Мягкость и надёжность в каждом рулоне</h3>
//                   <Button className="bg-[#1E22AA] rounded-full hover:bg-[#2a2eb8] text-white">Подробнее</Button>
//                 </div>
//               </div>

//               <div className="bg-gray-50 rounded-lg overflow-hidden max-w-80">
//                 <div className="relative">
//                   <Image
//                     src="/api/placeholder/400/300"
//                     alt="Бумажные салфетки"
//                     width={400}
//                     height={300}
//                     className="w-full h-52 object-cover bg-[#E85D24]"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-[#1E22AA] text-xl font-bold mb-6">
//                     Бумажные салфетки: Идеальные для использования в кафе, ресторанах и дома
//                   </h3>
//                   <Button className="bg-[#1E22AA] rounded-full hover:bg-[#2a2eb8] text-white">Подробнее</Button>
//                 </div>
//               </div>

//               <div className="bg-gray-50 rounded-lg overflow-hidden max-w-80">
//                 <div className="relative">
//                   <Image
//                     src="/api/placeholder/400/300"
//                     alt="Моющие средства"
//                     width={400}
//                     height={300}
//                     className="w-full h-52 object-cover bg-[#1E22AA]"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-[#1E22AA] text-xl font-bold mb-6">
//                     Моющие средства: Эффективная бытовая химия для поддержания чистоты
//                   </h3>
//                   <Button className="bg-[#1E22AA] rounded-full hover:bg-[#2a2eb8] text-white">Подробнее</Button>
//                 </div>
//               </div>
//             </div>

//             <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#fb4b06] text-white rounded-full p-2 -mr-5 hidden md:block hover:bg-[#f06937]">
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M9 18l6-6-6-6" />
//               </svg>
//             </button>

//             <div className="flex justify-center gap-2 mt-8">
//               <button className="w-3 h-3 rounded-full bg-[#fb4b06]" />
//               <button className="w-3 h-3 rounded-full bg-gray-300" />
//               <button className="w-3 h-3 rounded-full bg-gray-300" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Finder Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-12">
//             <span className="text-3xl md:text-4xl font-bold text-[#fb4b06] mb-12 text-left" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Наши преимущества</span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gray-50 rounded-lg p-8">
//               <h3 className="text-[#1E22AA] text-3xl font-bold mb-2" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Качество</h3>
//               <p className="text-[#1E22AA] font-normal mb-8">Производство с использованием экологически чистого сырья.</p>
//               <div className="relative h-64">
//                 <Image
//                   src="/api/placeholder/600/400"
//                   alt="Высокое качество продукции"
//                   width={600}
//                   height={400}
//                   className="object-contain w-full h-full hover:scale-105 transition duration-300"
//                 />
//               </div>
//             </div>

//             <div className="bg-gray-50 rounded-lg p-8">
//               <h3 className="text-[#1E22AA] text-3xl font-bold mb-2" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Технологии</h3>
//               <p className="text-[#1E22AA] font-normal mb-8">Инновационные решения и автоматизация производства.</p>
//               <div className="relative h-64">
//                 <Image
//                   src="/api/placeholder/600/400"
//                   alt="Современные технологии"
//                   width={600}
//                   height={400}
//                   className="object-contain w-full h-full hover:scale-105 transition duration-300"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Production Process Section */}
//       <section className="bg-[#1E22AA] text-white py-16 bg-no-repeat" style={{ backgroundImage: 'url(/api/placeholder/600/800)', backgroundPosition: "center right", backgroundSize: "30% 100%" }}>
//         <div className="container mx-auto px-16">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="space-y-8">
//               <h2 className="text-2xl md:text-4xl font-bold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Производственный процесс</h2>

//               <ol className="space-y-4 text-lg">
//                 <li className="flex items-start gap-2">
//                   <span className="font-bold">1.</span>
//                   <span><strong>Отбор сырья:</strong> Использование проверенных поставщиков</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="font-bold">2.</span>
//                   <span><strong>Современные технологии:</strong> Инновационное оборудование</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="font-bold">3.</span>
//                   <span><strong>Строгий контроль:</strong> Каждый этап проходит проверку</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="font-bold">4.</span>
//                   <span><strong>Упаковка и маркировка:</strong> Эстетичная упаковка</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="font-bold">5.</span>
//                   <span><strong>Логистика:</strong> Организованная доставка</span>
//                 </li>
//               </ol>

//               <Button className="bg-[#fb4b06] hover:bg-[#f06937] rounded-full text-white font-semibold px-10 py-2 text-xl mt-8">Подробнее о производстве</Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Partnership Section */}
//       <section className="min-h-[550px] bg-white py-16 bg-no-repeat"
//         style={{
//           backgroundImage: "url('/api/placeholder/800/600')",
//           backgroundPosition: "center right",
//           backgroundSize: "50% 90%"
//         }}
//       >
//         <div className="container mx-auto px-16">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6">
//               <h2 className="space-y-2">
//                 <span className="text-[#fb4b06] text-4xl md:text-5xl font-light block">Партнерство и</span>
//                 <span className="text-[#fb4b06] text-5xl md:text-6xl font-bold block" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>сотрудничество</span>
//               </h2>

//               <p className="text-[#1E22AA] text-md md:text-lg font-semibold leading-relaxed max-w-md py-6">
//                 Мы открыты к взаимовыгодному сотрудничеству с компаниями из разных сфер.
//               </p>

//               <ul className="text-[#1E22AA] space-y-3">
//                 <li>• <strong>Экспортеры:</strong> Расширяйте горизонты вашего бизнеса</li>
//                 <li>• <strong>Оптовые поставки:</strong> Выгодные условия для крупных заказов</li>
//                 <li>• <strong>Розничные торговцы:</strong> Гарантированное качество для потребителя</li>
//               </ul>

//               <Button className="bg-[#1E22AA] hover:bg-[#2a2eb8] rounded-full text-white px-8 py-6 text-xl mt-4">Стать нашим партнёром</Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* News and Blog Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#fb4b06] mb-12" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Новости и блог</h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Innovation Card */}
//             <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//               <div className="relative h-[300px]">
//                 <Image
//                   src="/api/placeholder/600/400"
//                   alt="Инновации и исследования"
//                   width={600}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8">
//                 <h3 className="text-[#fb4b06] text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Инновации и исследования</h3>
//                 <p className="text-[#1E22AA] text-md font-light mb-6">
//                   Мы непрерывно инвестируем в исследования и развитие новых технологий для создания качественной продукции...
//                 </p>
//                 <Button className="bg-[#fb4b06] hover:bg-[#f06937] text-xl md:text-lg text-white font-bold px-8 py-6 rounded-full">Узнать больше</Button>
//               </div>
//             </div>

//             {/* Social Responsibility Card */}
//             <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//               <div className="relative h-[300px]">
//                 <Image
//                   src="/api/placeholder/600/400"
//                   alt="Социальная ответственность"
//                   width={600}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8">
//                 <h3 className="text-[#fb4b06] text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                   Социальная ответственность
//                 </h3>
//                 <p className="text-[#1E22AA] text-md font-light mb-6">
//                   Мы осознаём важность поддержки общества и экологии. Наши программы переработки и утилизации отходов...
//                 </p>
//                 <Button className="bg-[#fb4b06] hover:bg-[#f06937] text-xl md:text-lg text-white font-bold px-8 py-6 rounded-full">Подробнее</Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="bg-[#1E22AA] text-white py-16">
//         <div className="container mx-auto px-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//             FAQ – Часто задаваемые вопросы
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
//             <div className="space-y-2">
//               <h3 className="text-xl font-bold">❓ Как оформить заказ?</h3>
//               <p>Свяжитесь с нами по телефону или через форму на сайте.</p>
//             </div>
            
//             <div className="space-y-2">
//               <h3 className="text-xl font-bold">❓ Есть ли скидки для оптовых заказов?</h3>
//               <p>Да, мы предлагаем индивидуальные условия для каждого партнёра.</p>
//             </div>
            
//             <div className="space-y-2">
//               <h3 className="text-xl font-bold">❓ Как осуществляется доставка?</h3>
//               <p>Доставка осуществляется по всей России и в страны СНГ в течение 3–7 дней.</p>
//             </div>
            
//             <div className="text-center md:text-left">
//               <Button className="bg-[#fb4b06] hover:bg-[#f06937] rounded-full text-white px-8 py-3 text-lg">
//                 Задать вопрос
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contacts Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-16">
//           <h2 className="text-4xl font-bold text-[#fb4b06] mb-12" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//             Контакты
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
//             <div className="space-y-6">
//               <p className="text-[#1E22AA] text-lg">
//                 Свяжитесь с нами для обсуждения сотрудничества или заказа продукции:
//               </p>
              
//               <div className="space-y-4">
//                 <p className="flex items-center gap-3">
//                   <span className="text-[#fb4b06] font-bold">📍</span>
//                   <span><strong>Адрес:</strong> Shajahan street No 22, Mary velayat, Mary city, Turkmenistan</span>
//                 </p>
                
//                 <p className="flex items-center gap-3">
//                   <span className="text-[#fb4b06] font-bold">📞</span>
//                   <span><strong>Телефон:</strong> +993 61640921</span>
//                 </p>
                
//                 <p className="flex items-center gap-3">
//                   <span className="text-[#fb4b06] font-bold">📧</span>
//                   <span><strong>Email:</strong> altyngaya2008@gmail.com</span>
//                 </p>
                
//                 <p className="flex items-center gap-3">
//                   <span className="text-[#fb4b06] font-bold">🌐</span>
//                   <span><strong>Сайт:</strong> www.altyngaya.com</span>
//                 </p>
//               </div>
              
//               <Button className="bg-[#1E22AA] hover:bg-[#2a2eb8] rounded-full text-white px-8 py-3 text-lg mt-4">
//                 Связаться с нами
//               </Button>
//             </div>
            
//             <div className="relative h-[300px]">
//               <Image
//                 src="/api/placeholder/600/400"
//                 alt="Карта расположения компании"
//                 width={600}
//                 height={400}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


//third one
// 'use client';
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { Button } from "@/app/components/ui/button";
// import { ChevronLeft, ChevronRight, Check, ArrowRight } from "lucide-react";

// // Custom components
// const CountUp = ({ end, duration = 2000 }) => {
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     let startTime;
//     let animationFrame;
    
//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = timestamp - startTime;
//       const percentage = Math.min(progress / duration, 1);
      
//       setCount(Math.floor(percentage * end));
      
//       if (percentage < 1) {
//         animationFrame = requestAnimationFrame(animate);
//       }
//     };
    
//     animationFrame = requestAnimationFrame(animate);
    
//     return () => cancelAnimationFrame(animationFrame);
//   }, [end, duration]);
  
//   return <span>{count}</span>;
// };

// export default function Page() {
//   const [activeProductIndex, setActiveProductIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState({});
  
//   const products = [
//     {
//       title: "Туалетная бумага",
//       description: "Мягкость и надёжность в каждом рулоне",
//       image: "/api/placeholder/400/300",
//       color: "#E85D24"
//     },
//     {
//       title: "Бумажные салфетки",
//       description: "Идеальные для использования в кафе, ресторанах и дома",
//       image: "/api/placeholder/400/300",
//       color: "#E85D24"
//     },
//     {
//       title: "Моющие средства",
//       description: "Эффективная бытовая химия для поддержания чистоты",
//       image: "/api/placeholder/400/300",
//       color: "#1E22AA"
//     },
//     {
//       title: "Бумажные полотенца",
//       description: "Прочность и высокая впитываемость для кухни и ванной",
//       image: "/api/placeholder/400/300",
//       color: "#fb4b06"
//     }
//   ];
  
//   const advantages = [
//     {
//       title: "Качество",
//       description: "Производство с использованием экологически чистого сырья и современных технологий",
//       image: "/api/placeholder/600/400",
//       stats: [
//         { value: 99.5, label: "Соответствие стандартам" },
//         { value: 15, label: "Лет опыта" }
//       ]
//     },
//     {
//       title: "Технологии",
//       description: "Инновационные решения и автоматизация производства для максимальной эффективности",
//       image: "/api/placeholder/600/400",
//       stats: [
//         { value: 85, label: "Автоматизация процессов" },
//         { value: 12, label: "Патентов и разработок" }
//       ]
//     },
//     {
//       title: "Экологичность",
//       description: "Бережное отношение к природе и использование возобновляемых ресурсов",
//       image: "/api/placeholder/600/400",
//       stats: [
//         { value: 70, label: "Переработка отходов" },
//         { value: 40, label: "Снижение углеродного следа" }
//       ]
//     }
//   ];
  
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//         }
//       });
//     }, observerOptions);

//     document.querySelectorAll(".animate-on-scroll").forEach(el => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);
  
//   const nextProduct = () => {
//     setActiveProductIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
//   };
  
//   const prevProduct = () => {
//     setActiveProductIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
//   };
  
//   const [activeTab, setActiveTab] = useState(0);
//   const [expandedFaq, setExpandedFaq] = useState(null);
  
//   return (
//     <div className="min-h-screen flex flex-col overflow-hidden">
//       {/* Hero Section with Parallax Effect */}
//       <main 
//         className="min-h-[80vh] relative overflow-hidden bg-black flex items-center"
//       >
//         <div 
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{
//             backgroundImage: "url('/api/placeholder/1400/800')",
//             backgroundPosition: "center right",
//             backgroundAttachment: "fixed",
//             filter: "brightness(0.7)"
//           }}
//         />
        
//         <div 
//           className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/70 to-transparent" 
//         />
        
//         <div className="container mx-auto px-4 py-12 z-10 relative">
//           <div className="max-w-xl">
//             <div className="overflow-hidden mb-6">
//               <h1 
//                 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6 transform transition-transform duration-1000 translate-y-0" 
//                 style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//               >
//                 Чистота и комфорт – наша миссия!
//               </h1>
//             </div>
            
//             <div className="overflow-hidden mb-8">
//               <p className="text-white text-xl mb-8 transform transition-transform duration-1000 delay-300 translate-y-0">
//                 С 2008 года <strong className="text-[#fb4b06]">Altyn Gaya</strong> производит высококачественную туалетную бумагу, бумажные салфетки и моющие средства, которые делают каждый дом уютнее и безопаснее.
//               </p>
//             </div>
            
//             <ul className="text-white mb-10 space-y-4 transform transition-transform duration-1000 delay-500">
//               <li className="flex items-center mb-2 group">
//                 <div className="w-8 h-8 bg-[#fb4b06] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
//                   <Check className="text-white w-5 h-5" />
//                 </div>
//                 <span className="text-lg">Экологичные материалы</span>
//               </li>
//               <li className="flex items-center mb-2 group">
//                 <div className="w-8 h-8 bg-[#fb4b06] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
//                   <Check className="text-white w-5 h-5" />
//                 </div>
//                 <span className="text-lg">Современные технологии производства</span>
//               </li>
//               <li className="flex items-center mb-2 group">
//                 <div className="w-8 h-8 bg-[#fb4b06] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
//                   <Check className="text-white w-5 h-5" />
//                 </div>
//                 <span className="text-lg">Надёжность и оперативность поставок</span>
//               </li>
//             </ul>
            
//             <div className="transform transition-all duration-1000 delay-700">
//               <button className="relative overflow-hidden group bg-[#fb4b06] hover:bg-[#f06937] text-white px-8 py-4 text-xl rounded-full font-semibold">
//                 <span className="relative z-10 flex items-center gap-2">
//                   ЗАКАЗАТЬ ПРОДУКЦИЮ
//                   <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//                 </span>
//                 <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 opacity-10"></span>
//               </button>
//             </div>
//           </div>
          
//           <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center">
//             <div className="text-white text-opacity-80 mb-2">Прокрутите вниз</div>
//             <div className="animate-bounce">
//               <ChevronRight className="text-white rotate-90 w-8 h-8" />
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* About Company Section with Animated Stats */}
//       <section 
//         className="min-h-[800px] relative py-24 overflow-hidden"
//         id="about-section"
//       >
//         <div 
//           className="absolute inset-0 w-full h-full z-0"
//           style={{
//             background: `linear-gradient(90deg, #1E22AA 50%, transparent 50%)`,
//           }}
//         >
//           <div
//             className="absolute top-0 left-1/2 w-1/2 h-full bg-cover bg-center"
//             style={{
//               backgroundImage: "url('/api/placeholder/1200/800')",
//               backgroundPosition: "center left",
//             }}
//           />
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8 animate-on-scroll" id="about-text">
//               <div className={`transition-all duration-1000 transform ${isVisible['about-text'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                 <h3 className="text-3xl text-white font-light">Altyn Gaya</h3>
//                 <h2 className="text-5xl md:text-6xl font-bold text-white mt-2 mb-8 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                   О КОМПАНИИ
//                 </h2>
//                 <p className="text-xl text-white mb-8">
//                   Лидер в производстве бумажной продукции и бытовой химии с 2008 года. Мы создаём продукты, способные удовлетворить самые высокие стандарты качества.
//                 </p>
//               </div>
              
//               <div className={`space-y-6 py-6 transition-all duration-1000 delay-300 transform ${isVisible['about-text'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                 <div className="flex items-start">
//                   <div className="w-16 h-16 bg-[#fb4b06] rounded-full flex items-center justify-center shrink-0 mr-6">
//                     <span className="text-white text-2xl font-bold">16+</span>
//                   </div>
//                   <div>
//                     <h4 className="text-xl text-white font-bold mb-2">Наша история</h4>
//                     <p className="text-white text-opacity-90">Более 16 лет успешной работы на рынке и постоянного совершенствования</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="w-16 h-16 bg-[#fb4b06] rounded-full flex items-center justify-center shrink-0 mr-6">
//                     <span className="text-white text-2xl font-bold">99%</span>
//                   </div>
//                   <div>
//                     <h4 className="text-xl text-white font-bold mb-2">Наши ценности</h4>
//                     <p className="text-white text-opacity-90">Качество, инновации и экологичность во всех аспектах деятельности</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="w-16 h-16 bg-[#fb4b06] rounded-full flex items-center justify-center shrink-0 mr-6">
//                     <span className="text-white text-2xl font-bold">24/7</span>
//                   </div>
//                   <div>
//                     <h4 className="text-xl text-white font-bold mb-2">Наш подход</h4>
//                     <p className="text-white text-opacity-90">Современные технологии и строгий контроль качества на каждом этапе</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className={`mt-8 transition-all duration-1000 delay-600 transform ${isVisible['about-text'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                 <button className="group bg-[#fb4b06] hover:bg-white rounded-full transition-colors duration-300 text-white hover:text-[#fb4b06] px-10 py-5 text-xl font-bold flex items-center gap-3">
//                   Узнать больше
//                   <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//                 </button>
//               </div>
//             </div>
            
//             <div className="flex md:justify-end animate-on-scroll" id="about-image">
//               <div className="relative h-[500px] w-full max-w-md overflow-hidden rounded-lg">
//                 <div className={`absolute inset-0 bg-[#fb4b06] transition-all duration-1000 ${isVisible['about-image'] ? 'translate-y-full' : 'translate-y-0'}`}></div>
//                 <Image
//                   src="/api/placeholder/600/500"
//                   alt="Производство Altyn Gaya"
//                   width={600}
//                   height={500}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Section with 3D Carousel */}
//       <section className="bg-gray-50 py-24">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16 animate-on-scroll" id="products-title">
//             <div className={`transition-all duration-1000 transform ${isVisible['products-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               <h2 className="text-4xl md:text-5xl font-bold text-[#fb4b06] mb-4" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                 Наша продукция
//               </h2>
//               <p className="text-[#1E22AA] text-xl max-w-3xl mx-auto">
//                 Широкий ассортимент высококачественных товаров для дома, офиса и коммерческих объектов
//               </p>
//             </div>
//           </div>

//           <div className="relative px-4 py-10 animate-on-scroll" id="products-carousel">
//             <div className={`transition-all duration-1000 transform ${isVisible['products-carousel'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               <button 
//                 onClick={prevProduct}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#fb4b06] text-white rounded-full p-3 -ml-5 hover:bg-[#f06937] shadow-lg transition-all hover:scale-110"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>

//               <div className="overflow-hidden">
//                 <div 
//                   className="flex transition-transform duration-500 ease-in-out"
//                   style={{ transform: `translateX(-${activeProductIndex * 100}%)` }}
//                 >
//                   {products.map((product, index) => (
//                     <div key={index} className="w-full flex-shrink-0 px-4">
//                       <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform">
//                         <div className="flex flex-col md:flex-row">
//                           <div className="md:w-1/2 relative">
//                             <div 
//                               className="h-64 md:h-full w-full relative overflow-hidden"
//                               style={{ background: product.color }}
//                             >
//                               <Image
//                                 src={product.image}
//                                 alt={product.title}
//                                 width={400}
//                                 height={400}
//                                 className="w-full h-full object-contain p-8"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                             </div>
//                           </div>
//                           <div className="md:w-1/2 p-8 flex flex-col justify-center">
//                             <h3 className="text-[#1E22AA] text-3xl font-bold mb-4" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                               {product.title}
//                             </h3>
//                             <p className="text-gray-700 text-lg mb-8">
//                               {product.description}
//                             </p>
//                             <ul className="mb-8 space-y-2">
//                               <li className="flex items-center">
//                                 <Check className="text-[#fb4b06] mr-2 w-5 h-5" />
//                                 <span>Высокое качество</span>
//                               </li>
//                               <li className="flex items-center">
//                                 <Check className="text-[#fb4b06] mr-2 w-5 h-5" />
//                                 <span>Экологичные материалы</span>
//                               </li>
//                               <li className="flex items-center">
//                                 <Check className="text-[#fb4b06] mr-2 w-5 h-5" />
//                                 <span>Оптимальная цена</span>
//                               </li>
//                             </ul>
//                             <Button className="bg-[#1E22AA] rounded-full hover:bg-[#2a2eb8] text-white self-start group">
//                               <span className="flex items-center gap-2">
//                                 Подробнее
//                                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                               </span>
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button 
//                 onClick={nextProduct}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#fb4b06] text-white rounded-full p-3 -mr-5 hover:bg-[#f06937] shadow-lg transition-all hover:scale-110"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>

//               <div className="flex justify-center gap-2 mt-8">
//                 {products.map((_, index) => (
//                   <button 
//                     key={index}
//                     className={`w-3 h-3 rounded-full transition-all ${activeProductIndex === index ? 'bg-[#fb4b06] w-8' : 'bg-gray-300'}`}
//                     onClick={() => setActiveProductIndex(index)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Advantages Section with Animated Stats */}
//       <section className="bg-white py-24">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16 animate-on-scroll" id="advantages-title">
//             <div className={`transition-all duration-1000 transform ${isVisible['advantages-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               <h2 className="text-4xl md:text-5xl font-bold text-[#fb4b06] mb-4" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                 Наши преимущества
//               </h2>
//               <p className="text-[#1E22AA] text-xl max-w-3xl mx-auto">
//                 Почему клиенты выбирают именно нас
//               </p>
//             </div>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {advantages.map((adv, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all animate-on-scroll"
//                 id={`advantage-${index}`}
//               >
//                 <div className={`transition-all duration-1000 delay-${index * 200} transform ${isVisible[`advantage-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                   <div className="relative h-64">
//                     <Image
//                       src={adv.image}
//                       alt={adv.title}
//                       width={600}
//                       height={400}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#1E22AA]/80 to-transparent"></div>
//                     <h3 
//                       className="absolute bottom-0 left-0 p-6 text-white text-3xl font-bold"
//                       style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//                     >
//                       {adv.title}
//                     </h3>
//                   </div>
                  
//                   <div className="p-6">
//                     <p className="text-[#1E22AA] text-lg mb-6">
//                       {adv.description}
//                     </p>
                    
//                     <div className="grid grid-cols-2 gap-4">
//                       {adv.stats.map((stat, statIndex) => (
//                         <div key={statIndex} className="text-center p-4 rounded-lg bg-gray-50">
//                           <div className="text-[#fb4b06] text-3xl font-bold mb-2">
//                             <CountUp end={stat.value} />%
//                           </div>
//                           <div className="text-sm text-gray-600">{stat.label}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Production Process Section with Interactive Timeline */}
//       <section 
//         className="relative py-24 overflow-hidden bg-[#1E22AA]"
//         id="production-section"
//       >
//         <div 
//           className="absolute right-0 top-0 w-1/3 h-full bg-cover bg-center opacity-20 md:opacity-100"
//           style={{
//             backgroundImage: "url('/api/placeholder/600/800')",
//             backgroundPosition: "center right",
//           }}
//         />
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl animate-on-scroll" id="production-content">
//             <div className={`mb-12 transition-all duration-1000 transform ${isVisible['production-content'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               <h2 
//                 className="text-4xl md:text-5xl font-bold text-white mb-8" 
//                 style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//               >
//                 Производственный процесс
//               </h2>
//               <p className="text-white text-xl mb-10">
//                 Мы контролируем каждый этап производства, чтобы гарантировать высокое качество нашей продукции
//               </p>
//             </div>
            
//             <div className="relative pl-8 border-l-4 border-[#fb4b06] space-y-10">
//               {[
//                 {
//                   title: "Отбор сырья",
//                   description: "Использование проверенных поставщиков и экологически чистых материалов"
//                 },
//                 {
//                   title: "Современные технологии",
//                   description: "Применение инновационного оборудования и автоматизированных линий производства"
//                 },
//                 {
//                   title: "Строгий контроль",
//                   description: "Каждый этап проходит многоуровневую проверку на соответствие стандартам"
//                 },
//                 {
//                   title: "Упаковка и маркировка",
//                   description: "Эстетичная упаковка с полной информацией о продукте и рекомендациями по использованию"
//                 },
//                 {
//                   title: "Логистика",
//                   description: "Организованная система доставки с соблюдением всех норм хранения и транспортировки"
//                 }
//               ].map((step, index) => (
//                 <div 
//                   key={index} 
//                   className={`relative transition-all duration-1000 delay-${index * 200} transform ${isVisible['production-content'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//                 >
//                   <div className="absolute -left-12 top-0 w-8 h-8 bg-[#fb4b06] rounded-full flex items-center justify-center">
//                     <span className="text-white font-bold">{index + 1}</span>
//                   </div>
//                   <h3 className="text-white text-2xl font-bold mb-2">{step.title}</h3>
//                   <p className="text-white text-opacity-90">{step.description}</p>
//                 </div>
//               ))}
//             </div>
            
//             <div className={`mt-12 transition-all duration-1000 delay-1000 transform ${isVisible['production-content'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               <Button className="bg-[#fb4b06] hover:bg-[#f06937] rounded-full text-white font-semibold px-10 py-6 text-xl">
//                 Подробнее о производстве
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section with Map */}
//       <section className="relative py-24 bg-[#1E22AA]">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             <div className="animate-on-scroll" id="contact-info">
//               <div className={`transition-all duration-1000 transform ${isVisible['contact-info'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                 <h2 
//                   className="text-4xl md:text-5xl font-bold text-white mb-8" 
//                   style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//                 >
//                   Свяжитесь с нами
//                 </h2>
//                 <p className="text-white text-xl mb-10">
//                   Готовы обсудить сотрудничество? Наши специалисты ответят на все ваши вопросы и помогут подобрать оптимальное решение.
//                 </p>
                
//                 <div className="space-y-6 mb-10">
//                   <div className="flex items-start">
//                     <div className="w-12 h-12 bg-[#fb4b06] rounded-full flex items-center justify-center shrink-0 mr-6">
//                       <span className="text-white text-2xl font-bold">A</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl text-white font-bold mb-1">Адрес</h4>
//                       <p className="text-white text-opacity-90">г. Ашхабад, ул. Примерная, 123</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <div className="w-12 h-12 bg-[#fb4b06] rounded-full flex items-center justify-center shrink-0 mr-6">
//                       <span className="text-white text-2xl font-bold">T</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl text-white font-bold mb-1">Телефон</h4>
//                       <p className="text-white text-opacity-90">+993 (12) 345-67-89</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <div className="w-12 h-12 bg-[#fb4b06] rounded-full flex items-center justify-center shrink-0 mr-6">
//                       <span className="text-white text-2xl font-bold">E</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl text-white font-bold mb-1">Email</h4>
//                       <p className="text-white text-opacity-90">info@altyngaya.com</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <Button className="bg-[#fb4b06] hover:bg-[#f06937] rounded-full text-white font-semibold px-8 py-4">
//                   Отправить запрос
//                 </Button>
//               </div>
//             </div>
            
//             <div className="animate-on-scroll" id="contact-map">
//               <div className={`transition-all duration-1000 delay-300 transform ${isVisible['contact-map'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                 <div className="bg-white p-2 rounded-lg shadow-xl overflow-hidden">
//                   <div className="w-full h-[400px] bg-gray-200 relative">
//                     <Image
//                       src="/api/placeholder/800/400"
//                       alt="Карта местоположения"
//                       width={800}
//                       height={400}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#fb4b06] rounded-full animate-pulse flex items-center justify-center">
//                       <div className="w-4 h-4 bg-white rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




//fourth one
// 'use client';
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";
// import { Button } from "@/app/components/ui/button";
// import { ChevronLeft, ChevronRight, Check, ArrowRight, Phone, Mail, MapPin, ArrowDown } from "lucide-react";

// // Модернизированный CountUp компонент с анимацией
// const CountUp = ({ end, duration = 2000, suffix = "" }) => {
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     let startTime;
//     let animationFrame;
    
//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = timestamp - startTime;
//       const percentage = Math.min(progress / duration, 1);
      
//       setCount(Math.floor(percentage * end));
      
//       if (percentage < 1) {
//         animationFrame = requestAnimationFrame(animate);
//       }
//     };
    
//     animationFrame = requestAnimationFrame(animate);
    
//     return () => cancelAnimationFrame(animationFrame);
//   }, [end, duration]);
  
//   return <span>{count}{suffix}</span>;
// };

// // Компонент для плавного появления элементов
// const FadeInView = ({ children, delay = 0, className = "" }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const domRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting) {
//         setIsVisible(true);
//         observer.unobserve(domRef.current);
//       }
//     });
    
//     observer.observe(domRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={domRef}
//       className={`${className} transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// };

// // Компонент для параллакс-эффекта
// const ParallaxSection = ({ children, backgroundImage, speed = 0.5, className = "", overlay = true }) => {
//   const [offset, setOffset] = useState(0);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;
//       const { top } = sectionRef.current.getBoundingClientRect();
//       const scrollY = window.scrollY;
//       const sectionTop = scrollY + top;
//       const newOffset = (scrollY - sectionTop) * speed;
//       setOffset(newOffset);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [speed]);

//   return (
//     <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
//       <div 
//         className="absolute inset-0 w-full h-full bg-cover bg-center z-0 transition-transform duration-300"
//         style={{ 
//           backgroundImage: `url('${backgroundImage}')`,
//           transform: `translateY(${offset}px)` 
//         }}
//       />
//       {overlay && <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/70 to-black/30" />}
//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// };

// // Компонент анимированной карточки продукта
// const ProductCard = ({ product, index, isActive }) => {
//   return (
//     <div className={`w-full h-full transform transition-all duration-700 ease-out ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
//       <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
//         <div className="flex flex-col md:flex-row h-full">
//           <div className="md:w-1/2 relative overflow-hidden group">
//             <div 
//               className="h-64 md:h-full w-full relative flex items-center justify-center"
//               style={{ 
//                 background: `linear-gradient(135deg, ${product.color} 30%, ${product.color}CC 100%)` 
//               }}
//             >
//               <Image
//                 src={product.image}
//                 alt={product.title}
//                 width={400}
//                 height={400}
//                 className="w-4/5 h-4/5 object-contain p-8 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
//               />
              
//               {/* Декоративные элементы */}
//               <div className="absolute top-0 left-0 w-full h-full">
//                 <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10"></div>
//                 <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/10"></div>
//                 <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/10"></div>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 p-10 flex flex-col justify-center">
//             <span className="text-[#fb4b06] text-sm font-semibold tracking-wide uppercase mb-2">Продукция Altyn Gaya</span>
//             <h3 className="text-[#1E22AA] text-3xl font-bold mb-4" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//               {product.title}
//             </h3>
//             <p className="text-gray-600 text-lg mb-8">
//               {product.description}
//             </p>
//             <ul className="mb-8 space-y-4">
//               <li className="flex items-center group">
//                 <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
//                   <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <span className="text-gray-700">Высокое качество</span>
//               </li>
//               <li className="flex items-center group">
//                 <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
//                   <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <span className="text-gray-700">Экологичные материалы</span>
//               </li>
//               <li className="flex items-center group">
//                 <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
//                   <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <span className="text-gray-700">Оптимальная цена</span>
//               </li>
//             </ul>
//             <Button className="bg-[#1E22AA] hover:bg-[#1E22AA]/90 rounded-full text-white px-8 py-6 text-md font-semibold self-start group overflow-hidden relative">
//               <span className="relative z-10 flex items-center gap-2">
//                 Подробнее
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#fb4b06] to-[#fb4b06] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Компонент для анимированных чисел
// const AnimatedStat = ({ value, label, delay = 0, icon = null }) => {
//   return (
//     <FadeInView delay={delay} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
//       <div className="flex flex-col items-center">
//         {icon && <div className="text-[#fb4b06] mb-4">{icon}</div>}
//         <div className="text-[#fb4b06] text-4xl font-bold mb-2">
//           <CountUp end={value} suffix="%" />
//         </div>
//         <div className="text-md text-white/80">{label}</div>
//       </div>
//     </FadeInView>
//   );
// };

// export default function Page() {
//   const [activeProductIndex, setActiveProductIndex] = useState(0);
//   const [scrollY, setScrollY] = useState(0);
  
//   // Массив с данными товаров
//   const products = [
//     {
//       title: "Туалетная бумага",
//       description: "Мягкость и надёжность в каждом рулоне. Наша бумага соответствует всем стандартам качества и комфорта.",
//       image: "/api/placeholder/400/300",
//       color: "#E85D24"
//     },
//     {
//       title: "Бумажные салфетки",
//       description: "Идеальные для использования в кафе, ресторанах и дома. Обеспечивают комфорт и чистоту в любых условиях.",
//       image: "/api/placeholder/400/300",
//       color: "#E85D24"
//     },
//     {
//       title: "Моющие средства",
//       description: "Эффективная бытовая химия для поддержания чистоты. Инновационные формулы для безупречных результатов.",
//       image: "/api/placeholder/400/300",
//       color: "#1E22AA"
//     },
//     {
//       title: "Бумажные полотенца",
//       description: "Прочность и высокая впитываемость для кухни и ванной. Незаменимые помощники в повседневной жизни.",
//       image: "/api/placeholder/400/300",
//       color: "#fb4b06"
//     }
//   ];
  
//   // Массив с преимуществами компании
//   const advantages = [
//     {
//       title: "Качество",
//       description: "Производство с использованием экологически чистого сырья и современных технологий",
//       image: "/api/placeholder/600/400",
//       stats: [
//         { value: 99.5, label: "Соответствие стандартам" },
//         { value: 15, label: "Лет опыта" }
//       ]
//     },
//     {
//       title: "Технологии",
//       description: "Инновационные решения и автоматизация производства для максимальной эффективности",
//       image: "/api/placeholder/600/400",
//       stats: [
//         { value: 85, label: "Автоматизация процессов" },
//         { value: 12, label: "Патентов и разработок" }
//       ]
//     },
//     {
//       title: "Экологичность",
//       description: "Бережное отношение к природе и использование возобновляемых ресурсов",
//       image: "/api/placeholder/600/400",
//       stats: [
//         { value: 70, label: "Переработка отходов" },
//         { value: 40, label: "Снижение углеродного следа" }
//       ]
//     }
//   ];
  
//   // Обработка изменения слайдера
//   const nextProduct = () => {
//     setActiveProductIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
//   };
  
//   const prevProduct = () => {
//     setActiveProductIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
//   };
  
//   // Обработка скроллинга для параллакс-эффектов
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   return (
//     <div className="min-h-screen overflow-hidden">
//       {/* Главный экран с 3D анимацией и неоморфным дизайном */}
//       <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
//         {/* Динамический фон с градиентом */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{
//             backgroundImage: "url('/api/placeholder/1400/800')",
//             filter: "brightness(0.5)",
//             transform: `translateY(${scrollY * 0.3}px)`
//           }}
//         />
        
//         {/* Градиентный оверлей */}
//         <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        
//         {/* Фоновые круги */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#fb4b06] opacity-10 filter blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-[#1E22AA] opacity-10 filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
//         </div>
        
//         <div className="container mx-auto px-4 py-12 z-10 relative">
//           <div className="max-w-2xl">
//             {/* Логотип или название компании */}
//             <div className="mb-16">
//               <div className="inline-block py-2 px-6 bg-white/5 backdrop-blur-md rounded-full mb-8">
//                 <span className="text-white text-lg font-medium">ALTYN GAYA</span>
//                 <span className="mx-3 text-[#fb4b06]">|</span>
//                 <span className="text-gray-300 text-lg">С 2008 года</span>
//               </div>
//             </div>
            
//             <div className="space-y-10">
//               <div className="overflow-hidden">
//                 <h1 
//                   className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white mb-2 transform transition-all duration-1000 animate-in" 
//                   style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//                 >
//                   <span className="inline-block">Чистота</span>
//                   <span className="inline-block ml-4">и</span>
//                   <span className="inline-block text-[#fb4b06] ml-4">комфорт</span>
//                 </h1>
//                 <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-8 transform transition-all duration-1000 delay-300 animate-in"
//                 style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                   ваша миссия!
//                 </h2>
//               </div>
              
//               <div className="overflow-hidden">
//                 <p className="text-white/90 text-xl mb-8 transform transition-all duration-1000 delay-500 translate-y-0 leading-relaxed">
//                   С 2008 года <strong className="text-[#fb4b06]">Altyn Gaya</strong> производит высококачественную туалетную бумагу, бумажные салфетки и моющие средства, которые делают каждый дом уютнее и безопаснее.
//                 </p>
//               </div>
              
//               <div className="space-y-5 transition-all duration-1000 delay-700">
//                 <div className="flex items-center group">
//                   <div className="w-10 h-10 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-110">
//                     <Check className="text-white w-5 h-5" />
//                   </div>
//                   <span className="text-white text-lg group-hover:text-[#fb4b06] transition-colors">Экологичные материалы</span>
//                 </div>
                
//                 <div className="flex items-center group">
//                   <div className="w-10 h-10 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-110">
//                     <Check className="text-white w-5 h-5" />
//                   </div>
//                   <span className="text-white text-lg group-hover:text-[#fb4b06] transition-colors">Современные технологии производства</span>
//                 </div>
                
//                 <div className="flex items-center group">
//                   <div className="w-10 h-10 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-110">
//                     <Check className="text-white w-5 h-5" />
//                   </div>
//                   <span className="text-white text-lg group-hover:text-[#fb4b06] transition-colors">Надёжность и оперативность поставок</span>
//                 </div>
//               </div>
              
//               <div className="mt-10 transform transition-all duration-1000 delay-1000">
//                 <button className="relative overflow-hidden group bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:from-[#E85D24] hover:to-[#fb4b06] text-white px-10 py-5 text-xl rounded-full font-semibold shadow-lg shadow-[#fb4b06]/20 hover:shadow-[#fb4b06]/40 transition-all">
//                   <span className="relative z-10 flex items-center gap-3">
//                     ЗАКАЗАТЬ ПРОДУКЦИЮ
//                     <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Анимированная прокрутка вниз */}
//           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
//             <div className="text-white text-opacity-80 mb-2">Узнать больше</div>
//             <div className="animate-bounce p-2 bg-white/10 rounded-full backdrop-blur-md">
//               <ArrowDown className="text-white w-5 h-5" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* О компании - стекломорфная секция */}
//       <section className="relative py-24 min-h-screen flex items-center">
//         {/* Волнистый разделитель между секциями */}
//         <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
//           <svg 
//             viewBox="0 0 1200 120" 
//             preserveAspectRatio="none" 
//             className="absolute bottom-0 left-0 w-full h-full"
//             fill="#000000"
//           >
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H1000C934.18,2.37,870.42,13.91,821.39,56.44Z"></path>
//           </svg>
//         </div>
        
//         {/* Фоновое изображение с градиентным наложением */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#1E22AA] to-[#1E22AA]/90 opacity-95"></div>
//           <div className="absolute inset-0" style={{ backgroundImage: "url('/api/placeholder/1200/800')", backgroundSize: "cover", mixBlendMode: "overlay", opacity: 0.1 }}></div>
//         </div>
        
//         {/* Фоновые декоративные элементы */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
//           <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div className="space-y-12">
//               <FadeInView>
//                 <div className="inline-block mb-4 bg-[#fb4b06]/10 backdrop-blur-sm rounded-full px-6 py-2">
//                   <span className="text-white text-sm font-medium uppercase tracking-wider">С 2008 года на рынке</span>
//                 </div>
//                 <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                   О КОМПАНИИ <span className="text-[#fb4b06]">ALTYN GAYA</span>
//                 </h2>
//                 <p className="text-xl text-white/90 leading-relaxed">
//                   Лидер в производстве бумажной продукции и бытовой химии с 2008 года. Мы создаём продукты, способные удовлетворить самые высокие стандарты качества и экологичности.
//                 </p>
//               </FadeInView>
              
//               <div className="space-y-8">
//                 <FadeInView delay={300} className="group">
//                   <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 border border-white/10">
//                     <div className="flex items-start">
//                       <div className="w-16 h-16 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center shrink-0 mr-6 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-105">
//                         <span className="text-white text-2xl font-bold">16+</span>
//                       </div>
//                       <div>
//                         <h4 className="text-xl text-white font-bold mb-2">Наша история</h4>
//                         <p className="text-white/80 leading-relaxed">Более 16 лет успешной работы на рынке и постоянного совершенствования производственных процессов</p>
//                       </div>
//                     </div>
//                   </div>
//                 </FadeInView>
                
//                 <FadeInView delay={500} className="group">
//                   <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 border border-white/10">
//                     <div className="flex items-start">
//                       <div className="w-16 h-16 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center shrink-0 mr-6 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-105">
//                         <span className="text-white text-2xl font-bold">99%</span>
//                       </div>
//                       <div>
//                         <h4 className="text-xl text-white font-bold mb-2">Наши ценности</h4>
//                         <p className="text-white/80 leading-relaxed">Качество, инновации и экологичность во всех аспектах деятельности компании</p>
//                       </div>
//                     </div>
//                   </div>
//                 </FadeInView>
                
//                 <FadeInView delay={700} className="group">
//                   <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 border border-white/10">
//                     <div className="flex items-start">
//                       <div className="w-16 h-16 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center shrink-0 mr-6 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-105">
//                         <span className="text-white text-2xl font-bold">24/7</span>
//                       </div>
//                       <div>
//                         <h4 className="text-xl text-white font-bold mb-2">Наш подход</h4>
//                         <p className="text-white/80 leading-relaxed">Современные технологии и строгий контроль качества на каждом этапе производства</p>
//                       </div>
//                     </div>
//                   </div>
//                 </FadeInView>
//               </div>
              
//               <FadeInView delay={900}>
//                 <button className="group bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:from-white hover:to-white rounded-full transition-all duration-500 text-white hover:text-[#fb4b06] px-10 py-5 text-xl font-bold flex items-center gap-3 shadow-lg shadow-[#fb4b06]/20 hover:shadow-[#fb4b06]/0">
//                   Узнать больше
//                   <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//                 </button>
//               </FadeInView>
//             </div>
            
//             <FadeInView delay={300}>
//               <div className="relative">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] rounded-2xl blur-xl opacity-20 animate-pulse"></div>
//                 <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
//                   <Image
//                     src="/api/placeholder/600/500"
//                     alt="Производство Altyn Gaya"
//                     width={600}
//                     height={500}
//                     className="w-full h-full object-cover brightness-90"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#1E22AA]/50 to-transparent"></div>
                  
//                   {/* Графическое наложение */}
//                   <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5"></div>
                  
//                   {/* Статистика на фото */}
//                   <div className="absolute bottom-0 left-0 right-0 p-8">
//                     <div className="flex justify-between items-center">
//                       <div className="text-center">
//                         <div className="text-[#fb4b06] text-4xl font-bold mb-1">16+</div>
//                         <div className="text-white text-sm">Лет опыта</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-[#fb4b06] text-4xl font-bold mb-1">50+</div>
//                         <div className="text-white text-sm">Сотрудников</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-[#fb4b06] text-4xl font-bold mb-1">95%</div>
//                         <div className="text-white text-sm">Довольных клиентов</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </FadeInView>
//           </div>
//         </div>
//       </section>

//       {/* Продукция - Трехмерная карусель с 3D эффектами */}
//       <section className="relative py-24 bg-gray-50 overflow-hidden">
//         {/* Волнистый разделитель */}
//         <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
//           <svg 
//             viewBox="0 0 1200 120" 
//             preserveAspectRatio="none" 
//             className="absolute bottom-0 left-0 w-full h-full transform rotate-180"
//             fill="#1E22AA"
//           >
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H1000C934.18,2.37,870.42,13.91,821.39,56.44Z"></path>
//           </svg>
//         </div>
        
//         {/* Фоновые элементы */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#1E22AA]/5 filter blur-3xl"></div>
//           <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#fb4b06]/5 filter blur-3xl"></div>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <FadeInView>
//               <div className="inline-block mb-4 bg-[#fb4b06]/10 rounded-full px-6 py-2">
//                 <span className="text-[#fb4b06] text-sm font-medium uppercase tracking-wider">Наша продукция</span>
//               </div>
//               <h2 className="text-5xl font-bold text-[#1E22AA] mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                 КАЧЕСТВО, КОТОРОЕ <span className="text-[#fb4b06]">ЗАБОТИТСЯ О ВАС</span>
//               </h2>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 Каждый продукт компании Altyn Gaya разработан с заботой о комфорте и здоровье наших клиентов. Мы используем только лучшие материалы и современные технологии производства.
//               </p>
//             </FadeInView>
//           </div>
          
//           <div className="relative max-w-5xl mx-auto">
//             {products.map((product, index) => (
//               <ProductCard 
//                 key={index} 
//                 product={product} 
//                 index={index} 
//                 isActive={index === activeProductIndex} 
//               />
//             ))}
            
//             {/* Навигация по слайдеру */}
//             <div className="flex justify-between items-center mt-12">
//               <Button 
//                 onClick={prevProduct} 
//                 className="w-14 h-14 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-[#fb4b06] hover:text-white transition-colors flex items-center justify-center group"
//                 variant="outline"
//               >
//                 <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
//               </Button>
              
//               <div className="flex space-x-3">
//                 {products.map((_, index) => (
//                   <button 
//                     key={index}
//                     onClick={() => setActiveProductIndex(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === activeProductIndex 
//                         ? "bg-[#fb4b06] w-10" 
//                         : "bg-gray-300 hover:bg-gray-400"
//                     }`}
//                   />
//                 ))}
//               </div>
              
//               <Button 
//                 onClick={nextProduct} 
//                 className="w-14 h-14 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-[#fb4b06] hover:text-white transition-colors flex items-center justify-center group"
//                 variant="outline"
//               >
//                 <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Преимущества - Параллакс и стекломорфизм */}
//       <ParallaxSection 
//         backgroundImage="/api/placeholder/1200/800" 
//         className="py-24 min-h-screen flex items-center"
//         speed={0.4}
//       >
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <FadeInView>
//               <div className="inline-block mb-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
//                 <span className="text-white text-sm font-medium uppercase tracking-wider">Наши преимущества</span>
//               </div>
//               <h2 className="text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                 ПОЧЕМУ ВЫБИРАЮТ <span className="text-[#fb4b06]">ALTYN GAYA</span>
//               </h2>
//               <p className="text-xl text-white/90 leading-relaxed">
//                 Мы стремимся к совершенству на всех этапах производства и доставки нашей продукции, гарантируя удовлетворение потребностей даже самых требовательных клиентов.
//               </p>
//             </FadeInView>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {advantages.map((advantage, index) => (
//               <FadeInView key={index} delay={index * 200} className="group">
//                 <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 h-full hover:transform hover:scale-105 transition-all duration-500">
//                   <div className="h-64 relative overflow-hidden">
//                     <Image
//                       src={advantage.image}
//                       alt={advantage.title}
//                       width={600}
//                       height={400}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    
//                     <div className="absolute bottom-0 left-0 w-full p-6">
//                       <h3 className="text-3xl font-bold text-white mb-2">{advantage.title}</h3>
//                     </div>
//                   </div>
                  
//                   <div className="p-6">
//                     <p className="text-white/90 mb-8 leading-relaxed">{advantage.description}</p>
                    
//                     <div className="grid grid-cols-2 gap-4">
//                       {advantage.stats.map((stat, statIndex) => (
//                         <div key={statIndex} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
//                           <div className="text-[#fb4b06] text-3xl font-bold mb-1">
//                             <CountUp end={stat.value} suffix="%" />
//                           </div>
//                           <div className="text-white/80 text-sm">{stat.label}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </FadeInView>
//             ))}
//           </div>
          
//           <div className="text-center mt-20">
//             <FadeInView>
//               <button className="bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:from-white hover:to-white text-white hover:text-[#fb4b06] rounded-full px-10 py-5 text-xl font-bold shadow-lg shadow-[#fb4b06]/30 transition-all duration-500 flex items-center gap-3 mx-auto">
//                 <span>Подробнее о преимуществах</span>
//                 <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//               </button>
//             </FadeInView>
//           </div>
//         </div>
//       </ParallaxSection>

//       {/* Достижения компании - неоморфная секция */}
//       <section className="py-24 bg-[#1E22AA] relative overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute inset-0 bg-[url('/api/placeholder/200/200')] bg-repeat opacity-5"></div>
//           <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#fb4b06]/10 filter blur-3xl"></div>
//           <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-[#fb4b06]/10 filter blur-3xl"></div>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <FadeInView>
//               <div className="inline-block mb-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
//                 <span className="text-white text-sm font-medium uppercase tracking-wider">Наши достижения</span>
//               </div>
//               <h2 className="text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                 РЕЗУЛЬТАТЫ НАШЕЙ <span className="text-[#fb4b06]">РАБОТЫ</span>
//               </h2>
//               <p className="text-xl text-white/90 leading-relaxed">
//                 За годы работы мы достигли значительных результатов и продолжаем совершенствоваться, чтобы обеспечивать высочайшее качество сервиса.
//               </p>
//             </FadeInView>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <AnimatedStat value={99} label="Удовлетворенность клиентов" delay={0} />
//             <AnimatedStat value={16} label="Лет на рынке" delay={200} />
//             <AnimatedStat value={95} label="Доля возвратных клиентов" delay={400} />
//             <AnimatedStat value={85} label="Рост производства за 5 лет" delay={600} />
//           </div>
//         </div>
//       </section>

//       {/* Контакты - неоморфный стиль с градиентами */}
//       <section className="py-24 bg-gray-50 relative overflow-hidden">
//         {/* Фоновые элементы */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#1E22AA]/5 filter blur-3xl"></div>
//           <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#fb4b06]/5 filter blur-3xl"></div>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <FadeInView>
//               <div className="space-y-8">
//                 <div>
//                   <div className="inline-block mb-4 bg-[#fb4b06]/10 rounded-full px-6 py-2">
//                     <span className="text-[#fb4b06] text-sm font-medium uppercase tracking-wider">Наши контакты</span>
//                   </div>
//                   <h2 className="text-5xl font-bold text-[#1E22AA] mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                     СВЯЖИТЕСЬ С <span className="text-[#fb4b06]">НАМИ</span>
//                   </h2>
//                   <p className="text-xl text-gray-600 leading-relaxed">
//                     Мы всегда открыты для сотрудничества и готовы ответить на все ваши вопросы. Наши специалисты проконсультируют вас по любому вопросу, связанному с нашей продукцией.
//                   </p>
//                 </div>
                
//                 <div className="space-y-6">
//                   <div className="flex items-center group">
//                     <div className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors">
//                       <Phone className="w-5 h-5 text-[#fb4b06] group-hover:text-white transition-colors" />
//                     </div>
//                     <div>
//                       <div className="text-gray-500 text-sm mb-1">Телефон</div>
//                       <div className="text-[#1E22AA] text-lg font-semibold">+7 (7172) 12-34-56</div>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center group">
//                     <div className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors">
//                       <Mail className="w-5 h-5 text-[#fb4b06] group-hover:text-white transition-colors" />
//                     </div>
//                     <div>
//                       <div className="text-gray-500 text-sm mb-1">Email</div>
//                       <div className="text-[#1E22AA] text-lg font-semibold">info@altyn-gaya.kz</div>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center group">
//                     <div className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors">
//                       <MapPin className="w-5 h-5 text-[#fb4b06] group-hover:text-white transition-colors" />
//                     </div>
//                     <div>
//                       <div className="text-gray-500 text-sm mb-1">Адрес</div>
//                       <div className="text-[#1E22AA] text-lg font-semibold">г. Астана, ул. Примерная, 123</div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="pt-6">
//                   <button className="bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/90 hover:from-[#fb4b06] hover:to-[#E85D24] text-white rounded-full px-10 py-5 text-xl font-bold shadow-lg shadow-[#1E22AA]/20 hover:shadow-[#fb4b06]/30 transition-all duration-500 flex items-center gap-3">
//                     <span>Связаться с нами</span>
//                     <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//                   </button>
//                 </div>
//               </div>
//             </FadeInView>
            
//             <FadeInView delay={300}>
//               <div className="relative">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-[#1E22AA] to-[#fb4b06] rounded-2xl blur-xl opacity-20 animate-pulse"></div>
//                 <div className="relative p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
//                   <h3 className="text-2xl font-bold text-[#1E22AA] mb-6">Отправить сообщение</h3>
                  
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-700 text-sm font-medium mb-2">Ваше имя</label>
//                       <input 
//                         type="text" 
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06]" 
//                         placeholder="Введите ваше имя"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
//                       <input 
//                         type="email" 
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06]" 
//                         placeholder="Введите ваш email"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-gray-700 text-sm font-medium mb-2">Телефон</label>
//                       <input 
//                         type="tel" 
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06]" 
//                         placeholder="Введите ваш телефон"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-gray-700 text-sm font-medium mb-2">Сообщение</label>
//                       <textarea 
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] min-h-[120px]" 
//                         placeholder="Введите ваше сообщение"
//                       ></textarea>
//                     </div>
                    
//                     <button className="w-full bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:from-[#E85D24] hover:to-[#fb4b06] text-white rounded-full py-4 text-lg font-semibold shadow-lg shadow-[#fb4b06]/20 hover:shadow-[#fb4b06]/30 transition-all duration-500">
//                       Отправить сообщение
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </FadeInView>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


//fifth one

'use client';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft, ChevronRight, Check, ArrowRight, Phone, Mail, MapPin, Calendar, Users, UserCheck, Shield, Youtube, MessageCircle } from "lucide-react";
import ProcessSection from "./components/ProcessSection";
import ProductCarousel from "./components/ProductCarousel";
import AboutCompanySection from "./components/AboutCompanySection";
import HeroSection from "./components/HeroSection";
import FAQSection from "./components/FAQSection";
import AdvancedWaveSeparator from "./components/BrushWaveSeparator";
import { FaInstagram, FaYoutube, FaTiktok, FaWhatsapp, FaPlus, FaTimes } from 'react-icons/fa';

export const runtime = 'edge';

interface SocialLink {
  href: string;
  icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  { href: 'https://www.whatsapp.com', icon: FaWhatsapp },
  { href: 'https://www.tiktok.com', icon: FaTiktok },
  { href: 'https://www.instagram.com', icon: FaInstagram },
  { href: 'https://www.youtube.com', icon: FaYoutube },
];

const SocialMediaIcons: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-[10px] right-[10px] sm:bottom-[15px] sm:right-[15px] z-[100]">
      <ul className="list-none flex flex-col p-0 m-0">
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          const isHovered = hoveredIndex === index;
          
          return (
            <li 
              key={index}
              className="transform transition-all duration-300 hover:-translate-x-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeSlideIn 0.3s ease ${index * 0.1}s both`
              }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  text-white rounded-full w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mt-[5px] 
                  flex items-center justify-center no-underline 
                  transition-all duration-300 ease-in-out
                  hover:shadow-lg hover:shadow-black/20
                  ${isHovered ? 'scale-110' : ''}
                  ${link.href.includes('whatsapp') ? 'bg-[#31d642]' : ''}
                  ${link.href.includes('instagram') ? 'bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]' : ''}
                  ${link.href.includes('youtube') ? 'bg-[#ff403a]' : ''}
                  ${link.href.includes('tiktok') ? 'bg-[#000000]' : ''}
                `}
                style={{
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: isHovered ? '0 4px 10px rgba(0,0,0,0.25)' : 'none'
                }}
              >
                <IconComponent 
                  className={`
                    w-4 h-4 sm:w-6 sm:h-6 
                    transition-all duration-300 
                    ${isHovered ? 'animate-pulse scale-110' : ''}
                  `} 
                />
              </a>
            </li>
          );
        })}
      </ul>

      {/* Add global styles for animations */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};


// Contact information
const contactInfo = {
  phone: "+993 61 64 09 21",
  email: "altyngaya2008@gmail.com",
  address: "г. Мары, ул. Шаджахан, 22, велаят Мары, Туркменистан"
};

// Component for smooth element appearance
const FadeInView = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  
  // Company advantages array
  const advantages = [
    {
      title: "Качество",
      description: "Производство с использованием экологически чистого сырья и современных технологий",
      image: "/images/wagtlayynca/step1.webp",
      stats: [
        { value: 99.5, label: "Соответствие стандартам" },
        { value: 15, label: "Лет опыта" }
      ]
    },
    {
      title: "Технологии",
      description: "Инновационные решения и автоматизация производства для максимальной эффективности",
      image: "/images/wagtlayynca/step2.webp",
      stats: [
        { value: 85, label: "Автоматизация процессов" },
        { value: 12, label: "Патентов и разработок" }
      ]
    },
    {
      title: "Экологичность",
      description: "Бережное отношение к природе и использование возобновляемых ресурсов",
      image: "/images/wagtlayynca/step3.webp",
      stats: [
        { value: 70, label: "Переработка отходов" },
        { value: 40, label: "Снижение углеродного следа" }
      ]
    }
  ];
  
  // Scroll handler for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen overflow-hidden">
      <SocialMediaIcons />
      <HeroSection />
      <AdvancedWaveSeparator 
        color="#1E22AA" 
        secondaryColor="#3D41CC"
        height={120} 
        animationSpeed={8}
        complexity={1}
        layers={3}
      />
      <ProductCarousel />

      <AboutCompanySection />
      {/* <section className="relative py-24 min-h-screen flex items-center">
        <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="absolute bottom-0 left-0 w-full h-full"
            fill="#000000"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H1000C934.18,2.37,870.42,13.91,821.39,56.44Z"></path>
          </svg>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E22AA] to-[#1E22AA]/90 opacity-95"></div>
          <div className="absolute inset-0" style={{ backgroundImage: "url('/api/placeholder/1200/800')", backgroundSize: "cover", mixBlendMode: "overlay", opacity: 0.1 }}></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <FadeInView>
                <div className="inline-block mb-4 bg-[#fb4b06]/10 backdrop-blur-sm rounded-full px-6 py-2">
                  <span className="text-white text-sm font-medium uppercase tracking-wider">С 2008 года на рынке</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
                  О КОМПАНИИ <span className="text-[#fb4b06]">ALTYN GAYA</span>
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Лидер в производстве бумажной продукции и бытовой химии с 2008 года. Мы создаём продукты, способные удовлетворить самые высокие стандарты качества и экологичности.
                </p>
              </FadeInView>
              
              <div className="space-y-8">
                <FadeInView delay={300} className="group">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center shrink-0 mr-6 shadow-lg group-hover:scale-105 transition-all">
                        <span className="text-white text-2xl font-bold">16+</span>
                      </div>
                      <div>
                        <h4 className="text-xl text-white font-bold mb-2">Наша история</h4>
                        <p className="text-white/80 leading-relaxed">Более 16 лет успешной работы на рынке и постоянного совершенствования производственных процессов</p>
                      </div>
                    </div>
                  </div>
                </FadeInView>
                
                <FadeInView delay={500} className="group">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center shrink-0 mr-6 shadow-lg group-hover:scale-105 transition-all">
                        <span className="text-white text-2xl font-bold">99%</span>
                      </div>
                      <div>
                        <h4 className="text-xl text-white font-bold mb-2">Наши ценности</h4>
                        <p className="text-white/80 leading-relaxed">Качество, инновации и экологичность во всех аспектах деятельности компании</p>
                      </div>
                    </div>
                  </div>
                </FadeInView>
                
                <FadeInView delay={700} className="group">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center shrink-0 mr-6 shadow-lg group-hover:scale-105 transition-all">
                        <span className="text-white text-2xl font-bold">24/7</span>
                      </div>
                      <div>
                        <h4 className="text-xl text-white font-bold mb-2">Наш подход</h4>
                        <p className="text-white/80 leading-relaxed">Современные технологии и строгий контроль качества на каждом этапе производства</p>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              </div>
              
              <FadeInView delay={900}>
                <button className="group bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:from-white hover:to-white rounded-full transition-all duration-500 text-white hover:text-[#fb4b06] px-10 py-5 text-xl font-bold flex items-center gap-3 shadow-lg">
                  Узнать больше
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </FadeInView>
            </div>
            
            <FadeInView delay={300}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] rounded-2xl blur-xl opacity-20 animate-pulse"></div>
                <div className="relative h-full md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <Image
                    src="/api/placeholder/600/500"
                    alt="Производство Altyn Gaya"
                    width={600}
                    height={500}
                    className="w-full h-full object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E22AA]/50 to-transparent"></div>
                  
                  <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="text-[#fb4b06] text-4xl font-bold mb-1">16+</div>
                        <div className="text-white text-sm">Лет опыта</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#fb4b06] text-4xl font-bold mb-1">50+</div>
                        <div className="text-white text-sm">Сотрудников</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#fb4b06] text-4xl font-bold mb-1">95%</div>
                        <div className="text-white text-sm">Довольных клиентов</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section> */}

      {/* Products - 3D carousel with effects */}
      {/* <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="absolute bottom-0 left-0 w-full h-full transform rotate-180"
            fill="#1E22AA"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H1000C934.18,2.37,870.42,13.91,821.39,56.44Z"></path>
          </svg>
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#1E22AA]/5 filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#fb4b06]/5 filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeInView>
              <div className="inline-block mb-4 bg-[#fb4b06]/10 rounded-full px-6 py-2">
                <span className="text-[#fb4b06] text-sm font-medium uppercase tracking-wider">Наша продукция</span>
              </div>
              <h2 className="text-5xl font-bold text-[#1E22AA] mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
                КАЧЕСТВО, КОТОРОЕ <span className="text-[#fb4b06]">ЗАБОТИТСЯ О ВАС</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Каждый продукт компании Altyn Gaya разработан с заботой о комфорте и здоровье наших клиентов. Мы используем только лучшие материалы и современные технологии производства.
              </p>
            </FadeInView>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {products.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product}
                isActive={index === activeProductIndex} 
              />
            ))}
            
            <div className="flex justify-between items-center mt-12">
              <Button 
                onClick={prevProduct} 
                className="w-14 h-14 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-[#fb4b06] hover:text-white transition-colors flex items-center justify-center group"
                variant="outline"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </Button>
              
              <div className="flex space-x-3">
                {products.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveProductIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeProductIndex 
                        ? "bg-[#fb4b06] w-10" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button 
                onClick={nextProduct} 
                className="w-14 h-14 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-[#fb4b06] hover:text-white transition-colors flex items-center justify-center group"
                variant="outline"
              >
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}


      {/* НАШИ ПРЕИМУЩЕСТВА */}
    {/* <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-20 text-center"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          
          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-10 shadow-lg relative z-10 border border-white/20">
            <h2 className="text-4xl font-black bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-3">НАШИ ПРЕИМУЩЕСТВА</h2>
            <p className="text-xl text-neutral-600 font-light">ПОЧЕМУ ВЫБИРАЮТ ALTYN GAYA</p>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-600 text-center max-w-3xl mx-auto mb-16 text-lg font-light"
        >
          Мы стремимся к совершенству на всех этапах производства и доставки нашей продукции, 
          гарантируя удовлетворение потребностей даже самых требовательных клиентов.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {advantages.map((advantage, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors duration-300">
                <span className="text-2xl text-amber-500 font-bold">{index + 1}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">{advantage.title}</h3>
              <p className="text-neutral-600 mb-6 font-light">{advantage.description}</p>
              
              {advantage.stats && advantage.stats.length > 0 && (
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  {advantage.stats.map((stat, i) => (
                    <div key={i} className="flex items-center mb-3 group">
                      <div className="w-2 h-8 bg-amber-400 rounded-full mr-4 group-hover:h-10 transition-all duration-300"></div>
                      <span className="text-neutral-700">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>


        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 perspective-1000"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "5+", label: "лет на рынке", color: "from-amber-500 to-amber-300" },
              { value: "1000+", label: "довольных клиентов", color: "from-emerald-500 to-emerald-300" },
              { value: "25+", label: "профессионалов в команде", color: "from-sky-500 to-sky-300" },
              { value: "100%", label: "гарантия качества", color: "from-violet-500 to-violet-300" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  rotateX: 5,
                  rotateY: 10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="p-8 bg-white rounded-3xl shadow-lg border border-neutral-100"
              >
                <div className={`text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-neutral-600 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section> */}

    {/* НАШИ ПРЕИМУЩЕСТВА - Redesigned to match previous sections' style */}
  <section className="py-24 bg-white relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-[#fb4b06]/5 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#1E22AA]/5 to-transparent rounded-full"></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <FadeInView>
          <div className="inline-block mb-4 bg-[#fb4b06]/10 rounded-full px-6 py-2">
            <span className="text-[#fb4b06] text-sm font-medium uppercase tracking-wider">Почему выбирают нас</span>
          </div>
          <h2 className="text-5xl font-bold text-[#1E22AA] mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
            НАШИ <span className="text-[#fb4b06]">ПРЕИМУЩЕСТВА</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Мы стремимся к совершенству на всех этапах производства и доставки нашей продукции, 
            гарантируя удовлетворение потребностей даже самых требовательных клиентов.
          </p>
        </FadeInView>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Advantage 1 */}
        <FadeInView delay={100}>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="border-b border-gray-100 p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#fb4b06] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] group-hover:text-white transition-colors">1</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Высокое качество</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы используем только экологически чистые материалы и современное оборудование, 
                обеспечивая превосходное качество нашей продукции.
              </p>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Сертифицированное производство</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Многоуровневый контроль</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
        
        {/* Advantage 2 */}
        <FadeInView delay={200}>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="border-b border-gray-100 p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#fb4b06] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] group-hover:text-white transition-colors">2</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Доступные цены</h3>
              <p className="text-gray-600 leading-relaxed">
                Благодаря оптимизации производства и прямым поставкам, 
                мы предлагаем конкурентные цены без потери качества.
              </p>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Гибкая система скидок</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Специальные условия для оптовиков</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
        
        {/* Advantage 3 */}
        <FadeInView delay={300}>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="border-b border-gray-100 p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#fb4b06] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] group-hover:text-white transition-colors">3</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Надежные поставки</h3>
              <p className="text-gray-600 leading-relaxed">
                Оперативная логистика и строгое соблюдение сроков доставки 
                делают нас надежным партнером для наших клиентов.
              </p>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Всегда в срок</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Доставка по всему Туркменистану и России</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
      
      {/* Stats section */}
      <FadeInView delay={400}>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 group-hover:scale-110 transition-all">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#1E22AA] mb-2">15+</div>
            <div className="text-gray-600">лет на рынке</div>
          </div>
          
          {/* Stat 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/80 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#1E22AA]/20 group-hover:shadow-[#1E22AA]/30 group-hover:scale-110 transition-all">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#1E22AA] mb-2">1000+</div>
            <div className="text-gray-600">довольных клиентов</div>
          </div>
          
          {/* Stat 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 group-hover:scale-110 transition-all">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#1E22AA] mb-2">25+</div>
            <div className="text-gray-600">профессионалов в команде</div>
          </div>
          
          {/* Stat 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/80 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#1E22AA]/20 group-hover:shadow-[#1E22AA]/30 group-hover:scale-110 transition-all">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#1E22AA] mb-2">100%</div>
            <div className="text-gray-600">гарантия качества</div>
          </div>
        </div>
      </FadeInView>
      
      {/* CTA Button */}
      <FadeInView delay={500}>
        <div className="mt-16 text-center">
          <button className="relative overflow-hidden group bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:from-[#E85D24] hover:to-[#fb4b06] text-white px-10 py-5 text-xl rounded-full font-semibold shadow-lg shadow-[#fb4b06]/20 hover:shadow-[#fb4b06]/40 transition-all">
            <span className="relative z-10 flex items-center gap-3">
              УЗНАТЬ БОЛЬШЕ О НАШЕЙ ПРОДУКЦИИ
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </FadeInView>
    </div>
  </section>


      <ProcessSection />

      {/* Contact section */}
      <section className="py-24 bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/90 relative overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#fb4b06]/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <FadeInView>
                <div className="inline-block mb-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                  <span className="text-white text-sm font-medium uppercase tracking-wider">Свяжитесь с нами</span>
                </div>
                <h2 className="text-5xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
                  ОСТАЛИСЬ <span className="text-[#fb4b06]">ВОПРОСЫ?</span>
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-12">
                  Наши специалисты готовы ответить на все ваши вопросы о продукции и условиях сотрудничества. Заполните форму или свяжитесь с нами любым удобным способом.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
                      <Phone className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Телефон</p>
                      <p className="text-white font-medium">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
                      <Mail className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Email</p>
                      <p className="text-white font-medium">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
                      <MapPin className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Адрес</p>
                      <p className="text-white font-medium">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            </div>
            
            <FadeInView delay={300}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#1E22AA] mb-6">Отправить сообщение</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fb4b06] focus:border-[#fb4b06] outline-none transition-colors"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fb4b06] focus:border-[#fb4b06] outline-none transition-colors"
                      placeholder="Введите ваш email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fb4b06] focus:border-[#fb4b06] outline-none transition-colors"
                      placeholder="Введите ваше сообщение"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/90 hover:from-[#fb4b06] hover:to-[#E85D24] rounded-full text-white px-8 py-8 text-md font-semibold transition-all duration-300">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );