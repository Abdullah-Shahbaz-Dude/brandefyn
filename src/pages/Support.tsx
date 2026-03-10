import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "../utils/constants";

export default function Support() {
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
          Support
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/90 text-base sm:text-lg leading-relaxed mb-8"
        >
          We're here to help. Reach out for questions about our services, your
          account, or any issues you experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6 text-white/90 text-sm sm:text-base leading-relaxed"
        >
          <div>
            <h2 className="text-white text-lg font-semibold mb-2">
              Get in touch
            </h2>
            <p>
              Use our{" "}
              <Link
                to="/contact#schedule-call"
                className="text-primary underline hover:no-underline font-semibold"
              >
                Contact page
              </Link>{" "}
              to schedule a call or send us a message. We aim to respond to
              inquiries within 1–2 business days.
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-primary underline hover:no-underline"
              >
                {CONTACT_INFO.email}
              </a>
              <br />
              Phone:{" "}
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="text-primary underline hover:no-underline"
              >
                {CONTACT_INFO.phone}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2 mt-8">
              SMS and text messages
            </h2>
            <p>
              If you receive text messages from us and want to stop them, reply{" "}
              <strong>STOP</strong> to the number you received the message from,
              or contact us at{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-primary underline hover:no-underline"
              >
                {CONTACT_INFO.email}
              </a>{" "}
              and we will remove you from our messaging list. For any issues
              with SMS (e.g., not receiving messages or receiving unwanted
              messages), please reach out through the contact details above.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
