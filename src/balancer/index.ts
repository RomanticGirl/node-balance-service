export type Server = {
  id: string;
  url: string;
};

export interface LoadBalancer {
  getNextServer(): Server | null;
}