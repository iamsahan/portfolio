import Recipe from "../assets/recipeMan.png";
import Garment from "../assets/garment.png";
import Sea from "../assets/CleanSea2.png";
import Pos from "../assets/pos.png";
import Event from "../assets/eventMan.png";
import Ninja from "../assets/Blue Smartphone Promo Poster.png";

export const projectsData = [
    {
      id: 1,
      image: Recipe,
      title: "Online Recipe Management System",
      description: `
        ----------------------------------------------------------------
        An online recipe management system called CookBooker to organize 
        and manage recipes, providing users with a seamless experience for 
        browsing and categorizing their favorite recipes.
        
        Key Features:
          - Secure admin and user login.
          - Recipe categorization and organization.
          - Intuitive and user-friendly interface.
          - Recipe details, ingredients, and instructions.
        
        Tools and Technologies:
          - PHP for backend logic.
          - HTML and CSS for frontend design and styling.
          - JavaScript for interactive elements.
          - MySQL for database management.
          - Git for version control.
         
      `,
      category: "web",
    },
    {
      id: 2,
      image: Event,
      title: "Online Event Management System",
      description: `
        ----------------------------------------------------------------
        An online event management system designed to streamline the 
        management of events, providing users with a seamless experience 
        for planning, scheduling, and managing event details.
    
        Key Features:
        - Secure admin and user login.
        - Intuitive and user-friendly interface.
        - Event creation and management.
        - Attendee registration and management
        - Advanced search and filtering functionality.
    
        Tools and Technologies:
        - Java Servlets for backend logic.
        - HTML and CSS for frontend design and styling.
        - JavaScript for interactive elements.
        - MySQL for database management.
        - Git for version control.
      `,
      category: "web",
    },

    {
      id: 3,
      image: Garment,
      title: "Online Garment Management System",
      description: `
         --------------------------------------------------------------------
         This system is designed to improve the efficiency of garment management 
         processes in small-scale manufacturing units.
    
        Key Features:
        - Inventory Management: Track and manage inventory levels of raw materials.
        - Product Management: Track and manage inventory levels of finished products
        - Employee Management: manage employees efficiently
        - User Interface: Clean and intuitive interface for easy navigation and usability.
    
        Tools and Technologies:
        - PHP for backend logic
        - HTML, CSS for frontend design and styling
        - JavaScript for interactive elements
        - Git for version control
      `,
      category: "web",
    },
    {
      id: 4,
      image: Pos,
      title: "Inventory Management System",
      description: ` 
        ----------------------------------------------------------------
        An online inventory management system designed to handle customer 
        orders, manage inventory levels, and maintain supplier relationships, 
        providing a seamless experience for businesses.
    
        Key Features:
        - Secure admin and user login with JWT authentication.
        - Customer order management.
        - Inventory tracking and management.
        - Supplier management.
        - Intuitive and user-friendly interface.
        - POS cashier interface with barcode scanning.
    
        Tools and Technologies:
        - MongoDB for database management.
        - Express.js for backend framework.
        - React for frontend development.
        - Node.js for backend runtime.
        - JWT for secure authentication.
        - Git for version control`,
      category: "web",
    },
    {
      id: 5,
      image: Ninja,
      title: "Fruit Ninja Game",
      description: `
        ----------------------------------------------------------------
        Developed an Fruit Ninja game using Android Studio, challenging 
        players to slice flying fruits while avoiding bombs.
    
        Key Features:
        - Intuitive gameplay mechanics.
        - Dynamic and vibrant graphics.
        - Responsive touch controls.
        - Real-time score tracking.
        - Power-ups and bombs to enhance the gaming experience.
    
        Tools and Technologies:
        - Android Studio for development.
        - Kotlin for backend logic.
        - XML for UI design.
        - Git for version control..
      `,
      category: "app",
    },
    {
      id: 6,
      image: Sea,
      title: "Clean Sea App",
      description: `
         --------------------------------------------------------------------
         CleanSeas is a mobile app designed to promote marine conservation by 
         engaging various stakeholders in protecting our oceans. Users can 
         report marine pollution, organize and join clean-up events, access a 
         sustainable seafood guide, and find educational resources. 
      
        Key Features:

          - Report Marine Pollution: Report pollution incidents with photos.
          - Organize and Join Clean-up Events: Events to clean up marine areas.
          - Sustainable Seafood Guide: Make environmentally friendly seafood choices.
          - Educational Resources: Learn about marine conservation best practices.
      
          Tools and Technologies:
          - Figma for UI/UX design
          - Flutter for cross-platform development
          - Firebase for backend services
          - Git for source code management
      `,
      category: "ongoing",
    },
  ];

  export const projectsNav = [
    {
        name: "all"
    },
    {
        name: "web"
    },
    {
        name: "app"
    },
    {
      name: "ongoing"
  }
  ]
  