const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-cinzel font-bold text-primary text-lg mb-3">⚔️ CHAKRAVYUH 2K26</h3>
            <p className="text-sm text-muted-foreground">
              The Ultimate Coding Challenge for Girls.<br />
              Organized by FemSpire Club.
            </p>
          </div>
          <div>
            <h4 className="font-cinzel text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="/#about" className="hover:text-primary transition-colors">About</a>
              <a href="/#rounds" className="hover:text-primary transition-colors">Rounds</a>
              <a href="/register" className="hover:text-primary transition-colors">Register</a>
              <a href="/status" className="hover:text-primary transition-colors">Check Status</a>
            </div>
          </div>
          <div>
            <h4 className="font-cinzel text-sm font-semibold text-foreground mb-3">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>📞 9573309882 (NIDRABANGHIAAKSH)</span>
              <a
                href="https://www.instagram.com/chakravyuh_official_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                📸 @chakravyuh_official_
              </a>
              <a
                href="https://www.instagram.com/__mr_akash__782"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                📸 @__mr_akash__782
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          © 2026 FemSpire Club, Raghu Engineering College. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
