import Image from "next/image";

export default function Logo() {
  return (
    <div className="text-center relative w-full h-32 sm:h-48 md:h-64">
      <Image fill src="/logo-light.png" alt="Logo" />
    </div>
  );
}
