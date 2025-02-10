declare module "*.json" {
  const value: {
    items: ({
      title: string;
      description: string;
      images: string[];
    } | {
      title: string;
      description: string;
      videoSrc: string;
      posterSrc: string;
    })[];
  };
  export default value;
} 