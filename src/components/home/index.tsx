import Header from './header';
import Cases from './cases';
import Partners from './partners';
import Contact from './contact';

const Home = ({ casesList, partnersList }: any) => (
    <>
        <Header />
        <Cases cases={casesList} />
        <Partners partnersList={partnersList} />
        <Contact />
    </>
);

export default Home;
