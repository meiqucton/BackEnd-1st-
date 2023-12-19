const express = require('express')
require('dotenv').config()// muốn sử dụng env thì BẮT BUỘC phải khai báo cái này
const path = require('path');// để gọi path trong view
const app = express();

const port = process.env.PORT ; // Change 3000 to an available port
const host_name = process.env.HOST_NAME ;

const connectdtb = require('./config/database');
const viewEnginer = require('./config/viewEngineer');
const router  = require('./router/web');


viewEnginer(app)
connectdtb();
app.use('/', router);



app.listen(port, host_name, (err) => {
  if (err) {
    console.error(`Lỗi khi khởi động server: ${err.message}`);
  } else {
    console.log(`Ứng dụng mẫu đang lắng nghe trên cổng ${port} và ${host_name}`);
  }
});