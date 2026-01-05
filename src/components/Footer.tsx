export default function Footer() {
  return (
    <footer className="border-t border-warm-200 py-6 mt-auto">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-sm text-warm-500 text-center">
          Made by{' '}
          <a
            href="https://github.com/subinium"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-700 hover:text-accent-dark transition-colors"
          >
            @subinium
          </a>
        </p>
      </div>
    </footer>
  );
}
