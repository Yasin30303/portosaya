import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  index?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  alignHeading?: "left" | "center";
  containerSize?: "default" | "narrow" | "wide";
  borderTop?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  alignHeading = "left",
  containerSize = "default",
  borderTop = true,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32 scroll-mt-20 relative",
        borderTop && "border-t border-border/80",
        className
      )}
      {...props}
    >
      <Container size={containerSize}>
        {title && (
          <SectionHeading
            index={index}
            eyebrow={eyebrow}
            title={title}
            description={description}
            align={alignHeading}
          />
        )}
        {children}
      </Container>
    </section>
  );
}

