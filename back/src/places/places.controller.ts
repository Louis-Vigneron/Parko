import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { PlacesService } from './places.service';
import { Place } from './places.model';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async findAll(): Promise<Place[]> {
    return this.placesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Place> {
    return this.placesService.findOne(id);
  }

  @Patch(':id')
  async updatePlace(
    @Param('id') id: string,
    @Body('available') available: boolean,
  ): Promise<Place> {
    return this.placesService.updatePlace(id, available);
  }
}
