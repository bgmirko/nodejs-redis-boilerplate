import { createClient } from 'redis';
import { Service } from "typedi";

@Service()
export class RedisClient {
    public redisClient;

    constructor(){}

    async init(){
        this.redisClient = createClient({url: 'redis://redis:6379'});
        this.redisClient.on('error', (err) => console.log('Redis Client Error', err));
        await this.redisClient.connect();
    }

    getRedisClient(){
        return this.redisClient;
    }
}