// import http module เพื่อสร้าง server
const http = require('http')

const host = 'localhost'; // กำหนด hostname ที่ server จะรอรับ request
const port = 8000; // กำหนด port ที่ server จะรอรับ request

const requestListener = function (req, res) {
  res.writeHead(200); // ส่ง status code 200 กลับไปให้ client
  res.end('Hello, World!\n') // ส่งข้อความกลับไปให้ client
} 

const server = http.createServer(requestListener); // สร้าง server ด้วย http.createServer() โดยใช้ requestListener ที่เราสร้างไว้
server.listen(port, host, () => { // กำหนด  server  จะรอรับ request ที่ port 8000 และใช้ hostname ที่เรากำหนดไว้
    console.log(`Server is running on http://${host}:${port}/`) // แสดงข้อความเมื่อ server เริ่มทำงาน กำลังทำงานอยู่ที่ http://localhost:8000/
})