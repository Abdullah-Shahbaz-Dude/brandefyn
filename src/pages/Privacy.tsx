import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "../utils/constants";

export default function Privacy() {
  return (
    <section className="relative z-10 purple-glow-bg text-white py-12 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-3xl relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-normal mb-8 tracking-tight"
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
          }}
        >
          Privacy Policy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-white/90 text-sm sm:text-base leading-relaxed"
        >
          <div>
            <h2 className="text-white text-lg font-semibold mb-2 mt-8">
              Introduction
            </h2>
            <p>
              Brandefyn (“we,” “our,” or “us”) is committed to protecting your
              privacy. This policy describes how we collect, use, and safeguard
              information when you use our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2 mt-8">
              Information We Collect
            </h2>
            <p>
              We may collect information you provide directly, such as when you
              fill out our contact form, request a free audit, or schedule a
              call. This may include your name, email address, phone number, and
              any message or details you submit. We may also collect usage data
              (e.g., through analytics) to improve our site and services.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2 mt-8">
              How We Use Your Information
            </h2>
            <p>
              We use your information to respond to your inquiries, provide
              requested services (such as audits or strategy calls), improve our
              website and offerings, and, with your consent where required, to
              send relevant updates or marketing. We do not sell your personal
              information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2 mt-8">
              SMS and Messaging
            </h2>
            <p>
              If you receive text messages (SMS) from us, message and data rates
              may apply. You can opt out at any time by replying STOP or by
              contacting us through our{" "}
              <Link to="/support" className="text-primary underline hover:no-underline">
                Support
              </Link>{" "}
              or{" "}
              <Link to="/contact" className="text-primary underline hover:no-underline">
                Contact
              </Link>{" "}
              page. We respect your preferences and will process opt-outs
              promptly.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2 mt-8">
              Contact Us About Privacy
            </h2>
            <p>
              For questions about this privacy policy or your personal data,
              contact us at{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-primary underline hover:no-underline"
              >
                {CONTACT_INFO.email}
              </a>{" "}
              or visit our{" "}
              <Link to="/contact" className="text-primary underline hover:no-underline">
                Contact
              </Link>{" "}
              page.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
