import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CreateCarDto } from './cars.model';
import { Model } from 'mongoose';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const createdCar = await this.carModel.create(createCarDto);
    return createdCar;
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async findOne(id:string): Promise<Car>{
    return this.carModel.findOne({_id:id}).exec()
  }

  async delete(id:string){
    const deletedCar = await this.carModel.findByIdAndRemove({_id:id})
    .exec();
    return deletedCar;
  }

}
