import React from "react";
import "./Girl.css";
import Card from "./Card";

function Girl() {
  const cardData = [
    {
      image: "1.jpg",
      name: "Saumya Jain",
      Description:
        " Adventure seeker, nature lover, and avid reader. Passionate about exploring new cultures and cuisines. Enthusiastic about fitness and wellness. Seeking meaningful connections built on laughter, shared interests, and genuine conversations. Let's embark on adventures together and create unforgettable memories.",
      age: 21,
    },
    {
      image: "2.jpg",
      name: "Ishani Singh",
      Description:
        " Dreamer, artist, and hopeless romantic. Fueled by creativity and curiosity, I find joy in the simple moments of life. Lover of good music, great food, and deep conversations. Seeking someone to share laughter, love, and endless adventures with. Let's write our own love story together.",
      age: 24,
    },
    {
      image: "3.jpg",
      name: "Swara Mishra",
      Description:
        "Free spirit with a zest for life. Avid traveler, foodie, and dog lover. Passionate about photography and finding beauty in everyday moments. Seeking a kindred spirit to explore the world with, share laughs, and create cherished memories. Let's embark on a journey of love and discovery together.",
      age: 26,
    },
    {
      image: "4.jpg",
      name: "Tanvi Malhotra",
      Description:
        "Adventurous soul with a love for spontaneity. Enthusiastic about exploring new cultures, trying exotic cuisines, and immersing in nature. Passionate about fitness and self-growth. Seeking a genuine connection with someone who shares my zest for life and values meaningful conversations. Let's embark on an unforgettable journey together.",
      age: 22,
    },
    {
      image: "5.jpg",
      name: "Ananya Gupta",
      Description:
        "Vibrant spirit with a passion for adventure and laughter. Embracing each day with a positive outlook, I find joy in simple pleasures, from sunset strolls to cozy nights in. Seeking a kind-hearted soul to share smiles, deep conversations, and endless adventures. Let's paint the town with our love story.",
      age: 21,
    },
    {
      image: "6.jpg",
      name: "Avani Kapoor",
      Description:
        "A blend of wanderlust and homebody charm. Find me exploring the outdoors or curled up with a good book. Lover of deep conversations, good coffee, and spontaneous adventures. Seeking someone to share laughs, explore new horizons, and build a meaningful connection. Let's write our own love story, one chapter at a time.",
      age: 23,
    },
    {
      image: "7.jpg",
      name: "Sia Malhotra",
      Description:
        " A seeker of magic in everyday moments. Whether it's chasing sunsets or discovering hidden gems in the city, I thrive on adventure and connection. With a heart full of wanderlust and a spirit eager for new experiences, I'm seeking someone to share laughter, love, and life's adventures with.",
      age: 24,
    },
    {
      image: "8.jpg",
      name: "Aanya Joshi",
      Description:
        "A soulful explorer with a love for life's mysteries. Passionate about art, culture, and the beauty of nature. Seeking a partner to share in the wonders of the world, from starlit nights to quiet mornings. Let's embark on a journey of discovery and create our own masterpiece together.",
      age: 25,
    },
    {
      image: "9.jpg",
      name: "Avni Verma",
      Description:
        "A curious spirit with a penchant for laughter and love. From spontaneous road trips to cozy nights in, I cherish both adventure and quiet moments. Seeking a companion to share in life's joys, build dreams, and create lasting memories. Let's write our own story filled with love and laughter.",
      age: 23,
    },
    {
      image: "10.jpg",
      name: "Mahika Kapoor",
      Description:
        " A seeker of genuine connections and shared adventures. Lover of nature, music, and meaningful conversations. Finding joy in both the simplicity of everyday life and the thrill of new experiences. Seeking someone to laugh with, explore with, and build a beautiful journey of love together. Let's create magic.",
      age: 21,
    },
    {
      image: "11.jpg",
      name: "Myra Verma",
      Description:
        "An adventurous soul with a passion for laughter and deep conversations. Enthusiastic about exploring new places, trying exotic cuisines, and making memories. Seeking a partner to share in life's adventures, embrace spontaneity, and build a connection rooted in mutual respect and love. Let's embark on this journey together.",
      age: 26,
    },
    {
      image: "12.jpg",
      name: "Siya Kapoor",
      Description:
        "A joyful wanderer with a heart full of dreams. Finding beauty in simple pleasures and excitement in new experiences. Lover of good company, great food, and meaningful connections. Seeking someone to share laughter, explore the world, and build a future filled with love and adventure. Let's write our own love story.",
      age: 25,
    },
    {
      image: "13.jpg",
      name: "Surbhi Jain",
      Description:
        " Adventure seeker, nature lover, and avid reader. Passionate about exploring new cultures and cuisines. Enthusiastic about fitness and wellness. Seeking meaningful connections built on laughter, shared interests, and genuine conversations. Let's embark on adventures together and create unforgettable memories.",
      age: 21,
    },
    {
      image: "14.jpg",
      name: "Priya Singh",
      Description:
        " Dreamer, artist, and hopeless romantic. Fueled by creativity and curiosity, I find joy in the simple moments of life. Lover of good music, great food, and deep conversations. Seeking someone to share laughter, love, and endless adventures with. Let's write our own love story together.",
      age: 24,
    },
    {
      image: "15.jpg",
      name: "Geetika Mishra",
      Description:
        "Free spirit with a zest for life. Avid traveler, foodie, and dog lover. Passionate about photography and finding beauty in everyday moments. Seeking a kindred spirit to explore the world with, share laughs, and create cherished memories. Let's embark on a journey of love and discovery together.",
      age: 26,
    },
    {
      image: "16.jpg",
      name: "Soniya Singh",
      Description:
        "Adventurous soul with a love for spontaneity. Enthusiastic about exploring new cultures, trying exotic cuisines, and immersing in nature. Passionate about fitness and self-growth. Seeking a genuine connection with someone who shares my zest for life and values meaningful conversations. Let's embark on an unforgettable journey together.",
      age: 22,
    },
    {
      image: "17.jpg",
      name: "Shruti Gupta",
      Description:
        "Vibrant spirit with a passion for adventure and laughter. Embracing each day with a positive outlook, I find joy in simple pleasures, from sunset strolls to cozy nights in. Seeking a kind-hearted soul to share smiles, deep conversations, and endless adventures. Let's paint the town with our love story.",
      age: 21,
    },
    {
      image: "18.jpg",
      name: "Naina Kapoor",
      Description:
        "A blend of wanderlust and homebody charm. Find me exploring the outdoors or curled up with a good book. Lover of deep conversations, good coffee, and spontaneous adventures. Seeking someone to share laughs, explore new horizons, and build a meaningful connection. Let's write our own love story, one chapter at a time.",
      age: 23,
    },
    {
      image: "19.jpg",
      name: "Sita Malhotra",
      Description:
        " A seeker of magic in everyday moments. Whether it's chasing sunsets or discovering hidden gems in the city, I thrive on adventure and connection. With a heart full of wanderlust and a spirit eager for new experiences, I'm seeking someone to share laughter, love, and life's adventures with.",
      age: 24,
    },
    {
      image: "20.jpg",
      name: "Anjali Joshi",
      Description:
        "A soulful explorer with a love for life's mysteries. Passionate about art, culture, and the beauty of nature. Seeking a partner to share in the wonders of the world, from starlit nights to quiet mornings. Let's embark on a journey of discovery and create our own masterpiece together.",
      age: 25,
    },
    {
      image: "21.jpg",
      name: "Radhika Verma",
      Description:
        "A curious spirit with a penchant for laughter and love. From spontaneous road trips to cozy nights in, I cherish both adventure and quiet moments. Seeking a companion to share in life's joys, build dreams, and create lasting memories. Let's write our own story filled with love and laughter.",
      age: 23,
    },
  ];


  
  return( <div className = 'girl-parent-container'>



    <Card name={cardData[0].name} image={cardData[0].image} description={cardData[0].Description} age={cardData[0].age}></Card>
    <Card name={cardData[1].name} image={cardData[1].image} description={cardData[1].Description} age={cardData[1].age}></Card>
    <Card name={cardData[2].name} image={cardData[2].image} description={cardData[2].Description} age={cardData[2].age}></Card>
    <Card name={cardData[3].name} image={cardData[3].image} description={cardData[3].Description} age={cardData[3].age}></Card>
    <Card name={cardData[4].name} image={cardData[4].image} description={cardData[4].Description} age={cardData[4].age}></Card>
    <Card name={cardData[5].name} image={cardData[5].image} description={cardData[5].Description} age={cardData[5].age}></Card>
    <Card name={cardData[6].name} image={cardData[6].image} description={cardData[6].Description} age={cardData[6].age}></Card>
    <Card name={cardData[7].name} image={cardData[7].image} description={cardData[7].Description} age={cardData[7].age}></Card>
    <Card name={cardData[8].name} image={cardData[8].image} description={cardData[8].Description} age={cardData[8].age}></Card>
    <Card name={cardData[9].name} image={cardData[9].image} description={cardData[9].Description} age={cardData[9].age}></Card>
    <Card name={cardData[10].name} image={cardData[10].image} description={cardData[10].Description} age={cardData[10].age}></Card>
    <Card name={cardData[11].name} image={cardData[11].image} description={cardData[11].Description} age={cardData[11].age}></Card>
    <Card name={cardData[12].name} image={cardData[12].image} description={cardData[12].Description} age={cardData[12].age}></Card>
    <Card name={cardData[13].name} image={cardData[13].image} description={cardData[13].Description} age={cardData[13].age}></Card>
    <Card name={cardData[14].name} image={cardData[14].image} description={cardData[14].Description} age={cardData[14].age}></Card>
    <Card name={cardData[15].name} image={cardData[15].image} description={cardData[15].Description} age={cardData[15].age}></Card>
    <Card name={cardData[16].name} image={cardData[16].image} description={cardData[16].Description} age={cardData[16].age}></Card>
    <Card name={cardData[17].name} image={cardData[17].image} description={cardData[17].Description} age={cardData[17].age}></Card>
    <Card name={cardData[18].name} image={cardData[18].image} description={cardData[18].Description} age={cardData[18].age}></Card>
    <Card name={cardData[19].name} image={cardData[19].image} description={cardData[19].Description} age={cardData[19].age}></Card>
    <Card name={cardData[20].name} image={cardData[20].image} description={cardData[20].Description} age={cardData[20].age}></Card>
     
  </div>

)}

export default Girl;
