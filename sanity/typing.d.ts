import { StringLiteral } from 'typescript';

interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  createdAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Skill extends SanityBody {
  _type: 'skill';
  skillImage: Image;
  title: string;
  progress: number;
}

export interface Project extends SanityBody {
  _type: 'project';
  projectImage: Image;
  title: string;
  summary: string;
  projectLink: string;
  technologies: Skill;
}

export interface Info extends SanityBody {
  _type: 'info';
  name: string;
  role: string;
  heroImage: Image;
  aboutImage: Image;
  aboutTitle: string;
  aboutBody: string;
  phoneNumber: string;
  address: string;
  email: string;
  typewriter: Array;
}
export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}
