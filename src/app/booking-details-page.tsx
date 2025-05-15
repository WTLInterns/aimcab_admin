"use client"
import { useState, useEffect } from "react"
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  IconButton,
  CircularProgress,
  Divider,
  Breadcrumbs,
  Link as MuiLink,
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
  Fade,
} from "@mui/material"
import {
  ArrowBack as ArrowBackIcon,
  LocationOn as LocationOnIcon,
  CalendarToday as CalendarIcon,
  AccessTime as AccessTimeIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  SwapHoriz as SwapHorizIcon,
  CheckCircle as CheckCircleIcon,
  Send as SendIcon,
  Home as HomeIcon,
  ChevronRight as ChevronRightIcon,
  Assignment as AssignmentIcon,
  LocalTaxi as TaxiIcon,
  Business as BusinessIcon,
  DriveEta as DriveEtaIcon,
} from "@mui/icons-material"

// Sample booking data (in a real app, this would come from an API)
const bookingData = {
  bookingId: "AIM174722004131",
  name: "Hina Shaikh",
  contact: "9876543234",
  email: "hina.sk25@gmail.com",
  pickupLocation: "Pune, Maharashtra, India",
  dropLocation: "Chandur Bazar, Maharashtra 444704, India",
  tripType: "One Way",
  date: "2025-05-15",
  time: "18:23",
  status: "Pending",
  distance: "380 km",
  duration: "7h 30m",
  fare: "₹4,500",
  vehicle: "Sedan",
  paymentStatus: "Pending",
  paymentMethod: "Online",
}

// Interface for dialog states
interface DialogState {
  vendor: boolean
  driver: boolean
  cab: boolean
  mail: boolean
}

export default function BookingDetailsPage() {
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState<DialogState>({
    vendor: false,
    driver: false,
    cab: false,
    mail: false,
  })

  const [selectedVendor, setSelectedVendor] = useState("")
  const [selectedDriver, setSelectedDriver] = useState("")
  const [selectedCab, setSelectedCab] = useState("")
  const [mailSubject, setMailSubject] = useState("")
  const [mailBody, setMailBody] = useState("")

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleBack = () => {
    console.log("Navigate back to bookings list")
    // In a real app, you would use router.back() or similar
  }

  const handleDialogOpen = (dialogType: keyof DialogState) => {
    setDialogOpen({ ...dialogOpen, [dialogType]: true })
  }

  const handleDialogClose = (dialogType: keyof DialogState) => {
    setDialogOpen({ ...dialogOpen, [dialogType]: false })
  }

  const handleVendorChange = (event: SelectChangeEvent) => {
    setSelectedVendor(event.target.value)
  }

  const handleDriverChange = (event: SelectChangeEvent) => {
    setSelectedDriver(event.target.value)
  }

  const handleCabChange = (event: SelectChangeEvent) => {
    setSelectedCab(event.target.value)
  }

  const handleAssignVendor = () => {
    console.log(`Assigned vendor: ${selectedVendor}`)
    handleDialogClose("vendor")
  }

  const handleAssignDriver = () => {
    console.log(`Assigned driver: ${selectedDriver}`)
    handleDialogClose("driver")
  }

  const handleAssignCab = () => {
    console.log(`Assigned cab: ${selectedCab}`)
    handleDialogClose("cab")
  }

  const handleSendMail = () => {
    console.log(`Sending mail with subject: ${mailSubject}`)
    handleDialogClose("mail")
  }

  const handleTripComplete = () => {
    console.log("Trip marked as complete")
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Fade in={!loading}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs separator={<ChevronRightIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 3 }}>
          <MuiLink
            component="button"
            onClick={handleBack}
            underline="hover"
            sx={{ display: "flex", alignItems: "center", color: "text.primary", cursor: "pointer" }}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </MuiLink>
          <MuiLink
            component="button"
            onClick={handleBack}
            underline="hover"
            sx={{ display: "flex", alignItems: "center", color: "text.primary", cursor: "pointer" }}
          >
            <AssignmentIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            All Bookings
          </MuiLink>
          <MuiLink
            component="button"
            onClick={handleBack}
            underline="hover"
            sx={{ display: "flex", alignItems: "center", color: "text.primary", cursor: "pointer" }}
          >
            <AssignmentIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Online Bookings
          </MuiLink>
          <Typography color="text.primary" sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
            <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {bookingData.name}
          </Typography>
        </Breadcrumbs>

        {/* Header with back button and title */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <IconButton
            onClick={handleBack}
            sx={{
              mr: 2,
              bgcolor: "#f5f5f5",
              "&:hover": { bgcolor: "#e0e0e0" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", color: "#333" }}>
            Client's Booking Details
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            startIcon={<BusinessIcon />}
            onClick={() => handleDialogOpen("vendor")}
            sx={{
              bgcolor: "#607d8b",
              "&:hover": { bgcolor: "#455a64" },
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Assign Vendor
          </Button>
          <Button
            variant="contained"
            startIcon={<DriveEtaIcon />}
            onClick={() => handleDialogOpen("driver")}
            sx={{
              bgcolor: "#5c6bc0",
              "&:hover": { bgcolor: "#3f51b5" },
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Assign Driver
          </Button>
          <Button
            variant="contained"
            startIcon={<TaxiIcon />}
            onClick={() => handleDialogOpen("cab")}
            sx={{
              bgcolor: "#ffc107",
              "&:hover": { bgcolor: "#ffb300" },
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textTransform: "none",
              fontWeight: "bold",
              color: "#212121",
            }}
          >
            Assign Cab
          </Button>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Left Column - Booking Details */}
          <Grid item xs={12} md={8}>
            <Card
              elevation={0}
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #e0e0e0",
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  p: 2,
                  zIndex: 1,
                }}
              >
                <Chip
                  label={bookingData.status}
                  color={bookingData.status === "Pending" ? "warning" : "success"}
                  sx={{
                    fontWeight: "bold",
                    borderRadius: "8px",
                    px: 1,
                  }}
                />
              </Box>
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ p: 3, bgcolor: "#f8f9fa", borderBottom: "1px solid #e0e0e0" }}>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", color: "#1976d2", mb: 1 }}>
                    Booking Information
                  </Typography>
                </Box>

                <Box sx={{ p: 3 }}>
                  <Grid container spacing={3}>
                    {/* Booking ID */}
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Booking ID
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#333" }}>
                          {bookingData.bookingId}
                        </Typography>
                      </Box>
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Name
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            sx={{
                              bgcolor: "#bbdefb",
                              color: "#1976d2",
                              width: 32,
                              height: 32,
                              mr: 1,
                            }}
                          >
                            {bookingData.name.charAt(0)}
                          </Avatar>
                          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#333" }}>
                            {bookingData.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Contact */}
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Contact
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <PhoneIcon sx={{ color: "#4caf50", mr: 1, fontSize: 20 }} />
                          <Typography variant="body1" sx={{ color: "#333" }}>
                            {bookingData.contact}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Email */}
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Email
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <EmailIcon sx={{ color: "#f57c00", mr: 1, fontSize: 20 }} />
                          <Typography variant="body1" sx={{ color: "#333" }}>
                            {bookingData.email}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Pickup Location */}
                    <Grid item xs={12}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Pickup Location
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                          <LocationOnIcon sx={{ color: "#2196f3", mr: 1, mt: 0.5, fontSize: 20 }} />
                          <Typography variant="body1" sx={{ color: "#333" }}>
                            {bookingData.pickupLocation}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Drop Location */}
                    <Grid item xs={12}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Drop Location
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                          <LocationOnIcon sx={{ color: "#e91e63", mr: 1, mt: 0.5, fontSize: 20 }} />
                          <Typography variant="body1" sx={{ color: "#333" }}>
                            {bookingData.dropLocation}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Trip Type */}
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Trip Type
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <SwapHorizIcon sx={{ color: "#673ab7", mr: 1, fontSize: 20 }} />
                          <Typography variant="body1" sx={{ color: "#333" }}>
                            {bookingData.tripType}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Date */}
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Date
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <CalendarIcon sx={{ color: "#009688", mr: 1, fontSize: 20 }} />
                          <Typography variant="body1" sx={{ color: "#333" }}>
                            {bookingData.date}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Time */}
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Time
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <AccessTimeIcon sx={{ color: "#ff5722", mr: 1, fontSize: 20 }} />
                          <Typography variant="body1" sx={{ color: "#333" }}>
                            {bookingData.time}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - Trip Summary and Actions */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              {/* Trip Summary Card */}
              <Grid item xs={12}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #e0e0e0",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box sx={{ p: 3, bgcolor: "#f8f9fa", borderBottom: "1px solid #e0e0e0" }}>
                      <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                        Trip Summary
                      </Typography>
                    </Box>

                    <Box sx={{ p: 3 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Distance
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          {bookingData.distance}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Duration
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          {bookingData.duration}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Vehicle Type
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          {bookingData.vehicle}
                        </Typography>
                      </Box>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Payment Method
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          {bookingData.paymentMethod}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Payment Status
                        </Typography>
                        <Chip
                          label={bookingData.paymentStatus}
                          size="small"
                          color={bookingData.paymentStatus === "Paid" ? "success" : "warning"}
                          sx={{ fontWeight: "bold" }}
                        />
                      </Box>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          Total Fare
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                          {bookingData.fare}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Action Buttons Card */}
              <Grid item xs={12}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #e0e0e0",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box sx={{ p: 3, bgcolor: "#f8f9fa", borderBottom: "1px solid #e0e0e0" }}>
                      <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                        Actions
                      </Typography>
                    </Box>

                    <Box sx={{ p: 3 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<AssignmentIcon />}
                        sx={{
                          mb: 2,
                          borderRadius: "8px",
                          borderColor: "#1976d2",
                          color: "#1976d2",
                          "&:hover": { borderColor: "#1565c0", bgcolor: "#f0f7ff" },
                          textTransform: "none",
                          fontWeight: "bold",
                          py: 1.5,
                        }}
                      >
                        Show Details
                      </Button>
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<CheckCircleIcon />}
                        onClick={handleTripComplete}
                        sx={{
                          mb: 2,
                          borderRadius: "8px",
                          bgcolor: "#4caf50",
                          "&:hover": { bgcolor: "#388e3c" },
                          textTransform: "none",
                          fontWeight: "bold",
                          py: 1.5,
                        }}
                      >
                        Trip Complete
                      </Button>
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<SendIcon />}
                        onClick={() => handleDialogOpen("mail")}
                        sx={{
                          borderRadius: "8px",
                          bgcolor: "#2196f3",
                          "&:hover": { bgcolor: "#1976d2" },
                          textTransform: "none",
                          fontWeight: "bold",
                          py: 1.5,
                        }}
                      >
                        Send Mail
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Assign Vendor Dialog */}
        <Dialog open={dialogOpen.vendor} onClose={() => handleDialogClose("vendor")} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ fontWeight: "bold", bgcolor: "#f8f9fa", borderBottom: "1px solid #e0e0e0" }}>
            Assign Vendor
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="vendor-select-label">Select Vendor</InputLabel>
              <Select
                labelId="vendor-select-label"
                value={selectedVendor}
                label="Select Vendor"
                onChange={handleVendorChange}
              >
                <MenuItem value="vendor1">Vendor 1</MenuItem>
                <MenuItem value="vendor2">Vendor 2</MenuItem>
                <MenuItem value="vendor3">Vendor 3</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ p: 2, borderTop: "1px solid #e0e0e0" }}>
            <Button onClick={() => handleDialogClose("vendor")} variant="outlined" sx={{ borderRadius: "8px" }}>
              Cancel
            </Button>
            <Button
              onClick={handleAssignVendor}
              variant="contained"
              sx={{ borderRadius: "8px", bgcolor: "#607d8b", "&:hover": { bgcolor: "#455a64" } }}
            >
              Assign
            </Button>
          </DialogActions>
        </Dialog>

        {/* Assign Driver Dialog */}
        <Dialog open={dialogOpen.driver} onClose={() => handleDialogClose("driver")} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ fontWeight: "bold", bgcolor: "#f8f9fa", borderBottom: "1px solid #e0e0e0" }}>
            Assign Driver
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="driver-select-label">Select Driver</InputLabel>
              <Select
                labelId="driver-select-label"
                value={selectedDriver}
                label="Select Driver"
                onChange={handleDriverChange}
              >
                <MenuItem value="driver1">Driver 1</MenuItem>
                <MenuItem value="driver2">Driver 2</MenuItem>
                <MenuItem value="driver3">Driver 3</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ p: 2, borderTop: "1px solid #e0e0e0" }}>
            <Button onClick={() => handleDialogClose("driver")} variant="outlined" sx={{ borderRadius: "8px" }}>
              Cancel
            </Button>
            <Button
              onClick={handleAssignDriver}
              variant="contained"
              sx={{ borderRadius: "8px", bgcolor: "#5c6bc0", "&:hover": { bgcolor: "#3f51b5" } }}
            >
              Assign
            </Button>
          </DialogActions>
        </Dialog>

        {/* Assign Cab Dialog */}
        <Dialog open={dialogOpen.cab} onClose={() => handleDialogClose("cab")} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ fontWeight: "bold", bgcolor: "#f8f9fa", borderBottom: "1px solid #e0e0e0" }}>
            Assign Cab
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="cab-select-label">Select Cab</InputLabel>
              <Select labelId="cab-select-label" value={selectedCab} label="Select Cab" onChange={handleCabChange}>
                <MenuItem value="cab1">Sedan - MH12AB1234</MenuItem>
                <MenuItem value="cab2">SUV - MH12CD5678</MenuItem>
                <MenuItem value="cab3">Luxury - MH12EF9012</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ p: 2, borderTop: "1px solid #e0e0e0" }}>
            <Button onClick={() => handleDialogClose("cab")} variant="outlined" sx={{ borderRadius: "8px" }}>
              Cancel
            </Button>
            <Button
              onClick={handleAssignCab}
              variant="contained"
              sx={{ borderRadius: "8px", bgcolor: "#ffc107", "&:hover": { bgcolor: "#ffb300" }, color: "#212121" }}
            >
              Assign
            </Button>
          </DialogActions>
        </Dialog>

        {/* Send Mail Dialog */}
        <Dialog open={dialogOpen.mail} onClose={() => handleDialogClose("mail")} maxWidth="md" fullWidth>
          <DialogTitle sx={{ fontWeight: "bold", bgcolor: "#f8f9fa", borderBottom: "1px solid #e0e0e0" }}>
            Send Email to Client
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            <TextField fullWidth label="To" value={bookingData.email} disabled sx={{ mb: 2 }} />
            <TextField
              fullWidth
              label="Subject"
              value={mailSubject}
              onChange={(e) => setMailSubject(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={6}
              value={mailBody}
              onChange={(e) => setMailBody(e.target.value)}
            />
          </DialogContent>
          <DialogActions sx={{ p: 2, borderTop: "1px solid #e0e0e0" }}>
            <Button onClick={() => handleDialogClose("mail")} variant="outlined" sx={{ borderRadius: "8px" }}>
              Cancel
            </Button>
            <Button
              onClick={handleSendMail}
              variant="contained"
              startIcon={<SendIcon />}
              sx={{ borderRadius: "8px", bgcolor: "#2196f3", "&:hover": { bgcolor: "#1976d2" } }}
            >
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Fade>
  )
}
