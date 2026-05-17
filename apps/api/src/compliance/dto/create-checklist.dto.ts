import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsDateString,
  MaxLength,
  MinLength,
} from 'class-validator';

export enum ComplianceStatus {
  PENDING_REVIEW = 'PENDING_REVIEW',
  PASSED = 'PASSED',
  FLAGGED = 'FLAGGED',
}

export class CreateChecklistDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required.' })
  @MinLength(3, { message: 'Title must be at least 3 characters.' })
  @MaxLength(120, { message: 'Title must not exceed 120 characters.' })
  title!: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required.' })
  @MinLength(10, { message: 'Description must be at least 10 characters.' })
  @MaxLength(1000, { message: 'Description must not exceed 1000 characters.' })
  description!: string;

  @IsEnum(ComplianceStatus, {
    message: `Status must be one of: ${Object.values(ComplianceStatus).join(', ')}`,
  })
  status!: ComplianceStatus;

  @IsString()
  @IsNotEmpty({ message: 'Jurisdiction is required.' })
  @MaxLength(60, { message: 'Jurisdiction must not exceed 60 characters.' })
  jurisdiction!: string;

  @IsOptional()
  @IsDateString({}, { message: 'updatedAt must be a valid ISO 8601 date string.' })
  updatedAt?: string;
}