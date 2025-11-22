import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

interface EmailFormData {
  email: string;
}

interface EmailCaptureProps {
  onSuccess?: () => void;
  calendlyUrl?: string;
}

export default function EmailCapture({ onSuccess, calendlyUrl }: EmailCaptureProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>();

  const onSubmit = async (data: EmailFormData) => {
    // Here you would typically send the email to your backend
    console.log('Email submitted:', data.email);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    onSuccess?.();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div>
              <input
                type="email"
                placeholder="Please enter your email..."
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full px-4 py-3 bg-gray-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-black shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all font-semibold"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Get Started'}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              *But it's 100% legal (pinky promise) ⭐⭐⭐⭐⭐
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="calendly"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
            <p className="text-white font-semibold text-lg">Please schedule your strategy call:</p>
            {calendlyUrl ? (
              <div className="mt-4">
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all"
                />
              </div>
            ) : (
              <Button
                onClick={() => window.open(calendlyUrl || '#', '_blank')}
                className="mt-4"
              >
                Schedule a Call
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
