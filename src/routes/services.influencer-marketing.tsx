import { createFileRoute } from '@tanstack/react-router';
import { ServiceDetail } from '@/components/site/Marketing';
import { services } from '@/lib/site-data';
const service=services.find(item=>item.slug==='influencer-marketing');
if (!service) throw new Error('Service content not found');
export const Route=createFileRoute('/services/influencer-marketing')({staticData:{sitemap:true},head:()=>({meta:[{title:service.metaTitle},{name:'description',content:service.metaDescription},{property:'og:title',content:service.metaTitle},{property:'og:description',content:service.metaDescription},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:()=> <ServiceDetail service={service}/>});
