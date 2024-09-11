const Footer = () => {
    return (
        <footer className="bg-[#AAB9CF]">
            <div className="mx-auto w-full max-w-screen-xl">
                <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:px-10 lg:py-14 md:grid-cols-4">
                    <div>
                        <h2 className="mb-2 font-semibold text-lg text-black dark:text-gray-600">
                            About this website
                        </h2>
                        <div className="w-3/4">
                            <p className="leading-5 font-sans sans-serif text-white dark:text-gray-400">
                                This website was made to highlight the different projects I have worked on.
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul className="font-sans sans-serif text-lg text-black dark:text-gray-600">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/projects" className="hover:underline">
                                    Projects
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/profile" className="hover:underline">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="font-sans sans-serif text-lg text-black dark:text-gray-600">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">
                                Dump
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/contact" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="font-sans sans-serif text-lg text-black dark:text-gray-600">
                            <li className="mb-4">
                                <a href="https://linkedin.com/in/emilie-baunifais" className="hover:underline">
                                    Linkedin
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/Nelryn" className="hover:underline">
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;