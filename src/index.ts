// import { Active } from 'activesync';
import http from 'http'

http
  .createServer((req, res: http.ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Hello')
    res.end()
  })
  .listen(8000)

console.log('Server running at port 8000')
