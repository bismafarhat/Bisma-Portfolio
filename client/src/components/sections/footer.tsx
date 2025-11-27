import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
