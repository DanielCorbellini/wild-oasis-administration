import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image
        width={193}
        height={137}
        src="/logo-light.png"
        alt="Logo"
        loading="lazy"
      />
    </div>
  );
}
