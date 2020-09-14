import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Card from '../components/cards'

const IndexPage = () => (
  <Layout>
    <div className="subscribe_section">
        <div className="subscribe_content">
          <h1>Join Boozephreaks and get these benefits</h1>
          <p>Boozephreaks subscribers get invitations to private events, special tastings, swag, guest lectures, and more!</p>
          <Link to="https://www.youtube.com/watch?v=r1eti-kMb7A">Subscribe</Link>
        </div>
    </div>
    <div className="hero"></div>
    <div className="event_section">
      <div className="event_content">
        <h1>Upcoming events</h1>
        <p>DISTILLERY TOURS • SPIRIT TASTINGS • COCKTAIL CLASSES​</p>
        <div className="CardGroup">
          <Card
          date="Saturday, August 15, 2020 at 7pm"
          title="Sommelier Wine SIPping (wine & snacks included)"
          text="Join Dr Inkwell and Sommelier Brian Cook to socialize and explore 4 delightful wines from Sonoma and Napa. Pickup/delivery available by 8/12"
          image={require('../images/amaroworksheet.jpg')} />
          <Card 
          date="Saturday, August 22, 2020 at 5pm"
          title="Very Fancy Cocktails (ingredients included!) & Very Fancy Meal"
          text="Join Dr Inkwell for an online class, where you'll learn to make three fancy cocktails with ingredients included for pickup or delivery!"
          image={require('../images/cocktails.jpg')} />
          <Link to="https://www.eventbrite.com/o/doctor-inkwell-11890984282">See more events</Link>
        </div>

        </div>
    </div>
    <div className="youtube_section">
      <div className="youtube_content">
        <h1>Check out Dr Inkwell's YouTube videos!</h1>
        <Link to="https://www.youtube.com/c/Boozephreaks/videos">See more videos on YouTube</Link>
      </div>
    </div>
    <div className="exploratorium_hero"></div>

    <div className="hire_section">
      <div className="hire_content">
        <h1>Hire spirits expert Dr Inkwell</h1>
        <p>Are you looking for a bourbon expert, a talk about the history of spirits, or an overview as to how gin is made? Look no further! Dr Inkwell is an expert in both locally made spirits and international brands. He's spoken at the Exploratorium's Science of Cocktails, many corporate events and countless private parties. Comfortable with a variety of subjects, Dr Inkwell include tasting demonstrations, cocktail-making classes or create something specific to fit your event.</p>
        <Link to="https://www.youtube.com/c/Boozephreaks/videos">Hire Dr Inkwell</Link>
      </div>
    </div>

    <div className="about_section">
      <div className="about_content">
        <h1>About Boozephreaks</h1>
        <p>Doctor Inkwell created Boozephreaks with Vitamin V. In 2006, he was curious about the differences between vodkas. After inviting 30 people to blind taste, rate and notate 30 vodkas, our good Doctor declared it to be the first Boozephreaks event. We've maintained that scientific curiosity and research-based approach since then. We currently have quarterly, monthly and weekly meetings to taste spirits, create cocktails, tour distilleries, invent new cocktail techniques and meet local bartenders. We're always looking to be social so sign up for our mailing list today!</p>
      </div>
    </div>

    <div className="about_hero"></div>

  </Layout>
)

export default IndexPage
