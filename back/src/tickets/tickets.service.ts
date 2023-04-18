import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket, CreateTicketDto } from './tickets.model';
import { Model } from 'mongoose';

@Injectable()
export class TicketsService {
    constructor(@InjectModel(Ticket.name) private readonly ticketModel: Model<Ticket>) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const createdTicket = await this.ticketModel.create(createTicketDto);
    return createdTicket;
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec();
  }

  async findOne(id:string): Promise<Ticket>{
    return this.ticketModel.findOne({_id:id}).exec()
  }

  async delete(id:string){
    const deletedTicket = await this.ticketModel.findByIdAndRemove({_id:id})
    .exec();
    return deletedTicket;
  }
}
