# TCP Chat Application

A simple **TCP-based chat application built with Node.js** using the built-in `net` module.

This project demonstrates how multiple clients can connect to a TCP server and exchange messages with each other in real time.

## 🚀 Features

* TCP server using Node.js `net` module
* Multiple client connections
* Real-time message broadcasting
* Welcome message for newly connected clients
* Displays received messages on the server
* Handles client disconnections
* Simple and beginner-friendly implementation

## 🛠️ Technologies Used

* **Node.js**
* **JavaScript**
* **TCP/IP**
* **Node.js `net` module**

## 📁 Project Structure

```text
tcp-chat/
│
├── server.js
├── client.js
└── README.md
```

## ⚙️ How It Works

The server creates a TCP connection using Node.js's `net.createServer()`.

Whenever a client connects:

1. The client socket is stored in an array.
2. The server sends a welcome message.
3. The client can send messages to the server.
4. The server broadcasts the message to other connected clients.
5. When a client disconnects, its socket is removed.

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project

```bash
cd tcp-chat
```

### 3. Start the server

```bash
node server.js
```

You should see something similar to:

```text
TCP Chat Server is running...
```

### 4. Connect a client

Open another terminal and run:

```bash
node client.js
```

You can open multiple terminals and run the client in each terminal to simulate multiple users.

## 💬 Example

When a client connects:

```text
Welcome to the TCP Chat
```

When a message is sent:

```text
Message Received: Hello everyone!
```

The message can then be broadcast to other connected clients.

## 📚 Concepts Learned

This project helped me understand:

* TCP communication
* Node.js networking
* `net.createServer()`
* Socket programming
* Event-driven programming
* `socket.on('data')`
* `socket.write()`
* Handling multiple client connections
* Broadcasting messages
* Client disconnection handling

## 🔮 Future Improvements

Some features that can be added in the future:

* Usernames for each client
* Private messaging
* Chat rooms
* Message timestamps
* Better error handling
* Client-side command system
* Message history
* Authentication
* Web-based chat interface

## 👨‍💻 Author

**Mayank Singh Chauhan**

Computer Science Engineering Student

---

⭐ If you found this project useful, consider giving the repository a star!
