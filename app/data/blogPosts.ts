export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  imageSrc: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Essential Cybersecurity Tips for Small Businesses in Lagos",
    description: "Learn essential cybersecurity measures to protect your small business from cyber threats in Lagos.",
    content: `# 5 Essential Cybersecurity Tips for Small Businesses in Lagos

In today's digital age, cybersecurity is no longer optional for businesses of any size. Small businesses in Lagos are increasingly becoming targets for cybercriminals due to their often limited security measures. Here are five essential cybersecurity tips that can help protect your business from cyber threats.

## 1. Implement Strong Password Policies

Creating and maintaining strong passwords is your first line of defense against cyber attacks. Follow these guidelines:

- Use complex passwords with a minimum of 12 characters
- Include a mix of uppercase, lowercase, numbers, and special characters
- Change passwords regularly (every 90 days)
- Never share passwords across multiple accounts
- Consider using a password manager for your team

## 2. Regular Software Updates and Patch Management

Keeping your systems updated is crucial for maintaining security:

- Enable automatic updates for all operating systems
- Regularly update business applications and software
- Install security patches as soon as they become available
- Maintain an inventory of all software and their versions
- Remove or update legacy systems that no longer receive security updates

## 3. Employee Training and Awareness

Your employees are both your greatest asset and potential security vulnerability:

- Conduct regular cybersecurity awareness training
- Teach staff to identify phishing emails and social engineering attempts
- Create clear security policies and procedures
- Encourage reporting of suspicious activities
- Regular simulated phishing tests to assess awareness

## 4. Data Backup and Recovery

Protect your business data with a robust backup strategy:

- Implement automated daily backups
- Store backups in multiple locations (local and cloud)
- Regularly test data recovery procedures
- Encrypt sensitive backup data
- Document backup and recovery processes

## 5. Network Security Measures

Secure your business network with these essential measures:

- Install and maintain business-grade firewalls
- Use Virtual Private Networks (VPNs) for remote access
- Segment your network for better control
- Regularly monitor network traffic for suspicious activity
- Implement access controls based on user roles

## Get Professional Help

While these tips provide a good foundation, professional IT support can ensure comprehensive protection for your business. TeaMo Tech offers expert cybersecurity services tailored for small businesses in Lagos. Our team can help you implement these measures and provide ongoing support to keep your business secure.

Contact us today to learn more about how we can help protect your business from cyber threats.`,
    category: "Security",
    date: "April 19, 2025",
    readTime: "6 min read",
    author: "Damilarey",
    authorRole: "Security Specialist at TeaMo",
    imageSrc: "/images/blog/cybersecurity-tips.jpg",
    slug: "cybersecurity-tips-small-businesses"
  },
  {
    id: 2,
    title: "Maximizing Business Efficiency: IT Infrastructure Optimization Guide",
    description: "Learn how to enhance your business's IT systems for better performance and cost-effectiveness with our comprehensive optimization guide.",
    content: `# Maximizing Business Efficiency: IT Infrastructure Optimization Guide

In today's competitive business environment, having an optimized IT infrastructure is crucial for success. This comprehensive guide explores how Lagos businesses can enhance their IT systems for better performance and cost-effectiveness.

// ... rest of the content from it-infrastructure-optimization.mdx ...`,
    category: "Infrastructure",
    date: "April 11, 2025",
    readTime: "8 min read",
    author: "Damilarey",
    authorRole: "Infrastructure Specialist at TeaMo",
    imageSrc: "/images/blog/it-infrastructure.jpg",
    slug: "it-infrastructure-optimization"
  },
  {
    id: 3,
    title: "The Strategic Advantage of Managed IT Services for Lagos Businesses",
    description: "Discover how managed IT services can transform your business operations and provide a competitive edge in Lagos's dynamic market.",
    content: `# The Strategic Advantage of Managed IT Services for Lagos Businesses

In an era where technology drives business success, managed IT services have become a game-changer for Lagos businesses. Learn how partnering with a managed service provider (MSP) can transform your business operations and boost your competitive edge.

// ... rest of the content from managed-it-services-benefits.mdx ...`,
    category: "Services",
    date: "April 27, 2025",
    readTime: "7 min read",
    author: "Damilarey",
    authorRole: "Service Delivery Manager at TeaMo",
    imageSrc: "/images/blog/managed-services.jpg",
    slug: "managed-it-services-benefits"
  }
]; 