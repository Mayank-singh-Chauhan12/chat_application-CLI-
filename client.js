import net from 'net';
import readline from 'readline';
// create interface for reading user input
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const client=net.createConnection({port:5000},()=>{
    console.log("connected to the chat server");
});
client.on('data',(data)=>{
    console.log(data.toString());
});
rl.on('line',(input)=>{
    client.write(input);
});
client.on('end',()=>{
console.log("diconnected from the server");
process.exit(0);
});

client.on('error',(err)=>{
    console.log(`Error : ${err.message}`);
});
