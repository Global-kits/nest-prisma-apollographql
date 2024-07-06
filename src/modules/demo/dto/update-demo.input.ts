import { CreateDemoInput } from './create-demo.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDemoInput extends PartialType(CreateDemoInput) {
  id: number;
}
