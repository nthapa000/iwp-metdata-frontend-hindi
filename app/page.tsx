import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mb-10">
      <div className="justify-center items-center m-4 mt-10 lg:mt-20">
        <div className=" text-left sm:px-16 xl:px-48">
          <h1 className="mb-4  text-3xl font-extrabold leading-none tracking-normal text-gray-700 md:text-4xl lg:text-4xl dark:text-white">
          मेटडेटा
          </h1>
          <p className="mb-6 text-left font-normal text-gray-600 lg:text-xl  dark:text-gray-400 leading-7">
          सभी जिलों के लिए 13 जलवायु मापदंडों के लिए मौसम संबंधी डेटासेट
            1901 से 2002 तक भारत के जलवायु पैरामीटर शामिल हैं:
            वर्षा, अधिकतम, न्यूनतम और औसत तापमान, बादल आवरण, वाष्प
            दबाव, गीले दिन की आवृत्ति, दैनिक तापमान सीमा, ज़मीन पर पाला
            आवृत्ति, संदर्भ फसल वाष्पीकरण-उत्सर्जन, क्षमता
            वाष्पीकरण-उत्सर्जन स्रोत डेटा CRU 2.1 डेटासेट से है
            जलवायु परिवर्तन अनुसंधान के लिए टाइन्डल केंद्र।
          </p>
        </div>
        <div className=" text-left sm:px-16 xl:px-48">
          <h1 className="mb-4  text-xl font-semibold leading-none tracking-normal text-gray-700 md:text-2xl lg:text-3xl dark:text-white">
          डेटा का स्रोत
          </h1>
          <p className="mb-6 text-left font-normal text-gray-600 lg:text-xl  dark:text-gray-400">
          इंडिया वॉटर पोर्टल, टाइन्डल सेंटर फॉर क्लाइमेट चेंज रिसर्च
          </p>
        </div>
        <div className=" text-left sm:px-16 xl:px-48">
          <h1 className="mb-4  text-xl font-semibold leading-none tracking-normal text-gray-700 md:text-2xl lg:text-3xl dark:text-white">
          डेटा की पृष्ठभूमि
          </h1>
          <p className="mb-6 text-left font-normal text-gray-600 lg:text-xl  dark:text-gray-400">
          <Link
              href="https://www.indiawaterportal.org/articles/background-meteorological-datasets"
              className="hover:text-arghyam"
            >
             मौसम संबंधी डेटासेट पर पृष्ठभूमि
            </Link>
          </p>
        </div>
        <div className=" text-left sm:px-16 xl:px-48">
          <h1 className="mb-4  text-xl font-semibold leading-none tracking-normal text-gray-700 md:text-2xl lg:text-3xl dark:text-white">
          डेटा स्वरूप
          </h1>
          <p className="mb-6 text-left font-normal text-gray-600 lg:text-xl  dark:text-gray-400">
          विज़ुअलाइज़ करने के लिए डेटा सीएसवी प्रारूप और चार्ट में उपलब्ध है
          </p>
        </div>
        <div className=" text-left sm:px-16 xl:px-48">
          <h1 className="mb-3  text-xl font-semibold leading-7  tracking-normal text-gray-800 md:text-2xl lg:text-3xl dark:text-white">
          अपने राज्य और जिले के अनुसार चार्ट प्राप्त करें
          </h1>
          <div className="mb-6 text-left font-normal text-gray-600 lg:text-xl  dark:text-gray-400">
          <Link
              href="/charts"
              className="arghyam"
            >
            चार्ट विज़ुअलाइज़ करें
             <div className="py-2"><button
                className="bg-transparent  font-semibold hover:bg-[#3e5463] text-[#3e5463] hover:text-white py-3 px-4 border border-black mt-2 hover:border-transparent rounded"
                style={{
                  border: "1px solid #5b7282",
                  borderRadius: "2px",
                  letterSpacing: ".5px",
                }}
              >
               चार्ट और डेटा
              </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
