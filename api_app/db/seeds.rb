# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding DB \n"

puts ">>> Creating User Table"
users = User.create(
  [
    { 
      name: "Jerry Berry", 
      email: "jerry@berry.com",
      avatar: "/images/jerry.jpg", 
      issues: [1], 
      projects: [1, 2], 
      teams: [1, 2]
    },
    {
      name: "Merry Jerry", 
      email: "merry@jerry.com",
      avatar: "/images/merry.jpg",
      issues: [2], 
      projects: [2], 
      teams: [2],
    },
    {
      name: "Larry Bundy", 
      email: "larry@bundy.com",
      avatar: "/images/larry.jpg",
      issues: [], 
      projects: [2], 
      teams: [2],
    },
    {
      name: "Kevin Bevin", 
      email: "kev@bev.com",
      avatar: "/images/kev.jpg",
      issues: [], 
      projects: [1], 
      teams: [1],
    }
  ]
)
puts ">>> Creating Team Table"
teams = Team.create(
  [
    { 
      name: "Berry Blast Inc", 
      description: "The Berry Blast team - writers of juicy code.", 
      avatar: "/images/teams/berryblast.jpg",
      users: [1, 4],
      userRoles: [
        {
          userID: 1,
          roleID: 1
        }
      ],
      projects: [1],
      issues: [1]
    }, 
    {
      name: "Ring Bearers",
      description: "The Ring Bearers team - fixing bugs in the shadow of Mt. Doom",
      avatar: "/images/teams/ringbearers.jpg",
      users: [1, 2, 3],
      userRoles: [
        {
          userID: 1,
          roleID: 1
        },
        {
          userID: 2,
          roleID: 2
        }
      ],
      projects: [2],
      issues: [2]
    }
  ]
)
puts ">>> Creating Project Table"
projects = Project.create(
  [
    {
      name: "Berry Blastin 2.0",
      description: "The next version of the Berry Blast system, with more berries than ever before!",
      avatar: "/images/projects/berryblast.jpg",
      team: 1
    },
    {
      name: "Ring Fixing",
      description: "Fixing the issues with Ring Bearers app.",
      avatar: "/images/projects/berryblast.jpg",
      team: 2
    }
  ]
)
puts ">>> Creating Issue Table"
issues = Issue.create(
  [
    {
      prefix: "BBI", # derived from the team name initials
      title: "Make berry blast even berrier",
      description: "We as a team are trying to make the berry blast system even more berrier than before, and we need to upgrade our tools to do it.",
      project: 1,
      labels: [1],
      status: 2,
      issueType: 1,
      reporter: { userID: 1, reportedAt: "2023-06-20T12:32:13.543Z"},
      assignees: [
        {
          userId: 2,
          assignedAt: "2023-06-20T12:32:13.543Z"
        }
      ],
      comments: [1, 2, 3, 4],
      archived: false
    },
    {
      prefix: "RB", # derived from the team name initials
      title: "Fix Cracked Ring",
      description: "We as a team are trying fix issues with RB App.",
      project: 2,
      labels: [2],
      status: 3,
      issueType: 3,
      reporter: { userID: 1, reportedAt: "2023-06-20T12:32:13.543Z" },
      assignees: [
        {
          userId: 2,
          assignedAt: "2023-06-20T12:32:13.543Z"
        }
      ],
      comments: [5, 6, 7],
      archived: false
    }
  ]
)
puts ">>> Creating Role Table"
roles = Role.create(
  [
    {
      teamId: [1, 2],
      name: "Owner",
      description: "The owner of the team, can do anything, even take over the world!!! (maybe, were not 100% sure...)",
      accessRights: [1] 
    },
    {
      teamId: [1, 2],
      name: "Developer",
      description: "The developer of the team, can edit or modify settings related to the team, issues but not on project level, and also not take over the world...",
      accessRights: [2]
    },
    {
      teamId: [1, 2],
      name: "Viewer",
      description: "The viewer of the team, can only view issues, projects, and teams, but not modify them.",
      accessRights: [3]
    }
  ]
)
puts ">>> Creating AccessRight Table"
accessRights = AccessRight.create(
  [
    {
      name: "Full Control",
      description: "Administrator of all controls of teams, projects, and issues, related to the user."
    },
    {
      name: "Modify Issues",
      description: "Can modify issues, but not projects or teams."
    },
    {
      name: "Read-Only",
      description: "Can only read issues, projects, and teams, but not modify them."
    }
  ]
)
puts ">>> Creating Status Table"
statuses = Status.create(
  [
    {
      name: "To Do"
    },
    {
      name: "In Progress"
    },
    {
      name: "Review"
    },
    {
      name: "Done"
    }
  ]
)
puts ">>> Creating Label Table"
labels = Label.create(
  [
    {
      name: "feature"
    },
    {
      name: "maintenance"
    },
    {
      name: "blocker"
    },
    {
      name: "UI"
    },
    {
      name: "Backend"
    },
    {
      name: "Frontend"
    }
  ]
)
puts ">>> Creating IssueType Table"
issueTypes = IssueType.create(
  [
    {
      name: "story"
    },
    {
      name: "task"
    },
    {
      name: "bug"
    },
    {
      name: "epic"
    },
    {
      name: "sub-task"
    }
  ]
)
puts ">>> Creating Comment Table"
comments = Comment.create(
  [
    {
      text: "This is a comment id: 1"
    },
    {
      text: "This is a comment id: 2"
    },
    {
      text: "This is a comment id: 3"
    },
    {
      text: "This is a comment id: 4"
    },
    {
      text: "This is a comment id: 5"
    },
    {
      text: "This is a comment id: 6"
    },
    {
      text: "This is a comment id: 7"
    }
  ]
)
puts "Seeding DB complete..."