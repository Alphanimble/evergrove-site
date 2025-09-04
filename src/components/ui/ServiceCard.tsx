import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isReversed?: boolean;
}

export function ServiceCard({
  title,
  description,
  imageUrl,
  isReversed = false,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center my-8">
      {!isReversed ? (
        <>
          <div className="w-full md:w-1/2 relative h-[300px]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-gray-600 dark:text-white">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-gray-600 dark:text-white">{description}</p>
          </div>
          <div className="w-full md:w-1/2 relative h-[300px]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
}
