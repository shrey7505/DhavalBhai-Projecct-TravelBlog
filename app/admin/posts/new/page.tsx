import PostForm from "@/components/admin/PostForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "New Post" };

export default function NewPostPage() {
  return (
    <div className="p-6">
      <PostForm />
    </div>
  );
}
