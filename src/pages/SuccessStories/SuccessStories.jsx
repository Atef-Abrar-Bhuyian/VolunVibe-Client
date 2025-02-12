import { useState } from "react";
import "animate.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const stories = [
    {
      name: "Alice Johnson",
      image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      story:
        "Volunteering at the local shelter changed my life. I met amazing people and made a real impact!",
    },
    {
      name: "David Smith",
      image:
        "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=",
      story:
        "Teaching kids coding was so fulfilling. Seeing their excitement was priceless!",
    },
    {
      name: "Emma Brown",
      image:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?b=1&s=612x612&w=0&k=20&c=hEPh7-WEAqHTHdQtPrfEN9-yYCiPGKvD32VZ5lcL6SU=",
      story:
        "I joined an environmental clean-up event and now I’m more conscious about sustainability!",
    },
    {
      name: "Michael Lee",
      image: "https://img.freepik.com/free-photo/freedom-concept-with-hiker-mountain_23-2148107064.jpg",
      story:
        "Helping elderly people with daily tasks has been an eye-opening experience for me!",
    },
    {
      name: "Sophia Martinez",
      image:
        "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      story:
        "Volunteering at the food bank made me appreciate the importance of community support!",
    },
    {
      name: "James Wilson",
      image:
        "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwbG9va2luZyUyMGF0JTIwY2FtZXJhfGVufDB8fDB8fHww",
      story:
        "Mentoring high school students has been a rewarding journey of learning and growth!",
    },
    {
      name: "Olivia Taylor",
      image:
        "https://images.unsplash.com/photo-1619895862022-09114b41f16f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
      story:
        "I participated in a charity run and raised funds for children in need. It was amazing!",
    },
    {
      name: "Ethan Clark",
      image:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      story:
        "Organizing community clean-ups has helped me contribute to a greener environment!",
    },
  ];

export default function VolunteerSuccessStories() {
  return (
    <div className="p-8 w-4/5 mx-auto text-center bg-dark-purple text-white">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>VolunVibe | Success Stories</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>
      <h1 className="text-4xl text-purple-800 font-bold mb-6 animate__animated animate__fadeInDown">
        Volunteer Success Stories
      </h1>
      <p className="text-lg mb-6 animate__animated animate__fadeInUp text-purple-800">
        Inspiring stories from volunteers making a difference.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeIn">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-dark-purple-800 shadow-lg hover:shadow-2xl cursor-pointer rounded-2xl p-6 duration-300 hover:translate-y-[-10px] transition-all "
            style={{
              animationDelay: `${index * 0.2}s`,
              backgroundColor: "#4b3f72", // Dark purple background
            }}
          >
            <figure className="mb-4">
              <img
                src={story.image}
                alt={story.name}
                className="w-28 h-28 rounded-full mx-auto border-4 border-white mb-4"
              />
            </figure>
            <div>
              <h2 className="text-xl font-semibold">{story.name}</h2>
              <p className="text-sm text-gray-300 mt-2">{story.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
