import { Server, LoadBalancer } from '.';

export class RoundRobinBalancer implements LoadBalancer {
  private servers: Server[];
  private currentIndex: number = 0;

  constructor(servers: Server[]) {
    this.servers = servers;
  }

  getNextServer(): Server | null {
    if (this.servers.length === 0) return null;

    const server = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.servers.length;
    return server;
  }
}