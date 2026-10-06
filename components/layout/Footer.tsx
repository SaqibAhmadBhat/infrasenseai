import Link from "next/link";
import { companyData } from "@/content/company";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-semibold text-xl tracking-tight text-foreground">{companyData.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              AIoT Road Infrastructure Intelligence
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wider uppercase">Platform</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/solution" className="text-sm text-muted-foreground hover:text-accent transition-colors">Solution</Link></li>
              <li><Link href="/technology" className="text-sm text-muted-foreground hover:text-accent transition-colors">Technology</Link></li>
              <li><Link href="/climate-impact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Climate Impact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wider uppercase">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/research" className="text-sm text-muted-foreground hover:text-accent transition-colors">Research</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wider uppercase">Institution</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {companyData.institution.name}
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/legal/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
