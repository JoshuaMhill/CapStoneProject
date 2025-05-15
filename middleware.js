export const config = {
  matcher: '/:path*',
};
export function middleware(request) {
  let auth = request.headers.get("authorization");
  let expected = "Basic " + btoa("piper:PipersPage765");

  if (auth === expected) {
    return new Response(null, { status: 200 });
  }
  return new Response("Authentication Required to View Page", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected Area"',
    },
  });
}
// Basic authentication middleware for Vercel
// Helped by ChatGPT (OpenAI) – https://openai.com/chatgpt
