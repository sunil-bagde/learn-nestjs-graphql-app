import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { Student } from './student.entity';
import { StudentService } from './student.service';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => [StudentType])
  getAllStudents(): Promise<Student[]> {
    return this.studentService.students();
  }
  @Query((returns) => StudentType)
  showStudent(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudentById(id);
  }
  @Mutation((returns) => StudentType) // graphqldef
  createStudent(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
  ) {
    return this.studentService.createStudent(firstName, lastName);
  }
}
