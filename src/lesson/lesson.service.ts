import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}
  async getLessonById(id: string): Promise<Lesson> {
    const lesson = this.lessonRepository.findOne({
      where: {
        id: id,
      },
    });
    return lesson;
  }
  async getLessonList(): Promise<Lesson[]> {
    const lesson = this.lessonRepository.find({
      order: {
        name: 'ASC',
      },
    });
    return lesson;
  }
  async createLesson(createLessonInput: CreateLessonInput) {
    const { name, startDate, endDate } = createLessonInput;
    const lesson = this.lessonRepository.create({
      name,
      startDate,
      endDate,
    });
    return this.lessonRepository.save(lesson);
  }
}
