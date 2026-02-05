import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadConnectorForm } from "@/components/shared/LeadConnectorForm";

interface ProductCTAProps {
  productName: string;
}

export const ProductCTA = ({ productName }: ProductCTAProps) => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interessato a {productName}?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Richiedi un preventivo gratuito e senza impegno. Un nostro esperto ti contatterà entro 24 ore per un sopralluogo personalizzato.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="teal" size="lg" asChild>
              <Link to="/contatti">
                Richiedi Preventivo Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+393501780908">
                <Phone className="mr-2 h-5 w-5" />
                Chiama Ora
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            ✓ Preventivo gratuito &nbsp;•&nbsp; ✓ Sopralluogo senza impegno &nbsp;•&nbsp; ✓ Bonus 50% disponibile
          </p>

          {/* Lead Connector Form */}
          <LeadConnectorForm className="mt-12 max-w-2xl mx-auto glass-card p-4" />
        </motion.div>
      </div>
    </section>
  );
};
