import { LegalPageLayout } from '@/components/legal/LegalPageLayout'

export default function PrivacyPolicy() {
    return (
        <LegalPageLayout title="Privacy Policy">
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold">
                        1. Introduction
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        This Privacy Policy explains how privacy is addressed on this
                        website. The website was developed as part of a university
                        group project for educational purposes and simulates an online
                        electronics store.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        It is a demonstration website, not a real commercial store.
                        No actual products are sold, and no real purchases or payments
                        are processed.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        2. Personal Data Collection
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        Visitors can browse the website without providing personal
                        information. The project does not intentionally collect
                        personal data through its website features.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        Visitors should not enter real personal, financial, or
                        sensitive information into any forms or interactive features
                        provided as part of the demonstration.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        3. Cookies and Tracking Technologies
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        This project does not intentionally use cookies or tracking
                        technologies to collect personal information for advertising
                        or user profiling.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        However, the website's hosting provider or other technical
                        services used to operate it may process limited technical
                        information, such as server logs or IP addresses, as part of
                        their normal operation.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        4. Third-Party Services
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        The website may rely on third-party services for hosting,
                        displaying images, or providing other technical functionality.
                        These services may process technical information in accordance
                        with their own privacy policies.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        This project team does not control the independent privacy
                        practices of third-party service providers.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        5. Data Security
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        As this is an academic demonstration project, it is not
                        intended to handle personal, financial, or other sensitive
                        information. Visitors should avoid submitting such information
                        through the website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        6. Children's Privacy
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        This website is an educational demonstration and is not
                        specifically designed to collect information from children.
                        The project does not intentionally request personal data from
                        visitors of any age.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        7. Changes to This Policy
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        This Privacy Policy may be updated if changes are made to the
                        website or its functionality as part of the academic project.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        8. Contact
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        For questions about this Privacy Policy or the academic
                        project, visitors may contact the project team through the
                        appropriate university channels.
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    )
}