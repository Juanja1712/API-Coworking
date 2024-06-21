import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SessionService } from '../service/session.service';
import { CreateSessionDto } from '../dtos/session.dto';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get('most-occupied')
  getMostOccupiedSessions() {
    return this.sessionService.findMostOccupiedSessions();
  }

  @Get('most-available')
  getMostAvailableSessions() {
    return this.sessionService.findMostAvailableSessions();
  }

  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionService.create(createSessionDto);
  }

  @Get()
  findAll() {
    return this.sessionService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sessionService.remove(id);
  }
}