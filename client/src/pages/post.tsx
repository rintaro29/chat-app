// "use client";
// import apiClient from "@/lib/apiClient";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useRef } from "react";

// const Post = () => {
//   const router = useRouter();
//   const titleRef = useRef<HTMLInputElement>(null);
//   const timeRef = useRef<HTMLInputElement>(null);
//   const venueRef = useRef<HTMLInputElement>(null);
//   const maxParticipantsRef = useRef<HTMLInputElement>(null);
//   const imageRef = useRef<HTMLInputElement>(null);
//   const descriptionRef = useRef<HTMLTextAreaElement>(null);

//   const eventPost = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       await apiClient.post("/events", {
//         //postの中身
//         title: titleRef.current?.value,
//         time: timeRef.current?.value,
//         venue: venueRef.current?.value,
//         max_participants: maxParticipantsRef.current?.value,
//         image: imageRef.current?.value,
//         description: descriptionRef.current?.value,
//       });
//       router.push("/events");
//     } catch (error) {
//       alert("イベントの作成に失敗しました。");
//     }
//   };

//   return (
//     <div className="flex flex-col  justify-center items-center h-screen py-4 sm:px-6 lg:px-8">
//       <h2 className="text-2xl font-bold">イベント作成</h2>
//       <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-2xl">
//         <div className=" py-8 px-4  sm:px-10">
//           <form onSubmit={eventPost}>
//             <div>
//               <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//                 タイトル
//               </label>
//               <input
//                 id="title"
//                 name="title"
//                 type="text"
//                 required
//                 ref={titleRef}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-md py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//             <div className="mt-6">
//               <label htmlFor="time" className="block text-sm font-medium text-gray-700">
//                 開催日時
//               </label>
//               <input
//                 id="time"
//                 name="time"
//                 type="text"
//                 required
//                 ref={timeRef}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-md py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 no-spinners"
//               />
//             </div>
//             <div className="mt-6">
//               <label htmlFor="venue" className="block text-sm font-medium text-gray-700">
//                 場所
//               </label>
//               <input
//                 id="venue"
//                 name="venue"
//                 type="text"
//                 required
//                 ref={venueRef}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-md py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//             <div className="mt-6">
//               <label htmlFor="max_participants" className="block text-sm font-medium text-gray-700">
//                 人数
//               </label>
//               <input
//                 id="max_participants"
//                 name="venue"
//                 type="text"
//                 required
//                 ref={maxParticipantsRef}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-md py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>

//             <div className="mt-6">
//               <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                 イメージ画像
//               </label>
//               <input
//                 id="image"
//                 name="image"
//                 type="url"
//                 required
//                 ref={imageRef}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-md py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 no-spinners"
//               />
//             </div>
//             <div className="mt-6">
//               <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                 イベント内容
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 required
//                 ref={descriptionRef}
//                 className="h-28 mt-1 block w-full border border-gray-300 rounded-md shadow-md py-1 px-3 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               ></textarea>
//             </div>

//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="w-full mt-2 py-2 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 作成
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;
