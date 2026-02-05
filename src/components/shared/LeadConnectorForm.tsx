import { useEffect } from "react";
import { motion } from "framer-motion";

interface LeadConnectorFormProps {
  height?: number;
  className?: string;
}

export const LeadConnectorForm = ({ 
  height = 673, 
  className = "" 
}: LeadConnectorFormProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`overflow-hidden ${className}`}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/he1mdWP7boFO61FVF2Pz"
        style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '4px' }}
        id="inline-he1mdWP7boFO61FVF2Pz"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Modulo Sito Web"
        data-height={height.toString()}
        data-layout-iframe-id="inline-he1mdWP7boFO61FVF2Pz"
        data-form-id="he1mdWP7boFO61FVF2Pz"
        title="Modulo Sito Web"
      />
    </motion.div>
  );
};
