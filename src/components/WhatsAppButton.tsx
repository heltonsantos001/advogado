import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5511980000000"; // Formato: código do país + DDD + número
  const message = "Olá! Gostaria de agendar uma consulta.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white p-0 transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};

export default WhatsAppButton;
