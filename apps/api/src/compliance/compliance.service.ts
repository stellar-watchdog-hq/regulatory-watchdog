import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChecklistDto, ComplianceStatus } from './dto/create-checklist.dto';

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
    description:
      'Verify all onboarded anchor clients comply with Anti-Money Laundering and Know Your Customer standards. This includes document validation, PEP screening, and sanctions list cross-referencing.',
    status: ComplianceStatus.PASSED,
    jurisdiction: 'EU-MiCA',
    updatedAt: new Date('2024-06-10T08:30:00Z').toISOString(),
    createdAt: new Date('2024-01-15T10:00:00Z').toISOString(),
  },
  {
    id: 'clst-002',
    title: 'Travel Rule Data Transmission',
    description:
      'Ensure all virtual asset transfers above the FATF threshold include compliant originator and beneficiary data. Confirm VASP-to-VASP messaging meets IVMS 101 standards.',
    status: ComplianceStatus.PENDING_REVIEW,
    jurisdiction: 'FATF',
    updatedAt: new Date('2024-06-18T14:22:00Z').toISOString(),
    createdAt: new Date('2024-02-20T09:00:00Z').toISOString(),
  },
  {
    id: 'clst-003',
    title: 'Reserve Asset Attestation',
    description:
      'Monthly third-party audit of stablecoin reserve backing. All issued tokens must maintain 1:1 fiat backing verified by a licensed auditor and published on-chain.',
    status: ComplianceStatus.FLAGGED,
    jurisdiction: 'US-SEC',
    updatedAt: new Date('2024-06-20T11:05:00Z').toISOString(),
    createdAt: new Date('2024-03-01T12:00:00Z').toISOString(),
  },
  {
    id: 'clst-004',
    title: 'Sanctions Screening — OFAC SDN List',
    description:
      'Automated screening of all wallet addresses and counterparties against the OFAC Specially Designated Nationals list prior to transaction settlement on the Stellar network.',
    status: ComplianceStatus.PASSED,
    jurisdiction: 'US-OFAC',
    updatedAt: new Date('2024-06-22T16:44:00Z').toISOString(),
    createdAt: new Date('2024-03-15T08:30:00Z').toISOString(),
  },
  {
    id: 'clst-005',
    title: 'MiCA Whitepaper Disclosure',
    description:
      'Publish and maintain a regulator-approved crypto-asset whitepaper disclosing technology, risks, governance, and token issuance terms in compliance with EU Markets in Crypto-Assets regulation.',
    status: ComplianceStatus.PENDING_REVIEW,
    jurisdiction: 'EU-MiCA',
    updatedAt: new Date('2024-06-25T09:12:00Z').toISOString(),
    createdAt: new Date('2024-04-01T11:00:00Z').toISOString(),
  },
];

@Injectable()
export class ComplianceService {
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