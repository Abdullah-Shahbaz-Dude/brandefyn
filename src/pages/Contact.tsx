import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import heroImage from "../assets/images/hero/hero-2.png";
// import amazonLine from '../assets/images/hero/hero-amzon.png';

interface ContactFormData {
  name: string;
  email: string;
  budget: string;
  projectDescription: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Console log form data as specified
    console.log("Contact form submitted:", data);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  // Google Maps embed URL - using a placeholder embed that will work without API key
  const placeholderMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576675!2d-82.6394!3d27.7678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQ2JzA0LjEiTiA4MsKwMzgnMjEuOCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`;

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen purple-glow-bg py-12 md:py-24 flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        {/* Additional Purple Glow Blur Effect - matching home page */}
        <div className="absolute -bottom-[50px] left-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-20" />
        
        {/* Stars Background */}
        <div className="absolute inset-0 stars-bg z-0" />

        <div className="container mx-auto px-4 max-w-[1400px] w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 relative"
          >
            <h1 className="text-4xl md:text-5xl -[800px] mx-auto lg:text-6xl xl:text-7xl font-bold text-white text-shadow-lg leading-tight mb-6">
              Get in Touch With Us
            </h1>
            Expert Guides to Master Amazon Ads  {/* <img src={amazonLine} alt="Amazon Line" className="absolute top-[145px] left-[25%]" /> */}
            <p className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              We're here to help you grow your Amazon brand. Whether you have questions, want a free audit, or are ready to start scaling, our team is just a message away.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative min-h-screen purple-glow-bg py-12 md:py-24">
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">

        {/* Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-[1280px] mx-auto"
          style={{
            minHeight: "944px",
            borderRadius: "35px",
            padding: "1px",
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2))",
          }}
        >
          <div
            className="w-full h-full rounded-[35px]"
            style={{
              background: "black",
              padding: "58px 57px",
            }}
          >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Form */}
            <div className="flex flex-col space-y-8">
              {/* Form Heading Section */}
              <div className="flex flex-col space-y-[19px]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Contact Us
                </h2>
                <p className="text-base md:text-lg text-white leading-relaxed">
                  Feel free to reach out for collaborations, projects, or just to say hello — I'm always open to new ideas!
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-[22px]">
                {/* Name Field */}
                <div className="flex flex-col space-y-2">
                  <label className="text-white text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="w-full h-[65px] px-6 text-white placeholder-white/50 bg-[rgba(247,247,247,0.05)] border border-[rgba(178,178,178,0.2)] rounded-[10px] focus:outline-none focus:border-white/40 transition-all backdrop-blur-[74px]"
                    style={{
                      backdropFilter: "blur(74px)",
                      WebkitBackdropFilter: "blur(74px)",
                    }}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col space-y-2">
                  <label className="text-white text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Type here"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full h-[65px] px-6 text-white placeholder-white/50 bg-[rgba(247,247,247,0.05)] border border-[rgba(178,178,178,0.2)] rounded-[10px] focus:outline-none focus:border-white/40 transition-all backdrop-blur-[74px]"
                    style={{
                      backdropFilter: "blur(74px)",
                      WebkitBackdropFilter: "blur(74px)",
                    }}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Budget Field */}
                <div className="flex flex-col space-y-2">
                  <label className="text-white text-sm font-medium">Your Budget</label>
                  <input
                    type="text"
                    placeholder="Ex:100 - 1000"
                    {...register("budget", {
                      required: "Budget is required",
                    })}
                    className="w-full h-[65px] px-6 text-white placeholder-white/50 bg-[rgba(247,247,247,0.05)] border border-[rgba(178,178,178,0.2)] rounded-[10px] focus:outline-none focus:border-white/40 transition-all backdrop-blur-[74px]"
                    style={{
                      backdropFilter: "blur(74px)",
                      WebkitBackdropFilter: "blur(74px)",
                    }}
                  />
                  {errors.budget && (
                    <p className="text-sm text-red-400">{errors.budget.message}</p>
                  )}
                </div>

                {/* Project Description Field */}
                <div className="flex flex-col space-y-2">
                  <label className="text-white text-sm font-medium">Project Description</label>
                  <textarea
                    placeholder="Type here"
                    {...register("projectDescription", {
                      required: "Project description is required",
                    })}
                    rows={8}
                    className="w-full min-h-[252px] px-6 py-4 text-white placeholder-white/50 bg-[rgba(247,247,247,0.05)] border border-[rgba(178,178,178,0.2)] rounded-[10px] focus:outline-none focus:border-white/40 transition-all resize-none backdrop-blur-[74px]"
                    style={{
                      backdropFilter: "blur(74px)",
                      WebkitBackdropFilter: "blur(74px)",
                    }}
                  />
                  {errors.projectDescription && (
                    <p className="text-sm text-red-400">{errors.projectDescription.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[150px] h-[46px] bg-[#1F1446] border border-white text-white font-bold rounded-[5px] hover:bg-[#2a1d5a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </motion.button>
              </form>
            </div>

            {/* Right Column - Google Map */}
            <div className="w-full h-full min-h-[400px] lg:min-h-[897px]">
              <iframe
                src={placeholderMapUrl}
                width="100%"
                height="100%"
                style={{
                  border: "1px solid rgba(178, 178, 178, 1)",
                  borderRadius: "20px",
                  minHeight: "897px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Contact Location Map"
              />
            </div>
          </div>
        </div>
        </motion.div>
      </div>
      </div>
    </>
  );
}

