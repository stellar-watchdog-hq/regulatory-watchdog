import { useEffect, useState } from "react";
import type { ComplianceChecklist } from "../types/compliance";
import { ComplianceService } from "../services/compliance.service";

export function useCompliance() {
  const [data, setData] = useState<ComplianceChecklist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ComplianceService.getAll()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
    refresh: async () => {
      const items = await ComplianceService.getAll();
      setData(items);
    },
  };
}