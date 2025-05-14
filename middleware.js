// middleware.js
export function middleware(request) {
  let passwordAuthorization = request.headers.get("authorization");
  let logginAuthorization = "Basic " + btoa("piper:PipersPage765"); 

  if (passwordAuthorization === logginAuthorization) {
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
