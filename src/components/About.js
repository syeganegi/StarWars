import React from 'react';

const About = () => (
    <div>
        <h1>About</h1>
        <h3>Campaign Monitor - Javascript coding exercise (React)</h3>
        <h4>by: <a href="http://www.sasanyeganegi.com/p/about.html">Sasan Yeganegi</a></h4>
            <div>
                <p>
                    Using React, Redux and React-router you will create an application where people can rate their favourite Star Wars characters (to get the list we will use the <a href="https://swapi.co/api/people/?page=1">Star Wars API</a>)</p>
                <ul>
                    <li> The app will consist of a list view of characters, and a single view for character detail.</li>
                    <li> Each character component will allow you to up-vote or down-vote that character, it will display the votes that character has received and the overall percentage of votes compared against the total votes.</li>
                    <li> Users will have filtering options they will be able to filter by the character’s name in a search box. (such as ‘darth’ will show only characters with darth in the name).</li>
                    <li> These characters will be ordered by the popularity of their votes and will show the character’s name, and planet of their origin (and optionally provide a picture for the character).</li>
                    <li> Users will be able to click on a character and see a detail view of that character which will display all of the detail provided for that character.</li>
                    <li> In the detail view, users will be able to write a simple comment which will be displayed only in the detail view.</li>
                </ul>
            </div>
    </div>
        );

export default About;