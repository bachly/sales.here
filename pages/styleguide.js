import { HeaderBanner } from "../components/Banner";
import Button from "../components/Button";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { LinkWithChevron } from "../components/Link";

export default function StyleguidePage() {
    return <Layout>
        <HeaderBanner title="Styleguide" />

        <Container>
            <div className="mt-20 pt-8 border-t-2 border-gray-200 w-12"></div>
            <h2>Typography</h2>
            <div className="mt-32 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Display title</div>
                </div>
                <div className="w-2/3">
                    <span className="h1 display">
                        Display Title.<br />
                        Go Big or Go Home.
                    </span>
                </div>
            </div>
            <div className="mt-20 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Heading 1</div>
                </div>
                <div className="w-2/3">
                    <div className="max-w-3xl">
                        <span className="h1">
                            Heading 1 will look like this, and can go the second line like this.
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Heading 2</div>
                </div>
                <div className="w-2/3">
                    <div className="max-w-lg">
                        <span className="h2">
                            Heading 2 will look like this, and can go the second line like this.
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Heading 3</div>
                </div>
                <div className="w-2/3">
                    <div className="max-w-lg">
                        <span className="h3">
                            Heading 3 will look like this, and can go the second line like this.
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Heading 4</div>
                </div>
                <div className="w-2/3">
                    <div className="max-w-lg">
                        <span className="h4">
                            Heading 4 will look like this, and can go the second line like this.
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Heading 5</div>
                </div>
                <div className="w-2/3">
                    <div className="max-w-lg">
                        <span className="h5">
                            Heading 5 will look like this.
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Heading 6</div>
                </div>
                <div className="w-2/3">
                    <div className="max-w-lg">
                        <span className="h6">
                            Heading 6 will look like this, and can go the second line like this.
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Paragraph</div>
                </div>
                <div className="w-2/3">
                    <div className="max-w-lg">
                        <div className="prose">
                            <p>Body text for reading purpose looks like this. Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri, ut cum voluptate vivatur. Duo Reges: constructio interrete. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia. Quid ad utilitatem tantae pecuniae?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Quote</div>
                </div>
                <div className="w-2/3">
                    <div className="max-w-lg">
                        <div className="prose">
                            <quote>Utinam quidem dicerent alium alio beatiorem. Iam ruinas videres. Non autem hoc, igitur. Universa enim illorum ratione cum tota vestra confligendum puto.
                            </quote>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

        <Container>
            <div className="mt-32 pt-8 border-t-2 border-gray-200 w-12"></div>
            <h2>Buttons</h2>
            <div className="mt-20 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Buttons and states</div>
                </div>
                <div className="">
                    <div className="grid grid-cols-2 gap-2">
                        <Button>Outline Button</Button>
                        <Button hovered>Outline Button Hovered</Button>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                        <Button primary>Primary Button</Button>
                        <Button primary hovered>Primary Button Hovered</Button>
                    </div>
                    <div className="mt-2">
                        <Button disabled>Disabled Button</Button>
                    </div>
                </div>
            </div>
        </Container>

        <Container>
            <div className="mt-32 pt-8 border-t-2 border-gray-200 w-12"></div>
            <h2>Banner Slider</h2>
        </Container>

        <div className="mt-12 flex items-start">
            <div className="bg-gray-100 w-full">
                <Container>
                    <div className="py-48">
                        <div className="h1">
                            Handy accessories
                            <br />
                            for your bag
                        </div>
                        <div className="mt-16">
                            <LinkWithChevron href="/" className="">Shop now</LinkWithChevron>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    </Layout>
}