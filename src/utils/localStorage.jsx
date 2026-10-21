
export const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 4,
      newTask: 3,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Complete Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-10-18",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Fix the navigation menu alignment issue.",
        taskDate: "2026-10-19",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Create Dashboard",
        taskDescription: "Build an employee dashboard with task statistics.",
        taskDate: "2026-10-20",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Write Unit Tests",
        taskDescription: "Write tests for the login form validation.",
        taskDate: "2026-10-16",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update Documentation",
        taskDescription: "Document the authentication workflow.",
        taskDate: "2026-10-21",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@gmail.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Design Profile Page",
        taskDescription: "Create an employee profile page with editable details.",
        taskDate: "2026-10-18",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix API Error",
        taskDescription: "Resolve the error returned by the employee API.",
        taskDate: "2026-10-17",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Integrate REST API",
        taskDescription: "Connect the dashboard to the employee REST API.",
        taskDate: "2026-10-20",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Test Login Flow",
        taskDescription: "Test successful and unsuccessful login attempts.",
        taskDate: "2026-10-16",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Optimize CSS",
        taskDescription: "Improve styling consistency across application pages.",
        taskDate: "2026-10-22",
        category: "UI",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Amit",
    email: "employee3@gmail.com",
    password: "123",
    taskCounts: {
      active: 4,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Build Task Card",
        taskDescription: "Create a reusable task card component in React.",
        taskDate: "2026-10-18",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Review Pull Request",
        taskDescription: "Review code changes and provide feedback.",
        taskDate: "2026-10-19",
        category: "Code Review",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Responsive Layout",
        taskDescription: "Ensure the application works on mobile screens.",
        taskDate: "2026-10-17",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Add Form Validation",
        taskDescription: "Validate required fields and display error messages.",
        taskDate: "2026-10-20",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Prepare Test Cases",
        taskDescription: "Prepare test cases for task creation and updates.",
        taskDate: "2026-10-21",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@gmail.com",
    password: "123",
    taskCounts: {
      active: 4,
      newTask: 3,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Create Admin Panel",
        taskDescription: "Develop an admin panel to manage employees.",
        taskDate: "2026-10-19",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Employee Records",
        taskDescription: "Update employee profile information in the application.",
        taskDate: "2026-10-18",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Fix Permission Bug",
        taskDescription: "Ensure employees cannot access admin-only features.",
        taskDate: "2026-10-20",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Add Search Feature",
        taskDescription: "Allow admins to search for employees by email.",
        taskDate: "2026-10-21",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Write Admin Guide",
        taskDescription: "Document the admin panel features and workflows.",
        taskDate: "2026-10-22",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Rohit",
    email: "employee5@gmail.com",
    password: "123",
    taskCounts: {
      active: 4,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Implement Notifications",
        taskDescription: "Display notifications when new tasks are assigned.",
        taskDate: "2026-10-18",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Test Task Completion",
        taskDescription: "Verify that completed tasks update dashboard statistics.",
        taskDate: "2026-10-19",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Date Formatting",
        taskDescription: "Display task dates in a consistent format.",
        taskDate: "2026-10-17",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Improve Dashboard UI",
        taskDescription: "Improve spacing, colors, and task summary cards.",
        taskDate: "2026-10-20",
        category: "UI",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Test Logout Feature",
        taskDescription: "Verify that logout clears the current session state.",
        taskDate: "2026-10-21",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

export const admin = [
  {
    id: 1,
    firstName: "Vikram",
    email: "admin@gmail.com",
    password: "123"
  }
];

// Save initial data to localStorage
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// Get data from localStorage
export const getLocalStorage = () => {
  const employees = JSON.parse(
    localStorage.getItem("employees") || "[]"
  );

  const admin = JSON.parse(
    localStorage.getItem("admin") || "[]"
  );

  return { employees, admin };
};
