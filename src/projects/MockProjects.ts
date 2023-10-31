import {Project, CommentType} from './Project';

const comments1: CommentType[] = [
  {userName: 'User1', comment: 'Це перший коментар до проєкту 1'},
  {userName: 'User2', comment: 'Це другий коментар до проєкту 1'},
];

const comments2: CommentType[] = [
  {userName: 'User3', comment: 'Це перший коментар до проєкту 2'},
];

const comments3: CommentType[] = [
  {userName: 'User1', comment: 'Це перший коментар до проєкту 3'},
  {userName: 'User3', comment: 'Це другий коментар до проєкту 3'},
];

const comments4: CommentType[] = [
  {userName: 'User2', comment: 'Це перший коментар до проєкту 4'},
  {userName: 'User4', comment: 'Це другий коментар до проєкту 4'},
];

const comments5: CommentType[] = [
  {userName: 'User3', comment: 'Це перший коментар до проєкту 5'},
  {userName: 'User4', comment: 'Це другий коментар до проєкту 5'},
];

const comments6: CommentType[] = [
  {userName: 'User2', comment: 'Це перший коментар до проєкту 6'},
  {userName: 'User1', comment: 'Це другий коментар до проєкту 6'},
];

const mockProjects: Project[] = [
  {
    id: 1,
    name: 'Проєкт 1',
    description: 'Це перший проєкт',
    comments: comments1,
  },
  {
    id: 2,
    name: 'Проєкт 2',
    description: 'Це другий проєкт',
    comments: comments2,
  },
  {
    id: 3,
    name: 'Проєкт 3',
    description: 'Це третій проєкт',
    comments: comments3,
  },
  {
    id: 4,
    name: 'Проєкт 4',
    description: 'Це четвертий проєкт',
    comments: comments4,
  },
  {
    id: 5,
    name: 'Проєкт 5',
    description: 'Це пятий проєкт',
    comments: comments5,
  },
  {
    id: 6,
    name: 'Проєкт 6',
    description: 'Це шостий проєкт',
    comments: comments6,
  },
];

export default mockProjects;
