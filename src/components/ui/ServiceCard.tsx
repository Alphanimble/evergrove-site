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
    <div className="flex flex-col md:flex-row gap-8 items-center my-8 w-full overflow-hidden">
      {!isReversed ? (
        <>
          <div className="w-full md:w-1/2 min-w-0 relative h-64 min-h-[200px] max-h-[350px] overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 min-w-0 space-y-4 px-2 md:px-6 overflow-hidden">
            <h3 className="text-xl md:text-2xl font-bold break-words max-w-full">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-white text-base md:text-lg break-words max-w-full">
              {description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 min-w-0 space-y-4 px-2 md:px-6 overflow-hidden">
            <h3 className="text-xl md:text-2xl font-bold break-words max-w-full">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-white text-base md:text-lg break-words max-w-full">
              {description}
            </p>
          </div>
          <div className="w-full md:w-1/2 min-w-0 relative h-64 min-h-[200px] max-h-[350px] overflow-hidden">
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
