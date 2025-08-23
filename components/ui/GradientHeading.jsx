export default function GradientHeading({ children, active }) {
  return (
    <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
      <span
        className={`
          transition-all duration-700 ease-in-out
          ${active
            ? "bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent dark:from-fuchsia-400 dark:to-indigo-500"
            : "text-black dark:text-white"}
        `}
      >
        {children}
      </span>
    </h3>
  );
}
