import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Get in Touch</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <MapPin className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium">Our Location</p>
            <p className="text-sm text-muted-foreground">
              123 Main Street
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Mail className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium">Email Us</p>
            <a
              href="mailto:contact@example.com"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              amantrivedi598@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Phone className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium">Call Us</p>
            <a
              href="tel:+1234567890"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              +91 639264****
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}