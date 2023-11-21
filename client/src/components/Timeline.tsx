import React, { useEffect, useState } from "react";
import Post from "./Post";
import apiClient from "@/lib/apiClient";
import { PostType } from "@/types";

const Timeline = () => {
  const [postText, setPostText] = useState<string>("");
  const [latestPost, setLatestPost] = useState<PostType[]>([]); //最新の投稿を順番に格納する配列

  //投稿処理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //最新の投稿をポストする
      const newPost = await apiClient.post("/posts/post", {
        content: postText,
      });
      setLatestPost((prevPosts) => [newPost.data, ...prevPosts]);
      setPostText("");
    } catch (err) {
      alert("ログインしてください");
    }
  };

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await apiClient.get("posts/get_latest_post");
        setLatestPost(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLatestPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-4">
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full first-letter h-24 p-2 border-gray-300 rounded resize-none
              focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="What's on your mind"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPostText(e.target.value)}
              value={postText} //テキストエリアに入力されたテキスト
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-gray-700 hover:bg-green-700 duration-200 text-white font-semibold py2 px-4 rounded"
            >
              投稿
            </button>
          </form>
        </div>
        {latestPost.map((post: PostType) => (
          <Post key={post.id} post={post} /> //Postコンポーネントにpostを渡す
        ))}
      </main>
    </div>
  );
};

export default Timeline;
