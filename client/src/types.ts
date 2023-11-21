export interface Profile {
  id: number;
  bio: string;
  profileImageUrl: string;
  userId: number;
  user: UserType;
}

export interface UserType {
  id: number;
  username: string;
  email: string;
  password: string;
  posts: PostType[];
  profile: Profile;
}
//投稿内容を定義
export interface PostType {
  id: number;
  content: string;
  createdAt: string;
  author: UserType;
  authorId: number;
}
