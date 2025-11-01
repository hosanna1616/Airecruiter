"use client"

import { useState } from "react"
import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import { Card, CardContent } from "@/Components/ui/card"
import {
  SearchIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  DollarSign,
  Briefcase,
  Share2,
  Bookmark,
  ArrowLeft,
} from "lucide-react"

// ============================================================
// DATA TYPES & INTERFACES
// ============================================================
interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  posted: string
  type: "Full Time" | "Part Time" | "Contract"
  badge?: string
}

interface JobDetails {
  id: string
  title: string
  company: string
  companyVerified: boolean
  jobsPosted: number
  location: string
  postedDate: string
  badge?: string
  type: string
  deadline: string
  vacancies: number
  education: string
  salary: string
  salaryType: "Monthly" | "Annual"
  experience: string
  description: string
}

interface Application {
  id: string
  jobTitle: string
  company: string
  appliedDate: string
  status: "pending" | "reviewing" | "accepted" | "rejected"
}

// ============================================================
// SAMPLE DATA
// ============================================================
const JOBS: Job[] = [
  {
    id: "1",
    title: "Operation manager for furniture company",
    company: "NAVE FURNITURE AND METAL MANUFACTURING PLC",
    location: "Addis Ababa, Ethiopia",
    salary: "Amount Not Specified",
    posted: "2 days ago",
    type: "Full Time",
    badge: "BOT",
  },
  {
    id: "2",
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    posted: "1 week ago",
    type: "Full Time",
  },
  {
    id: "3",
    title: "Full Stack Engineer",
    company: "StartUp Inc",
    location: "Remote",
    salary: "$100k - $140k",
    posted: "3 days ago",
    type: "Full Time",
  },
  {
    id: "4",
    title: "Product Manager",
    company: "Innovation Labs",
    location: "New York, NY",
    salary: "$110k - $150k",
    posted: "1 week ago",
    type: "Full Time",
  },
]

const JOB_DETAILS: { [key: string]: JobDetails } = {
  "1": {
    id: "1",
    title: "Operation manager for furniture company",
    company: "NAVE FURNITURE AND METAL MANUFACTURING PLC",
    companyVerified: true,
    jobsPosted: 8,
    location: "Addis Ababa, Ethiopia",
    postedDate: "November 1, 2025",
    badge: "BOT",
    type: "Onsite - Full Time",
    deadline: "November 29, 2025",
    vacancies: 1,
    education: "Bachelors Degree",
    salary: "Amount Not Specified",
    salaryType: "Monthly",
    experience: "SENIOR",
    description: `At Nave furniture and metal manufacturing plc, we specialize in crafting high-quality furniture with a commitment to design, durability, and customer satisfaction. We are growing and looking for an experienced Operations Manager to lead our production and logistics teams.

Key Responsibilities:
- Plan and oversee daily production operations to meet quality and delivery targets.
- Supervise factory staff and ensure workflow efficiency.
- Manage procurement and inventory of raw materials.
- Maintain quality control standards and ensure workplace safety.
- Coordinate between departments to optimize processes.
- Report on operational metrics and identify improvement opportunities.

Requirements:
- Bachelor's degree in Business, Operations, or related field
- 5+ years of operations management experience
- Strong leadership and problem-solving skills
- Knowledge of production management systems`,
  },
  "2": {
    id: "2",
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    companyVerified: true,
    jobsPosted: 5,
    location: "San Francisco, CA",
    postedDate: "October 25, 2025",
    badge: "TECH",
    type: "Onsite - Full Time",
    deadline: "November 10, 2025",
    vacancies: 2,
    education: "Bachelors Degree",
    salary: "$120k - $160k",
    salaryType: "Annual",
    experience: "SENIOR",
    description:
      "We're looking for an experienced Senior Frontend Developer to join our team and help build amazing user experiences.",
  },
}

const APPLICATIONS: Application[] = [
  {
    id: "1",
    jobTitle: "Senior Frontend Developer",
    company: "Tech Corp",
    appliedDate: "2025-01-15",
    status: "reviewing",
  },
  {
    id: "2",
    jobTitle: "Full Stack Engineer",
    company: "StartUp Inc",
    appliedDate: "2025-01-10",
    status: "pending",
  },
  {
    id: "3",
    jobTitle: "UI/UX Designer",
    company: "Design Studio",
    appliedDate: "2024-12-28",
    status: "accepted",
  },
  {
    id: "4",
    jobTitle: "Backend Developer",
    company: "Old Company",
    appliedDate: "2024-12-15",
    status: "rejected",
  },
]

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function Dashboard() {
  const [selectedJobId, setSelectedJobId] = useState<string>("1")
  const [searchQuery, setSearchQuery] = useState("")

  // ============================================================
  // HELPER FUNCTIONS
  // ============================================================
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "reviewing":
        return "bg-blue-100 text-blue-800"
      case "accepted":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <ClockIcon className="w-4 h-4" />
      case "reviewing":
        return <ClockIcon className="w-4 h-4" />
      case "accepted":
        return <CheckCircleIcon className="w-4 h-4" />
      case "rejected":
        return <XCircleIcon className="w-4 h-4" />
      default:
        return null
    }
  }

  const filteredJobs = JOBS.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const selectedJob = JOB_DETAILS[selectedJobId]

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ======== DASHBOARD HEADER ======== */}
      <div className="bg-white border-b border-gray-200 px-6 md:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-black">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's your recruitment journey.</p>
          </div>

          {/* PROFILE SECTION - TOP RIGHT */}
          <div className="flex items-center gap-4 bg-white rounded-lg border border-gray-200 px-4 py-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-black">John Doe</p>
              <p className="text-xs text-gray-600">Job Seeker</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ======== LEFT SIDEBAR - JOBS & APPLICATIONS ======== */}
          <div className="lg:col-span-2 space-y-8">
            {/* ======== JOBS SECTION ======== */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                  <BriefcaseIcon className="w-6 h-6 text-orange-500" />
                  Jobs you might like
                </h2>
              </div>

              {/* SEARCH BAR */}
              <div className="mb-6 relative">
                <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for job"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* TABS - All Jobs / Saved Jobs */}
              <div className="flex gap-6 mb-6 border-b border-gray-200 pb-4">
                <button className="text-sm font-medium text-gray-600 border-b-2 border-orange-500 pb-2 text-orange-500">
                  All jobs
                </button>
                <button className="text-sm font-medium text-gray-600 hover:text-black">Saved jobs</button>
              </div>

              {/* JOB CARDS LIST */}
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Card
                    key={job.id}
                    onClick={() => setSelectedJobId(job.id)}
                    className={`hover:shadow-lg transition-all cursor-pointer border-l-4 ${
                      selectedJobId === job.id
                        ? "border-l-orange-500 bg-orange-50"
                        : "border-l-gray-200 hover:border-l-orange-400"
                    }`}
                  >
                    <CardContent className="pt-6">
 