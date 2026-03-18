import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Clock, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="healer-container">
          {/* Page Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Need help with our apps?
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="max-w-2xl mx-auto grid gap-6">
            {/* Company Info */}
            <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary">
                  <Building2 className="w-6 h-6 text-violet" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-1">AstralBeat Technologies Pvt Ltd</h2>
                  <p className="text-muted-foreground">
                    We build AI-powered mobile applications and digital products.
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary">
                  <Mail className="w-6 h-6 text-violet" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-1">Email Us</h2>
                  <a
                    href="mailto:support@astralbeat.in"
                    className="text-lg text-primary hover:underline font-medium"
                  >
                    support@astralbeat.in
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary">
                  <Clock className="w-6 h-6 text-violet" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-1">Response Time</h2>
                  <p className="text-muted-foreground">
                    We usually respond within 24–48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
