import React from "react";
import { useParams } from "react-router-dom";


 
    const blogs = [ { id: 19, title: "Wanderlust Diaries", content: `Wanderlust Diaries embodies the essence of travel and exploration, where every journey is a story of adventure, discovery, and personal growth. This concept is rooted in the idea that travel is not just about reaching destinations but about the experiences and memories created along the way.

At its core, Wanderlust Diaries is about savoring the moment. Travelers like Alex, who dream of visiting every corner of the globe, use blogs to chronicle their adventures, from hiking through lush rainforests to savoring street food in bustling markets. Through these stories, readers are invited to join the journey and experience the wonders of the world through the traveler's eyes.

The Middle Ages saw a focus on traditional travel routes, but modern travel has evolved to incorporate diverse experiences and reflections. Tools like the Wanderlust Passport help travelers document their journeys, capturing memories and experiences in a creative and organized way. This journal encourages mindful travel by allowing travelers to reflect on their adventures and transform them into meaningful stories.

Beyond its practical aspects, Wanderlust Diaries is also a powerful medium for self-expression and cultural identity. Throughout history, travelers have used their journeys to convey their thoughts, emotions, and experiences, often reflecting the societal norms and values of their time. For instance, initiatives like TrailblazeHer by Wanderlust Diaries aim to amplify the voices of female travelers, celebrating their strength and diversity.

Moreover, Wanderlust Diaries serves as a bridge between cultures, allowing us to learn about and appreciate different lifestyles and histories. Iconic travel stories are not just celebrated for their adventure but also for the cultural insights they provide. Travel blogs and journals around the world are filled with stories that serve as ambassadors of their respective cultures, fostering understanding and empathy among diverse communities.

In addition to its cultural significance, travel also offers personal growth benefits. The process of exploring new places can be transformative, providing a sense of fulfillment and self-discovery. Many people find solace in the act of traveling, whether as a hobby or a lifestyle, as it allows them to express themselves in ways that words cannot.

In conclusion, Wanderlust Diaries is a rich tapestry of creativity, culture, and expression that has been woven over time. From its earliest beginnings to its modern manifestations, travel storytelling continues to inspire, educate, and connect people across the globe. Whether viewed as a form of storytelling, self-expression, or cultural ambassadorship, Wanderlust Diaries remains an indispensable part of human society, offering a unique window into our past, present, and future.` },
            { id: 20, title: "The Roaming Spirit", content: `The Roaming Spirit embodies the essence of travel and exploration, where every journey is a story of adventure, discovery, and personal growth. This concept is rooted in the idea that travel is not just about reaching destinations but about the experiences and memories created along the way.

At its core, The Roaming Spirit is about embracing the thrill of the unknown. Travelers like those featured on "The Roaming Shoes" blog seek out experiences off the beaten path, away from typical tourist attractions, often discovering hidden gems through local recommendations. Through these stories, readers are invited to join the journey and experience the wonders of the world through the traveler's eyes.

The Middle Ages saw a focus on traditional travel routes, but modern travel has evolved to incorporate diverse experiences and reflections. Tools like travel blogs and social media platforms allow travelers to document their journeys, capturing memories and experiences in a creative and organized way. This documentation encourages mindful travel by allowing travelers to reflect on their adventures and transform them into meaningful stories.

Beyond its practical aspects, The Roaming Spirit is also a powerful medium for self-expression and cultural identity. Throughout history, travelers have used their journeys to convey their thoughts, emotions, and experiences, often reflecting the societal norms and values of their time. For instance, initiatives like "My Roaming Spirit" on Instagram showcase how travel can be a form of personal expression, celebrating freedom and exploration.

Moreover, The Roaming Spirit serves as a bridge between cultures, allowing us to learn about and appreciate different lifestyles and histories. Iconic travel stories are not just celebrated for their adventure but also for the cultural insights they provide. Travel blogs and journals around the world are filled with stories that serve as ambassadors of their respective cultures, fostering understanding and empathy among diverse communities.

In addition to its cultural significance, travel also offers personal growth benefits. The process of exploring new places can be transformative, providing a sense of fulfillment and self-discovery. Many people find solace in the act of traveling, whether as a hobby or a lifestyle, as it allows them to express themselves in ways that words cannot.

In conclusion, The Roaming Spirit is a rich tapestry of creativity, culture, and expression that has been woven over time. From its earliest beginnings to its modern manifestations, travel storytelling continues to inspire, educate, and connect people across the globe. Whether viewed as a form of storytelling, self-expression, or cultural ambassadorship, The Roaming Spirit remains an indispensable part of human society, offering a unique window into our past, present, and future.` },
            { id: 21, title: "Globetrotter’s Journal", content: `Globetrotter’s Journal embodies the essence of travel and exploration, where every journey is a story of adventure, discovery, and personal growth. This concept is rooted in the idea that travel is not just about reaching destinations but about the experiences and memories created along the way.

At its core, Globetrotter’s Journal is about savoring the moment. Travelers like those featured on "Travel Hippies" and "Global Gallivanting" share their real experiences at wonderful places, from the tranquility of Orchha to the vibrant streets of India. These stories invite readers to join the journey and experience the wonders of the world through the traveler's eyes.

The Middle Ages saw a focus on traditional travel routes, but modern travel has evolved to incorporate diverse experiences and reflections. Tools like travel blogs and social media platforms allow travelers to document their journeys, capturing memories and experiences in a creative and organized way. This documentation encourages mindful travel by allowing travelers to reflect on their adventures and transform them into meaningful stories.

Beyond its practical aspects, Globetrotter’s Journal is also a powerful medium for self-expression and cultural identity. Throughout history, travelers have used their journeys to convey their thoughts, emotions, and experiences, often reflecting the societal norms and values of their time. For instance, stories about solo travel in India highlight the challenges and triumphs faced by travelers, showcasing resilience and adaptability.

Moreover, Globetrotter’s Journal serves as a bridge between cultures, allowing us to learn about and appreciate different lifestyles and histories. Iconic travel stories are not just celebrated for their adventure but also for the cultural insights they provide. Travel blogs and journals around the world are filled with stories that serve as ambassadors of their respective cultures, fostering understanding and empathy among diverse communities.

In addition to its cultural significance, travel also offers personal growth benefits. The process of exploring new places can be transformative, providing a sense of fulfillment and self-discovery. Many people find solace in the act of traveling, whether as a hobby or a lifestyle, as it allows them to express themselves in ways that words cannot.

In conclusion, Globetrotter’s Journal is a rich tapestry of creativity, culture, and expression that has been woven over time. From its earliest beginnings to its modern manifestations, travel storytelling continues to inspire, educate, and connect people across the globe. Whether viewed as a form of storytelling, self-expression, or cultural ambassadorship, Globetrotter’s Journal remains an indispensable part of human society, offering a unique window into our past, present, and future.` },
            { id: 22, title: "Miles & Memories ", content: `Miles & Memories embodies the essence of travel as a transformative experience, where every journey is crafted to create lasting memories. This concept is rooted in the idea that travel is not just about visiting new places but about crafting experiences that etch unforgettable moments into one's life.

At its core, Miles & Memories is about personalizing travel experiences. The company specializes in curating bespoke itineraries that cater to each traveler's unique preferences, dreams, and aspirations. Whether it's a leisurely beach retreat, a thrilling adventure in the mountains, or a culturally immersive experience, Miles & Memories ensures that every step of the journey is tailored to the traveler's tastes.

The Middle Ages saw a focus on traditional travel routes, but modern travel has evolved to incorporate diverse experiences and reflections. Travel agencies like Miles & Memories offer expert guidance and insider tips to make journeys seamless and stress-free. From suggesting hidden gems to arranging authentic local encounters, their travel advisors ensure that trips are enriching and unforgettable.

Beyond its practical aspects, Miles & Memories is also a powerful medium for self-expression and cultural identity. Travelers like Ralu, who document their adventures as digital nomads, use their journeys to convey their thoughts, emotions, and experiences, often reflecting the societal norms and values of their time. For instance, stories about solo travel highlight the challenges and triumphs faced by travelers, showcasing resilience and adaptability.

Moreover, Miles & Memories serves as a bridge between cultures, allowing us to learn about and appreciate different lifestyles and histories. Iconic travel stories are not just celebrated for their adventure but also for the cultural insights they provide. Travel blogs and journals around the world are filled with stories that serve as ambassadors of their respective cultures, fostering understanding and empathy among diverse communities.

In addition to its cultural significance, travel also offers personal growth benefits. The process of exploring new places can be transformative, providing a sense of fulfillment and self-discovery. Many people find solace in the act of traveling, whether as a hobby or a lifestyle, as it allows them to express themselves in ways that words cannot.

In conclusion, Miles & Memories is a rich tapestry of creativity, culture, and expression that has been woven over time. From its earliest beginnings to its modern manifestations, travel storytelling continues to inspire, educate, and connect people across the globe. Whether viewed as a form of storytelling, self-expression, or cultural ambassadorship, Miles & Memories remains an indispensable part of human society, offering a unique window into our past, present, and future.` },
            { id: 23, title: "Nomadic Trails", content: `Nomadic Trails embodies the spirit of adventure and exploration, guiding travelers to offbeat destinations and hidden gems around the world. This concept is rooted in the idea that travel is not just about reaching popular spots but about discovering unique experiences and creating lasting memories.

At its core, Nomadic Trails is about embracing the thrill of the unknown. Travelers are encouraged to venture off the beaten path, exploring secluded valleys like Gushaini in Himachal Pradesh, known for its trout fishing and camping opportunities. Similarly, destinations like Tabo, with its ancient monastery, offer a glimpse into rich cultural heritage.

The Middle Ages saw a focus on traditional travel routes, but modern travel has evolved to incorporate diverse experiences and reflections. Companies like Nomadic Trails offer customized tours that cater to individual preferences, allowing travelers to explore breathtaking landscapes and immerse themselves in local cultures. For instance, their Spiti tour packages provide an immersive experience in the Himalayas, combining adventure with cultural exploration.

Beyond its practical aspects, Nomadic Trails is also a powerful medium for self-expression and cultural identity. Throughout history, travelers have used their journeys to convey their thoughts, emotions, and experiences, often reflecting the societal norms and values of their time. For example, stories about solo travel highlight the challenges and triumphs faced by travelers, showcasing resilience and adaptability.

Moreover, Nomadic Trails serves as a bridge between cultures, allowing us to learn about and appreciate different lifestyles and histories. Iconic travel stories are not just celebrated for their adventure but also for the cultural insights they provide. Travel blogs and journals around the world are filled with stories that serve as ambassadors of their respective cultures, fostering understanding and empathy among diverse communities.

In addition to its cultural significance, travel also offers personal growth benefits. The process of exploring new places can be transformative, providing a sense of fulfillment and self-discovery. Many people find solace in the act of traveling, whether as a hobby or a lifestyle, as it allows them to express themselves in ways that words cannot.

In conclusion, Nomadic Trails is a rich tapestry of creativity, culture, and expression that has been woven over time. From its earliest beginnings to its modern manifestations, travel storytelling continues to inspire, educate, and connect people across the globe. Whether viewed as a form of storytelling, self-expression, or cultural ambassadorship, Nomadic Trails remains an indispensable part of human society, offering a unique window into our past, present, and future`},
            { id: 24, title: "Beyond Borders", content: `Beyond Borders embodies the spirit of adventure and exploration, where every journey is a story of discovery, connection, and personal growth. This concept is rooted in the idea that travel is not just about reaching destinations but about crafting experiences that transcend borders and cultures.

At its core, Beyond Borders is about embracing the thrill of the unknown. Travelers like those in the Beyond Borders Ladies Travel Club seek out experiences that bring together diverse backgrounds and cultures, fostering a sense of community and shared adventure. Whether exploring the ancient ruins of Angkor Wat or cruising along the Nile, each journey is a testament to the power of travel to unite and inspire.

The Middle Ages saw a focus on traditional travel routes, but modern travel has evolved to incorporate diverse experiences and reflections. Anthologies like Across and Beyond edited by Nishi Pulugurtha showcase how travel writing is not just about places but about people, cultures, and the memories they create. These stories highlight how travel can be a journey of self-discovery, where the familiar and unfamiliar blend to create new perspectives.

Beyond its practical aspects, Beyond Borders is also a powerful medium for self-expression and cultural identity. Throughout history, travelers have used their journeys to convey their thoughts, emotions, and experiences, often reflecting the societal norms and values of their time. For instance, stories about solo travel highlight the challenges and triumphs faced by travelers, showcasing resilience and adaptability.

Moreover, Beyond Borders serves as a bridge between cultures, allowing us to learn about and appreciate different lifestyles and histories. Iconic travel stories are not just celebrated for their adventure but also for the cultural insights they provide. Travel blogs and journals around the world are filled with stories that serve as ambassadors of their respective cultures, fostering understanding and empathy among diverse communities.

In addition to its cultural significance, travel also offers personal growth benefits. The process of exploring new places can be transformative, providing a sense of fulfillment and self-discovery. Many people find solace in the act of traveling, whether as a hobby or a lifestyle, as it allows them to express themselves in ways that words cannot.

In conclusion, Beyond Borders is a rich tapestry of creativity, culture, and expression that has been woven over time. From its earliest beginnings to its modern manifestations, travel storytelling continues to inspire, educate, and connect people across the globe. Whether viewed as a form of storytelling, self-expression, or cultural ambassadorship, Beyond Borders remains an indispensable part of human society, offering a unique window into our past, present, and future.

` },
            { id: 25, title: "The Curious Compass", content: `The Curious Compass embodies the spirit of adventure and exploration, guiding travelers through new cultures and destinations with a sense of curiosity and wonder. This concept is rooted in the idea that travel is not just about reaching places but about immersing oneself in the stories, traditions, and landscapes of different worlds.

At its core, The Curious Compass is about embracing the thrill of discovery. Travelers are encouraged to venture beyond familiar horizons, exploring hidden gems like Paros in Greece or the vibrant city of Abu Dhabi, which often lie in the shadow of more popular destinations. Through these journeys, travelers are invited to experience the authentic essence of each place, from the pastel-colored houses of Paros to the majestic skyscrapers of Abu Dhabi.

The Middle Ages saw a focus on traditional travel routes, but modern travel has evolved to incorporate diverse experiences and reflections. Blogs like Curious Compass offer captivating stories, travel tips, and cultural insights, fueling the passion for exploration and inspiring future journeys. These stories highlight how travel can be a journey of self-discovery, where the familiar and unfamiliar blend to create new perspectives.

Beyond its practical aspects, The Curious Compass is also a powerful medium for self-expression and cultural identity. Throughout history, travelers have used their journeys to convey their thoughts, emotions, and experiences, often reflecting the societal norms and values of their time. For instance, stories about solo travel highlight the challenges and triumphs faced by travelers, showcasing resilience and adaptability.

Moreover, The Curious Compass serves as a bridge between cultures, allowing us to learn about and appreciate different lifestyles and histories. Iconic travel stories are not just celebrated for their adventure but also for the cultural insights they provide. Travel blogs and journals around the world are filled with stories that serve as ambassadors of their respective cultures, fostering understanding and empathy among diverse communities.

In addition to its cultural significance, travel also offers personal growth benefits. The process of exploring new places can be transformative, providing a sense of fulfillment and self-discovery. Many people find solace in the act of traveling, whether as a hobby or a lifestyle, as it allows them to express themselves in ways that words cannot.

In conclusion, The Curious Compass is a rich tapestry of creativity, culture, and expression that has been woven over time. From its earliest beginnings to its modern manifestations, travel storytelling continues to inspire, educate, and connect people across the globe. Whether viewed as a form of storytelling, self-expression, or cultural ambassadorship, The Curious Compass remains an indispensable part of human society, offering a unique window into our past, present, and future.` },
            { id: 26, title: "Lost & Loving It", content: `Lost & Loving It embodies the essence of travel as an adventure of discovery and self-expression, where getting lost in new places is not just a mishap but a cherished experience. This concept is rooted in the idea that travel is not just about reaching destinations but about the journey itself, with its unexpected twists and turns.

At its core, Lost & Loving It is about embracing the thrill of the unknown. Travelers who adopt this mindset often find that the most memorable experiences come from unplanned detours and encounters. For instance, stumbling upon a quaint café in a hidden alleyway or meeting locals who share stories of their culture can be more enriching than following a strict itinerary. This approach allows travelers to connect with places on a deeper level, discovering hidden gems that might otherwise remain unnoticed.

The Middle Ages saw a focus on traditional travel routes, but modern travel has evolved to incorporate diverse experiences and reflections. Blogs and social media platforms like Instagram, where accounts like @lost_and_loving_it share captivating stories of adventure and exploration, inspire travelers to venture off the beaten path. These stories highlight how getting lost can lead to unexpected friendships, cultural insights, and personal growth.

Beyond its practical aspects, Lost & Loving It is also a powerful medium for self-expression and cultural identity. Throughout history, travelers have used their journeys to convey their thoughts, emotions, and experiences, often reflecting the societal norms and values of their time. For example, solo travelers often find that navigating unfamiliar places alone builds confidence and independence, allowing them to express themselves in ways that might not be possible in familiar environments.

Moreover, Lost & Loving It serves as a bridge between cultures, allowing us to learn about and appreciate different lifestyles and histories. Iconic travel stories are not just celebrated for their adventure but also for the cultural insights they provide. Travel blogs and journals around the world are filled with stories that serve as ambassadors of their respective cultures, fostering understanding and empathy among diverse communities.

In addition to its cultural significance, travel also offers therapeutic benefits. The process of exploring new places can be meditative, providing a sense of calm and fulfillment. Many people find solace in the act of traveling, whether as a hobby or a lifestyle, as it allows them to express themselves in ways that words cannot.

In conclusion, Lost & Loving It is a rich tapestry of creativity, culture, and expression that has been woven over time. From its earliest beginnings to its modern manifestations, embracing the beauty of getting lost continues to inspire, educate, and connect people across the globe. Whether viewed as a form of storytelling, self-expression, or cultural ambassadorship, Lost & Loving It remains an indispensable part of human society, offering a unique window into our past, present, and future.` },
            { id: 27, title: "Suitcase & Sunsets", content: `Suitcase & Sunsets embodies the essence of travel as a journey of discovery and wonder, where every sunset is a reminder of the beauty and diversity of our world. This concept is rooted in the idea that travel is not just about reaching destinations but about the experiences and memories created along the way.

At its core, Suitcase & Sunsets is about embracing the thrill of exploration. Travelers are encouraged to venture beyond familiar horizons, capturing breathtaking sunsets in places like Gocek, Turkey, or the dramatic coastlines of Greece. Through these journeys, travelers are invited to experience the authentic essence of each place, from the tranquility of secluded beaches to the vibrant energy of bustling cities.

The Middle Ages saw a focus on traditional travel routes, but modern travel has evolved to incorporate diverse experiences and reflections. Blogs like Adventures & Sunsets offer captivating stories, travel tips, and cultural insights, fueling the passion for exploration and inspiring future journeys. These stories highlight how travel can be a journey of self-discovery, where the familiar and unfamiliar blend to create new perspectives.

Beyond its practical aspects, Suitcase & Sunsets is also a powerful medium for self-expression and cultural identity. Throughout history, travelers have used their journeys to convey their thoughts, emotions, and experiences, often reflecting the societal norms and values of their time. For instance, stories about solo travel highlight the challenges and triumphs faced by travelers, showcasing resilience and adaptability.

Moreover, Suitcase & Sunsets serves as a bridge between cultures, allowing us to learn about and appreciate different lifestyles and histories. Iconic travel stories are not just celebrated for their adventure but also for the cultural insights they provide. Travel blogs and journals around the world are filled with stories that serve as ambassadors of their respective cultures, fostering understanding and empathy among diverse communities.

In addition to its cultural significance, travel also offers therapeutic benefits. The process of exploring new places can be meditative, providing a sense of calm and fulfillment. Many people find solace in the act of traveling, whether as a hobby or a lifestyle, as it allows them to express themselves in ways that words cannot.

In conclusion, Suitcase & Sunsets is a rich tapestry of creativity, culture, and expression that has been woven over time. From its earliest beginnings to its modern manifestations, travel storytelling continues to inspire, educate, and connect people across the globe. Whether viewed as a form of storytelling, self-expression, or cultural ambassadorship, Suitcase & Sunsets remains an indispensable part of human society, offering a unique window into our past, present, and future.` },
          ];
          
const FoodView = () => {
  const { id } = useParams(); // Get the id from the URL
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="container mt-4">
      <div>
      <br></br>
      <br></br>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default FoodView;
