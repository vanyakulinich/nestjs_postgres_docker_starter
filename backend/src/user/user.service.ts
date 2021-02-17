import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entity/user.entity'

/**
 * Basic User Service
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id)
  }

  // add more logic here
}
