import Image from "next/image";
// import img1 from "../../Asset/Image/AboutImages/Rectangle1.png"
// import img2 from "../../Asset/Image/AboutImages/Agriculture-Rural-Devt.jpg"
// import img3 from "../../Asset/Image/AboutImages/Good-Governance.jpg"
// import img4 from "../../Asset/Image/AboutImages/Project-Monitoring-1.jpg"
export default function ResearchingConsultant() {
    return (
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full">
                  COMPANY PROFILE
                </span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in Ethiopia capital Addis Ababa over eighteen years ago Gize PLC has established itself as areputed leader in the Transportation and logistics sector in the country and region at large.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Gize PLC is recognized for a comprehensive range of transportation and logistics solutions including, travel and tour, and many more. Gize PLC is reputed for its extremely dedicated and committed workforce and for its ability to offer competitive options and customized customer services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-100 hover:border-orange-500 transition-colors">
                  <p className="text-4xl font-bold text-orange-500 mb-2">26+</p>
                  <p className="text-black font-medium">Years Experience</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-orange-500 transition-colors">
                  <p className="text-4xl font-bold text-orange-500 mb-2">98%</p>
                  <p className="text-black font-medium">Client Satisfaction</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-orange-500 transition-colors">
                  <p className="text-4xl font-bold text-orange-500 mb-2">500+</p>
                  <p className="text-black font-medium">Active Clients</p>
                </div>
                <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-100 hover:border-orange-500 transition-colors">
                  <p className="text-4xl font-bold text-orange-500 mb-2">200+</p>
                  <p className="text-black font-medium">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }