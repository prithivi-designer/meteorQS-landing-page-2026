"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection({ sectionRef }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add logic to handle submission
    };

    return (
        <section ref={sectionRef} id="contact" className="bg-[#0A142F] py-20 px-6 md:px-12 lg:px-24">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Got a project in mind?
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-lg">
                            We’d love to hear from you. Let’s create something amazing together.
                            Reach out to us for any inquiries or collaboration opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                                    <Mail className="size-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">Email Us</h4>
                                    <a href="mailto:admin@meteoriqs.com" className="text-gray-400 hover:text-white transition-colors">
                                        admin@meteoriqs.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                                    <Phone className="size-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">Call Us</h4>
                                    <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                                        +91 93425 79841
                                    </a>
                                </div>
                            </div>
                            {/* Address could be added here if desired, matching the footer info logic or kept clean */}
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:w-1/2 bg-[#0c1b3a] p-8 md:p-10 rounded-3xl border border-gray-800 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500/50 transition-colors"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500/50 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-2">Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500/50 transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    rows={4}
                                    className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500/50 transition-colors resize-none"
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg text-lg transition-all"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
