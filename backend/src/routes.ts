import { Routes } from 'nest-router';
import { ProjectModule } from './project/project.module';
import { ColorModule } from './color/color.module';
import { ButtonModule } from './button/button.module';
import { LinkModule } from './link/link.module';

export const routes: Routes = [
  {
    path: '/project',
    module: ProjectModule,
    children: [
      { path: ':projectId/color', module: ColorModule },
      { path: ':projectId/button', module: ButtonModule },
      { path: ':projectId/link', module: LinkModule },
    ],
  },
];
