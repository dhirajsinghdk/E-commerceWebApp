import * as React from 'react';
import { 
    MenuOutlined,
    MenuOpenOutlined
} from '@mui/icons-material';
import {
    Box,
    Drawer,
    Button,
    List,
    ListItemButton,
    ListItemIcon,
    Typography
} from "@mui/material"

export default function TemporaryDrawer({routes}) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            style={{
                width: 250,
                marginTop:"4rem",
                backgroundColor:"#333",
                height:"100vh"
            }}
        >
                <List component="nav" aria-label="main mailbox folders">
                    {routes.map((route, index) => (
                    <Box
                         style={{
                            margin:".5rem",
                            backgroundColor:"#686A6C",
                            borderRadius:".25rem",
                            color:"black"
                         }}
                    >
                            <ListItemButton>
                                <ListItemIcon
                                  style={{
                                    color:"whitesmoke"
                                  }}
                                >
                                    {route.icon}
                                </ListItemIcon>
                                <Typography
                                  style={{
                                    color:"white",
                                    fontWeight:"500"
                                  }}
                                >
                                    {route.title}
                                </Typography>
                            </ListItemButton>
                    </Box>
                    ))}
                </List>
        </Box>
    );
    return (
        <>
            <Button onClick={toggleDrawer(true)}>
                {open === true ? <MenuOpenOutlined/> :<MenuOutlined /> }
            </Button>
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                sx={{zIndex: "-455555", bgcolor:"white"}}
            >
                {DrawerList}
            </Drawer>
        </>
    );
}
