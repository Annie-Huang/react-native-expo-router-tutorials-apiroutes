import { comments } from '../../../data/comments.ts';

export async function GET() {
  return Response.json(comments);
}
