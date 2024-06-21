import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from '../entities/reservation.entity';

@Injectable()
export class ReservationService {
    constructor(
        @InjectRepository(Reservation)
        private reservationRepository: Repository<Reservation>,
    ) { }

    async findAll(): Promise<Reservation[]> {
        return this.reservationRepository.find();
    }

    async remove(id: number): Promise<void> {
        await this.reservationRepository.delete(id);
    }
}