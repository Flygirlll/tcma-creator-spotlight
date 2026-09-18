import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
const logo = { url: '/tcma-logo.png' };

const links = [['Services','/services'],['For Brands','/for-brands'],['Creator Network','/creator-network'],['About','/about']] as const;

export function Header(){
 const [open,setOpen]=useState(false);
 return <>
  <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:h-24 lg:px-8">
     <Link to="/" aria-label="TCMA home"><img src={logo.url} alt="The Creator Marketing Agency" className="h-12 w-auto md:h-16" /></Link>
    <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
     {links.map(([label,to])=><Link key={to} to={to} activeProps={{className:'text-primary'}} className="font-accent text-lg uppercase text-foreground transition-colors hover:text-primary">{label}</Link>)}
     <Button asChild size="lg"><Link to="/contact">Book a Free Strategy Call <ArrowUpRight /></Link></Button>
    </nav>
    <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button>
   </div>
   {open&&<nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="flex flex-col">{links.map(([label,to])=><Link key={to} to={to} onClick={()=>setOpen(false)} className="border-b border-border py-4 font-accent text-2xl uppercase">{label}</Link>)}</div></nav>}
  </header>
  <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-foreground/20 bg-primary p-3 lg:hidden"><Button asChild variant="secondary" size="lg" className="w-full"><Link to="/contact">Book a Free Strategy Call <ArrowUpRight /></Link></Button></div>
 </>;
}

export function Footer(){return <footer className="bg-foreground pb-24 text-background lg:pb-0"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid gap-10 border-b border-background/20 pb-14 md:grid-cols-2 lg:grid-cols-4"><div><img src={logo.url} alt="TCMA" className="h-[4.6rem] w-auto brightness-0 invert"/><p className="mt-5 max-w-xs text-sm text-background/70">The Creator Marketing Agency. Strategic creator partnerships for brands ready to grow.</p></div><FooterGroup title="For Clients" items={[["Our Services","/services"],["Book a Call","/contact"]]}/><FooterGroup title="For Creators" items={[["Become a Creator","/creator-network"]]}/><div><p className="font-accent text-lg uppercase">Company</p><div className="mt-4 flex flex-col gap-3 text-sm text-background/70"><Link to="/about">About Us</Link><Link to="/privacy">Privacy</Link><span>LinkedIn</span><a href="https://www.instagram.com/thecreatormarketingagency_/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.tiktok.com/@creatormarketingagency_" target="_blank" rel="noopener noreferrer">TikTok</a></div></div></div><p className="pt-6 text-xs text-background/55">© 2026 The Creator Marketing Agency. All rights reserved.</p></div></footer>}
function FooterGroup({title,items}:{title:string;items:readonly (readonly [string,string])[]}){return <div><p className="font-accent text-lg uppercase">{title}</p><div className="mt-4 flex flex-col gap-3 text-sm text-background/70">{items.map(([label,to])=><Link key={to} to={to}>{label}</Link>)}</div></div>}
