import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Menu,
	MenuItem,
	Divider,
	ListItemIcon,
	FormControl,
	InputLabel,
	Select,
	Avatar,
	Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Navbar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [network, setNetwork] = React.useState("10");

	const handleNetwork = (event) => {
		setNetwork(event.target.value);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar variant="dense">
						<FormControl variant="standard" sx={{ minWidth: 60 }} size="small">
							<Select id="select-network" value={network} onChange={handleNetwork}>
								<MenuItem value={10}>
									<Typography variant="subtitle2">Mainnet</Typography>
								</MenuItem>
								<MenuItem value={20}>
									<Typography variant="subtitle2">Testnet</Typography>
								</MenuItem>
							</Select>
						</FormControl>

						<IconButton component={Link} to="/content" sx={{ flexGrow: 1, px: 0 }}>
							<Avatar variant="square" alt="Neo" src={require("../assets/neologo.png")} sx={{ width: 24, height: 24 }} />
						</IconButton>

						<div>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit">
								<AccountCircle />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
								<Divider />
								<MenuItem>
									<ListItemIcon>
										<PersonAdd fontSize="small" />
									</ListItemIcon>
									New account
								</MenuItem>
								<MenuItem>
									<ListItemIcon>
										<Settings fontSize="small" />
									</ListItemIcon>
									Setting
								</MenuItem>
								<MenuItem>
									<ListItemIcon>
										<Logout fontSize="small" />
									</ListItemIcon>
									Logout
								</MenuItem>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;
