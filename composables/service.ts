export interface Service {
    id: number;
    title: string;
    category: ServicesCategory;
    status?: string;
    description: string;
    route?: string;
  }