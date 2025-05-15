"use client";
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  CircularProgress,
  Tabs,
  Tab,
  Divider,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  TextField,
  InputAdornment,
  Avatar,
  Badge,
  Chip,
  FormControl,
  Select,
  SelectChangeEvent,
  Breadcrumbs,
  Link as MuiLink,
  Tooltip,
} from '@mui/material';
import { 
  Dashboard as DashboardIcon, 
  DirectionsCar as CarIcon, 
  Person as PersonIcon, 
  AttachMoney as MoneyIcon,
  MoreVert as MoreVertIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
  LocalTaxi as TaxiIcon,
  Assignment as AssignmentIcon,
  LocationOn as LocationOnIcon,
  CalendarToday as CalendarIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  Help as HelpIcon,
  DateRange as DateRangeIcon,
  Cancel as CancelIcon,
  ExpandMore,
  ExpandLess,
  NavigateNext as NavigateNextIcon,
  FilterList as FilterListIcon,
  GetApp as DownloadIcon,
  Print as PrintIcon,
  Home as HomeIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { 
  BarChart, Bar, 
  LineChart, Line, 
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, 
  Tooltip as RechartsTooltip, Legend, ResponsiveContainer 
} from 'recharts';

// Sample data for charts
const monthlyData = [
  { name: 'Jan', bookings: 65, revenue: 24000 },
  { name: 'Feb', bookings: 59, revenue: 22000 },
  { name: 'Mar', bookings: 80, revenue: 29000 },
  { name: 'Apr', bookings: 81, revenue: 30000 },
  { name: 'May', bookings: 56, revenue: 21000 },
  { name: 'Jun', bookings: 55, revenue: 20000 },
];

const bookingStatusData = [
  { name: 'Pending', value: 2086 },
  { name: 'Ongoing', value: 9 },
  { name: 'Completed', value: 89 },
  { name: 'Cancelled', value: 16 },
];

const COLORS = ['#ffc658', '#3f51b5', '#4caf50', '#f44336'];

// Type for PieChart label
interface PieChartLabel {
  name: string;
  percent: number;
}

// Update the sidebar menu items to include nested items for All Bookings
const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, active: false },
  { 
    text: 'All Bookings', 
    icon: <AssignmentIcon />, 
    active: true,
    subItems: [
      { text: 'Online Bookings', icon: <AssignmentIcon /> },
      { text: 'Custom Bookings', icon: <AssignmentIcon /> },
      { text: 'Cancelled Bookings', icon: <CancelIcon /> },
    ]
  },
  { text: 'Website Dashboard', icon: <BusinessIcon /> },
  { text: 'Outstation Roots', icon: <LocationOnIcon /> },
  { text: 'Fleet', icon: <TaxiIcon /> },
  { text: 'B2B', icon: <PeopleIcon /> },
  { text: 'Vendors', icon: <BusinessIcon /> },
  { text: 'Accountant', icon: <MoneyIcon /> },
  { text: 'Custom Bookings', icon: <AssignmentIcon /> },
  { text: 'Complaints', icon: <AssignmentIcon /> },
  { text: 'Queries', icon: <HelpIcon /> },
  { text: 'New', icon: <AssignmentIcon /> },
  { text: 'Notifications', icon: <NotificationsIcon /> },
];

const drawerWidth = 240;

// Sample data for online bookings
const onlineBookingsData = [
  { 
    id: 1,
    bookingId: 'AIM174722004131', 
    userName: 'Hina Shaikh', 
    date: '2025-05-15', 
    time: '18:23', 
    tripType: 'One Way', 
    source: 'Pune, Maharashtra, India', 
    destination: 'Chandur Bazar, Maharashtra 444704, India',
    status: 'Pending'
  },
  { 
    id: 2,
    bookingId: 'AIM174722004131', 
    userName: 'Hina Shaikh', 
    date: '2025-05-15', 
    time: '18:23', 
    tripType: 'One Way', 
    source: 'Pune, Maharashtra, India', 
    destination: 'Chandur Bazar, Maharashtra 444704, India',
    status: 'Pending'
  },
  { 
    id: 3,
    bookingId: 'AIM174721882872', 
    userName: 'Hina Shaikh', 
    date: '2025-05-08', 
    time: '16:07', 
    tripType: 'One Way', 
    source: 'Kharadi, Pune, Maharashtra, India', 
    destination: 'Borivali, Mumbai, Maharashtra, India',
    status: 'Pending'
  },
  { 
    id: 4,
    bookingId: 'AIM174721882872', 
    userName: 'Hina Shaikh', 
    date: '2025-05-08', 
    time: '16:07', 
    tripType: 'One Way', 
    source: 'Kharadi, Pune, Maharashtra, India', 
    destination: 'Borivali, Mumbai, Maharashtra, India',
    status: 'Pending'
  },
  { 
    id: 5,
    bookingId: 'AIM174705205659', 
    userName: 'Aakib', 
    date: '2025-05-29', 
    time: '12:00 AM', 
    tripType: 'One Way', 
    source: 'Kharadi by pass, Maharashtra State Highway 27, Tukaram Nagar, Kharadi, Pune, Maharashtra, India', 
    destination: 'Mumbai Central Railway Station Building, Mumbai Central, Mumbai, Maharashtra, India',
    status: 'Pending'
  },
  { 
    id: 6,
    bookingId: 'AIM174575272528', 
    userName: 'waseb unvale', 
    date: '2025-04-28', 
    time: '4:46 PM', 
    tripType: 'One Way', 
    source: 'Kharadi, Pune, Maharashtra, India', 
    destination: 'Mumbai, Maharashtra, India',
    status: 'Pending'
  },
  { 
    id: 7,
    bookingId: 'AIM175429550985', 
    userName: 'rhugvedh', 
    date: '2025-04-17', 
    time: '23:03', 
    tripType: 'One Way', 
    source: 'Pune, Maharashtra, India', 
    destination: 'Mumbai, Maharashtra, India',
    status: 'Pending'
  },
];

// Update the AdminDashboard component
// Add missing state variables
export default function AdminDashboard() {
  const [totalBookings, setTotalBookings] = useState(2185);
  const [totalPendingBookings, setTotalPendingBookings] = useState(2086);
  const [totalOngoingBookings, setTotalOngoingBookings] = useState(9);
  const [totalCompletedBookings, setTotalCompletedBookings] = useState(89);
  const [totalCancelledBookings, setTotalCancelledBookings] = useState(16);
  const [totalDrivers, setTotalDrivers] = useState(22);
  const [totalB2B, setTotalB2B] = useState(4);
  const [totalRevenue, setTotalRevenue] = useState(411461);
  const [loading, setLoading] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState('');
  // Add these missing state variables
  const [expandedMenu, setExpandedMenu] = useState<string | null>('All Bookings');
  const [activeView, setActiveView] = useState<string>('Dashboard');
  const [showAllBookings, setShowAllBookings] = useState(false);
  
  // New state variables for Online Bookings view
  const [entriesPerPage, setEntriesPerPage] = useState<string>('10');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Update the recentBookings data
  const updatedRecentBookings = [
    { id: 'AIM174722004131', customer: 'Hina Shaikh', from: 'Pune, Maharashtra', to: 'Chandur Bazar, Maharashtra', date: '2025-05-15 18:23', amount: '₹0', status: 'Pending', type: 'One Way' },
    { id: 'AIM174722004132', customer: 'Jane Smith', from: 'Chicago', to: 'Detroit', date: '2023-06-14', amount: '₹95', status: 'In Progress', type: 'Round Trip' },
    { id: 'AIM174721882872', customer: 'Hina Shaikh', from: 'Kharadi, Pune', to: 'Borivali, Mumbai', date: '2025-05-08 16:07', amount: '₹0', status: 'Pending', type: 'One Way' },
    { id: 'AIM174722004134', customer: 'Emily Davis', from: 'Seattle', to: 'Portland', date: '2023-06-12', amount: '₹85', status: 'Completed', type: 'One Way' },
    { id: 'AIM174722004135', customer: 'Michael Brown', from: 'Los Angeles', to: 'San Diego', date: '2023-06-11', amount: '₹110', status: 'Completed', type: 'Round Trip' },
  ];

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, bookingId: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedBooking(bookingId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedBooking(null);
  };

  const handleViewBooking = () => {
    console.log(`View booking ${selectedBooking}`);
    handleMenuClose();
  };

  const handleEditBooking = () => {
    console.log(`Edit booking ${selectedBooking}`);
    handleMenuClose();
  };

  const handleDeleteBooking = () => {
    console.log(`Delete booking ${selectedBooking}`);
    handleMenuClose();
  };

  const refreshData = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    // Initial data load
    refreshData();
  }, []);

  // Add the missing functions
  const handleMenuItemClick = (text: string) => {
    if (text === 'All Bookings') {
      setExpandedMenu(expandedMenu === 'All Bookings' ? null : 'All Bookings');
    } else {
      setActiveView(text);
      setShowAllBookings(text === 'Online Bookings');
    }
  };

  const handleViewAllBookings = () => {
    setActiveView('Online Bookings');
    setShowAllBookings(true);
  };

  const handleBackToOverview = () => {
    setActiveView('Dashboard');
    setShowAllBookings(false);
  };

  // New handlers for Online Bookings view
  const handleEntriesPerPageChange = (event: SelectChangeEvent) => {
    setEntriesPerPage(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleActionClick = (id: number) => {
    console.log(`Action clicked for booking ID: ${id}`);
  };

  const handleDeleteClick = (id: number) => {
    console.log(`Delete clicked for booking ID: ${id}`);
  };

  // Render the Online Bookings view
  const renderOnlineBookingsView = () => {
    return (
      <Container maxWidth={false} sx={{ mt: 3, mb: 4, px: 3 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs 
          separator={<ChevronRightIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <MuiLink 
            component="button" 
            onClick={handleBackToOverview}
            underline="hover" 
            sx={{ display: 'flex', alignItems: 'center', color: 'text.primary', cursor: 'pointer' }}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </MuiLink>
          <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center' }}>
            <AssignmentIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            All Bookings
          </Typography>
          <Typography color="text.primary" sx={{ fontWeight: 'bold' }}>
            Online Bookings
          </Typography>
        </Breadcrumbs>

        {/* Header with title and actions */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 3,
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 }
        }}>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#333' }}>
            Online Bookings
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button 
              variant="contained" 
              startIcon={<DownloadIcon />}
              sx={{ 
                bgcolor: '#4caf50', 
                '&:hover': { bgcolor: '#388e3c' },
                textTransform: 'none',
                borderRadius: '4px'
              }}
            >
              Export
            </Button>
            <Button 
              variant="contained" 
              startIcon={<PrintIcon />}
              sx={{ 
                bgcolor: '#2196f3', 
                '&:hover': { bgcolor: '#1976d2' },
                textTransform: 'none',
                borderRadius: '4px'
              }}
            >
              Print
            </Button>
            <Button 
              variant="contained" 
              startIcon={<FilterListIcon />}
              sx={{ 
                bgcolor: '#ff9800', 
                '&:hover': { bgcolor: '#f57c00' },
                textTransform: 'none',
                borderRadius: '4px'
              }}
            >
              Filter
            </Button>
          </Box>
        </Box>

        {/* Table controls */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography>Show</Typography>
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <Select
                value={entriesPerPage}
                onChange={handleEntriesPerPageChange}
                sx={{ 
                  '& .MuiSelect-select': { 
                    py: 0.5, 
                    bgcolor: '#f5f5f5',
                    borderRadius: 1
                  }
                }}
              >
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="25">25</MenuItem>
                <MenuItem value="50">50</MenuItem>
                <MenuItem value="100">100</MenuItem>
              </Select>
            </FormControl>
            <Typography>entries</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography>Search:</Typography>
            <TextField
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  bgcolor: '#f5f5f5',
                  borderRadius: 1
                }
              }}
            />
          </Box>
        </Box>

        {/* Bookings Table */}
        <Paper 
          elevation={0} 
          sx={{ 
            mb: 4, 
            borderRadius: 2, 
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}
        >
          <TableContainer>
            <Table sx={{ minWidth: 1200 }}>
              <TableHead sx={{ bgcolor: '#f0f7ff' }}>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>#</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>Booking ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>User Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>Time</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>Trip Type</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>Source</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>Destination</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>Action</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>Status</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {onlineBookingsData.map((booking) => (
                  <TableRow 
                    key={booking.id} 
                    hover
                    sx={{ 
                      '&:nth-of-type(odd)': { bgcolor: '#fafafa' },
                      transition: 'background-color 0.2s',
                      '&:hover': { bgcolor: '#f0f7ff !important' }
                    }}
                  >
                    <TableCell align="center">{booking.id}</TableCell>
                    <TableCell>{booking.bookingId}</TableCell>
                    <TableCell>{booking.userName}</TableCell>
                    <TableCell>{booking.date}</TableCell>
                    <TableCell>{booking.time}</TableCell>
                    <TableCell>{booking.tripType}</TableCell>
                    <TableCell sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      <Tooltip title={booking.source} placement="top">
                        <span>{booking.source}</span>
                      </Tooltip>
                    </TableCell>
                    <TableCell sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      <Tooltip title={booking.destination} placement="top">
                        <span>{booking.destination}</span>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton 
                        size="small" 
                        onClick={() => handleActionClick(booking.id)}
                        sx={{ 
                          color: '#1976d2',
                          bgcolor: '#e3f2fd',
                          '&:hover': { bgcolor: '#bbdefb' }
                        }}
                      >
                        <NavigateNextIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        label={booking.status}
                        size="small"
                        sx={{
                          bgcolor: '#fffde7',
                          color: '#fbc02d',
                          fontWeight: 'bold',
                          fontSize: '0.7rem',
                          borderRadius: '4px',
                          py: 1.5
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton 
                        size="small" 
                        onClick={() => handleDeleteClick(booking.id)}
                        sx={{ 
                          color: '#f44336',
                          bgcolor: '#ffebee',
                          '&:hover': { bgcolor: '#ffcdd2' }
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
          {/* Pagination */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            p: 2,
            borderTop: '1px solid #e0e0e0',
            bgcolor: '#f9f9f9'
          }}>
            <Typography variant="body2" color="text.secondary">
              Showing 1 to {onlineBookingsData.length} of {onlineBookingsData.length} entries
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button 
                variant="outlined" 
                size="small" 
                disabled
                sx={{ 
                  borderColor: '#e0e0e0',
                  color: '#757575',
                  '&.Mui-disabled': { 
                    borderColor: '#e0e0e0',
                    color: '#bdbdbd'
                  }
                }}
              >
                Previous
              </Button>
              <Button 
                variant="contained" 
                size="small"
                sx={{ 
                  bgcolor: '#1976d2',
                  '&:hover': { bgcolor: '#1565c0' }
                }}
              >
                1
              </Button>
              <Button 
                variant="outlined" 
                size="small" 
                disabled
                sx={{ 
                  borderColor: '#e0e0e0',
                  color: '#757575',
                  '&.Mui-disabled': { 
                    borderColor: '#e0e0e0',
                    color: '#bdbdbd'
                  }
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    );
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f5f7fa' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#ffffff',
            borderRight: '1px solid #e0e0e0',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff5722' }}>
            <TaxiIcon sx={{ mr: 1, color: '#ff5722' }} />
            AimCab
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#757575', fontWeight: 'bold' }}>
            ADMIN ACCESS
          </Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem 
                button 
                onClick={() => handleMenuItemClick(item.text)}
                sx={{ 
                  mb: 0.5, 
                  borderRadius: '8px', 
                  mx: 1,
                  bgcolor: (item.active || activeView === item.text) ? '#f0f7ff' : 'transparent',
                  '&:hover': { bgcolor: '#f5f5f5' },
                  color: (item.active || activeView === item.text) ? '#1976d2' : 'inherit'
                }}
              >
                <ListItemIcon sx={{ color: (item.active || activeView === item.text) ? '#1976d2' : 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
                {item.subItems && (
                  <IconButton edge="end" size="small">
                    {expandedMenu === item.text ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                )}
              </ListItem>
              
              {/* Render sub-items if this menu item is expanded */}
              {item.subItems && expandedMenu === item.text && (
                <List disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem 
                      button 
                      key={subIndex}
                      onClick={() => handleMenuItemClick(subItem.text)}
                      sx={{ 
                        pl: 4, 
                        mb: 0.5,
                        borderRadius: '8px', 
                        mx: 1,
                        bgcolor: activeView === subItem.text ? '#f0f7ff' : 'transparent',
                        '&:hover': { bgcolor: '#f5f5f5' },
                        color: activeView === subItem.text ? '#1976d2' : 'inherit'
                      }}
                    >
                      <ListItemIcon sx={{ color: activeView === subItem.text ? '#1976d2' : 'inherit', minWidth: '35px' }}>
                        {subItem.icon}
                      </ListItemIcon>
                      <ListItemText 
                        primary={subItem.text} 
                        primaryTypographyProps={{ 
                          fontSize: '0.9rem',
                          fontWeight: activeView === subItem.text ? 'bold' : 'normal'
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 0, overflow: 'auto' }}>
        {/* App Bar */}
        <AppBar position="static" color="default" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #e0e0e0' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mr: 2 }}>
                <TextField
                  size="small"
                  placeholder="Search..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: '#f5f5f5', borderRadius: 1 }}
                />
              </Box>
              <IconButton color="inherit">
                <Badge badgeContent={2} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" sx={{ ml: 1 }}>
                <Badge badgeContent={4} color="primary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" sx={{ ml: 1 }}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: '#1976d2' }}>A</Avatar>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Conditional rendering based on activeView */}
        {activeView === 'Online Bookings' ? (
          renderOnlineBookingsView()
        ) : (
          <Container maxWidth={false} sx={{ mt: 4, mb: 4, px: 3 }}>
            {/* Date Filter */}
            <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ mr: 2 }}>DATE:</Typography>
              <TextField
                type="date"
                size="small"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                sx={{ mr: 2 }}
              />
              <Button variant="contained" size="small" sx={{ bgcolor: '#4caf50', '&:hover': { bgcolor: '#388e3c' } }}>
                Go
              </Button>
            </Box>
            
            {/* Summary Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'row',
                  alignItems: 'center', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#e3f2fd'
                  }}>
                    <MoneyIcon sx={{ fontSize: 36, color: '#1976d2' }} />
                  </Box>
                  <CardContent sx={{ p: 2, pb: '16px !important', flexGrow: 1 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                      ₹{totalRevenue.toLocaleString()}/-
                    </Typography>
                    <Typography color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                      Business
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'row',
                  alignItems: 'center', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#e8f5e9'
                  }}>
                    <CarIcon sx={{ fontSize: 36, color: '#4caf50' }} />
                  </Box>
                  <CardContent sx={{ p: 2, pb: '16px !important', flexGrow: 1 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {totalBookings}
                    </Typography>
                    <Typography color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                      All Trips
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'row',
                  alignItems: 'center', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#fff8e1'
                  }}>
                    <CalendarIcon sx={{ fontSize: 36, color: '#ff9800' }} />
                  </Box>
                  <CardContent sx={{ p: 2, pb: '16px !important', flexGrow: 1 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {totalPendingBookings}
                    </Typography>
                    <Typography color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                      All Pending Trips
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'row',
                  alignItems: 'center', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#e8eaf6'
                  }}>
                    <LocationOnIcon sx={{ fontSize: 36, color: '#3f51b5' }} />
                  </Box>
                  <CardContent sx={{ p: 2, pb: '16px !important', flexGrow: 1 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {totalOngoingBookings}
                    </Typography>
                    <Typography color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                      All Ongoing Trips
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'row',
                  alignItems: 'center', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#e0f2f1'
                  }}>
                    <AssignmentIcon sx={{ fontSize: 36, color: '#009688' }} />
                  </Box>
                  <CardContent sx={{ p: 2, pb: '16px !important', flexGrow: 1 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {totalCompletedBookings}
                    </Typography>
                    <Typography color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                      All Completed Trips
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'row',
                  alignItems: 'center', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#fce4ec'
                  }}>
                    <CancelIcon sx={{ fontSize: 36, color: '#e91e63' }} />
                  </Box>
                  <CardContent sx={{ p: 2, pb: '16px !important', flexGrow: 1 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {totalCancelledBookings}
                    </Typography>
                    <Typography color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                      All Cancelled Trips
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'row',
                  alignItems: 'center', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#f3e5f5'
                  }}>
                    <PersonIcon sx={{ fontSize: 36, color: '#9c27b0' }} />
                  </Box>
                  <CardContent sx={{ p: 2, pb: '16px !important', flexGrow: 1 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {totalDrivers}
                    </Typography>
                    <Typography color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                      Vendors
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'row',
                  alignItems: 'center', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#ede7f6'
                  }}>
                    <BusinessIcon sx={{ fontSize: 36, color: '#673ab7' }} />
                  </Box>
                  <CardContent sx={{ p: 2, pb: '16px !important', flexGrow: 1 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {totalB2B}
                    </Typography>
                    <Typography color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                      B2B
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
            {/* Recent Bookings Table */}
            <Paper sx={{ mb: 4, boxShadow: '0 2px 10px rgba(0,0,0,0.08)', borderRadius: 2, overflow: 'hidden' }}>
              <Box sx={{ p: 2, bgcolor: '#f9f9f9', borderBottom: '1px solid #e0e0e0' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    RECENTLY BOOKINGS
                  </Typography>
                  <Button 
                    variant="contained" 
                    size="small" 
                    onClick={handleViewAllBookings}
                    sx={{ 
                      bgcolor: '#2196f3', 
                      '&:hover': { bgcolor: '#1976d2' },
                      textTransform: 'none',
                      borderRadius: '4px'
                    }}
                  >
                    VIEW All &gt;&gt;
                  </Button>
                </Box>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>BOOKING ID</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>NAME</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>DATETIME</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>TRIP TYPE</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>PICKUP</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>DROP</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>BASE AMOUNT</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>OFFER AMOUNT</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>PARTIAL</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>PAID</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>REMAINING</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>STATUS</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {updatedRecentBookings.map((booking) => (
                      <TableRow key={booking.id} hover>
                        <TableCell>{booking.id}</TableCell>
                        <TableCell>{booking.customer}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>{booking.type}</TableCell>
                        <TableCell>{booking.from}</TableCell>
                        <TableCell>{booking.to}</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>
                          <Chip
                            label={booking.status}
                            size="small"
                            sx={{
                              bgcolor: 
                                booking.status === 'Completed' ? '#e8f5e9' : 
                                booking.status === 'In Progress' ? '#fff8e1' : 
                                booking.status === 'Pending' ? '#fffde7' : '#ffebee',
                              color: 
                                booking.status === 'Completed' ? '#2e7d32' : 
                                booking.status === 'In Progress' ? '#f57c00' : 
                                booking.status === 'Pending' ? '#fbc02d' : '#c62828',
                              fontWeight: 'bold',
                              fontSize: '0.7rem',
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            
            {/* Charts Section with Tabs */}
            <Paper sx={{ mb: 4, boxShadow: '0 2px 10px rgba(0,0,0,0.08)', borderRadius: 2, overflow: 'hidden' }}>
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange} 
                centered 
                sx={{ 
                  borderBottom: 1, 
                  borderColor: 'divider',
                  bgcolor: '#f9f9f9',
                  '& .MuiTab-root': { 
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  },
                  '& .Mui-selected': {
                    color: '#1976d2'
                  }
                }}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: '#1976d2'
                  }
                }}
              >
                <Tab label="Booking Analytics" />
                <Tab label="Revenue Analytics" />
                <Tab label="Booking Status" />
              </Tabs>
              
              <Box p={3}>
                {tabValue === 0 && (
                  <Box height={350}>
                    <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                      Monthly Bookings
                    </Typography>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={monthlyData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" tick={{ fill: '#666' }} />
                        <YAxis tick={{ fill: '#666' }} />
                        <RechartsTooltip 
                          contentStyle={{ 
                            backgroundColor: '#fff', 
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                          }} 
                        />
                        <Legend />
                        <Bar dataKey="bookings" fill="#2196f3" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                )}
                
                {tabValue === 1 && (
                  <Box height={350}>
                    <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                      Monthly Revenue
                    </Typography>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={monthlyData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" tick={{ fill: '#666' }} />
                        <YAxis tick={{ fill: '#666' }} />
                        <RechartsTooltip 
                          contentStyle={{ 
                            backgroundColor: '#fff', 
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                          }} 
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="#4caf50" 
                          strokeWidth={2}
                          dot={{ r: 4, fill: '#4caf50' }}
                          activeDot={{ r: 6, fill: '#4caf50' }} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                )}
                
                {tabValue === 2 && (
                  <Box height={350} display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                      Booking Status Distribution
                    </Typography>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={bookingStatusData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }: PieChartLabel) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {bookingStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip 
                          contentStyle={{ 
                            backgroundColor: '#fff', 
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                          }} 
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                )}
              </Box>
            </Paper>
          </Container>
        )}
      </Box>
    </Box>
  );
}