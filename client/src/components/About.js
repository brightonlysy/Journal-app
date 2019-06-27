import React from 'react'
// import '../css/about.css'

const About = () => {
    return(
        <div className='about-container'>
            <h1>Strauss "First-Ascent" Van Wagenen</h1>
            <div className='about-section'>
                <div className='section-image left=='>
                    {/* <img src= 'https://imgix.bustle.com/2017/4/27/c5576501-1a7a-43b8-b5e4-9f0aed1083e0.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70' alt='placeholder' /> */}
                </div>
                <div className='section-info'>
                    <h3>Start of "Little Straussy"</h3>
                    <p>As a wee lad, there was one thing that little Strauss enjoyed above all--climbing. A tree or a jungle gym became a challenge. He saw simple problems that had simple solutions. He made it his goal to find the most efficient way from point A on the ground to point B in the sky. </p>
                </div>
            </div>

        <div className='about-section reverse'>
            <div className='section-image second-image'>
                    {/* <img src='https://www.mayorsfundforlondon.org.uk/wp-content/uploads/2016/06/img-placeholder-square-300x300.jpg' alt='placeholder' /> */}
                </div>
                <div className='section-info'>
                    <h3>Strauss's Rise into Adulthood</h3>
                    <p>As the years went on Strauss continued to progress his skills as a climber. With experience climbing all over the Western United States, Strauss learned that with enough hard work and perseverance any problem could be solved.</p>
                </div>
            </div>

        <div className='about-section'>
            <div className='section-image other-image'>
                    {/* <img src='https://www.mayorsfundforlondon.org.uk/wp-content/uploads/2016/06/img-placeholder-square-300x300.jpg' alt='placeholder' /> */}
                </div>
                <div className='section-info'>
                    <h3>Reaching New Heights</h3>
                    <p>Starting in 2019 Strauss decided to grab a heel hook on his life and make a change for himself. He enrolled in the Full Stack JavaScript course at V School in Salt Lake City. His positive attitude kept everyone's spirits high, and his passion for overcoming obstacles carried him to new heights.</p>
                </div>
        </div>
    </div>
    )
}

export default About