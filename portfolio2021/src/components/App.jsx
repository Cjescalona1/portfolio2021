import useUpdatingClock from 'hooks/useUpdatingClock'

import Carou from './Carousel'


 
 


export default function App() {
  const {hour, minutes, seconds, amPm} = useUpdatingClock()

  return (
    <div className="container">
 
      <div className=" hero">
        <header>
          <h1 className="CE-font">
            Carlos Escalona
          </h1>
          <pre class=" DEV-font caret-bar">Desarrollador/Developer <span>&nbsp;</span>
          </pre> 
          
          <h2 className="intro">
            Hello world, I'm Carlos Escalona Venezuelan developer, frontend skilled, web developer and mobile enthusiast 
          </h2>
        </header> 
      </div> 
      
        <div> 
          <Carou/>
      </div>
    </div>
   
  )
}




/*
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
*/

/* <div className="df flex-col vh-100">
      <header className="pv24 bg-gold black-80 tc">
        <h1 className="mt0 mb0">Create New App</h1>
        <div>By The Qodesmith</div>
      </header>

      <section className="flex-grow-1 bg-black-80 fw4 white-80 tc pt24">
        <div>
          Your application starts in the{' '}
          <code>
            src/<span className="b white">entry.jsx</span>
          </code>{' '}
          file.
        </div>

        <div>
          The component you're looking here at can be found in{' '}
          <code>
            src/components/<span className="b white">App.jsx</span>
          </code>
        </div>

        <div>
          Now go! Save the world with <span className="gold">JavaScript</span>!
        </div>

        <div className="pa16 f-1-5em">
          {hour}:{minutes}:{seconds}
          <span className="f-initial pl4">{amPm}</span>
        </div>
      </section>
    </div> 
*/