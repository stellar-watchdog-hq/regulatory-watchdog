import { useEffect, useState } from "react";
import { ComplianceService } from "../services/compliance.service";
import type { StellarNetworkStatus } from "../types/compliance";

export function useNetworkStatus() {
  const [network, setNetwork] = useState<StellarNetworkStatus | null>(null);

  useEffect(() => {
    ComplianceService.getNetworkStatus()
      .then(setNetwork)
      .catch(console.error);
  }, []);

  return network;
}