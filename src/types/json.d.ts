declare module "*.json" {
  const value: {
    items: {
      title: string;
      description: string;
      images: string[];
    }[];
  };
  export default value;
} 