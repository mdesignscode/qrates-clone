function ChevronDownIcon({ className, size }: { className: string, size?: string }) {
  return (
    <svg
      className={`${className} ${size || "size-[24]"}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z" />
    </svg>
  );
}

export default ChevronDownIcon;
