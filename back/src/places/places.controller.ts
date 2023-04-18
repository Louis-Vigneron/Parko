import { Controller, Get } from '@nestjs/common';
import { PlacesService } from './places.service';
import { Place } from './places.model';

@Controller('places')
export class PlacesController {
    constructor(private readonly placesService: PlacesService) {}

    @Get()
    async findAll(): Promise<Place[]>{
      return this.placesService.findAll();
    }
}
