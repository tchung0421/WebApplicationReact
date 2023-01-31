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
import { useState, useEffect } from "react";
import LoadingSpinner from "../Component/Spinner";

export const Home = () => {

    const baseUrl = "http://localhost:8080";
    const [menuItems, setMenuItems] = useState();
    let menuItemsT = []

    useEffect(() => {
        async function getMenus() {
            try {
                const response = await fetch("http://localhost:8080/uisettings/menus")
                let json = response.json()
                json.then(data => {
                    setMenuItems(data)
                    console.log("All Data ", menuItems)
                })
            } catch (error) {
                setMenuItems([
                    { text: "Home", href: "/" },
                    { text: "Contact", href: "/bootcamps" },
                    { text: "Abou Us", href: "/about" },
                    { text: "Bootcamps", href: "/bootcamps" },
                ])
            }
        }
        getMenus() // IIF
    }, [])

    // const menuItems=[
    //     {text:"What You'll Learn",href:"/whatYouWill"},
    //     {text:"Home", href:"/home"},
    //     {text:"Contact",href:"/contact"},
    //     {text:"Abou Us",href:"/about"}, 
    // ]

    const items = [
        { header: "React Js", body: "React Js  A common task for a web server can be to open a file on the server and return the content to the client. Here is how PHP or ASP handles a file request: Sends the task to the computer's file system. Waits while the file system opens and reads the file. Returns the content to the client. Ready to handle the next request. Here is how Node.js handles a file request: Sends the task to the computer's file system. Ready to handle the next request.When the file system has opened and read the file, the server returns the content to the client. Node.js eliminates  The waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient." },
        { header: "Java", body: " Java A common task for a web server can be to open a file on the server and return the content to the client. Here is how PHP or ASP handles a file request: Sends the task to the computer's file system. Waits while the file system opens and reads the file. Returns the content to the client. Ready to handle the next request. Here is how Node.js handles a file request: Sends the task to the computer's file system. Ready to handle the next request.When the file system has opened and read the file, the server returns the content to the client. Node.js eliminates  The waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient." },
        { header: "Vanilla Js", body: " Vanilla   A common task for a web server can be to open a file on the server and return the content to the client. Here is how PHP or ASP handles a file request: Sends the task to the computer's file system. Waits while the file system opens and reads the file. Returns the content to the client. Ready to handle the next request. Here is how Node.js handles a file request: Sends the task to the computer's file system. Ready to handle the next request.When the file system has opened and read the file, the server returns the content to the client. Node.js eliminates  The waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient." },
        { header: "Node Js", body: "Nonde Js A common task for a web server can be to open a file on the server and return the content to the client. Here is how PHP or ASP handles a file request: Sends the task to the computer's file system. Waits while the file system opens and reads the file. Returns the content to the client. Ready to handle the next request. Here is how Node.js handles a file request: Sends the task to the computer's file system. Ready to handle the next request.When the file system has opened and read the file, the server returns the content to the client. Node.js eliminates  The waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient." },
        { header: "Express", body: " Express JS Java A common task for a web server can be to open a file on the server and return the content to the client. Here is how PHP or ASP handles a file request: Sends the task to the computer's file system. Waits while the file system opens and reads the file. Returns the content to the client. Ready to handle the next request. Here is how Node.js handles a file request: Sends the task to the computer's file system. Ready to handle the next request.When the file system has opened and read the file, the server returns the content to the client. Node.js eliminates  The waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient." }
    ]

    const itemEvent = (e) => {
        alert(e.target.id + "Was clicked");
    }

    /* 
        const instructors=[
            {profile:"",name:""}
        ] */

    if (!menuItems) return <div> <LoadingSpinner></LoadingSpinner> </div>

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
            <Question items={items} itemEvent={itemEvent}></Question>
            <Instructor></Instructor>
            <ContactInfo></ContactInfo>
            <Footer></Footer>
            </div>
        </>
    )
}