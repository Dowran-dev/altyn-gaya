// // api/news/route.ts
// import { NextResponse } from 'next/server';

// interface News {
//   id: number;
//   title: string;
//   category: string;
//   date: string;
//   summary: string;
//   imageSrc: string;
//   slug: string;
//   featured?: boolean; // Optional as it's not present in every news item
//   readTime: string;
//   content: string;
//   relatedItems: number[];
// }

// const news: News[] = [
//     {
//         id: 1,
//         title: "Tide Launches New Formula with Enhanced Stain-Fighting Technology",
//         category: "Product Updates",
//         date: "February 15, 2025",
//         summary: "Our latest innovation delivers 50% more stain-fighting power while using less water and energy.",
//         imageSrc: "https://images.ctfassets.net/ajjw8wywicb3/2ovAibKVCqk64hr7KbG8g3/f42e41723941b7f95bf48fa7d774ca0f/Tide_LoH-hero_370x320.jpg?fm=webp",
//         slug: "new-stain-fighting-formula",
//         featured: true,
//         readTime: "4 min",
//         content: `
//           <h2>Revolutionary New Formula</h2>
//           <p>Today, Tide proudly announces the launch of our most advanced stain-fighting formula to date. After years of research and development, our team of scientists has created a revolutionary new formula that delivers 50% more stain-fighting power while simultaneously reducing water and energy usage during the washing process.</p>
          
//           <p>The new Tide formula features HydroBoost™ technology, a proprietary blend of enzymes and surfactants that target tough stains at the molecular level. This breakthrough innovation allows the detergent to work more efficiently, even in cold water cycles, helping consumers save on energy costs while still achieving exceptional cleaning results.</p>
    
//           <h2>Sustainability at the Core</h2>
//           <p>Beyond its superior cleaning power, the new formula was developed with sustainability in mind. The concentrated formula requires 30% less packaging material, and we've transitioned to 100% post-consumer recycled plastic bottles for all sizes. Additionally, the manufacturing process has been optimized to reduce water consumption by 25% compared to our previous formula.</p>
          
//           <p>"This launch represents a significant milestone in our ongoing commitment to both performance and sustainability," said Jane Smith, VP of Product Innovation at Tide. "Consumers no longer need to choose between effective cleaning and environmental responsibility—our new formula delivers both."</p>
    
//           <h2>Proven Results Against Tough Stains</h2>
//           <p>In extensive testing, the new formula demonstrated superior performance against the toughest household stains, including:
//             <ul>
//               <li>Red wine and berry stains</li>
//               <li>Cooking oils and greasy residues</li>
//               <li>Grass and outdoor stains</li>
//               <li>Coffee and tea marks</li>
//               <li>Make-up and cosmetic products</li>
//             </ul>
//           </p>
          
//           <p>Consumer testing showed a 98% satisfaction rate, with participants particularly noting the formula's ability to remove stains that previous detergents had failed to address completely.</p>
    
//           <h2>Availability and Pricing</h2>
//           <p>The new Tide formula will be available in stores nationwide starting March 1, 2025, and can be purchased online immediately. The product will be offered in various sizes to accommodate different household needs, with suggested retail prices starting at $11.99 for a 40-load bottle.</p>
          
//           <p>For more information about the new formula and to find a retailer near you, visit <a href="#">tide.com/new-formula</a>.</p>
//         `,
//         relatedItems: [2, 4, 6]
//       },
//       {
//         id: 2,
//         title: "Tide Partners with Ocean Cleanup Initiative to Reduce Plastic Waste",
//         category: "Sustainability",
//         date: "February 10, 2025",
//         summary: "Partnering with global organizations to remove 100 tons of plastic from oceans by 2026.",
//         imageSrc: "https://images.ctfassets.net/ajjw8wywicb3/2ovAibKVCqk64hr7KbG8g3/f42e41723941b7f95bf48fa7d774ca0f/Tide_LoH-hero_370x320.jpg?fm=webp",
//         slug: "ocean-cleanup-partnership",
//         featured: true,
//         readTime: "5 min",
//         content: `
//           <h2>A Commitment to Cleaner Oceans</h2>
//           <p>Tide is proud to announce a groundbreaking partnership with the International Ocean Cleanup Initiative, committing to remove 100 tons of plastic waste from the world's oceans by 2026. This multi-year collaboration represents one of the largest corporate commitments to ocean conservation to date.</p>
          
//           <p>The partnership will fund cleanup operations in five major oceanic regions, with a particular focus on areas most affected by plastic pollution. Advanced collection technologies, including autonomous cleanup vessels and innovative filtration systems, will be deployed to maximize removal efficiency.</p>
    
//           <h2>From Waste to Worth</h2>
//           <p>In a truly circular approach, a significant portion of the recovered ocean plastic will be recycled and reincorporated into Tide's packaging. By 2027, Tide aims to have at least 25% of its plastic packaging contain recycled ocean plastic, creating a closed-loop system that converts waste into value.</p>
          
//           <p>"This partnership goes beyond simple cleanup efforts," explained Dr. Marcus Chen, Head of Sustainability at Tide. "We're establishing a circular system where today's ocean waste becomes tomorrow's product packaging, demonstrating how brands can take concrete action against plastic pollution."</p>
    
//           <h2>Community Engagement</h2>
//           <p>Beyond direct cleanup operations, the partnership includes an extensive community engagement component. Tide will sponsor beach cleanup events in coastal communities across 15 countries, with a goal of engaging over 100,000 volunteers. Educational programs will be established in schools near these communities to raise awareness about plastic pollution and promote sustainable consumption habits.</p>
          
//           <p>Local recycling infrastructure will also be supported through grants and technical assistance, ensuring that coastal communities have the capacity to prevent future plastic pollution.</p>
    
//           <h2>Measuring Impact</h2>
//           <p>The partnership includes comprehensive monitoring and evaluation to track progress and impact. Independent marine scientists will assess the ecological impact of cleanup operations, while social impact researchers will evaluate community engagement activities.</p>
          
//           <p>Quarterly progress reports will be published publicly, maintaining transparency and accountability throughout the partnership's duration.</p>
          
//           <p>Learn more about how you can get involved at <a href="#">tide.com/ocean-cleanup</a>.</p>
//         `,
//         relatedItems: [1, 4, 5]
//       },
//       {
//         id: 3,
//         title: "How to Remove Tough Winter Stains with Tide",
//         category: "Tips & Tricks",
//         date: "January 28, 2025",
//         summary: "Expert advice on tackling mud, salt, and hot chocolate stains during the winter season.",
//         imageSrc: "https://images.ctfassets.net/ajjw8wywicb3/2ovAibKVCqk64hr7KbG8g3/f42e41723941b7f95bf48fa7d774ca0f/Tide_LoH-hero_370x320.jpg?fm=webp",
//         slug: "winter-stain-removal-guide",
//         readTime: "3 min",
//         content: `
//           <h2>Winter Stain Challenges</h2>
//           <p>As temperatures drop and winter activities ramp up, clothing faces a unique set of stain challenges. From road salt on your pants to hot chocolate spills on your favorite sweater, winter brings its own collection of tough-to-remove marks. This comprehensive guide will help you tackle the most common winter stains effectively with Tide.</p>
    
//           <h2>Road Salt and Snow Melt</h2>
//           <p>Those white residue marks from road salt and snow melt chemicals can damage fabric if left untreated. Here's how to remove them effectively:</p>
          
//           <ol>
//             <li>Brush off any excess dried salt before washing</li>
//             <li>Pre-treat the area with Tide Ultra Stain Release, gently working it into the fabric</li>
//             <li>Allow to sit for 5-10 minutes</li>
//             <li>Wash in the warmest water safe for the fabric</li>
//             <li>Check that the stain is completely removed before drying, as heat can set any remaining residue</li>
//           </ol>
          
//           <p>For particularly stubborn salt stains, create a solution of one tablespoon white vinegar in one cup of water and dab onto the stain before washing.</p>
    
//           <h2>Mud and Slush</h2>
//           <p>Winter mud and slush can contain various elements that make stains particularly challenging:</p>
          
//           <ol>
//             <li>Allow mud to dry completely</li>
//             <li>Brush off as much dried mud as possible</li>
//             <li>Pre-treat with Tide Heavy Duty liquid detergent directly on the stain</li>
//             <li>Work the detergent in gently with a soft brush or your fingers</li>
//             <li>Let sit for 15-20 minutes</li>
//             <li>Wash in the warmest water safe for the fabric</li>
//           </ol>
          
//           <p>For persistent mud stains, repeat the process or try soaking the garment overnight in a solution of Tide and water before washing again.</p>
    
//           <h2>Hot Beverages</h2>
//           <p>Hot chocolate, coffee, and tea stains are common winter hazards. Here's how to handle them:</p>
          
//           <ol>
//             <li>Immediately rinse from the back of the fabric with cold water</li>
//             <li>Apply Tide Ultra Stain Release directly to the stain</li>
//             <li>Gently rub the fabric together to work in the detergent</li>
//             <li>Let sit for 5 minutes</li>
//             <li>Wash in warm water with an additional dose of Tide</li>
//           </ol>
          
//           <p>For chocolate stains containing oils, try freezing the stain first to harden the chocolate, then scrape away as much as possible before treating.</p>
    
//           <h2>Winter Care Tips for Specialty Fabrics</h2>
//           <p>Winter clothing often includes specialty fabrics that require extra care:</p>
          
//           <ul>
//             <li><strong>Wool:</strong> Use Tide specially formulated for delicates and cold water</li>
//             <li><strong>Down:</strong> Wash with Tide Free & Gentle and add a clean tennis ball to the dryer to restore fluffiness</li>
//             <li><strong>Synthetics:</strong> Use Tide Sport to eliminate odors that can build up in synthetic winter wear</li>
//           </ul>
          
//           <p>For more stain removal tips and tricks, download our comprehensive winter care guide at <a href="#">tide.com/winter-care</a>.</p>
//         `,
//         relatedItems: [1, 4, 6]
//       },
//       {
//         id: 4,
//         title: "Tide's New Sustainable Packaging Reduces Plastic by 30%",
//         category: "Sustainability",
//         date: "January 20, 2025",
//         summary: "Our redesigned packaging uses recycled materials and requires less plastic overall.",
//         imageSrc: "https://images.ctfassets.net/ajjw8wywicb3/2ovAibKVCqk64hr7KbG8g3/f42e41723941b7f95bf48fa7d774ca0f/Tide_LoH-hero_370x320.jpg?fm=webp",
//         slug: "sustainable-packaging-launch",
//         readTime: "4 min",
//         content: `
//           <h2>Reimagining Packaging for Sustainability</h2>
//           <p>Tide is excited to announce the launch of our completely redesigned packaging system that reduces plastic usage by 30% across our entire product line. This initiative represents one of the most significant packaging overhauls in our company's history and reinforces our commitment to environmental responsibility.</p>
          
//           <p>The new packaging design maintains the iconic Tide look while fundamentally rethinking how our products are contained and dispensed. The engineering team spent three years developing containers that use less material while maintaining durability and functionality.</p>
    
//           <h2>Innovative Materials and Design</h2>
//           <p>The new packaging incorporates several innovative features:</p>
          
//           <ul>
//             <li>Bottles made from 100% post-consumer recycled plastic</li>
//             <li>A revolutionary compressed design that reduces overall plastic volume</li>
//             <li>New precision-pour cap that prevents overuse and waste</li>
//             <li>Water-soluble packaging options for pod products</li>
//             <li>Cardboard packaging alternatives for select products</li>
//           </ul>
          
//           <p>"We've fundamentally reimagined what laundry packaging can be," said Robert Jackson, Head of Packaging Innovation. "Every element of these containers has been optimized to minimize environmental impact while enhancing the consumer experience."</p>
    
//           <h2>Environmental Impact</h2>
//           <p>The packaging redesign is projected to deliver significant environmental benefits:</p>
          
//           <ul>
//             <li>Annual reduction of 4,500 metric tons of virgin plastic</li>
//             <li>15% smaller carbon footprint across the packaging lifecycle</li>
//             <li>20% reduction in transportation emissions due to more efficient shipping dimensions</li>
//             <li>Improved recyclability rate, with 95% of packaging components now widely recyclable</li>
//           </ul>
          
//           <p>Third-party environmental assessment confirms that the new packaging will prevent approximately 300,000 barrels of oil from being used for plastic production annually.</p>
    
//           <h2>Consumer Education</h2>
//           <p>To maximize the impact of the new packaging, Tide is launching a comprehensive consumer education campaign. Clear recycling instructions are prominently featured on all packages, and an augmented reality feature allows consumers to scan the package with their smartphone to receive detailed information about proper disposal in their specific location.</p>
          
//           <p>The campaign also emphasizes the importance of using the correct amount of detergent, as the new precision-pour system helps prevent overuse, reducing both waste and environmental impact.</p>
    
//           <h2>Availability</h2>
//           <p>The new packaging will be rolled out across all Tide products throughout 2025, beginning with liquid detergents in February and expanding to all product lines by November.</p>
          
//           <p>For more information about our sustainable packaging initiative, visit <a href="#">tide.com/sustainable-packaging</a>.</p>
//         `,
//         relatedItems: [1, 2, 5]
//       },
//       {
//         id: 5,
//         title: "Tide Named #1 in Customer Satisfaction for Third Year Running",
//         category: "Awards",
//         date: "January 12, 2025",
//         summary: "Independent consumer survey ranks Tide highest in performance and value.",
//         imageSrc: "https://images.ctfassets.net/ajjw8wywicb3/2ovAibKVCqk64hr7KbG8g3/f42e41723941b7f95bf48fa7d774ca0f/Tide_LoH-hero_370x320.jpg?fm=webp",
//         slug: "customer-satisfaction-award",
//         readTime: "2 min",
//         content: `
//           <h2>A Tradition of Excellence</h2>
//           <p>For the third consecutive year, Tide has been named the #1 laundry detergent in customer satisfaction according to the National Consumer Products Survey (NCPS). This prestigious recognition is based on comprehensive consumer feedback across multiple performance categories, including cleaning effectiveness, scent quality, value for money, and environmental impact.</p>
          
//           <p>More than 50,000 consumers participated in the annual survey, which evaluates over 40 laundry detergent brands available in the U.S. market. Tide received top ratings in 7 out of 10 performance categories, achieving an overall satisfaction score of 94.3 out of 100.</p>
    
//           <h2>Category Leadership</h2>
//           <p>Tide particularly excelled in the following categories:</p>
          
//           <ul>
//             <li><strong>Stain Removal:</strong> 96.7/100</li>
//             <li><strong>Overall Cleaning Power:</strong> 95.8/100</li>
//             <li><strong>Color Protection:</strong> 94.2/100</li>
//             <li><strong>Value for Money:</strong> 92.1/100</li>
//             <li><strong>Scent Quality and Longevity:</strong> 93.5/100</li>
//             <li><strong>Product Innovation:</strong> 95.0/100</li>
//             <li><strong>Packaging Design and Functionality:</strong> 91.8/100</li>
//           </ul>
          
//           <p>Notably, Tide showed significant improvement in the "Environmental Responsibility" category, jumping from 12th place in 2023 to 3rd place this year, reflecting our substantial investments in sustainability initiatives.</p>
    
//           <h2>What Consumers Are Saying</h2>
//           <p>The NCPS report highlighted several recurring themes in consumer feedback:</p>
          
//           <ul>
//             <li>"Consistently removes stains that other brands leave behind"</li>
//             <li>"Worth the premium price for the superior cleaning power"</li>
//             <li>"Appreciate the recent sustainability improvements"</li>
//             <li>"Wide range of products allows me to find the perfect solution for my needs"</li>
//           </ul>
          
//           <p>"This recognition is particularly meaningful because it comes directly from consumers," said Maria Rodriguez, Chief Marketing Officer at Tide. "We're committed to continuing our tradition of innovation and excellence while expanding our sustainability efforts to meet the evolving expectations of our customers."</p>
    
//           <h2>Looking Forward</h2>
//           <p>As we celebrate this achievement, Tide remains focused on future innovation. The company recently increased its R&D budget by 35%, with significant resources dedicated to developing eco-friendly formulations and sustainable packaging solutions.</p>
          
//           <p>For more information about the NCPS survey results and Tide's performance, visit <a href="#">tide.com/awards</a>.</p>
//         `,
//         relatedItems: [1, 2, 4]
//       },
//       {
//         id: 6,
//         title: "Introducing Tide Professional for Commercial Laundry Services",
//         category: "Product Updates",
//         date: "December 15, 2024",
//         summary: "New industrial-strength formula designed specifically for hotels, hospitals, and laundromats.",
//         imageSrc: "https://images.ctfassets.net/ajjw8wywicb3/2ovAibKVCqk64hr7KbG8g3/f42e41723941b7f95bf48fa7d774ca0f/Tide_LoH-hero_370x320.jpg?fm=webp",
//         slug: "tide-professional-launch",
//         readTime: "3 min",
//         content: `
//           <h2>Meeting Professional Cleaning Demands</h2>
//           <p>Tide is proud to announce the launch of Tide Professional, a new product line specifically engineered for commercial laundry operations. After extensive research with hotels, hospitals, laundromats, and other commercial clients, we've developed formulations that address the unique challenges faced by professional laundry services.</p>
          
//           <p>The Tide Professional line represents our first dedicated entry into the commercial laundry market, bringing our industry-leading cleaning technology to high-volume applications that process thousands of loads daily.</p>
    
//           <h2>Industry-Specific Formulations</h2>
//           <p>The Tide Professional line includes specialized formulations for different commercial sectors:</p>
          
//           <ul>
//             <li><strong>Tide Professional Healthcare:</strong> Enhanced pathogen reduction capabilities, designed for hospitals and healthcare facilities</li>
//             <li><strong>Tide Professional Hospitality:</strong> Optimized for luxurious feel and scent longevity, ideal for hotels and resorts</li>
//             <li><strong>Tide Professional Industrial:</strong> Maximum stain removal power for work clothes and uniforms with industrial soiling</li>
//             <li><strong>Tide Professional Bulk:</strong> Cost-effective solution for laundromats and multi-housing facilities</li>
//           </ul>
          
//           <p>Each formulation has been tested in real-world commercial environments for over a year, with performance data showing 25-40% better cleaning results compared to leading commercial detergents, particularly on stubborn stains and heavily soiled items.</p>
    
//           <h2>Economic and Environmental Benefits</h2>
//           <p>Tide Professional is designed to deliver significant economic advantages:</p>
          
//           <ul>
//             <li>Ultra-concentrated formulas reduce shipping and storage costs</li>
//             <li>Low-temperature effectiveness cuts energy usage by up to 50%</li>
//             <li>Advanced enzymes shorten wash cycles, increasing machine capacity</li>
//             <li>Specialized soil release polymers extend linen and garment lifespan</li>
//           </ul>
          
//           <p>Environmentally, the product line features biodegradable surfactants, reduced packaging waste through bulk delivery systems, and phosphate-free formulations. The entire line is certified by the Environmental Protection Agency's Safer Choice program.</p>
    
//           <h2>Smart Dosing Technology</h2>
//           <p>Tide Professional integrates with a new Smart Dosing System that precisely measures detergent based on load weight, fabric type, and soil level. This system connects to a centralized management platform that provides detailed usage analytics, helping commercial operations optimize their laundry processes and reduce waste.</p>
          
//           <p>The Smart Dosing System can be retrofitted to most commercial washing machines, and Tide offers complimentary installation with qualifying volume commitments.</p>
    
//           <h2>Availability and Support</h2>
//           <p>Tide Professional is available immediately through commercial channels and dedicated distributors. A specialized service team provides on-site consultation, training, and ongoing support to commercial clients.</p>
          
//           <p>For more information about Tide Professional or to schedule a consultation, visit <a href="#">tideprofessional.com</a> or contact our commercial division at 1-800-TIDE-PRO.</p>
//         `,
//         relatedItems: [1, 3, 4]
//       }
// ];


// export async function GET() {
//   return NextResponse.json(news);
// }