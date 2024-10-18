//import React from "react";

export const DEVQuestions = [
    {   question: "What does the acronym HTML stand for?", 
        options: ["Hyperlinks and Text Markup Language",
                  "Home Tool Markup Language",
                  "Hyper Text Markup Language",
                  "Hyperlinks Transfer Markup Language"], 
        correct: 2,
        backgroundColor: "bg-gray-100",
    },
    {    question: "Which CSS property controls the spacing between the lines of text?",
         options: ["margin",
                   "line-height",
                  "padding", 
                  "text-spacing"],
         correct: 1,
         backgroundColor: "bg-gray-100",
    },
    {    question: " React, which hook would you use to manage a component's state?",
         options: ["useContext",
                   "useState",
                   "useEffect",
                   "useReducer"],  
         correct: 1,
         backgroundColor: "bg-gray-100",

    }, 
    {    question: "Which HTTP method is used to request data from a server?",
        options: ["GET","PUT","POST","DELETE"], 
        correct: 0,
        backgroundColor: "bg-gray-100",
    }, 
    {    question: "Which HTML tag is used to define a paragraph?",
        options: ["<div>","<p>","<h1>","<br>"], 
        correct: 1,
        backgroundColor: "bg-gray-100",
    }, 
]

export const DSAQuestions = [
    {   question: "Which is non-linear data structure among the following", 
        options: ["Array","Stack","Queue","Tree"], 
        correct: 3,
        backgroundColor: "bg-gray-100",
    },
    {    question: "Which data structure follows the Last In, First Out (LIFO) principle?",
         options: ["Array", "Stack", "Queue", "Linked List"],
         correct: 1,
         backgroundColor: "bg-gray-100",
    },
    {    question: "Which data structure is used for Breadth-First Search (BFS) in a graph?",
         options: ["Linked List","Stack","Queue","Tree"], 
         correct: 2,
         backgroundColor: "bg-gray-100",
    },
    {   question: "In a max heap, the parent node is always:", 
        options: ["Smaller than its children",
                  "Larger than its children",
                  "Equal to its children",
                  "None of the above"], 
        correct: 1,
        backgroundColor: "bg-gray-100",
    },
    {   question: "Which algorithm is used to find the shortest path in a weighted graph?", 
        options: ["Depth-First Search (DFS)",
                   "Dijkstra’s Algorithm",
                  "Breadth-First Search (BFS)",
                  "Kruskal’s Algorithm"], 
        correct: 1,
        backgroundColor: "bg-gray-100",
    },

]

 export const MLQuestions = [
    { 
      question: "Which of the following is a supervised learning algorithm?",  
      options: ["K-Means", "Linear Regression", "PCA", "Apriori"],  
      correct: 1,
      backgroundColor: "bg-gray-100",  
    },
    { 
      question: "What is the purpose of the cost function in machine learning?",  
      options: ["Optimize the model", "Measure error in predictions", "Create new features", "Split the dataset"],  
      correct: 1, 
      backgroundColor: "bg-gray-100",
    },
    { 
      question: "Which of the following techniques is used to prevent overfitting in a model?",  
      options: ["Gradient Descent", "Regularization", "Cross-Validation", "Feature Selection"],  
      correct: 2, 
      backgroundColor: "bg-gray-100",
    },
    { 
      question: "In which of the following tasks is K-Means clustering commonly used?",  
      options: ["Classification", "Regression", "Clustering", "Dimensionality Reduction"],  
      correct: 2, 
      backgroundColor: "bg-gray-100",
    },
    { 
      question: "Which of the following is an activation function commonly used in neural networks?",  
      options: ["ReLU", "Logistic Regression", "Mean Squared Error", "Gradient Descent"],  
      correct: 0, 
      backgroundColor: "bg-gray-100", 
    }
  ]

 export const DBMSQuestions = [
    { 
      question: "Which of the following is a primary key?",  
      options: ["A unique identifier for a row", "A foreign key in another table", "An attribute that can be null", "An index in a database"],  
      correct: 0 ,
      backgroundColor: "bg-gray-100", 
    },
    { 
      question: "What does SQL stand for?",  
      options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Standard Query Language"],  
      correct: 0 ,
      backgroundColor: "bg-gray-100", 
    },
    { 
      question: "Which SQL statement is used to extract data from a database?",  
      options: ["EXTRACT", "GET", "SELECT", "FETCH"],  
      correct: 2 ,
      backgroundColor: "bg-gray-100", 
    },
    { 
      question: "Which of the following is a valid SQL constraint?",  
      options: ["CHECK", "LIMIT", "FILTER", "SORT"],  
      correct: 0 ,
      backgroundColor: "bg-gray-100", 
    },
    { 
      question: "In an ER diagram, a diamond represents:",  
      options: ["Entity", "Relationship", "Attribute", "Primary Key"],  
      correct: 1 , 
      backgroundColor: "bg-gray-100",
    }
  ]
  
 export const AptitudeQuestions = [
    { 
      question: "If a train travels 60 km in 1 hour, how far will it travel in 2.5 hours?",  
      options: ["120 km", "150 km", "180 km", "200 km"],  
      correct: 1, 
      backgroundColor: "bg-gray-100", 
    },
    { 
      question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",  
      options: ["20", "24", "32", "36"],  
      correct: 2 , 
      backgroundColor: "bg-gray-100",
    },
    { 
      question: "If 5x + 3 = 28, what is the value of x?",  
      options: ["4", "5", "6", "7"],  
      correct: 0, 
      backgroundColor: "bg-gray-100", 
    },
    { 
      question: "A bag contains 5 red balls and 3 blue balls. What is the probability of drawing a red ball?",  
      options: ["3/8", "5/8", "5/3", "8/5"],  
      correct: 1 , 
      backgroundColor: "bg-gray-100",
    },
    { 
      question: "If 3x + 2 = 11, what is the value of x?",  
      options: ["1", "2", "3", "4"],  
      correct: 1,
      backgroundColor: "bg-gray-100",  
    }
  ]
  

export const OOPQuestions = [
    { 
      question: "What is the main feature of Object-Oriented Programming?",  
      options: ["Encapsulation", "Procedural programming", "Assembly language", "Machine language"],  
      correct: 0 , 
      backgroundColor: "bg-gray-100",
    },
    { 
      question: "Which of the following is not a pillar of OOP?",  
      options: ["Inheritance", "Polymorphism", "Compilation", "Abstraction"],  
      correct: 2 , 
      backgroundColor: "bg-gray-100",
    },
    { 
      question: "What is a class in OOP?",  
      options: ["A blueprint for creating objects", "An instance of an object", "A type of function", "A module for data storage"],  
      correct: 0 , 
      backgroundColor: "bg-gray-100",
    },
    { 
      question: "What does polymorphism allow in OOP?",  
      options: ["Multiple methods with the same name", "Data hiding", "Code reuse", "Multiple inheritance"],  
      correct: 0,
      backgroundColor: "bg-gray-100",  
    },
    { 
      question: "In OOP, what is encapsulation?",  
      options: ["Hiding the internal state of an object", "Sharing methods between classes", "Creating multiple objects from a class", "Defining a common interface"],  
      correct: 0  ,
      backgroundColor: "bg-gray-100",
    }
  ]
  

