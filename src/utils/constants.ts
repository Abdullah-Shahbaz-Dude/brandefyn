export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Services', path: '/services' },
  { label: 'Resources', path: '/resources' },
  { label: 'Free Audit', path: '#free-audit' },
];

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/17869275031',
  email: 'mailto:info@brandefyn.com',
  linkedin: 'https://www.linkedin.com/company/brandefyn',
  youtube: 'https://www.youtube.com/@Brandefyn-agency',
  instagram: 'https://www.instagram.com/brandefyn_/ ',
  facebook: 'https://www.facebook.com/people/Brandefyn/61558704822905/',
};

export const CONTACT_INFO = {
  phone: '+1 (786) 927-5031',
  email: 'amir@brandefyn.com',
  address: '7901 4TH ST N #21957, ST. PETERSBURG, FL 33702 US',
};

export const CALENDLY_STRATEGY_CALL_URL =
  'https://calendly.com/amazonwithamir/30min';

/** Calendly embed URL: dark main card only (bg + text). Other page elements unchanged. */
export const CALENDLY_EMBED_URL = `${CALENDLY_STRATEGY_CALL_URL}?primary_color=8b5cf6&background_color=0a0a0a&text_color=e4e4e7`;

export const SCHEDULE_CALL_EVENT = {
  hostName: 'Amir',
  eventTitle: 'Amazon Strategy Call',
  duration: '30 min',
  conferencingText: 'Web conferencing details provided upon confirmation',
  description: [
    'Claim your 100% Free, no-obligation 30-minute Scaling Call for your Ecom Business.',
    'Discuss your Goals, Hurdles you\'re currently facing, and Growth Plan of Action.',
  ],
  signOff: 'See you at the meeting. Amir!',
};

export const METRICS = [
  { value: 10, suffix: ' B+', label: 'Views generated' },
  { value: 500, suffix: ' M+', label: 'Impressions' },
  { value: 300, suffix: ' M+', label: 'Sales', prefix: '$' },
  { value: 250, suffix: ' +', label: 'Clients' },
];

export const SERVICES = [
  {
    title: 'Amazon PPC Management',
    description: 'Building Your Amazon Brand Through Strategic Advertising',
    features: [
      'In-depth PPC Strategy Audit',
      'Campaign Setup & Optimization',
      'Bid & Budget Management',
      'Search Term Optimization',
      'Brand Defense & Competitor Targeting',
      'ACoS & TACoS Reduction Strategies',
      'Data Analytics & Reporting',
      'DSP (Demand-Side Platform) Advertising',
    ],
  },
  {
    title: 'Brand Management',
    description: 'Comprehensive brand management for Amazon success',
    features: [
      'Catalog & Supply Chain Planning',
      'Listing SEO & Optimization',
      'Customer Support & Reputation',
      'Compliance & Risk Management',
      'Promotions, Coupons, Deals',
      'Returns, Refunds & Reimbursements',
      'Case Log Management Issue Resolution',
      'Pricing Adjustment',
    ],
  },
  {
    title: 'Launch CPG Brand',
    description: 'Complete CPG brand launch on Amazon',
    features: [
      'Product Research & Niche Validation',
      'FDA Compliance & Product Sourcing',
      'Brand Development & Packaging Design',
      'Amazon Listing Optimization & SEO',
      'Post Launch & Ranking Strategy',
      'Inventory & Supply Chain Management',
      'Handle Compliance & Risk',
      'Scaling Brand & Profitability',
    ],
  },
];

export const CASE_STUDIES = [
  {
    id: 1,
    title: 'Journey of Liquidation to Replenishment',
    subtitle: 'From debts to a stable business & a side hustle',
    quote: 'We started working with a client in the mid September 2024 who wanted to close his business. He hired us for the sake of selling inventory profitably so that he can pay his lendings/depts and shut down on Amazon.',
    author: 'Ben',
    role: 'Digital Manager, Athletic Annex',
    learnMore: true,
    beforePrice: '$283,440',
    afterPrice: '$955,284',
  },
  {
    id: 2,
    title: 'Achieving 900% Profit Growth & 340% Revenue Surge for Flower Power® on Amazon',
    subtitle: 'From a lineage of strong, hardworking businesswomen',
    quote: 'From a lineage of strong, hardworking businesswomen, the founder of Flower Power® built the brand with one core belief—caring for people comes first. Their vision was simple yet powerful: to create a brand that prioritizes women\'s well-being, offering safe, natural, and science-backed solutions for feminine health',
    author: 'Tai',
    role: 'IPW Industries',
    learnMore: true,
    beforePrice: '$283,440',
    afterPrice: '$955,284',
  },
];

// Case Studies for the main Case Studies page (2x2 grid)
export const CASE_STUDIES_GRID = [
  {
    id: 3,
    title: 'Supplement Brand Performance Summary',
    description: 'Strong financial performance with 39.3% margin—over $1M sales and healthy advertising efficiency in a competitive category.',
    category: 'Health & Wellness',
    image: '/src/assets/images/case-studies/liquidation-before.jpg',
    fullDetails: {
      brandName: 'LOOREADY USA',
      quote: 'This supplement brand has achieved strong financial performance with impressive profitability and healthy advertising efficiency.',
      author: 'Client',
      role: 'Health & Wellness Brand',
      performanceSummary: {
        intro: 'This supplement brand has achieved strong financial performance with impressive profitability and healthy advertising efficiency.',
        totalSales: '$1,036,883.15',
        netProfit: '$407,307.97',
        advertisingCost: '$112,300.50',
        profitMargin: '39.3%',
        paragraph: 'With a net margin of 39.3%, this brand stands out for its high profitability in a competitive category. Despite investing over $112K in advertising, the brand maintained strong cost control and scaled efficiently. The advertising strategy has proven to be both impactful and cost-effective, contributing to growth while preserving margins.',
        paragraph2: 'This case reflects the value of optimized ad spend, high-converting listings, and a strong product-market fit in achieving sustainable, high-margin growth on Amazon.',
      },
      imageSlots: 1,
    },
  },
  {
    id: 4,
    title: 'From Modest PPC Results to Impressive Growth',
    description: 'Doubled PPC sales and boosted CTR in just a few months; reduced ACoS and improved BSR with constant pricing for LOOREADY USA.',
    category: 'Health & Wellness',
    image: '/src/assets/images/case-studies/flower-power-before.jpg',
    fullDetails: {
      brandName: 'LOOREADY USA',
      quote: 'When this brand partnered with us, they faced flat PPC performance, high ACoS, and a lack of conversions. Within a few months we turned things around.',
      author: 'Client',
      role: 'LOOREADY USA',
      ppcStats: {
        headline: 'From Modest PPC Results to Impressive Growth: Doubled PPC Sales and Boosted CTR in Just a Few Months!',
        intro: 'When this brand partnered with us, they were facing typical challenges: flat PPC performance, high ACoS, and a lack of conversions. But within just a few months, we turned things around with remarkable results:',
        stats: [
          { label: 'PPC Sales', value: 'Increased from $3,793.10 to $7,099.01' },
          { label: 'PPC Orders', value: 'Jumped from 172 to 354 (over 50% growth!)' },
          { label: 'ACoS', value: 'Reduced from 40% to a lean 35.97%' },
          { label: 'CTR', value: 'Improved from 0.87% to 1.32%' },
          { label: 'Total Sales', value: 'Uplifted from $12,473.78 to $16,391.26' },
        ],
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Boosting CTR',
          body: 'The first focus was improving CTR, which we achieved by optimizing the product listings and creatively tweaking images and descriptions. This led to a significant jump in CTR from 0.87% to 1.32%—ensuring that more shoppers clicked on the ads.',
        },
        {
          stepNumber: 2,
          title: 'Revamping PPC Campaigns',
          body: 'We overhauled the existing PPC campaigns by pausing underperformers and re-strategizing with high-potential keywords. Through historical performance analysis, we optimized the bidding and focused on tighter, more relevant keyword targeting.',
        },
        {
          stepNumber: 3,
          title: 'Keyword Strategy',
          body: 'We targeted keywords with strong search volume and intent, placing them in highly structured, tightly controlled campaigns. This allowed us to lower CPC, improve visibility, and drive more conversions.',
        },
        {
          stepNumber: 4,
          title: "Achieving Amazon's Choice Badge",
          body: "One of the major achievements was earning Amazon Choice Badge, which boosted organic visibility and trust, leading to even stronger performance.",
        },
        {
          stepNumber: 5,
          title: 'Improved BSR Even with Constant Pricing',
          body: 'Despite maintaining the same price, we successfully improved the Best Seller Rank (BSR), further increasing organic ranking and making the product more competitive in its category.',
        },
      ],
      keyTakeaway: "By blending creative listing optimization and data-driven PPC strategies, we dramatically improved this brand's performance, doubling PPC sales and slashing ACoS. If your brand struggles with stagnant sales or inefficient ad spend, let's connect and turn things around!",
      imageSlots: 2,
    },
  },
  {
    id: 5,
    title: 'Exceptional YoY Growth Driven by Optimized PPC Strategy',
    description: 'Remarkable growth in 2025: 449 units and $79K+ revenue—835% unit growth and 783% revenue increase vs 2024, with ACoS down from 60% to 29%.',
    category: 'Beauty & Skincare',
    image: '/src/assets/images/case-studies/liquidation-after.jpg',
    fullDetails: {
      quote: 'Exceptional YoY growth driven by optimized PPC strategy—remarkable 2025 performance with doubled ad sales and significantly lower ACoS.',
      author: 'Client',
      role: 'Beauty & Skincare Brand',
      caseSummary: 'The brand has shown remarkable growth in 2025, achieving 449 units sold and $79,598.79 in revenue so far—compared to just 48 units and $9,012.00 for the entire year in 2024. This represents an 835% increase in unit sales and a 783% increase in revenue.\n\nA major contributor to this success has been the ongoing refinement of Amazon PPC campaigns. Sales from ads have doubled, increasing from $4,000 to over $8,000 year-to-date. At the same time, ACoS has dropped significantly—from 60% to 29%—indicating far more efficient ad spend. Notably, this performance improvement was achieved even while reducing overall ad spend, showing better campaign control and optimization.\n\nThis performance reflects the value of ongoing keyword pruning, bid management, and targeting improvements to scale profitably.',
      yoyStats: [
        { label: 'Units sold (2025 YTD)', value: '449 units' },
        { label: 'Revenue (2025 YTD)', value: '$79,598.79' },
        { label: '2024 full year', value: '48 units / $9,012.00' },
        { label: 'Unit sales increase', value: '835%' },
        { label: 'Revenue increase', value: '783%' },
        { label: 'PPC sales (YTD)', value: '$4,000 → $8,000+' },
        { label: 'ACoS', value: '60% → 29%' },
      ],
      imageSlots: 2,
    },
  },
  {
    id: 6,
    title: 'Scale Sales, Reduce Ad Inefficiency—90% Growth in 3 Months',
    description: 'This brand operates in Beauty & Personal Care and partnered with us to grow their Amazon presence organically and via advertising. Their main goal was to scale sales, reduce advertising inefficiency, and improve profit margins. Sales grew by over 90% in 3 months.',
    category: 'Home & Personal Care',
    image: '/src/assets/images/case-studies/flower-power-after.jpg',
    fullDetails: {
      quote: 'Our data-driven Amazon ads strategy unlocked scalable growth, improved conversion rates, and delivered long-term profitability for a competitive category.',
      author: 'Client',
      role: 'Home & Personal Care Brand',
      metrics: {
        result: 'Scalable growth and improved conversion rates',
        focus: 'Data-driven strategy',
        outcome: 'Long-term profitability',
      },
      overview: 'This brand operates in Beauty & Personal Care and partnered with us to grow their Amazon presence organically and via advertising. Their main goal was to scale sales, reduce advertising inefficiency, and improve profit margins.',
      challenges: [
        'High advertising spend with lower returns',
        'Limited visibility and inconsistent monthly revenue',
        'Weak profit margins due to high ad costs and competition',
      ],
      ourStrategy: [
        'Streamlined Sponsored Products, Sponsored Brands, and Display campaigns',
        'Tightened keyword targeting and applied aggressive negative targeting',
        'Optimized listings (images, title, bullet points)',
        'Adjusted pricing strategy to stay competitive',
        'Applied budget reallocation based on ROAS & ACoS performance',
        'Added deals during key periods (e.g., Prime events)',
      ],
      performanceResults: [
        'Sales grew by 91% from April to June',
        'Net profit increased 3.2x while ad spend decreased',
        'Advertising efficiency improved — ACoS dropped significantly',
      ],
      longTermGrowth: {
        period: 'Jan 2024 – July 9, 2025',
        paragraph: 'Over 1.5 years, this brand surpassed $678K in total Amazon sales with a steadily improving conversion trend. Performance spikes align with strategic events like Prime Day, discount periods, and PPC pushes.',
      },
      summary: [
        'Sales grew by over 90% in 3 months',
        'Profit increased by 227%',
        'ACoS dropped significantly while maintaining volume',
        'Lifetime sales of $678K+ were achieved with stable growth trends',
      ],
      imageSlots: 0,
    },
  },
];

export const REVIEWS = [
  { platform: 'Trustpilot', rating: 4.7, stars: 5, count: 6442 },
  { platform: 'Google', rating: 4.9, stars: 5, count: 6442 },
];

export const INDUSTRIES = [
  'Health & Wellness Supplements',
  'Beauty & Skincare',
  'Food & Beverages',
  'Pet Care',
  'Home & Personal Care',
];

// Benefits for Case Studies page
export const BENEFITS = [
  {
    id: 1,
    title: 'Reduced Ad Waste',
    image: '/src/assets/images/case-studies/liquidation-before.jpg',
  },
  {
    id: 2,
    title: 'Increased Visibility',
    image: '/src/assets/images/case-studies/flower-power-before.jpg',
  },
  {
    id: 3,
    title: 'Sustainable Growth',
    image: '/src/assets/images/case-studies/liquidation-after.jpg',
  },
];

// Placeholder for trusted by logos - user will add actual logos
export const TRUSTED_BY_LOGOS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
  logo: `/src/assets/images/trusted-by/logo-${i + 1}.png`,
}));

import testimonial1 from '../assets/videos/testimonial-1.mp4';
import testimonial2 from '../assets/videos/testimonial-2.mp4';
import testimonial3 from '../assets/videos/testimonial-3.mp4';

// Testimonial videos
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Client Name',
    company: 'Company Name',
    role: 'CEO',
    video: 'https://www.youtube.com/embed/3ljAT7eCDLg',
    videoSource: testimonial1,
    thumbnail: 'https://img.youtube.com/vi/3ljAT7eCDLg/maxresdefault.jpg',
    isYouTube: true,
  },
  {
    id: 2,
    name: 'Client Name',
    company: 'Company Name',
    role: 'Founder',
    video: 'https://www.youtube.com/embed/N8kAX07dJoE',
    videoSource: testimonial2,
    thumbnail: 'https://img.youtube.com/vi/N8kAX07dJoE/maxresdefault.jpg',
    isYouTube: true,
  },
  {
    id: 3,
    name: 'Client Name',
    company: 'Company Name',
    role: 'CEO',
    video: 'https://www.youtube.com/embed/3ljAT7eCDLg',
    videoSource: testimonial3,
    thumbnail: 'https://img.youtube.com/vi/3ljAT7eCDLg/maxresdefault.jpg',
    isYouTube: true,
  },
];

// Client testimonials for sliding carousel
export const CLIENT_TESTIMONIALS = [
  {
    id: 1,
    headline: "How we grew Farm To Pet by $419,000 YoY in H1, 2024 (+70.55% YoY)",
    quote: "The big advantage from working with the team is they're constantly available. We meet at least every other week, but they're also available on Slack, and anytime we run into issues, we're able to jump on them and resolve them really quickly.",
    name: 'Jackson',
    company: 'Founder, Farm To Pet',
  },
  {
    id: 2,
    headline: "How we increased sales by 300% in just 6 months",
    quote: "Working with Brandefyn has transformed our Amazon business. Their strategic approach to PPC management increased our sales by 300% in just 6 months. The team is professional, responsive, and truly understands the Amazon ecosystem.",
    name: 'Sarah Johnson',
    company: 'Wellness Brands Inc.',
  },
  {
    id: 3,
    headline: "From struggling brand to top performer",
    quote: "The best decision we made was partnering with Brandefyn. They took our struggling brand and turned it into a top performer. Their expertise in brand management and optimization is unmatched.",
    name: 'Michael Chen',
    company: 'Premium Products LLC',
  },
];

export const CaseStudiesImages = {
  one: '/src/assets/images/caseStudy/caseStudy-1.png',
  two: '/src/assets/images/caseStudy/caseStudy-2.png',
  three: '/src/assets/images/caseStudy/caseStudy-3.png',
  four: '/src/assets/images/caseStudy/caseStudy-4.png',
  five: '/src/assets/images/caseStudy/caseStudy-5.png',
  six: '/src/assets/images/caseStudy/caseStudy-6.png',
  seven: '/src/assets/images/caseStudy/caseStudy-7.png',
  eight: '/src/assets/images/caseStudy/caseStudy-8.png',
}
