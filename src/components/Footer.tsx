import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Atmakuru Prakash. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
