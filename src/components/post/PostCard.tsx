import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { PostCardProps } from "@/types/post";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";

export default function PostCard({post}: PostCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Link href={`/posts/${post.id}`} className="block">
        {post.topImage && (
          <div className="relative w-full h-48">
            <Image
              src={post.topImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-t-md object-cover"
              priority
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-lg mt-2 block overflow-hidden line-clamp-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 block overflow-hidden text-sm text-gray-600 line-clamp-2">
            {post.content}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{post.author.name}</span>
            <time>{
              formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
                locale: ja
              })}</time>
          </div>
        </CardContent>
      </Link>
    </Card>
    
    )
}