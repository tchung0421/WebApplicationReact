import { useState } from "react"

import '../style/bootcampstyles.css'

const BootcampData=(props)=>{

    const [bootcampDetails,setBootcampDetails] = useState(props)

    return(
        <>
        <div class="container">
        <img style={{"height":"500px","width":"100%"}} className="image centered " src={props.data.image}></img>
            <div className="" class="row ">
           
                <div class="col-lg-8">
                    <div class="content text-start">
                   
                        <ul class="page-list">
                            <li class="rbt-breadcrumb-item"><a href="index.html">Home</a></li>
                            <li>
                                <div class="icon-right"><i class="feather-chevron-right"></i></div>
                            </li>
                            <li class="rbt-breadcrumb-item active">Web Development</li>
                        </ul>
                        <h2 class="title">The Complete Histudy 2022: From Zero to Expert!</h2>
                        <p class="description">Master Python by building 100 projects in 100 days. Learn data
                            science, automation, build websites, games and apps!</p>

                        <div class="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">

                            <div class="feature-sin best-seller-badge">
                                <span class="rbt-badge-2">
                                    <span class="image"><img src="assets/images/icons/card-icon-1.png" alt="Best Seller Icon"></img></span> Bestseller
                                </span>
                            </div>

                            <div class="feature-sin rating">
                                <a href="#">4.8</a>
                                <a href="#"><i class="fa fa-star"></i></a>
                                <a href="#"><i class="fa fa-star"></i></a>
                                <a href="#"><i class="fa fa-star"></i></a>
                                <a href="#"><i class="fa fa-star"></i></a>
                                <a href="#"><i class="fa fa-star"></i></a>
                            </div>

                            <div class="feature-sin total-rating">
                                <a class="rbt-badge-4" href="#">215,475 rating</a>
                            </div>

                            <div class="feature-sin total-student">
                                <span>616,029 students</span>
                            </div>

                        </div>

                        <div class="rbt-author-meta mb--20">
                            <div class="rbt-avater">
                                <a href="#">
                                    <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes"></img>
                                </a>
                            </div>
                            <div class="rbt-author-info">
                                By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                            </div>
                        </div>

                        <ul class="rbt-meta">
                            <li><i class="feather-calendar"></i>Last updated 12/2024</li>
                            <li><i class="feather-globe"></i>English</li>
                            <li><i class="feather-award"></i>Certified Course</li>
                        </ul>

                    </div>
                
                </div>
            </div>
        </div>
        </>
    )
}


export {BootcampData}