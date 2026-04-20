import { useState } from 'react'
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Chip,
  Avatar,
  Rating,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  FavoriteBorder,
  Favorite,
  Share,
  FolderIcon,
  DeleteIcon,
  InboxIcon,
  DraftsIcon,
} from '@mui/icons-material'
import './App.css'

function App() {
  const [isFavorite, setIsFavorite] = useState(false)
  const [rating, setRating] = useState(3)
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar */}
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            🎨 Material-UI Component Library Showcase
          </Typography>
          <Typography variant="body2">EXP2</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Cards Section */}
        <Typography variant="h4" sx={{ mb: 3, mt: 4, fontWeight: 'bold' }}>
          1. Cards & Content
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[1, 2, 3].map((num) => (
            <Grid item xs={12} sm={6} md={4} key={num}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Avatar sx={{ mb: 2, bgcolor: `hsl(${num * 120}, 70%, 60%)` }}>
                    {num}
                  </Avatar>
                  <Typography color="textSecondary" gutterBottom>
                    Card {num}
                  </Typography>
                  <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                    Material Design
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => setIsFavorite(!isFavorite)}>
                    {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
                  </Button>
                  <Button size="small">
                    <Share />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Input Components */}
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          2. Input Components
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            mb: 6,
          }}
        >
          <TextField
            fullWidth
            label="Standard Input"
            variant="outlined"
            defaultValue="Enter text here"
          />
          <TextField
            fullWidth
            label="Filled Input"
            variant="filled"
            defaultValue="Filled variant"
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
          />
        </Box>

        {/* Toggle & Switches */}
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          3. Controls
        </Typography>
        <Card sx={{ mb: 6, p: 3 }}>
          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Enable Notifications"
            />
            <FormControlLabel control={<Switch />} label="Dark Mode" />
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Premium Features"
            />
          </Box>
        </Card>

        {/* Rating & Chips */}
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          4. Rating & Tags
        </Typography>
        <Card sx={{ mb: 6, p: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ mb: 2 }}>Product Rating:</Typography>
            <Rating
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              size="large"
            />
          </Box>

          <Box>
            <Typography sx={{ mb: 2 }}>Skills:</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="React" color="primary" variant="outlined" />
              <Chip label="Material-UI" color="primary" />
              <Chip label="JavaScript" color="secondary" variant="outlined" />
              <Chip label="Vite" color="secondary" />
              <Chip
                label="Deletable"
                onDelete={() => console.log('deleted')}
              />
            </Box>
          </Box>
        </Card>

        {/* List Component */}
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          5. Lists
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" secondary="5 new messages" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" secondary="3 drafts" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" secondary="8 items" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button variant="contained" fullWidth startIcon={<FolderIcon />}>
                  Create Folder
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<DeleteIcon />}
                  color="error"
                >
                  Delete Items
                </Button>
                <Button variant="text" fullWidth>
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Buttons & Dialog */}
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          6. Buttons & Dialog
        </Typography>
        <Card sx={{ mb: 6, p: 3 }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text Button</Button>
            <Button variant="contained" onClick={handleOpen}>
              Open Dialog
            </Button>
          </Box>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Welcome to Material-UI</DialogTitle>
            <DialogContent sx={{ minWidth: '400px' }}>
              <Typography sx={{ mt: 2 }}>
                This is a demonstration of Material-UI components in a dialog.
                Material Design is a design language developed by Google that
                provides a visual language for best practices in UI/UX design.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose} variant="contained">
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </Card>

        {/* Pagination */}
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          7. Pagination
        </Typography>
        <Card sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={10}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
            size="large"
          />
        </Card>

        {/* Footer */}
        <Box sx={{ mt: 8, py: 4, textAlign: 'center', borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body2" color="textSecondary">
            © 2024 Material-UI Component Library Demo | EXP2
          </Typography>
          <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mt: 1 }}>
            Built with React, Vite, and Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default App
