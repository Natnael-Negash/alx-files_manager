import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient{
    constructor(){
        this.myClient = createClient(); //create a new Redis client
        this.myClient.on('error', (error) => {
            console.log(error); // log any error
        });
    }
    // method to check if the Redis client is connected
    isAlive(){
        return this.myClient.connected;
    }
    // method to get a value from Redis based on the key
    async get(key){
        const getAsync =
        promisify(this.myClient.GET).bind(this.myClient); // Promisify the GET command
    return getAsync(Key); //Retrieve the value from Redis
    }
    // method to set a value in Redis with an expiration time 
    async set(key, val, time){
        const setAsync = promisify(this.myClient.SET).bind(this.myClient); // proomsify the SET command
        return setAsync(key, val, 'EX', time); // Set the value in Redis with an expiration time
    }
    // method to delete a value from Redis based on the key
    async del(key){
        const delAsyc = promisify(this.myClient).bind(this.myClient) //promisify the DEL command
        return delAsyc(key); //Delete the value from Redis
    }
}

const redisClient = new RedisClient();//Create an instance of RedisClient

export default redisClient;

