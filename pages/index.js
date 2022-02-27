import Layout from "../components/layout/Layout";
import React, { useState, useEffect } from "react";

import { useSession } from "next-auth/react";

import Feed from "../components/sections/Feed";
import PostForm from "../components/sections/PostForm";

import ChangeName from "../components/sections/ChangeName";

const Home = () => {
  const [posts, setPosts] = useState([]);

  function updatePosts() {
    fetch("/api/get")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }

  useEffect(() => {
    updatePosts();
  }, []);

  const { data: session, status } = useSession();

  return (
    <Layout>
      {session ? (
        !session.user.name ? (
          <ChangeName updatePosts={updatePosts} />
        ) : (
          <div>
            <Feed posts={posts} updatePosts={updatePosts} />
            <PostForm updatePosts={updatePosts} />
          </div>
        )
      ) : (
        <h1 className="text-2xl font-semibold italic">
          Please sign in to access the postboard
        </h1>
      )}
    </Layout>
  );
};

export default Home;
