import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async students(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  async getStudentById(id: string): Promise<Student> {
    console.log('id', id);
    return this.studentRepository.findOne(id);
  }
  async createStudent(firstName: string, lastName: string): Promise<Student> {
    const student = this.studentRepository.create({ firstName, lastName });
    return this.studentRepository.save(student);
  }
}
