import { AcademicNotice } from '@/components/AcademicNotice'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'

export default function TermsOfUse() {
    return (
        <LegalPageLayout title="Terms of Use">
            <AcademicNotice />

            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold">
                        1. Purpose of the Website
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        This website was created as part of a university group project
                        for educational purposes. It simulates an online electronics
                        store to demonstrate the concepts and technologies involved
                        in developing an e-commerce website.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        The website is a demonstration only and is not operated as
                        a real commercial business.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        2. No Real Purchases or Transactions
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        All products, prices, descriptions, and availability
                        information displayed on this website are for illustrative
                        purposes only and may not reflect real products or market
                        prices.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        No actual products are sold through this website. It does not
                        accept real orders or process payments, and no delivery or
                        fulfilment service is provided.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        3. Acceptable Use
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        Visitors may browse and use the website for personal,
                        educational, and demonstration purposes.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        Users must not attempt to disrupt the website, gain
                        unauthorised access to its systems, interfere with its
                        functionality, or use it for unlawful activities.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        4. Product Information and Accuracy
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        Product listings, specifications, images, prices, and other
                        content may be fictional, simplified, incomplete, or
                        inaccurate. They are included solely to support the academic
                        objectives of the project.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        Visitors should not rely on this information when making
                        purchasing decisions.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        5. Intellectual Property
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        The website's original design, code, and content created by
                        the project team are part of an academic exercise.
                        Third-party names, logos, product images, and trademarks
                        remain the property of their respective owners.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        Their appearance on this website does not imply any
                        sponsorship, partnership, or endorsement.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        6. Privacy
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        This project is not intended to collect personal information
                        from visitors. Users should not submit real personal,
                        financial, or sensitive information through the website.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        For more information, please refer to the website's Privacy
                        Policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        7. Availability and Disclaimer
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        The website is provided for educational and demonstration
                        purposes on an "as is" and "as available" basis. Its
                        functionality, content, or availability may change without
                        notice as the academic project develops.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        The project team does not guarantee that the website will
                        always be available, error-free, or suitable for any
                        particular purpose.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        8. Limitation of Responsibility
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        To the extent permitted by applicable law, the project team
                        is not responsible for losses or damages arising from reliance
                        on demonstration content or temporary interruptions in the
                        website's availability.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        Nothing in these terms excludes or limits any liability that
                        cannot lawfully be excluded or limited.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        9. Changes to These Terms
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        These Terms of Use may be revised if the website's features
                        or academic requirements change. The latest version published
                        on this page will replace previous versions.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        10. Contact
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        For questions concerning this website or the academic
                        project, visitors may contact the project team through the
                        appropriate university channels.
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    )
}