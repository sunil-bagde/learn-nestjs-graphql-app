import { LessonType } from './lesson.type';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}
  @Query((returns) => LessonType)
  async lesson(@Args('id') id: string): Promise<Lesson> {
    return this.lessonService.getLessonById(id);
  }

  @Query((returns) => [LessonType])
  async lessons(): Promise<Lesson[]> {
    return this.lessonService.getLessonList();
  }
  @Mutation((returns) => LessonType)
  createClass(
    /*@Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,*/
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
