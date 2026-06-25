import { supabase } from "@/app/_lib/supabase";

export default async function page() {
  const { data, error } = await supabase.from("posts").select("*");
  console.log(data);

  return (
    <div>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}
