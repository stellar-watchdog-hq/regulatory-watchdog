export type ComplianceStatus = 'PENDING_REVIEW' | 'PASSED' | 'FLAGGED';

export interface ComplianceChecklist {
  id: string;
  title: string;
  description: string;
  status: ComplianceStatus;
  jurisdiction: string;
  updatedAt: string;
  createdAt: string;
}

export interface CreateChecklistDto {
  title: string;
  description: string;
  status: ComplianceStatus;
  jurisdiction: string;
}

export interface StellarNetworkStatus {
  status: string;
  network: string;
  latestLedger: number;
  protocolVersion: number;
  closedAt: string;
}

export interface TransactionFlag {
  type: 'Warning' | 'Passed' | 'Flagged';
  message: string;
}

export interface TransactionAnalysis {
  hash: string;
  ledger: number;
  createdAt: string;
  sourceAccount: string;
  riskScore: number;
  riskTier: 'LOW' | 'MEDIUM' | 'HIGH';
  flags: TransactionFlag[];
}