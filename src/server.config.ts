import { readFileSync } from "fs";
import { resolve } from "path";
import { IServerConfig } from "./types";

const readFile = (path: string) => readFileSync(path, 'utf-8');

export const serverConfig = (() =>  {
    const packageJsonFile = readFile(resolve(process.cwd(), 'package.json'));
    return typeof packageJsonFile === 'string' ? JSON.parse(packageJsonFile) as IServerConfig : null;
})();

export const http2Config = {
    key: readFile(resolve(process.cwd(), 'config/key.pem')) ?? null,
    cert: readFile(resolve(process.cwd(), 'config/cert.pem')) ?? null
}