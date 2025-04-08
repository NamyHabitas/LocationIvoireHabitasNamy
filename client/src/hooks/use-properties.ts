import { useQuery } from "@tanstack/react-query";
import { Property } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

interface UsePropertiesProps {
  queryKey: string[];
  enabled?: boolean;
}

export function useProperties({ queryKey, enabled = true }: UsePropertiesProps) {
  const { toast } = useToast();
  
  return useQuery<Property[]>({
    queryKey,
    enabled,
    onError: () => {
      toast({
        title: "Erreur",
        description: "Impossible de charger les propriétés. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    },
  });
}
