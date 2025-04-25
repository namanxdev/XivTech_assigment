const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-900 border-t border-gray-800 text-gray-300 p-10 ">
      <aside>
        {/* Bitcoin/crypto icon instead of the hashtag */}
        <svg
            width="50"
            height="50"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-2"
            >
            <circle cx="16" cy="16" r="16" fill="#F7931A"/>
            <path
                d="M17.437 17.637c1.49-.37 2.44-1.25 2.44-2.68 0-1.81-1.48-2.44-3.21-2.61V10.5h-1.01v1.81c-.27 0-.54.01-.81.02V10.5h-1.01v1.85c-.22.01-.44.02-.65.03l-.001.001-1.39.32.22.98s.52-.12.51-.12c.28-.06.41.07.45.27l.11.49v.001l.27 1.22c.02.07 0 .17-.13.2 0 0-.52.12-.52.12l.13.57 1.31-.3c.24-.06.47-.09.7-.1v1.97c-.03 0-.06.001-.09.001-.22.01-.44.02-.65.03l-.001.001-1.39.32.22.98s.52-.12.51-.12c.28-.06.41.07.45.27l.11.49v.001l.27 1.22c.02.07 0 .17-.13.2 0 0-.52.12-.52.12l.13.57 1.31-.3c.26-.06.51-.09.76-.1v1.81h1.01v-1.77c.28-.01.55-.02.81-.03v1.8h1.01v-1.85c1.7-.32 2.89-1.25 2.89-2.81 0-1.34-.99-2.13-2.44-2.38zm-4.13-3.11c.19-.05.38-.09.57-.12v1.77c-.2.01-.4.03-.6.06l-.27-1.21c-.04-.17.01-.29.3-.36zm.3 4.07c.2-.03.4-.05.6-.06v1.81c-.19.03-.38.07-.57.12-.29.07-.34-.02-.3-.19l.27-1.21zm2.06-4.31c.68.08 2.23.25 2.23 1.38 0 1.02-.97 1.32-2.23 1.36v-2.74zm0 6.01v-2.81c.85.02 2.79.06 2.79 1.4 0 1.18-1.51 1.36-2.79 1.41z"
                fill="#fff"
            />
            </svg>
        <p className="text-gray-400">
          <span className="text-amber-500 font-bold">CryptoTracker</span><br />
          Real-time cryptocurrency market data
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-gray-400">Connect With Me</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/namanxdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-amber-500 transition-colors"
          >
            {/* GitHub Icon - keeping your original */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
          <a
            href="mailto:namanguptabhopal@gmail.com"
            aria-label="Gmail"
            className="text-gray-400 hover:text-amber-500 transition-colors"
          >
            {/* Gmail Icon - keeping your original */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4v-9.99l8 6.99 8-6.99V18z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/naman411/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-amber-500 transition-colors"
          >
            {/* LinkedIn Icon - keeping your original */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer