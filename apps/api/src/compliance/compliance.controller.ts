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
   * GET /compliance
   * Returns all compliance checklists.
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return {
      success: true,
      data: this.complianceService.findAll(),
    };
  }

  /**
   * GET /compliance/:id
   * Returns a single checklist by ID.
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return {
      success: true,
      data: this.complianceService.findOne(id),
    };
  }

  /**
   * POST /compliance
   * Creates a new compliance checklist entry.
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateChecklistDto) {
    return {
      success: true,
      data: this.complianceService.create(dto),
    };
  }

  /**
   * PATCH /compliance/:id/status
   * Updates the compliance status of a checklist item.
   */
  @Patch(':id/status')
  @HttpCode(HttpStatus.OK)
  updateStatus(@Param('id') id: string, @Body() body: UpdateStatusDto) {
    return {
      success: true,
      data: this.complianceService.updateStatus(id, body.status),
    };
  }
}