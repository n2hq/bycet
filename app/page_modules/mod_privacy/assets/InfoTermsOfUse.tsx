import React from 'react'

const InfoTermsOfUse = () => {
    return (
        <div className="w-full  lg:max-w-[70%] xl:max-w-[700px] mx-auto px-4 py-8">
            <h1 className="text-3xl tracking-tighter font-black text-gray-900 mb-6 first-letter:italic">Terms of Use</h1>
            <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
                    <p className="text-gray-600">
                        Welcome to Bycet ("we," "our," or "us"). By accessing or using our website
                        at Bycet.com (the "Site"), you agree to be bound by these Terms of Use and
                        our Privacy Policy. If you do not agree to these terms, please do not use our Site.
                    </p>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Intellectual Property</h2>
                    <p className="text-gray-600">
                        All content on this Site, including but not limited to text, graphics, logos,
                        images, audio clips, digital downloads, data compilations, and software, is
                        the property of Bycet Ltd. or its content suppliers and is protected by
                        international copyright and intellectual property laws. The trademarks "Bycet"
                        and the Bycet logo are our exclusive property.
                    </p>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Use of the Site</h2>
                    <p className="text-gray-600 mb-3">
                        You are granted a limited, non-exclusive, non-transferable license to access
                        and use the Site for informational and non-commercial purposes. You agree not to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, or sell any information or software obtained from the Site.</li>
                        <li>Use the Site for any unlawful purpose or in any way that could damage, disable, or impair the Site or interfere with any other party's use of the Site.</li>
                    </ul>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Services and Consultations</h2>
                    <p className="text-gray-600">
                        The content on this Site, including descriptions of our software development,
                        AI integration, and other technology services, is for general informational
                        purposes only. It does not constitute a binding offer or agreement. Specific
                        project terms, scope, pricing, and deliverables will be outlined in a separate,
                        formal Statement of Work or Master Services Agreement.
                    </p>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">5. User Submissions</h2>
                    <p className="text-gray-600">
                        Any non-personal information, feedback, comments, or ideas you submit to us
                        through the Site ("Submissions") will be considered non-confidential and
                        non-proprietary. By providing a Submission, you grant us an unrestricted,
                        perpetual, irrevocable license to use, reproduce, modify, and distribute it
                        for any purpose without compensation to you.
                    </p>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Disclaimer of Warranties</h2>
                    <p className="text-gray-600">
                        This Site and all content are provided "as is" and "as available" without any
                        warranties of any kind, either express or implied, including but not limited
                        to implied warranties of merchantability, fitness for a particular purpose,
                        or non-infringement.
                    </p>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Limitation of Liability</h2>
                    <p className="text-gray-600">
                        To the fullest extent permitted by law, Bycet Ltd. shall not be liable for
                        any direct, indirect, incidental, special, consequential, or punitive damages
                        arising out of or in any way connected with your use of the Site or the
                        inability to use the Site.
                    </p>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Links to Third-Party Sites</h2>
                    <p className="text-gray-600">
                        The Site may contain links to external websites. These links are provided for
                        your convenience only. We do not control these sites and are not responsible
                        for their content, privacy policies, or practices. The inclusion of any link
                        does not imply endorsement by Bycet.
                    </p>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Indemnification</h2>
                    <p className="text-gray-600">
                        You agree to indemnify and hold harmless Bycet Ltd., its officers, directors,
                        employees, and agents from any claims, liabilities, damages, losses, or expenses
                        arising out of your use of the Site or your violation of these Terms.
                    </p>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Governing Law</h2>
                    <p className="text-gray-600">
                        These Terms shall be governed by and construed in accordance with the laws of
                        [Your Country/Jurisdiction], without regard to its conflict of law principles.
                    </p>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Changes to Terms</h2>
                    <p className="text-gray-600">
                        We reserve the right to modify these Terms of Use at any time. We will do so by
                        posting an updated version on this page with a new "Last Updated" date. Your
                        continued use of the Site after any change constitutes your acceptance of the new Terms.
                    </p>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">12. Contact Us</h2>
                    <p className="text-gray-600">
                        If you have any questions about these Terms of Use, please contact us at:
                    </p>
                    <p className="text-gray-800 font-medium mt-2">Email: info@bycet.com</p>
                </section>
            </div>
        </div>
    )
}

export default InfoTermsOfUse;