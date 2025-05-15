"use client"

import type React from "react"

import { useState } from "react"
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Card,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Breadcrumbs,
  Link as MuiLink,
  Chip,
} from "@mui/material"
import {
  Add as AddIcon,
  Home as HomeIcon,
  DirectionsCar as CarIcon,
  ChevronRight as ChevronRightIcon,
  NavigateNext as NavigateNextIcon,
} from "@mui/icons-material"

// Sample data for cabs
const cabsData = [
  {
    id: 1,
    name: "suv",
    regNo: "AP09CP0070",
    insurance: "",
    documents: "adinath",
    status: "pending",
  },
  {
    id: 2,
    name: "sedan",
    regNo: "MH12AB1234",
    insurance: "Valid till 12/2025",
    documents: "complete",
    status: "approved",
  },
  {
    id: 3,
    name: "hatchback",
    regNo: "KA01CD5678",
    insurance: "Valid till 08/2025",
    documents: "complete",
    status: "approved",
  },
  {
    id: 4,
    name: "suv+",
    regNo: "TN07EF9012",
    insurance: "Valid till 10/2025",
    documents: "complete",
    status: "approved",
  },
  {
    id: 5,
    name: "sedan",
    regNo: "DL03GH3456",
    insurance: "Valid till 06/2025",
    documents: "complete",
    status: "approved",
  },
  {
    id: 6,
    name: "hatchback",
    regNo: "GJ05IJ7890",
    insurance: "Valid till 09/2025",
    documents: "complete",
    status: "approved",
  },
  {
    id: 7,
    name: "suv",
    regNo: "UP80KL1234",
    insurance: "Valid till 11/2025",
    documents: "complete",
    status: "approved",
  },
]

export default function CabsManagement() {
  const [activeTab, setActiveTab] = useState<"pending" | "approved">("pending")
  const [entriesPerPage, setEntriesPerPage] = useState<string>("10")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)

  // Filter cabs based on active tab and search query
  const filteredCabs = cabsData.filter(
    (cab) =>
      cab.status === activeTab &&
      (searchQuery === "" ||
        cab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cab.regNo.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Calculate pagination
  const totalEntries = filteredCabs.length
  const totalPages = Math.ceil(totalEntries / Number.parseInt(entriesPerPage))
  const startIndex = (currentPage - 1) * Number.parseInt(entriesPerPage)
  const endIndex = Math.min(startIndex + Number.parseInt(entriesPerPage), totalEntries)
  const currentEntries = filteredCabs.slice(startIndex, endIndex)

  // Handle tab change
  const handleTabChange = (tab: "pending" | "approved") => {
    setActiveTab(tab)
    setCurrentPage(1)
  }

  // Handle search change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
    setCurrentPage(1)
  }

  // Handle entries per page change
  const handleEntriesChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEntriesPerPage(event.target.value as string)
    setCurrentPage(1)
  }

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Container maxWidth={false} sx={{ p: 3, bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Breadcrumbs */}
      <Breadcrumbs separator={<ChevronRightIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 3 }}>
        <MuiLink
          component="button"
          underline="hover"
          sx={{ display: "flex", alignItems: "center", color: "text.primary", cursor: "pointer" }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </MuiLink>
        <Typography color="text.primary" sx={{ display: "flex", alignItems: "center" }}>
          <CarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Fleet
        </Typography>
        <Typography color="text.primary" sx={{ fontWeight: "bold" }}>
          Cabs
        </Typography>
      </Breadcrumbs>

      {/* Header with Add Button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CarIcon sx={{ mr: 1, color: "#1976d2" }} />
          <Typography variant="h5" component="h1" sx={{ fontWeight: "bold", color: "#333" }}>
            All Cabs Details
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
          sx={{
            ml: 2,
            bgcolor: "#4caf50",
            "&:hover": { bgcolor: "#388e3c" },
            borderRadius: "4px",
            minWidth: "36px",
            width: "36px",
            height: "36px",
            p: 0,
          }}
        >
          <AddIcon />
        </Button>
      </Box>

      {/* Car Type Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              borderRadius: 2,
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              },
              p: 2,
            }}
          >
            <Box
              component="img"
              src="/placeholder.svg?height=150&width=200"
              alt="Hatchback"
              sx={{
                width: "100%",
                height: 150,
                objectFit: "contain",
                mb: 2,
              }}
            />
            <Typography variant="h5" component="div" sx={{ fontWeight: "bold", color: "#333", textAlign: "center" }}>
              Hatchback
            </Typography>
            <Typography color="textSecondary" sx={{ fontSize: "0.875rem", textAlign: "center" }}>
              4+1 seater
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              borderRadius: 2,
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              },
              p: 2,
            }}
          >
            <Box
              component="img"
              src="/placeholder.svg?height=150&width=200"
              alt="Sedan"
              sx={{
                width: "100%",
                height: 150,
                objectFit: "contain",
                mb: 2,
              }}
            />
            <Typography variant="h5" component="div" sx={{ fontWeight: "bold", color: "#333", textAlign: "center" }}>
              Sedan
            </Typography>
            <Typography color="textSecondary" sx={{ fontSize: "0.875rem", textAlign: "center" }}>
              4+1 seater
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              borderRadius: 2,
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              },
              p: 2,
            }}
          >
            <Box
              component="img"
              src="/placeholder.svg?height=150&width=200"
              alt="SUV"
              sx={{
                width: "100%",
                height: 150,
                objectFit: "contain",
                mb: 2,
              }}
            />
            <Typography variant="h5" component="div" sx={{ fontWeight: "bold", color: "#333", textAlign: "center" }}>
              Suv
            </Typography>
            <Typography color="textSecondary" sx={{ fontSize: "0.875rem", textAlign: "center" }}>
              6+1 seater
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              borderRadius: 2,
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              },
              p: 2,
            }}
          >
            <Box
              component="img"
              src="/placeholder.svg?height=150&width=200"
              alt="SUV+"
              sx={{
                width: "100%",
                height: 150,
                objectFit: "contain",
                mb: 2,
              }}
            />
            <Typography variant="h5" component="div" sx={{ fontWeight: "bold", color: "#333", textAlign: "center" }}>
              SUV+
            </Typography>
            <Typography color="textSecondary" sx={{ fontSize: "0.875rem", textAlign: "center" }}>
              6+1 seater
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Status Tabs and Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant={activeTab === "pending" ? "contained" : "outlined"}
            onClick={() => handleTabChange("pending")}
            sx={{
              bgcolor: activeTab === "pending" ? "#ffc107" : "transparent",
              color: activeTab === "pending" ? "#fff" : "#ffc107",
              borderColor: "#ffc107",
              "&:hover": {
                bgcolor: activeTab === "pending" ? "#ffb300" : "rgba(255, 193, 7, 0.1)",
                borderColor: "#ffc107",
              },
              textTransform: "none",
              borderRadius: "4px",
            }}
          >
            Pending <Chip size="small" label="1" sx={{ ml: 1, bgcolor: "#fff", color: "#ffc107" }} />
          </Button>
          <Button
            variant={activeTab === "approved" ? "contained" : "outlined"}
            onClick={() => handleTabChange("approved")}
            sx={{
              bgcolor: activeTab === "approved" ? "#4caf50" : "transparent",
              color: activeTab === "approved" ? "#fff" : "#4caf50",
              borderColor: "#4caf50",
              "&:hover": {
                bgcolor: activeTab === "approved" ? "#388e3c" : "rgba(76, 175, 80, 0.1)",
                borderColor: "#4caf50",
              },
              textTransform: "none",
              borderRadius: "4px",
            }}
          >
            Approved <Chip size="small" label="6" sx={{ ml: 1, bgcolor: "#fff", color: "#4caf50" }} />
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2">Show</Typography>
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <Select
                value={entriesPerPage}
                onChange={handleEntriesChange}
                sx={{
                  "& .MuiSelect-select": {
                    py: 0.5,
                    bgcolor: "#f5f5f5",
                    borderRadius: 1,
                  },
                }}
              >
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="25">25</MenuItem>
                <MenuItem value="50">50</MenuItem>
                <MenuItem value="100">100</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body2">entries</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2">Search:</Typography>
            <TextField
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#f5f5f5",
                  borderRadius: 1,
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Cabs Table */}
      <Paper
        elevation={0}
        sx={{
          mb: 4,
          borderRadius: 2,
          overflow: "hidden",
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: "#f0f7ff" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>Vcl Name</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>Vcl Reg.No.</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>Insurance</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>Documents</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                  View
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentEntries.map((cab) => (
                <TableRow
                  key={cab.id}
                  hover
                  sx={{
                    "&:nth-of-type(odd)": { bgcolor: "#fafafa" },
                    transition: "background-color 0.2s",
                    "&:hover": { bgcolor: "#f0f7ff !important" },
                  }}
                >
                  <TableCell>{cab.name}</TableCell>
                  <TableCell>{cab.regNo}</TableCell>
                  <TableCell>{cab.insurance}</TableCell>
                  <TableCell>{cab.documents}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      size="small"
                      sx={{
                        color: "#1976d2",
                        bgcolor: "#e3f2fd",
                        "&:hover": { bgcolor: "#bbdefb" },
                      }}
                    >
                      <NavigateNextIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderTop: "1px solid #e0e0e0",
            bgcolor: "#f9f9f9",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              size="small"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              sx={{
                borderColor: "#e0e0e0",
                color: "#757575",
                "&.Mui-disabled": {
                  borderColor: "#e0e0e0",
                  color: "#bdbdbd",
                },
              }}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "contained" : "outlined"}
                size="small"
                onClick={() => handlePageChange(page)}
                sx={{
                  bgcolor: page === currentPage ? "#1976d2" : "transparent",
                  borderColor: page === currentPage ? "#1976d2" : "#e0e0e0",
                  color: page === currentPage ? "#fff" : "#757575",
                  "&:hover": {
                    bgcolor: page === currentPage ? "#1565c0" : "rgba(25, 118, 210, 0.1)",
                    borderColor: page === currentPage ? "#1565c0" : "#1976d2",
                  },
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outlined"
              size="small"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              sx={{
                borderColor: "#e0e0e0",
                color: "#757575",
                "&.Mui-disabled": {
                  borderColor: "#e0e0e0",
                  color: "#bdbdbd",
                },
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}
