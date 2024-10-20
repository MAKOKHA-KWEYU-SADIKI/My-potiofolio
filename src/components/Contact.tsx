import { useForm, ValidationError } from '@formspree/react';

function ContactPage() {
  const [state, handleSubmit] = useForm("xbljljol");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center py-8">
        <p className="text-xl font-semibold text-green-600">Thank you for your message!</p>
      </div>
    );
  }

  return (
    <div id='Contact' className="flex items-center justify-center py-8 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Me</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Flex container for Name + Email and Message */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
            {/* Left Column: Name and Email */}
            <div className="flex flex-col w-full lg:w-1/2 space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            {/* Right Column: Message */}
            <div className="w-full lg:w-1/2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
