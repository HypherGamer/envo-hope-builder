import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function Contact() {
  const [reason, setReason] = useState("general");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent — we'll be in touch soon!");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get Involved
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
              Let's build something <span className="text-primary">together.</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Whether you want to volunteer, partner, or just say hello — we'd
              love to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { Icon: MapPin, label: "Visit", value: "No. 1, Hilltop Rd, Abakaliki, Nigeria" },
                { Icon: Phone, label: "Call", value: "+234 806 356 3604" },
                { Icon: Mail, label: "Email", value: "hello@envopeace.org" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
                    <Icon className="h-5 w-5 text-primary-deep" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+234 800 000 0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Reason for contacting</Label>
                <Select value={reason} onValueChange={setReason}>
                  <SelectTrigger id="reason">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us how you'd like to be involved…"
              />
            </div>
            <Button type="submit" variant="hero" size="xl" className="mt-6 w-full sm:w-auto">
              {submitted ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message Sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}