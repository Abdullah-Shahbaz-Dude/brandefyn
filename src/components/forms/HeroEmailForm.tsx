import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface EmailFormData {
  email: string;
}

interface HeroEmailFormProps {
  onSuccess?: () => void;
}

export default function HeroEmailForm({ onSuccess }: HeroEmailFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>();

  const onSubmit = async (data: EmailFormData) => {
    // Here you would typically send the email to your backend
    console.log("Email submitted:", data.email);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    onSuccess?.();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Small text above form */}
      <p className="text-white text-center mb-6 text-sm md:text-base font-medium text-shadow-lg">
        No risk, just results.
      </p>

      {/* Email form */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row gap-0 items-stretch"
      >
        {/* Input field */}
        <div className="flex-1 relative flex">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl z-10">
            👋
          </span>
          <input
            type="email"
            placeholder="Enter your email here and we'll send you some 'magic'..."
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full h-full pl-12 pr-4 py-4 bg-gray-950 text-white placeholder-gray-400 border-2 border-purple-500/50 rounded-l-2xl sm:rounded-r-none sm:border-r-0 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-gray-900 transition-all font-medium text-base shadow-lg hover:shadow-xl hover:shadow-purple-500/30 hover:border-purple-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400 text-shadow-lg absolute -bottom-6 left-0">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-full px-8 py-4 bg-primary hover:bg-purple-600 active:bg-purple-700 text-white font-bold rounded-r-2xl sm:rounded-l-none rounded-l-2xl sm:rounded-l-0 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base whitespace-nowrap shadow-lg hover:shadow-xl hover:shadow-purple-500/50 glow-purple-hover"
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              Do it
              <span className="text-xl">→</span>
            </>
          )}
        </button>
      </motion.form>
    </div>
  );
}
