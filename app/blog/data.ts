import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Essential Cybersecurity Tips for Small Businesses in Lagos",
    description: "Learn how to protect your business from cyber threats with these practical security measures that won't break the bank.",
    content: `In today's digital landscape, cybersecurity is no longer optional for small businesses. This comprehensive guide covers essential security measures including:
    
    1. Implementing strong password policies and two-factor authentication
    2. Regular software updates and patch management
    3. Employee security awareness training
    4. Data backup and recovery planning
    5. Network security monitoring
    
    We'll explore how these measures can be implemented cost-effectively while providing robust protection for your business data.`,
    category: "Security",
    date: "June 15, 2023",
    readTime: "6 min read",
    author: "Samuel Okonjo",
    tags: ["Cybersecurity", "Small Business", "Data Protection"],
    imageSrc: "/images/blog/cybersecurity-tips.jpg"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Remote Workstation Setup",
    description: "Create an efficient and ergonomic home office setup that boosts productivity and maintains work-life balance.",
    content: `Working from home requires more than just a laptop and internet connection. This guide covers:
    
    1. Choosing the right equipment and furniture
    2. Optimal workspace layout and ergonomics
    3. Essential software tools for remote work
    4. Network setup and security considerations
    5. Maintaining work-life balance
    
    Learn how to create a professional home office that enhances your productivity and protects your health.`,
    category: "Workstation",
    date: "May 28, 2023",
    readTime: "8 min read",
    author: "Chioma Adebayo",
    tags: ["Remote Work", "Productivity", "Office Setup"],
    imageSrc: "/images/blog/remote-workstation.jpg"
  },
  {
    id: 3,
    title: "Local SEO Strategies for Lagos Businesses",
    description: "Boost your local search rankings and attract more customers with these proven SEO techniques.",
    content: `Local SEO is crucial for businesses in Lagos looking to attract nearby customers. This article covers:
    
    1. Optimizing Google My Business listing
    2. Local keyword research and implementation
    3. Building local citations and backlinks
    4. Managing online reviews and ratings
    5. Mobile optimization strategies
    
    Discover how to make your business more visible to local customers searching online.`,
    category: "SEO",
    date: "April 10, 2023",
    readTime: "7 min read",
    author: "Tunde Williams",
    tags: ["Local SEO", "Digital Marketing", "Business Growth"],
    imageSrc: "/images/blog/lagos-seo.jpg"
  },
  {
    id: 4,
    title: "E-commerce Website Optimization: Speed and Conversion",
    description: "Learn how to optimize your e-commerce website for better performance and higher conversion rates.",
    content: `A fast, well-optimized e-commerce site is crucial for success. This guide explores:
    
    1. Website speed optimization techniques
    2. Mobile responsiveness improvements
    3. Checkout process optimization
    4. Product page best practices
    5. Cart abandonment reduction strategies
    
    Implement these strategies to improve your online store's performance and sales.`,
    category: "E-commerce",
    date: "March 15, 2023",
    readTime: "9 min read",
    author: "Folake Adeleke",
    tags: ["E-commerce", "Website Optimization", "Conversion Rate"],
    imageSrc: "/images/blog/ecommerce-optimization.jpg"
  },
  {
    id: 5,
    title: "Cloud Computing Solutions for Nigerian Businesses",
    description: "Explore how cloud computing can transform your business operations and reduce IT costs.",
    content: `Cloud computing offers numerous benefits for Nigerian businesses. This article discusses:
    
    1. Types of cloud services available
    2. Cost-benefit analysis of cloud adoption
    3. Implementation strategies
    4. Security considerations
    5. Local infrastructure challenges and solutions
    
    Learn how to leverage cloud technology for your business growth.`,
    category: "Cloud Computing",
    date: "February 28, 2023",
    readTime: "10 min read",
    author: "Ibrahim Hassan",
    tags: ["Cloud Computing", "Business Technology", "Digital Transformation"],
    imageSrc: "/images/blog/cloud-computing.jpg"
  },
  {
    id: 6,
    title: "Essential IT Security Policies for Your Business",
    description: "Develop comprehensive IT security policies to protect your business from cyber threats.",
    content: `Every business needs strong IT security policies. This guide covers:
    
    1. Password and access control policies
    2. Data handling and privacy guidelines
    3. Device usage and BYOD policies
    4. Incident response procedures
    5. Regular security audit protocols
    
    Create effective IT security policies that protect your business while maintaining productivity.`,
    category: "Security",
    date: "January 20, 2023",
    readTime: "8 min read",
    author: "Yetunde Bakare",
    tags: ["IT Security", "Policy Management", "Cyber Protection"],
    imageSrc: "/images/blog/security-policies.jpg"
  },
  {
    id: 7,
    title: "Choosing the Right Web Hosting for Your Nigerian Website",
    description: "Compare different web hosting options and find the perfect solution for your website.",
    content: `Selecting the right web hosting is crucial for website success. This guide explores:
    
    1. Types of web hosting services
    2. Local vs international hosting providers
    3. Performance considerations
    4. Cost comparison and analysis
    5. Security features to look for
    
    Make an informed decision about your website's hosting needs.`,
    category: "Web Hosting",
    date: "December 12, 2022",
    readTime: "7 min read",
    author: "Oluwaseun Adeleke",
    tags: ["Web Hosting", "Website Performance", "Technical Guide"],
    imageSrc: "/images/blog/web-hosting.jpg"
  },
  {
    id: 8,
    title: "Mobile App Development Trends in Nigeria",
    description: "Stay updated with the latest mobile app development trends and technologies in Nigeria.",
    content: `Mobile app development is evolving rapidly in Nigeria. This article covers:
    
    1. Current market trends and demands
    2. Popular development frameworks
    3. User experience considerations
    4. Monetization strategies
    5. Local success stories
    
    Understand what it takes to create successful mobile apps in the Nigerian market.`,
    category: "Development",
    date: "November 5, 2022",
    readTime: "9 min read",
    author: "Babajide Owolabi",
    tags: ["Mobile Apps", "Development", "Technology Trends"],
    imageSrc: "/images/blog/mobile-development.jpg"
  },
  {
    id: 9,
    title: "Network Infrastructure Setup for Small Offices",
    description: "A comprehensive guide to setting up reliable network infrastructure for small offices.",
    content: `Proper network setup is essential for business operations. This guide covers:
    
    1. Network hardware selection
    2. Wireless network optimization
    3. Security implementation
    4. Backup solutions
    5. Scalability planning
    
    Learn how to create a robust and secure network for your office.`,
    category: "Networking",
    date: "October 18, 2022",
    readTime: "8 min read",
    author: "Emmanuel Okafor",
    tags: ["Network Setup", "Office Infrastructure", "IT Management"],
    imageSrc: "/images/blog/network-setup.jpg"
  },
  {
    id: 10,
    title: "Digital Marketing Strategies for Tech Companies",
    description: "Effective digital marketing strategies specifically tailored for technology companies.",
    content: `Tech companies need specialized marketing approaches. This article explores:
    
    1. Content marketing for tech audiences
    2. Social media strategies
    3. Lead generation techniques
    4. Marketing automation tools
    5. Analytics and performance tracking
    
    Develop a strong digital presence for your tech company.`,
    category: "Marketing",
    date: "September 30, 2022",
    readTime: "7 min read",
    author: "Aisha Mohammed",
    tags: ["Digital Marketing", "Tech Industry", "Business Growth"],
    imageSrc: "/images/blog/tech-marketing.jpg"
  }
]; 