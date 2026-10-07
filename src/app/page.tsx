import { profile } from "@/data/profile";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6 sm:py-12">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <section className="mt-4">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
      </section>

      <nav aria-label="링크 목록" className="mt-10 flex flex-col gap-4">
        {profile.links.map((link) => (
          <LinkCard key={link.id} {...link} />
        ))}
      </nav>

      <footer className="mt-auto pt-12 text-center text-xs text-gray-400 dark:text-gray-600">
        링크나무
      </footer>
    </main>
  );
}
