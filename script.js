// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Code for dynamically adding news articles
    const newsFeed = document.querySelector(".news-feed");
  
    // Dummy data for news articles (replace with your actual data)
    const newsArticles = [
      {
        title: "Article 1",
        excerpt: "Smartphones a boon to society.",
        link: "#"
      },
      {
        title: "Article 2",
        excerpt: "Teenagers and digital world.",
        link: "#"
      },
      {
        title: "Article 3",
        excerpt: "How network marketers do scam in terms of digital marketing.",
        link: "#"
      }
    ];
  
    // Function to create and append news article elements
    function createNewsArticleElement(article) {
      const articleElement = document.createElement("div");
      articleElement.classList.add("news-article");
  
      const titleElement = document.createElement("h3");
      titleElement.textContent = article.title;
  
      const excerptElement = document.createElement("p");
      excerptElement.textContent = article.excerpt;
  
      const linkElement = document.createElement("a");
      linkElement.href = article.link;
      linkElement.textContent = "Read More";
  
      articleElement.appendChild(titleElement);
      articleElement.appendChild(excerptElement);
      articleElement.appendChild(linkElement);
  
      return articleElement;
    }
  
    // Add news articles to the news feed section
    newsArticles.forEach((article) => {
      const articleElement = createNewsArticleElement(article);
      newsFeed.appendChild(articleElement);
    });
  
    // Code for dynamically adding upcoming events
    const eventsList = document.querySelector(".events-list");
  
    // Dummy data for upcoming events (replace with your actual data)
    const upcomingEvents = [
      {
        title: "Event 1",
        date: "June 30, 2023",
        location: "City A",
        link: "#"
      },
      {
        title: "Event 2",
        date: "July 15, 2023",
        location: "City B",
        link: "#"
      },
      {
        title: "Event 3",
        date: "August 5, 2023",
        location: "City C",
        link: "#"
      }
    ];
  
    // Function to create and append event elements
    function createEventElement(event) {
      const eventElement = document.createElement("div");
      eventElement.classList.add("event");
  
      const titleElement = document.createElement("h3");
      titleElement.textContent = event.title;
  
      const dateElement = document.createElement("p");
      dateElement.textContent = `Date: ${event.date}`;
  
      const locationElement = document.createElement("p");
      locationElement.textContent = `Location: ${event.location}`;
  
      const linkElement = document.createElement("a");
      linkElement.href = event.link;
      linkElement.textContent = "Learn More";
  
      eventElement.appendChild(titleElement);
      eventElement.appendChild(dateElement);
      eventElement.appendChild(locationElement);
      eventElement.appendChild(linkElement);
  
      return eventElement;
    }
  
    // Add upcoming events to the events section
    upcomingEvents.forEach((event) => {
      const eventElement = createEventElement(event);
      eventsList.appendChild(eventElement);
    });
  
    // Code for dynamically adding job listings
    const jobsList = document.querySelector(".jobs-list");
  
    // Dummy data for job listings (replace with your actual data)
    const jobListings = [
      {
        title: "Job 1",
        company: "Company A",
        location: "City X",
        link: "#"
      },
      {
        title: "Job 2",
        company: "Company B",
        location: "City Y",
        link: "#"
      },
      {
        title: "Job 3",
        company: "Company C",
        location: "City Z",
        link: "#"
      }
    ];
  
    // Function to create and append job listing elements
    function createJobListingElement(job) {
      const jobElement = document.createElement("div");
      jobElement.classList.add("job-listing");
  
      const titleElement = document.createElement("h3");
      titleElement.textContent = job.title;
  
      const companyElement = document.createElement("p");
      companyElement.textContent = `Company: ${job.company}`;
  
      const locationElement = document.createElement("p");
      locationElement.textContent = `Location: ${job.location}`;
  
      const linkElement = document.createElement("a");
      linkElement.href = job.link;
      linkElement.textContent = "Apply Now";
  
      jobElement.appendChild(titleElement);
      jobElement.appendChild(companyElement);
      jobElement.appendChild(locationElement);
      jobElement.appendChild(linkElement);
  
      return jobElement;
    }
  
    // Add job listings to the jobs section
    jobListings.forEach((job) => {
      const jobElement = createJobListingElement(job);
      jobsList.appendChild(jobElement);
    });
  });
  