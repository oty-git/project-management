export interface CommentType {
  userName: string;
  comment: string;
}
export interface Project {
  id: number;
  name: string;
  description: string;
  comments: CommentType[];
}
