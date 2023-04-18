import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket, CreateTicketDto } from './tickets.model';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) {}

    @Post()
    async create(@Body() createTicketDto: CreateTicketDto) {
       await this.ticketsService.create(createTicketDto);
    }
  
    @Get()
    async findAll(): Promise<Ticket[]>{
      return this.ticketsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id:string): Promise<Ticket>{
      return this.ticketsService.findOne(id);
    }
  
    @Delete(':id')
    async delete(@Param('id') id:string): Promise<Ticket>{
      return this.ticketsService.delete(id);
    }
}
