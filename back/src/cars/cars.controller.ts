import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car, CreateCarDto } from './cars.model';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Post()
  async create(@Body() createCarDto: CreateCarDto) {
     await this.carService.create(createCarDto);
  }

  @Get()
  async findAll(): Promise<Car[]>{
    return this.carService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id:string): Promise<Car>{
    return this.carService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id:string): Promise<Car>{
    return this.carService.delete(id);
  }

}
