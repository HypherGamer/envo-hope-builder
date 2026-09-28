import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqListProps {
  faqs: FaqItem[];
  className?: string;
}

export function FaqList({ faqs, className = "" }: FaqListProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`item-${index}`}
            className="rounded-2xl border border-border bg-card px-6 py-2 shadow-soft data-[state=open]:border-primary/40 data-[state=open]:shadow-elegant"
          >
            <AccordionTrigger className="text-base sm:text-lg font-bold text-foreground text-left py-4 hover:no-underline hover:text-primary">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-5 pt-1">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
