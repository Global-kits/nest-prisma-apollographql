import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DemoService } from './demo.service';
import { CreateDemoInput } from './dto/create-demo.input';
import { UpdateDemoInput } from './dto/update-demo.input';

@Resolver('Demo')
export class DemoResolver {
  constructor(private readonly demoService: DemoService) {}

  @Mutation('createDemo')
  create(@Args('createDemoInput') createDemoInput: CreateDemoInput) {
    return this.demoService.create(createDemoInput);
  }

  @Query('demos')
  findAll() {
    return this.demoService.findAll();
  }

  @Query('demo')
  findOne(@Args('id') id: number) {
    return this.demoService.findOne(id);
  }

  @Mutation('updateDemo')
  update(@Args('updateDemoInput') updateDemoInput: UpdateDemoInput) {
    return this.demoService.update(updateDemoInput.id, updateDemoInput);
  }

  @Mutation('removeDemo')
  remove(@Args('id') id: number) {
    return this.demoService.remove(id);
  }
}
