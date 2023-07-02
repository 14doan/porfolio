import { type SchemaTypeDefinition } from 'sanity';

import info from './schemas/info';
import project from './schemas/project';
import skill from './schemas/skill';
import social from './schemas/social';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [info, project, skill, social],
};
