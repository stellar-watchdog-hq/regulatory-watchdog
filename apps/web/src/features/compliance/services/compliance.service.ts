import type { ComplianceChecklist, ComplianceStatus, CreateChecklistDto, StellarNetworkStatus } from "../types/compliance";
import type { TransactionAnalysis } from "../types/compliance";


const API = "http://localhost:3000/compliance";

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const json = await res.json();
  return json.data;
}

export const ComplianceService = {
  getAll() {
    return request<ComplianceChecklist[]>(API);
  },

  analyzeTransaction(hash: string) {
    return request<TransactionAnalysis>(`${API}/stellar/analyze/${hash}`);
  },

  getOne(id: string) {
    return request<ComplianceChecklist>(`${API}/${id}`);
  },

  create(dto: CreateChecklistDto) {
    return request<ComplianceChecklist>(API, {
      method: "POST",
      body: JSON.stringify(dto),
    });
  },

  updateStatus(id: string, status: ComplianceStatus) {
    return request<ComplianceChecklist>(
      `${API}/${id}/status`,
      {
        method: "PATCH",
        body: JSON.stringify({ status }),
      }
    );
  },

  getNetworkStatus() {
    return request<StellarNetworkStatus>(`${API}/stellar/network-status`);
  },
};