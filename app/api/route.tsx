export function GET(request: Request) {
  console.log(request);
  return new Response("hello");
}
