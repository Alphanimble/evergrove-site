import React from 'react'

function page() {
  return (
    <div>page
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <h1 className="text-4xl font-bold text-center mb-8">About Evergrove</h1>
          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              At Evergrove, we are passionate about creating digital experiences that leave a lasting impact. Our team of dedicated professionals combines creativity with technical expertise to deliver exceptional solutions for our clients.
            </p>
            <p className="text-lg mb-6">
              Founded with a vision to transform digital landscapes, we specialize in web development, design, and digital strategy. Our approach is rooted in understanding our clients' unique needs and delivering solutions that exceed expectations.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-3xl mx-auto bg-secondary dark:bg-primary/10 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-8">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border rounded-md bg-background dark:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border rounded-md bg-background dark:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md bg-background dark:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md bg-background dark:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default page