import { Routes } from 'nest-router';
import { ProjectModule } from './project/project.module';
import { ColorModule } from './color/color.module';

export const routes: Routes = [
  {
    path: '/project',
    module: ProjectModule,
    children: [{ path: ':projectId/color', module: ColorModule }],
  },
];
