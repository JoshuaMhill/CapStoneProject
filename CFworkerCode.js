// Tutotial rom https://www.maxivanov.io/how-to-password-protect-your-website-with-cloudflare-workers/
// && Google Search/Gemmeni
// Step by Step assitance for worker Set Up with OpenAI
// log in HERE: https://dash.cloudflare.com/dede26d3b06494b27f2db4329fc98a66/workers/services/edit/red-bird-0c03/production
//
// Global variables =>
    const user = 'piper'
const specialWord = 'allowMe123'
// On load
addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
// Deny on load
async function handleRequest(request) {
  let authorization = request.headers.get('authorization')
  if (!authorization) {
    return failResponse();
}
// Deny on password
  let userDetails = validateFunc(authorization)
  if (userDetails[0] !== user || userDetails[1] !== specialWord) {
    return failResponse(
    )
  }
  return await fetch(request)
}
// Validate
function validateFunc(authorization) {
  const userEnter = authorization.split(' ')
  const validateDeets = atob(userEnter[1])
  const userDetails = validateDeets.split(':')
  return userDetails
}
//Fail Function
function failResponse() {
    const response = new Response('No Pipes For You!', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"'
        }
     });
     return response;
 }