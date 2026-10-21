import { AcademicNotice } from '@/components/AcademicNotice'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'

export default function LegalNotice() {
    return (
        <LegalPageLayout title="Legal Notice">
            <AcademicNotice />

            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold">
                        1. Purpose of This Website
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        This website was developed as part of an academic group project
                        for educational purposes. It simulates an online electronics
                        store to demonstrate our understanding of web development,
                        e-commerce concepts, and user interface design.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        This is a demonstration website only. It is not a real
                        commercial business, and no actual products are offered for
                        sale.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        2. No Real Transactions
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        All products, prices, descriptions, and other commercial
                        information displayed on this website are provided solely
                        for demonstration purposes. No actual purchases, payments,
                        deliveries, or commercial transactions can be made through
                        this website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        3. Personal Data and Privacy
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        This academic project does not intentionally collect or
                        request personal data from visitors. Users are not required
                        to provide personal information to browse the website.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        As this website is intended for demonstration purposes only,
                        visitors should not submit real personal, financial, or
                        sensitive information through any forms or interactive
                        features.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        4. Intellectual Property
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        Product names, images, logos, trademarks, and other materials
                        displayed on this website may belong to their respective
                        owners. They are used for educational and illustrative
                        purposes only and do not imply any affiliation with or
                        endorsement by the relevant brands.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        5. Limitation of Liability
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        This website is provided for educational and demonstration
                        purposes only. While reasonable care has been taken in its
                        development, the project team makes no guarantee that all
                        information displayed is accurate, complete, or up to date.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        The website should not be used as a source of commercial
                        information or relied upon for actual purchasing decisions.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        6. Academic Project Disclaimer
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        This website is an academic project created collaboratively
                        by students as part of their university studies. It is not
                        intended to operate as a real online store or commercial
                        service.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        7. Contact
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        For questions regarding this academic project, please contact
                        the relevant project team through the appropriate academic
                        channels.
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    )
}