import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import { FaGithub, FaLinkedin, FaXTwitter, FaRss } from "react-icons/fa6";

function MyForm() {
    const [state, handleSubmit] = useForm("mnnjeedo");

    if (state.succeeded) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center text-white bg-green-600 p-6 rounded-2xl shadow-xl max-w-md"
            >
                <h2 className="text-2xl font-bold">Thank you! 🙌</h2>
                <p className="text-white/90 mt-2">I'll be in touch soon.</p>
            </motion.div>
        );
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 space-y-4"
        >
            <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
                name="message"
                placeholder="Your message"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
                {state.submitting ? "Sending..." : "Send Message"}
            </button>
        </motion.form>
    );
}

function SocialBanner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-6 mt-10 text-white text-xl"
        >
            <a
                href="https://github.com/DGwebdes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/alangarve/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://x.com/gandalfsneto"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
            >
                <FaXTwitter />
            </a>
            <a
                href="https://dgvault.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
            >
                <FaRss />
            </a>
        </motion.div>
    );
}

export default function PlaceholderPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-center mb-8"
            >
                <h1 className="text-4xl font-bold mb-2">Hey there 👋</h1>
                <p className="text-lg text-gray-300">
                    I'm currently rebuilding my portfolio. Leave a message
                    below!
                </p>
            </motion.div>
            <MyForm />
            <SocialBanner />
        </div>
    );
}
