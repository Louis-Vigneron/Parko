import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Place } from './places.model';
import { Model } from 'mongoose';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel(Place.name) private readonly placeModel: Model<Place>,
  ) {}

  async findAll(): Promise<Place[]> {
    return this.placeModel.find().exec();
  }

  async findOne(id: string): Promise<Place> {
    return this.placeModel.findOne({ _id: id }).exec();
  }
  
  async updatePlace(id: string, available: boolean): Promise<Place> {
    const selectedPlace = await this.placeModel.findOne({ _id: id }).exec();
    selectedPlace.available = available;
    const placeUpdated = await selectedPlace.save();
    return placeUpdated;
  }
}
