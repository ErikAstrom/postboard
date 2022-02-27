import React, { FC, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useSession, signOut, signIn } from "next-auth/react";

const Feed = ({ posts, updatePosts }) => {
  const { data: session, status } = useSession();

  async function deletePost(id) {
    try {
      const body = id;
      await fetch("api/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }

    updatePosts();
  }

  return (
    <section>
      <h1 className="text-red-400 text-4xl font-bold text-center my-5">Feed</h1>
      <div className=" mb-10 mx-auto">
        <div className="mb-20 flex flex-wrap justify-start md:justify-between">
          {posts?.map((post, i) => {
            return (
              <div
                key={i}
                className="min-h-[130px] color-gray-600 border border-red-400 mr-3 md:mr-0 w-full md:w-[49%] my-[5px] shadow-md flex rounded-lg overflow-hidden"
              >
                <div className="h-full justify-between flex flex-col w-10/12 p-5">
                  <span className="font-semibold">{post.title}</span>
                  <span className="text-sm">{post.content}</span>
                  <span className="text-xs text-gray-500 italic">
                    By {post.author.name || "anonymous"}
                  </span>
                </div>

                {post.author.email === session.user.email && (
                  <button
                    onClick={() => deletePost(post.id)}
                    className="w-2/12 border-l flex justify-center items-center border-red-400 hover:bg-red-400 "
                  >
                    <ImCross size={25} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feed;
