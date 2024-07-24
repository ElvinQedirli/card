import React from 'react'
import '../assets/style/components/section.css'
import Card from './Card'

export default function Section() {
  return (
    <section id='section'>
        <h2>Product card carousel</h2>
        <div className="container">
            <Card cardName={'Card 1'} cardContent={'card 1 content'} img={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'}/>

            <Card cardName={'Card 2'} cardContent={'card 2 content'} img={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'}/>

            <Card cardName={'Card 3'} cardContent={'card 3 content'} img={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'}/>

            <Card cardName={'Card 4'} cardContent={'card 4 content'} img={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'}/>

            <Card cardName={'Card 5'} cardContent={'card 5 content'} img={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'}/>

            <Card cardName={'Card 6'} cardContent={'card 6 content'} img={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'}/>

            <Card cardName={'Card 7'} cardContent={'card 7 content'} img={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'}/>

            <Card cardName={'Card 8'} cardContent={'card 8 content'} img={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'}/>

            <Card cardName={'Card 9'} cardContent={'card 9 content'} img={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'}/>
        </div>
    </section>
  )
}
