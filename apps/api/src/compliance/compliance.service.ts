import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChecklistDto, ComplianceStatus } from './dto/create-checklist.dto';
import * as StellarSdk from 'stellar-sdk';

export interface ComplianceChecklist {
  id: string;
  title: string;
  description: string;
  status: ComplianceStatus;
  jurisdiction: string;
  updatedAt: string;
  createdAt: string;
}

let mockChecklists: ComplianceChecklist[] = [
  {
    id: 'clst-001',
    title: 'AML/KYC Identity Verification',
    description: 'Verify all onboarded anchor clients comply with Anti-Money Laundering and Know Your Customer standards.',
    status: ComplianceStatus.PASSED,
    jurisdiction: 'EU-MiCA',
    updatedAt: new Date('2024-06-10T08:30:00Z').toISOString(),
    createdAt: new Date('2024-01-15T10:00:00Z').toISOString(),
  },
  {
    id: 'clst-002',
    title: 'Travel Rule Data Transmission',
    description: 'Ensure all virtual asset transfers above the FATF threshold include compliant originator and beneficiary data.',
    status: ComplianceStatus.PENDING_REVIEW,
    jurisdiction: 'FATF',
    updatedAt: new Date('2024-06-18T14:22:00Z').toISOString(),
    createdAt: new Date('2024-02-20T09:00:00Z').toISOString(),
  },
];

@Injectable()
export class ComplianceService {
  private server: StellarSdk.Horizon.Server;

  constructor() {
    // Initialize the Stellar Horizon Testnet connection
    this.server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');
  }

  // NEW STELLAR INTEGRATION: Fetch live network health for the dashboard
  async getLiveNetworkStatus() {
    try {
      const ledgers = await this.server.ledgers().order('desc').limit(1).call();
      const latest = ledgers.records[0];
      return {
        status: 'online',
        network: 'Stellar Testnet',
        latestLedger: latest.sequence,
        protocolVersion: latest.protocol_version,
        closedAt: latest.closed_at,
      };
    } catch (error: any) {
      return { status: 'offline', error: error.message };
    }
  }

  findAll(): ComplianceChecklist[] {
    return mockChecklists.map((item) => ({ ...item }));
  }

  findOne(id: string): ComplianceChecklist {
    const item = mockChecklists.find((c) => c.id === id);
    if (!item) {
      throw new NotFoundException(`Checklist with id "${id}" not found.`);
    }
    return { ...item };
  }

  create(dto: CreateChecklistDto): ComplianceChecklist {
    const now = new Date().toISOString();
    const newEntry: ComplianceChecklist = {
      id: `clst-${Date.now()}`,
      title: dto.title,
      description: dto.description,
      status: dto.status,
      jurisdiction: dto.jurisdiction,
      updatedAt: dto.updatedAt ?? now,
      createdAt: now,
    };
    mockChecklists.push(newEntry);
    return { ...newEntry };
  }

  updateStatus(id: string, status: ComplianceStatus): ComplianceChecklist {
    const index = mockChecklists.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Checklist with id "${id}" not found.`);
    }
    mockChecklists[index] = {
      ...mockChecklists[index],
      status,
      updatedAt: new Date().toISOString(),
    };
    return { ...mockChecklists[index] };
  }
}