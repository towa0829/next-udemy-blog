import NotFound from "./not-found";
import { getOwnPost } from '@/lib/ownPost';
import { auth } from "@/auth";
import EditPostForm from "./EditPostForm";


type Params = {
  params: Promise<{id: string}>
}


export default async function EditPage({params}: Params) {
  const session = await auth();
  const userId = session?.user?.id;
  if(!session?.user?.email || !userId) {
    throw new Error('不正なリクエストです．');
  }
  const {id} = await params;
  const post = await getOwnPost(userId, id);
  
  if(!post) {
    return <NotFound />;
  }
  return (
    <EditPostForm post={post} />
  )
}
