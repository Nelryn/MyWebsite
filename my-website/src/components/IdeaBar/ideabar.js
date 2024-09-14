import { Link } from 'react-router-dom';

const Ideabar = () => {
    return (
        <div className="flex border-y border-black my-6 py-10 place-content-around place-items-center">
            <div>
                <div className="font-idea text-6xl">
                    Got a project idea ?
                </div>
                <div className="font-idea text-6xl">
                Share your idea !
                </div>
            </div>
            <Link to="/projects">
                <button type="button" class="bg-[#AAB9CF] hover:bg-gray-200 focus:outline-none px-10 py-2.5 h-20 font-sans sans-serif text-lg rounded-full text-center border border-black">
                    Share your idea
                </button>
            </Link>
        </div>
    )
}

export default Ideabar;