export interface CommentType {
  userName: string;
  comment: string;
}
export interface IProject {
  id: number;
  name: string;
  description: string;
  comments: CommentType[];
}
