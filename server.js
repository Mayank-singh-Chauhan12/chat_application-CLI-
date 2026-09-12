import { Socket } from 'dgram';
import net from 'net';
const clients=[];// storing the clients
const server=net.createServer((socket)=>{
    console.log('----new client Connected----');
    clients.push(socket);
    // send a welcome message
    socket.write('Welcome to the TCP chat \n');
    socket.on('data',(data)=>{
        const message=data.toString().trim();
        console.log(`Message Received : ${message}`);
        clients.forEach((client)=>{
            if(client!==socket) client.write(`${message}\n`);
        });
    });
    socket.on('end',()=>{
        console.log('client Diconnected');
       clients.splice(clients.indexOf(socket), 1);
    });
    socket.on('error',(err)=>console.log(`Error : ${err.message}`));
});
server.listen(5000,()=>{
    console.log("TCP chat app is ready on PORT NUMBER: 5000");
});

