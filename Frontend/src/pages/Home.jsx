import { useNavigate } from "react-router-dom";
import Picture from "../assets/KaveriJarali.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page mx-15 -mt-25">
      <header className="text-left py-20 md:py-28 relative">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-60 h-60 bg-gray-800/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-gray-800/10 rounded-full blur-3xl"></div>
        </div>

        {/* Flex container: text + image */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left: Greeting + Info */}
          <div className="flex-1">
            <h1 className="font-bold text-4xl md:text-5xl text-white leading-snug mb-4">
              Hi, I'm{" "}
              <span className="text-blue-500">Kaveri Bhimappa Jarali</span>
            </h1>

            <div className="text-xl md:text-2xl text-gray-200 mb-4">
              <span className="text-blue-400 font-medium">
                Computer Science Engineering Student
              </span>
            </div>

            <p className="text-lg text-gray-200 mt-4 max-w-2xl leading-relaxed">
              A Computer Science Engineering student learning web development.
              Currently pursuing my degree with a CGPA of
              <span className="text-blue-400 font-semibold"> 9.96/10</span> and
              building my first web applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => navigate("/projects")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-shrink-0 pr-36">
            <img
              src={Picture}
              alt="Profile Picture"
              className="w-60 h-64 rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
