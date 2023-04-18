import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSchema } from './tickets.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Ticket' , schema: TicketSchema }])],
  controllers: [TicketsController],
  providers: [TicketsService]
})
export class TicketsModule {}
