import Button from "../components/Button";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { LinkAsButton, LinkWithChevron } from "../components/Link";

export default function DocsPage({ featuredProducts = [], featuredPosts = [] }) {
    return <Layout>
        <Container>
            <div className="mt-20 pt-8 border-t-2 border-neutral-200 w-12"></div>
            <h2>Typography</h2>
            <div className="mt-32 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Display title</div>
                </div>
                <div className="w-2/3">
                    <span className="h1 display">
                        Go Big.<br />
                        Or Go Home.
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
                            <blockquote>
                                Utinam quidem dicerent alium alio beatiorem. Iam ruinas videres. Non autem hoc, igitur. Universa enim illorum ratione cum tota vestra confligendum puto.
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

        <Container>
            <div className="mt-32 pt-8 border-t-2 border-neutral-200 w-12"></div>
            <h2>Buttons &amp; Links</h2>
            <div className="mt-20 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Buttons and states</div>
                </div>
                <div className="">
                    <div className="grid grid-cols-2 gap-2">
                        <Button>Outline Button</Button>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                        <Button primary>Primary Button</Button>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                        <Button secondary>Secondary Button</Button>
                    </div>
                    <div className="mt-2">
                        <Button disabled>Disabled Button</Button>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex items-start">
                <div className="w-1/3">
                    <div className="h5">Links</div>
                </div>
                <div className="">
                    <div className="">
                        <LinkWithChevron href="#">Shop now</LinkWithChevron>
                    </div>
                    <div className="mt-6">
                        <LinkAsButton href="#">Shop now</LinkAsButton>
                    </div>
                </div>
            </div>
        </Container>
    </Layout>
}

export function getStaticProps() {
    return {
        props: {

        }
    }
}