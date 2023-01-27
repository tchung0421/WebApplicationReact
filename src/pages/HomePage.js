import { Footer } from "../Component/Footer";
import { HeadSection } from "../Component/HeadSection";
import { NavBar } from "../Component/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignUpSection } from "../Component/signUpSection1";
import { ClassTypeSection } from "../Component/ClassTypeSection";
import { SocialMediaSection } from "../Component/SocialMediaSection";
import { FundamentalsDetails } from "../Component/FundamentalsDetails";
import { LearnReactDetails } from "../Component/LearnReactDetails";
import { Question } from "../Component/Question";
import { Instructor } from "../Component/Instructor";
import { ContactInfo } from "../Component/ContactInfo";

export const Home = () => {

    const menuItems = [
        {text: "What You'll Learn", href:"/whatYouWill"},
        {text: "Question", href: "/question"},
        {text: "Instructor", href: "/instructor"},
        {text: "About Us", href: "/about"}
    ]

    return (
        <>
        <div>
            <NavBar items={menuItems}></NavBar>
            <HeadSection></HeadSection>
            <SignUpSection></SignUpSection>
            <ClassTypeSection></ClassTypeSection>
            <SocialMediaSection></SocialMediaSection>
            <FundamentalsDetails></FundamentalsDetails>
            <LearnReactDetails></LearnReactDetails>
            <Question></Question>
            <Instructor></Instructor>
            <ContactInfo></ContactInfo>
            <Footer></Footer>
        </div>
        </>
    );
};
