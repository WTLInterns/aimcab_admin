"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
  Breadcrumbs,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
} from "@mui/material"
import {
  Home as HomeIcon,
  LocationOn as LocationOnIcon,
  ChevronRight as ChevronRightIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Search as SearchIcon,
} from "@mui/icons-material"

// Sample data for states and cities
const states = ["Andhra Pradesh", "Gujarat", "Karnataka", "Maharashtra", "Tamil Nadu", "Telangana"]

const cities = {
  "Andhra Pradesh": ["Hyderabad", "Visakhapatnam", "Vijayawada"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
  Karnataka: ["Bangalore", "Mysore", "Hubli"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  Telangana: ["Hyderabad", "Warangal", "Karimnagar"],
}

// Sample data for routes
const routesData = [
  {
    id: 1,
    sourceState: "Maharashtra",
    sourceCity: "Pune",
    destinationState: "Maharashtra",
    destinationCity: "Mumbai",
    hatchback: 2500,
    sedan: 3000,
    sedanPrem: 3500,
    suv: 4000,
    suvPlus: 4500,
  },
  {
    id: 2,
    sourceState: "Maharashtra",
    sourceCity: "Mumbai",
    destinationState: "Gujarat",
    destinationCity: "Ahmedabad",
    hatchback: 5500,
    sedan: 6000,
    sedanPrem: 6500,
    suv: 7000,
    suvPlus: 7500,
  },
  {
    id: 3,
    sourceState: "Karnataka",
    sourceCity: "Bangalore",
    destinationState: "Tamil Nadu",
    destinationCity: "Chennai",
    hatchback: 4500,
    sedan: 5000,
    sedanPrem: 5500,
    suv: 6000,
    suvPlus: 6500,
  },
]

export default function OutstationRoutes() {
  // State for form inputs
  const [sourceState, setSourceState] = useState("")
  const [sourceCity, setSourceCity] = useState("")
  const [destinationState, setDestinationState] = useState("")
  const [destinationCity, setDestinationCity] = useState("")
  const [prices, setPrices] = useState({
    hatchback: "",
    sedan: "",
    sedanPrem: "",
    suv: "",
    suvPlus: "",
  })
  const [routes, setRoutes] = useState(routesData)
  const [isEditing, setIsEditing] = useState(false)
  const [currentRouteId, setCurrentRouteId] = useState<number | null>(null)
  const [showAllRoutes, setShowAllRoutes] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  // Get cities based on selected state
  const getSourceCities = () => {
    if (!sourceState) return []
    return cities[sourceState as keyof typeof cities] || []
  }

  const getDestinationCities = () => {
    if (!destinationState) return []
    return cities[destinationState as keyof typeof cities] || []
  }

  // Handle form submission
  const handleSubmit = () => {
    if (isEditing && currentRouteId) {
      // Update existing route
      setRoutes(
        routes.map((route) =>
          route.id === currentRouteId
            ? {
                ...route,
                sourceState,
                sourceCity,
                destinationState,
                destinationCity,
                hatchback: Number(prices.hatchback),
                sedan: Number(prices.sedan),
                sedanPrem: Number(prices.sedanPrem),
                suv: Number(prices.suv),
                suvPlus: Number(prices.suvPlus),
              }
            : route,
        ),
      )
    } else {
      // Add new route
      const newRoute = {
        id: routes.length > 0 ? Math.max(...routes.map((r) => r.id)) + 1 : 1,
        sourceState,
        sourceCity,
        destinationState,
        destinationCity,
        hatchback: Number(prices.hatchback),
        sedan: Number(prices.sedan),
        sedanPrem: Number(prices.sedanPrem),
        suv: Number(prices.suv),
        suvPlus: Number(prices.suvPlus),
      }
      setRoutes([...routes, newRoute])
    }

    // Reset form
    resetForm()
  }

  // Reset form fields
  const resetForm = () => {
    setSourceState("")
    setSourceCity("")
    setDestinationState("")
    setDestinationCity("")
    setPrices({
      hatchback: "",
      sedan: "",
      sedanPrem: "",
      suv: "",
      suvPlus: "",
    })
    setIsEditing(false)
    setCurrentRouteId(null)
  }

  // Handle edit route
  const handleEditRoute = (route: any) => {
    setSourceState(route.sourceState)
    setSourceCity(route.sourceCity)
    setDestinationState(route.destinationState)
    setDestinationCity(route.destinationCity)
    setPrices({
      hatchback: route.hatchback.toString(),
      sedan: route.sedan.toString(),
      sedanPrem: route.sedanPrem.toString(),
      suv: route.suv.toString(),
      suvPlus: route.suvPlus.toString(),
    })
    setIsEditing(true)
    setCurrentRouteId(route.id)
    setShowAllRoutes(false)
  }

  // Handle delete route
  const handleDeleteRoute = (id: number) => {
    setRoutes(routes.filter((route) => route.id !== id))
  }

  // Handle price change
  const handlePriceChange = (field: string, value: string) => {
    setPrices({
      ...prices,
      [field]: value,
    })
  }

  // Filter routes based on search query
  const filteredRoutes = routes.filter(
    (route) =>
      route.sourceCity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.destinationCity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.sourceState.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.destinationState.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Box sx={{ p: 3, bgcolor: "#f5f7fa", minHeight: "100vh" }}>
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
        <Typography color="text.primary" sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}>
          <LocationOnIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Outstation Routes
        </Typography>
      </Breadcrumbs>

      {/* Header with actions */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Typography variant="h5" component="h1" sx={{ fontWeight: "bold", color: "#333" }}>
          {showAllRoutes ? "All Outstation Routes" : isEditing ? "Edit Route" : "Add New Route"}
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {showAllRoutes ? (
            <>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setShowAllRoutes(false)}
                sx={{
                  bgcolor: "#4caf50",
                  "&:hover": { bgcolor: "#388e3c" },
                  textTransform: "none",
                  borderRadius: "4px",
                }}
              >
                Add New Route
              </Button>
              <TextField
                size="small"
                placeholder="Search routes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: <SearchIcon fontSize="small" sx={{ mr: 1, color: "#757575" }} />,
                }}
                sx={{ bgcolor: "#fff", borderRadius: 1 }}
              />
            </>
          ) : (
            <Button
              variant="outlined"
              onClick={() => {
                resetForm()
                setShowAllRoutes(true)
              }}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": { borderColor: "#1565c0", bgcolor: "#f0f7ff" },
                textTransform: "none",
                borderRadius: "4px",
              }}
            >
              Back to All Routes
            </Button>
          )}
        </Box>
      </Box>

      {showAllRoutes ? (
        // Routes Table
        <Paper
          elevation={0}
          sx={{
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
                  <TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>Source State</TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>Source City</TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>Destination State</TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>Destination City</TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                    Hatchback
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                    Sedan
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                    Sedan Prem.
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                    SUV
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                    SUV+
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRoutes.map((route) => (
                  <TableRow
                    key={route.id}
                    hover
                    sx={{
                      "&:nth-of-type(odd)": { bgcolor: "#fafafa" },
                      transition: "background-color 0.2s",
                      "&:hover": { bgcolor: "#f0f7ff !important" },
                    }}
                  >
                    <TableCell>{route.sourceState}</TableCell>
                    <TableCell>{route.sourceCity}</TableCell>
                    <TableCell>{route.destinationState}</TableCell>
                    <TableCell>{route.destinationCity}</TableCell>
                    <TableCell align="right">₹{route.hatchback}</TableCell>
                    <TableCell align="right">₹{route.sedan}</TableCell>
                    <TableCell align="right">₹{route.sedanPrem}</TableCell>
                    <TableCell align="right">₹{route.suv}</TableCell>
                    <TableCell align="right">₹{route.suvPlus}</TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                        <Tooltip title="Edit">
                          <IconButton
                            size="small"
                            onClick={() => handleEditRoute(route)}
                            sx={{
                              color: "#1976d2",
                              bgcolor: "#e3f2fd",
                              "&:hover": { bgcolor: "#bbdefb" },
                            }}
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            size="small"
                            onClick={() => handleDeleteRoute(route.id)}
                            sx={{
                              color: "#f44336",
                              bgcolor: "#ffebee",
                              "&:hover": { bgcolor: "#ffcdd2" },
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        // Route Form
        <Card sx={{ borderRadius: 2, boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
          <CardContent sx={{ p: 3 }}>
            <Grid container spacing={3}>
              {/* Source State and City */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
                  Source Location
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="source-state-label">Source State</InputLabel>
                      <Select
                        labelId="source-state-label"
                        id="source-state"
                        value={sourceState}
                        label="Source State"
                        onChange={(e) => {
                          setSourceState(e.target.value)
                          setSourceCity("")
                        }}
                      >
                        {states.map((state) => (
                          <MenuItem key={state} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size="small" disabled={!sourceState}>
                      <InputLabel id="source-city-label">Source City</InputLabel>
                      <Select
                        labelId="source-city-label"
                        id="source-city"
                        value={sourceCity}
                        label="Source City"
                        onChange={(e) => setSourceCity(e.target.value)}
                      >
                        {getSourceCities().map((city) => (
                          <MenuItem key={city} value={city}>
                            {city}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              {/* Destination State and City */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
                  Destination Location
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="destination-state-label">Destination State</InputLabel>
                      <Select
                        labelId="destination-state-label"
                        id="destination-state"
                        value={destinationState}
                        label="Destination State"
                        onChange={(e) => {
                          setDestinationState(e.target.value)
                          setDestinationCity("")
                        }}
                      >
                        {states.map((state) => (
                          <MenuItem key={state} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size="small" disabled={!destinationState}>
                      <InputLabel id="destination-city-label">Destination City</InputLabel>
                      <Select
                        labelId="destination-city-label"
                        id="destination-city"
                        value={destinationCity}
                        label="Destination City"
                        onChange={(e) => setDestinationCity(e.target.value)}
                      >
                        {getDestinationCities().map((city) => (
                          <MenuItem key={city} value={city}>
                            {city}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              {/* Route Title */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ my: 2, color: "#1976d2", fontWeight: "bold" }}>
                  {sourceCity && destinationCity
                    ? `${sourceCity} - ${destinationCity}`
                    : "Unknown Source City - Unknown Destination City"}
                </Typography>
              </Grid>

              {/* Car Types and Prices */}
              <Grid item xs={12}>
                <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}>
                  <Table>
                    <TableHead sx={{ bgcolor: "#f5f5f5" }}>
                      <TableRow>
                        <TableCell width="20%" sx={{ fontWeight: "bold" }}>
                          CAR TYPE
                        </TableCell>
                        <TableCell width="16%" align="center" sx={{ fontWeight: "bold" }}>
                          HATCHBACK
                        </TableCell>
                        <TableCell width="16%" align="center" sx={{ fontWeight: "bold" }}>
                          SEDAN
                        </TableCell>
                        <TableCell width="16%" align="center" sx={{ fontWeight: "bold" }}>
                          SEDAN PREM.
                        </TableCell>
                        <TableCell width="16%" align="center" sx={{ fontWeight: "bold" }}>
                          SUV
                        </TableCell>
                        <TableCell width="16%" align="center" sx={{ fontWeight: "bold" }}>
                          SUV+
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>PRICES</TableCell>
                        <TableCell>
                          <TextField
                            fullWidth
                            size="small"
                            type="number"
                            value={prices.hatchback}
                            onChange={(e) => handlePriceChange("hatchback", e.target.value)}
                            InputProps={{
                              startAdornment: <Typography sx={{ mr: 0.5 }}>₹</Typography>,
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            fullWidth
                            size="small"
                            type="number"
                            value={prices.sedan}
                            onChange={(e) => handlePriceChange("sedan", e.target.value)}
                            InputProps={{
                              startAdornment: <Typography sx={{ mr: 0.5 }}>₹</Typography>,
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            fullWidth
                            size="small"
                            type="number"
                            value={prices.sedanPrem}
                            onChange={(e) => handlePriceChange("sedanPrem", e.target.value)}
                            InputProps={{
                              startAdornment: <Typography sx={{ mr: 0.5 }}>₹</Typography>,
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            fullWidth
                            size="small"
                            type="number"
                            value={prices.suv}
                            onChange={(e) => handlePriceChange("suv", e.target.value)}
                            InputProps={{
                              startAdornment: <Typography sx={{ mr: 0.5 }}>₹</Typography>,
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            fullWidth
                            size="small"
                            type="number"
                            value={prices.suvPlus}
                            onChange={(e) => handlePriceChange("suvPlus", e.target.value)}
                            InputProps={{
                              startAdornment: <Typography sx={{ mr: 0.5 }}>₹</Typography>,
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              {/* Action Buttons */}
              <Grid item xs={12} sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={!sourceState || !sourceCity || !destinationState || !destinationCity}
                  sx={{
                    bgcolor: "#4caf50",
                    "&:hover": { bgcolor: "#388e3c" },
                    textTransform: "none",
                    borderRadius: "4px",
                    px: 4,
                  }}
                >
                  {isEditing ? "Update" : "Save"}
                </Button>
                <Button
                  variant="outlined"
                  onClick={resetForm}
                  sx={{
                    borderColor: "#f44336",
                    color: "#f44336",
                    "&:hover": { borderColor: "#d32f2f", bgcolor: "#ffebee" },
                    textTransform: "none",
                    borderRadius: "4px",
                    px: 4,
                  }}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </Box>
  )
}
