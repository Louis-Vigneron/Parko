import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Place } from './places.model';
import { Model } from 'mongoose';

@Injectable()
export class PlacesService {
    constructor(@InjectModel(Place.name) private readonly placeModel: Model<Place>) {}

    async findAll(): Promise<Place[]> {
        return this.placeModel.find().exec();
      }
}
