import React from 'react'
import "../css/Hero.css"
import { Link } from 'react-router-dom'
import learn from "../assets/learn.jpg";
import practice from "../assets/practice.jpg";
const Hero = () => {
    return (
        <div>
            <div className="container mx-1 my-4">
                <h2>Namaste, Sarthak</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio eligendi perferendis excepturi ut aut similique dolores totam, fugit illum magni nulla eum iusto itaque corporis aliquam incidunt quas culpa hic.</p>
            </div>
            <div className="hcards">
                <div class="hcard shadow-lg p-4">
                    <img src={learn} class="hcard-img-top" alt="..."/>
                        <div class="hcard-body">
                            <h5 class="hcard-title">Learn</h5>
                            <p class="hcard-text">Some quick example text to build on the hcard title and make up the bulk of the hcard's content.</p>
                            <Link href="#" to="/hero/learn" class="btn btn-primary">Go somewhere</Link>
                        </div>
                </div>
                <div class="hcard hcard shadow-lg p-4">
                    <img src ={practice}  class="hcard-img-top" alt="..."/>
                        <div class="hcard-body">
                            <h5 class="hcard-title">Practice</h5>
                            <p class="hcard-text">Some quick example text to build on the hcard title and make up the bulk of the hcard's content.</p>
                            <Link href="#" to="/hero/practice" class="btn btn-primary">Go somewhere</Link>
                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hero