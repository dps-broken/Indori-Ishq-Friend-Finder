import React from "react";
import "./Boy.css";
import Card from "./Card";

function Boy() {
  const cardDatab = [    

    {
        image: "b1.jpg",
        age : 21,
        name: "Aarav Sharma",
        Description: "Hi there! I'm Ishaan Shah, an adventurous soul who loves exploring new places and trying new cuisines. When I'm not traveling, you can find me indulging in my passion for photography or enjoying a good book. Let's create some unforgettable memories together!",
      },
      {
        image: "b2.jpg",
        age :25,
        name:  "Vihaan Patel",
        Description: 
        "Passionate about exploring new horizons, I cherish meaningful connections and shared adventures. Balancing work with my love for outdoor escapades and quiet moments of introspection, I seek someone who values authenticity, humor, and mutual growth. Let's embark on an unforgettable journey together."
      },
      {
        image: "b3.jpg",
        age :22,
        name:  "Advik Singh",
        Description:
        "An avid traveler and lover of life's simple pleasures, I'm drawn to authenticity and genuine connections. Whether it's discovering hidden gems in the city or unwinding with a good book, I'm always up for new experiences. Let's create our own story filled with laughter, adventure, and endless possibilities."
      },
      {
        image: "b4.jpg",
        age :21,
        name:  "Aryan Gupta",
        Description:
        "Hey there! I'm all about embracing life's adventures and savoring every moment. Whether it's hiking through nature trails or cozying up with a movie, I'm up for it all. Let's explore the world together, one smile and one laugh at a time. Ready to join me on this journey?"
      },
      {
        image: "b5.jpg",
        age :21,
        name:  "Kabir Shah",
        Description:
        "Hello! I'm a free-spirited soul who values kindness, laughter, and meaningful connections. Whether it's trying out new recipes or stargazing under the night sky, I believe in making every moment count. Let's embark on a journey filled with joy, curiosity, and endless possibilities. Care to join me?"
      },
      {
        image: "b6.jpg",
        age :25,
        name:  "Rishi Shah",
        Description:"Hey! I'm someone who finds joy in the simple things - a good cup of coffee, a captivating book, or a stroll through nature's beauty. I'm on a quest to discover new experiences and create lasting memories. Let's share laughter, adventures, and genuine connections. Ready to explore together?"
      },
      {
        image: "b7.jpg",
        age :56,
        name: "Pranav Kumar",
        Description:
        "Hi there! I'm a down-to-earth individual who appreciates the beauty in everyday moments. Whether it's enjoying a scenic hike or immersing myself in a great conversation, I thrive on genuine connections and shared experiences. Let's embrace life's adventures together and create our own story. Care to join me?"
      },
      {
        image: "b8.jpg",
        age :27,
        name:  "Vedant Josh",
        Description:
        "Hello! I'm a seeker of laughter, adventure, and meaningful connections. With a passion for exploration and an open heart, I cherish the simple pleasures of life. Let's embark on a journey filled with spontaneity, laughter, and unforgettable moments. Ready to share in the excitement?"
      },
      {
        image: "b21.jpg",
        age :26,
        name:  "Sai Sharma",
        Description: "Hey there! I'm all about living life to the fullest and cherishing every moment. Whether it's savoring a delicious meal, discovering new music, or exploring new places, I'm up for the adventure. Let's create memories together and share in the joy of life's wonders. Ready to dive in?"
      },
      {
        image: "b9.jpg",
        age :21,
        name:  "Aarush Patel",
        Description:
        "Hi! I'm someone who believes in the magic of connection and the beauty of shared experiences. Whether it's a quiet night in or an exciting outdoor adventure, I'm always up for making memories. Let's explore life's wonders together and see where the journey takes us. Care to join me?"
      },
      {
        image: "b10.jpg",
        age :25,
        name:  "Nirav Gupta",
        Description:"Hey! I'm passionate about living life authentically and embracing all its adventures. Whether it's diving into a new hobby, exploring hidden gems in the city, or simply enjoying a meaningful conversation, I'm always up for new experiences. Let's create our own story filled with laughter, love, and unforgettable moments."
      },
      {
        image: "b11.jpg",
        age :23,
        name:  "Ishan Shah",
        Description:"Hello! I'm someone who thrives on genuine connections and meaningful conversations. Whether it's sharing laughs over coffee or exploring the great outdoors, I'm always up for an adventure. Let's embark on a journey together, where every moment is filled with joy, laughter, and endless possibilities. Ready to join me?"
         },
      {
        image: "b12.jpg",
        age :28,
        name:  "Arjun Kumar",
        Description:
        "Hey there! I'm a firm believer in living life to the fullest and cherishing every moment. Whether it's indulging in my love for food, immersing myself in nature, or exploring new cultures, I'm always up for an adventure. Let's create unforgettable memories together and embrace all that life has to offer. Care to join me?"
      },
      {
        image: "b13.jpg",
        age :29,
        name:  "Vihaan Joshi",
        Description:"Hey! I'm someone who finds joy in the little things and embraces life's adventures with an open heart. Whether it's enjoying a sunset stroll, trying out new recipes in the kitchen, or simply sharing stories over a cup of tea, I'm always up for a good time. Let's make memories together!"
      },
      {
        image: "b14.jpg",
        age :21,
        name:  "Rehan Sharma",
        Description:
        "Hi there! I'm a seeker of laughter, lover of spontaneity, and believer in the power of connection. Whether it's exploring new neighborhoods, attending live music events, or simply enjoying a cozy night in, I'm always up for an adventure. Let's embark on a journey filled with laughter, love, and endless possibilities. Join me?"
      },
      {
        image: "b15.jpg",
        age :25,
        name:  "Aaryan Patel",
        Description:
        "Hello! I'm someone who values authenticity, kindness, and shared experiences. Whether it's enjoying a hike in nature, trying out new cuisines, or simply cuddling up with a good movie, I'm all about making the most of life's moments. Let's create memories together and embark on an adventure of a lifetime. Ready to join me?"
      },
      {
        image: "b16.jpg",
        age :22,
        name:  "Vikash Singh",
        Description:
        "Hey there! I'm a lover of life's simple pleasures and a firm believer in the power of connection. Whether it's exploring new cultures, indulging in culinary delights, or sharing laughs over a game night, I'm always up for an adventure. Let's create unforgettable memories together and embrace the beauty of every moment."
      },
      {
        image: "b17.jpg",
        age :27,
        name:  "Devansh Gupta",
        Description:
        "Hey! I'm all about embracing the beauty of life's journey and cherishing every moment along the way. Whether it's immersing myself in nature, trying out new hobbies, or simply enjoying a quiet night in, I'm up for anything that brings joy and fulfillment. Let's explore life's wonders together and create lasting memories. Ready to join me?"
      },
      {
        image: "b18.jpg",
        age :26,
        name:  "Neel Sharma",
        Description:
        "Hi! I'm a firm believer in living life with passion and purpose, seeking out new adventures and experiences at every turn. Whether it's exploring hidden gems in the city, indulging in my love for music and art, or simply enjoying meaningful conversations, I'm always up for the ride. Let's embark on this journey together and create beautiful memories along the way."
      },
      {
        image: "b19.jpg",
        age :21,
        name:  "Parth Patel",
        Description:
        "Hello there! I'm someone who cherishes the simple joys in life and believes in making every moment count. Whether it's soaking in the beauty of nature, discovering new flavors in the kitchen, or sharing laughs with loved ones, I'm always up for an adventure. Let's create unforgettable memories together and embrace the magic of life. Care to join me?"
      },
      {
        image: "b20.jpg",
        age :22,
        name:  "Virat Gupta",
        Description:"Hey! I'm a firm believer in living life to the fullest and creating unforgettable memories along the way. Whether it's exploring new destinations, trying out new activities, or simply enjoying the company of good friends, I'm always up for an adventure. Let's make the most of every moment and embark on this journey together. Ready to join me?"
      },
   
  
    ];
  
  
  
    return( <div className = 'boy-parent-container'>        

    <Card name={cardDatab[0].name} image={cardDatab[0].image} description={cardDatab[0].Description} age={cardDatab[0].age}></Card>
    <Card name={cardDatab[1].name} image={cardDatab[1].image} description={cardDatab[1].Description} age={cardDatab[1].age}></Card>
    <Card name={cardDatab[2].name} image={cardDatab[2].image} description={cardDatab[2].Description} age={cardDatab[2].age}></Card>
    <Card name={cardDatab[3].name} image={cardDatab[3].image} description={cardDatab[3].Description} age={cardDatab[3].age}></Card>
    <Card name={cardDatab[4].name} image={cardDatab[4].image} description={cardDatab[4].Description} age={cardDatab[4].age}></Card>
    <Card name={cardDatab[5].name} image={cardDatab[5].image} description={cardDatab[5].Description} age={cardDatab[5].age}></Card>
    <Card name={cardDatab[6].name} image={cardDatab[6].image} description={cardDatab[6].Description} age={cardDatab[6].age}></Card>
    <Card name={cardDatab[7].name} image={cardDatab[7].image} description={cardDatab[7].Description} age={cardDatab[7].age}></Card>
    <Card name={cardDatab[8].name} image={cardDatab[8].image} description={cardDatab[8].Description} age={cardDatab[8].age}></Card>
    <Card name={cardDatab[9].name} image={cardDatab[9].image} description={cardDatab[9].Description} age={cardDatab[9].age}></Card>
    <Card name={cardDatab[10].name} image={cardDatab[10].image} description={cardDatab[10].Description} age={cardDatab[10].age}></Card>
    <Card name={cardDatab[11].name} image={cardDatab[11].image} description={cardDatab[11].Description} age={cardDatab[11].age}></Card>
    <Card name={cardDatab[12].name} image={cardDatab[12].image} description={cardDatab[12].Description} age={cardDatab[12].age}></Card>
    <Card name={cardDatab[13].name} image={cardDatab[13].image} description={cardDatab[13].Description} age={cardDatab[13].age}></Card>
    <Card name={cardDatab[14].name} image={cardDatab[14].image} description={cardDatab[14].Description} age={cardDatab[14].age}></Card>
    <Card name={cardDatab[15].name} image={cardDatab[15].image} description={cardDatab[15].Description} age={cardDatab[15].age}></Card>
    <Card name={cardDatab[16].name} image={cardDatab[16].image} description={cardDatab[16].Description} age={cardDatab[16].age}></Card>
    <Card name={cardDatab[17].name} image={cardDatab[17].image} description={cardDatab[17].Description} age={cardDatab[17].age}></Card>
    <Card name={cardDatab[18].name} image={cardDatab[18].image} description={cardDatab[18].Description} age={cardDatab[18].age}></Card>
    <Card name={cardDatab[19].name} image={cardDatab[19].image} description={cardDatab[19].Description} age={cardDatab[19].age}></Card>
    <Card name={cardDatab[20].name} image={cardDatab[20].image} description={cardDatab[20].Description} age={cardDatab[20].age}></Card>
    
    
   
  </div>

  )}

export default Boy;

  