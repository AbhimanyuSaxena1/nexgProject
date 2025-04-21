import mangoose from 'mongoose';

type ConnectionObject = {
    isConnected?:Number 
}

const connection : ConnectionObject = {}

async function dbConnect():Promise<void> {
    if(connection.isConnected) {
        console.log("MongoDB is already connected")
        return
    }
    try{
          const db = await mangoose.connect(process.env.MONGODB_URI || "",{})
        connection.isConnected = db.connections[0].readyState
        console.log("MongoDB connected")
    }
    catch(error){
        console.log("MongoDB connection failed",error)
        process.exit(1)
    }
}

export default dbConnect;