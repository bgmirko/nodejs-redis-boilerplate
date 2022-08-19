import { RedisClient } from "./infrastructure/redisCacheClient";
import { Container } from "typedi";

export class Bootstrap {
    constructor(){}

    bootstrap(){
        this.setupServiceContainer();
    }

    async setupServiceContainer(){
        const redis = Container.get(RedisClient);
        await redis.init();
    }
}