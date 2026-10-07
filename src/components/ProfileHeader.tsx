import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full border-2 border-gray-200 object-cover dark:border-gray-700"
      />
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{bio}</p>
    </header>
  );
}
