import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { CreateChecklistDto, ComplianceStatus } from './dto/create-checklist.dto';
import { IsEnum } from 'class-validator';

class UpdateStatusDto {
  @IsEnum(ComplianceStatus, {
    message: `Status must be one of: ${Object.values(ComplianceStatus).join(', ')}`,
  })
  status!: ComplianceStatus;
}

@Controller('compliance')
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }))
export class ComplianceController {
  constructor(private readonly complianceService: ComplianceService) {}

  /**
   * NEW STELLAR INTEGRATION: GET /compliance/stellar/network-status
   * Fetches real-time ledger data from the Stellar Testnet
   */
  @Get('stellar/network-status')
  @HttpCode(HttpStatus.OK)
  async getNetworkStatus() {
    return {
      success: true,
      data: await this.complianceService.getLiveNetworkStatus(),
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return {
      success: true,
      data: this.complianceService.findAll(),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return {
      success: true,
      data: this.complianceService.findOne(id),
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateChecklistDto) {
    return {
      success: true,
      data: this.complianceService.create(dto),
    };
  }

  @Patch(':id/status')
  @HttpCode(HttpStatus.OK)
  updateStatus(@Param('id') id: string, @Body() body: UpdateStatusDto) {
    return {
      success: true,
      data: this.complianceService.updateStatus(id, body.status),
    };
  }
}