import db from "../database/models";
import { createClient } from 'redis';
import { Container } from 'typedi';
import { RedisClient } from "../infrastructure/redisCacheClient";


export class UserService {
    static async getUsers(){
        const redis = Container.get(RedisClient);
        const redisClient = redis.getRedisClient()
        const cechedUsers = await redisClient.get('users');
        console.log("cechedUsers", cechedUsers)
        const users = await db.User.findAll({ raw: true });
        redisClient.setEx("users", 30, JSON.stringify(users));
        return users;
    }
}